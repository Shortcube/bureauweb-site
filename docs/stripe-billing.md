# Stripe Billing integration — BureauWeb.ca

Ce document résume les choix d'architecture Stripe et les actions à effectuer pour garder la facturation simple, conforme et maintenable.

## 1. Objectifs
- Utiliser exclusivement Stripe Checkout / Payment Links et le portail client officiel.  
- Garder Stripe comme source de vérité pour les abonnements, les factures, les annulations et les cartes.  
- Traiter les webhooks essentiels (succès, échec, annulation) avec validation de signature.  
- Ne pas réinventer les emails Stripe : confiance dans les notifications natives.  
- Laisser la pile existante (formulaire de contact, Resend, lead capture) inchangée.

## 2. Pages publiques pour le flux de paiement
- `/merci` : page cible du `success_url` de chaque Payment Link / Checkout Session. Elle rappelle qu’un reçu arrive par courriel et propose d’ouvrir `/compte`.  
- `/paiement-annule` : page cible du `cancel_url` pour rassurer, renvoyer vers `/payer` ou `/compte`.  
- `/compte` : bouton vers le portail client Stripe (https://billing.stripe.com/p/login/6oUeVe9WJ6wra7VeYJeEo00) documenté dans le pied de page et utilisé comme destination unique pour la gestion autonome.

## 3. Payment Links / Checkout Sessions
- Chaque forfait (départ, pro, croissance, activation) envoie vers Stripe pour la création d’un abonnement.  
- Configurer `success_url` → `https://bureauweb.ca/merci` et `cancel_url` → `https://bureauweb.ca/paiement-annule`.  
- Mentionner (dans le diagnostic ou dans la confirmation) que le lien arrive par courriel après validation.  
- Ne pas implémenter de formulaire de paiement maison : garder un petit `app/payer` informatif.  
- Les URLs sont stockées dans `lib/site-config` via les variables `STRIPE_PAYMENT_LINK_*`.

## 4. Portail client Stripe
- Le bouton `/compte` redirige vers le portail Stripe existant (login link fourni).  
- Activer dans Stripe :  
  - Annulations en libre-service (fin de la période payée ou immédiate selon le choix).  
  - Mise à jour sécurisée des cartes.  
  - Mise à jour des infos de facturation.  
  - [Optionnel] Activer la gestion des factures (téléchargement, envoyées).  
- Documenter dans le site que c’est Stripe qui gère ces tâches (cf. page `/compte`).  
- Les emails de Stripe (confirmation de paiement, facture émise, échec) restent activés ; ne pas envoyer de doublons via Resend pour ces cas.

## 5. Configuration de l’environnement
- `.env` (ou Cloud) doit comporter :  
  - `NEXT_PUBLIC_CONTACT_PHONE` (si demandé).  
  - `STRIPE_PAYMENT_LINK_*` pour chaque lien.  
  - `STRIPE_SECRET_KEY` (clée secrète) pour valider les webhooks.  
  - `STRIPE_WEBHOOK_SECRET` (secret du webhook).  
- Exemple de `.env.example` mis à jour avec ces clés.  
- Stripe reste la source de vérité : aucune donnée de paiement ne doit être dupliquée dans MongoDB.

## 6. Webhooks
- Endpoint exposé : `POST /api/stripe/webhooks`.  
- Runtime Node.js pour récupérer le texte brut (Next.js App Router).  
- Validation via `stripe.webhooks.constructEvent(body, signature, STRIPE_WEBHOOK_SECRET)`.  
- Événements traités :  
  - `checkout.session.completed` → log / action future (par ex. déclencher un email manuel).  
  - `invoice.payment_succeeded` → log.  
  - `invoice.payment_failed` → log avec warning.  
  - `customer.subscription.deleted` → log (possible pause).  
- Le handler peut être étendu pour persister dans MongoDB si besoin en gardant Stripe comme source de vérité.  
- Configurer la signature envoyée par Stripe et la coller dans l’admin (Webhook Settings → Add endpoint).  

## 7. Emails Stripe vs Resend
- Stripe gère : confirmations de paiement, factures, échecs, relances (dunning). Ne pas dupliquer ces emails.  
- Resend continue d’envoyer les communications internes (diagnostic, formulaires de contact, micro-livrable).  
- Mentionner sur `/merci` et `/compte` que Stripe envoie les confirmations officielles.

## 8. Points de vigilance / limites
1. Stripe Customer Portal est central : aucun bouton `annuler` local, toute annulation passe par `/compte`.  
2. Les webhooks sont minimalistes. Si on souhaite consigner dans MongoDB, ajouter un service métier en gardant Stripe comme source de vérité.  
3. Le portail est un login unique. Si la session expire, Stripe envoie l’utilisateur vers la page de connexion standard (pas de `session_id` dynamiques).  
4. Si un lien Stripe est expiré, il faut réémettre un Payment Link ; la page `/paiement-annule` oriente vers le contact.  
5. Aucun onboarding de portails tiers (type `Billing Portal` custom) n’est prévu.

## 9. Vérification
- `npm run lint` et `npm run build` validés après les changements.  
- Tester les pages `/merci`, `/paiement-annule`, `/compte` en local.  
- Configurer Stripe pour pointer vers `https://bureauweb.ca/api/stripe/webhooks` et envoyer une requête de test depuis le dashboard pour vérifier la signature.

## 10. Résumé rapide des livrables
- Pages `/merci`, `/paiement-annule`, `/compte` côté client.  
- Footer mis à jour avec le lien `Compte client`.  
- Webhook `app/api/stripe/webhooks` (stripe SDK + signature).  
- Doc stratégique `docs/stripe-billing.md` + `.env.example` mis à jour.  
- `Stripe` comme dépendance npm et `resend` inchangé.
