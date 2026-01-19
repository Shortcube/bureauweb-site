# Stripe Billing integration — BureauWeb.ca

Ce document résume la nouvelle architecture Stripe sur BureauWeb.ca (App Router + Cloudflare Pages).

## 1. Objectifs
- Stripe Checkout est la seule porte d’entrée vers les abonnements (mode `subscription`).  
- L’activation (pro et croissance) est appliquée côté serveur via `subscription_data[add_invoice_items]`.  
- Stripe reste la source de vérité : factures, annulations, cartes.  
- Les webhooks sont gérés en Edge runtime sans SDK afin de garder le flux compatible Cloudflare/Next.  
- Les notifications superflues sont évitées : Stripe envoie ses emails transactionnels, Resend ne déclenche qu’un simple signal interne si configuré.

## 2. Pages et points d’entrée
- `/payer` : page Edge light qui valide `plan` (`depart`, `pro`, `croissance`). Si le plan est valide et la config Stripe complète, redirection 303 vers `/api/stripe/checkout?plan=<plan>`. Sinon, affiche une erreur claire + un CTA retour aux forfaits (pas de formulaire, pas de logiques de paiement côté client).  
- `/merci` : page remerciment. Elle est décorée `robots: noindex,nofollow`, confirme que Stripe a traité la session, explique que le reçu arrive par courriel et renvoie vers `/compte` pour gérer l’abonnement.  
- `/paiement-annule` : page informative optionnelle (pas utilisée comme cancel_url), propose de réessayer (avec `plan` si valide) ou de revenir à l’accueil.  
- `/compte` : redirige vers `NEXT_PUBLIC_STRIPE_PORTAL_LOGIN_URL` (ou le lien par défaut). Bouton “Gérer mon abonnement”, rappel que le portail permet annulation/carte/facture.

## 3. Checkout Sessions Edge-safe (`lib/stripe-edge.js`)
- `normalizePlan(input)` s’assure que `plan ∈ {depart, pro, croissance}`.  
- `getOriginFromHeaders(headers)` construit `https://${host}` en utilisant `x-forwarded-proto`/`host`.  
- `createCheckoutSessionUrl({ plan, origin })` assemble un `POST` `application/x-www-form-urlencoded` vers `https://api.stripe.com/v1/checkout/sessions`.  
  - `mode=subscription`, `locale=fr-CA`, `customer_creation=always`, metadata plan+activation.  
  - `subscription_data[items][0]` contient le prix du plan (depuis `STRIPE_PRICE_ID_*`).  
  - Si `plan === 'pro' || plan === 'croissance'`, on ajoute `subscription_data[add_invoice_items][0]` avec l’ID d’activation correspondant (`STRIPE_PRICE_ID_ACTIVATION_*`).  
  - `success_url` = `${origin}/merci`, `cancel_url` = `${origin}/#tarifs`.  
  - La clé secrète Stripe (`STRIPE_SECRET_KEY`) est exigée et transmise dans l’en-tête `Authorization`.

## 4. API routes Stripe
- `/api/stripe/checkout`: Edge runtime. Lit `?plan=…`, normalise, calcule l’origin via `getOriginFromHeaders`, appelle `createCheckoutSessionUrl`, puis redirige (303) vers la session Stripe. Aucun secret côté client.  
- `/api/stripe/webhook`: Edge runtime. Vérifie la signature Stripe manuellement (HMAC SHA-256 sur `${t}.${payload}` avec `STRIPE_WEBHOOK_SECRET`, tolérance 300 s). Parse l’événement après validation.

## 5. Webhooks et notifications
- Événements actifs :  
  - `checkout.session.completed` : on réunit plan/activation (metadata), session/subscription IDs et l’email du client. Si `RESEND_API_KEY` est défini, un petit email interne est envoyé à `info@bureauweb.ca`. Si `LEADS_WEBHOOK_URL` est configuré, on poste un JSON de résumé (plan, session, email, timestamp).  
  - `invoice.payment_failed` : `console.warn` pour déclencher un suivi manuel.  
- Toutes les réponses renvoient `{received:true}` pour donner à Stripe un 2xx rapide. Les autres events sont ignorés mais peuvent être ajoutés plus tard après signature.

## 6. Configuration environnementale
- `.env` / Cloudflare doit contenir les clés suivantes (liste présente dans `.env.example`) :  
  - `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`  
  - `STRIPE_PRICE_ID_DEPART`, `STRIPE_PRICE_ID_PRO`, `STRIPE_PRICE_ID_CROISSANCE`  
  - `STRIPE_PRICE_ID_ACTIVATION_PRO`, `STRIPE_PRICE_ID_ACTIVATION_CROISSANCE`  
  - `NEXT_PUBLIC_STRIPE_PORTAL_LOGIN_URL` (optionnel mais pratique).  
  - `RESEND_API_KEY`, `LEADS_WEBHOOK_URL` (optionnels).  
  - Les anciens `STRIPE_PAYMENT_LINK_*` sont conservés pour référence, mais la logique en production utilise maintenant les price IDs/microservices Stripe Checkout.  

## 7. Emails Stripe vs Resend
- Stripe reste responsable des emails transactionnels (confirmation de paiement, facture, échec).  
- Resend est utilisé uniquement comme “petit ping interne” après `checkout.session.completed` si la clé est définie. Cela évite les doublons en parallèle des notifications Stripe.

## 8. Résumé des livrables
- `/payer`, `/merci`, `/paiement-annule`, `/compte` (App Router + Edge).  
- `/api/stripe/checkout` et `/api/stripe/webhook` (Edge).  
- `lib/stripe-edge.js` pour encapsuler la création de sessions.  
- `.env.example` complété avec les nouveaux prix, secrets et webhook/portal keys.  
- Documentation qui explique le flux et les étapes de configuration.

## 9. Étapes manuelles restantes sur Stripe
1. Créer les produits/price IDs (départ/pro/croissance + activations) et copier les `STRIPE_PRICE_ID_*` dans le `.env` de production.  
2. Dans Dashboard Stripe → Webhooks, ajouter `https://bureauweb.ca/api/stripe/webhook` avec le secret (`STRIPE_WEBHOOK_SECRET`). Activez au minimum `checkout.session.completed` et `invoice.payment_failed`.  
3. Configurer le Customer Portal (annulations, cartes, facturation) et copier l’URL dans `NEXT_PUBLIC_STRIPE_PORTAL_LOGIN_URL` (sinon on utilise le login fourni).  
