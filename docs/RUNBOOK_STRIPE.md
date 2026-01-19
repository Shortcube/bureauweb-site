# RUNBOOK_STRIPE - BureauWeb (v1.0)
Derniere mise a jour: 2026-01-19

Objectif: documenter le tunnel de paiement Stripe "propre" (Checkout Session + webhook) et les etats internes, sans ambiguite.

## 1) Principe
- Aucun travail tant que le client n'est pas "Paye".
- "Paye" = abonnement actif (ou trialing si tu l'acceptes) ET derniere facture paid.

## 2) Flux cible (MVP)
1. Utilisateur choisit une intention (depart/pro/croissance) via pricing (plan_intent).
2. Il soumet un Diagnostic gratuit.
3. Decision GO/Attendre/NO-GO.
4. Si GO: on envoie un lien "payer" (ou on redirige vers /payer?plan=...).
5. /payer cree une Checkout Session Stripe (server-side).
6. Stripe redirige vers /merci apres succes, vers /#tarifs sinon.
7. Webhook Stripe confirme l'evenement et met a jour l'etat interne (Paye).

## 3) Composants techniques requis
- API route "create-checkout-session"
  - Entrees: plan (depart|pro|croissance), email (si connu), client_ref (si existant), activation_fee si applicable.
  - Sortie: checkout_url (ou sessionId).
- Webhook Stripe
  - Verifie la signature.
  - Traite checkout.session.completed.
  - Optionnel: traite invoice.paid, invoice.payment_failed, customer.subscription.updated, customer.subscription.deleted.

## 4) Produits et prix (reference)
Forfaits:
- Depart: 199$/mois, activation 0
- Pro: 349$/mois, activation 499$
- Croissance: 549$/mois, activation 799$

Regle UI:
- Une ligne discrete d'activation est autorisee sous Pro/Croissance:
  "Frais d'activation: 499$ (Pro) / 799$ (Croissance)".
- L'activation est aussi expliquee au bon endroit: apres diagnostic, page paiement, ou modalites.

## 5) Definition des etats internes (minimum)
ClientBillingStatus:
- lead_only (diagnostic soumis, pas de decision)
- eligible_to_pay (GO envoye)
- checkout_started (session creee)
- paid_active (abonnement actif + facture paid)
- payment_failed (echec de paiement, dunning)
- paused (travail stoppe, site livre ou non selon regle)
- offboarded (service termine)

## 6) Regle "Paye"
Le client est "Paye" si:
- subscription.status in (active) [option: trialing si accepte]
ET
- derniere invoice = paid

Si information inconnue (pas de DB):
- "Paye" est valide uniquement via Stripe Dashboard et le webhook.
- Le systeme doit refuser toute execution automatique sans webhook confirme.

## 7) Pages du tunnel
- /payer
  - Cree la session cote serveur.
  - Affiche seulement "redirection vers Stripe".
- /merci
  - Confirmation claire.
  - Prochaine etape (onboarding).
  - Delai.
  - Contact.
  - Mention: "Vous recevrez un courriel Stripe".
- /paiement-annule (optionnel)
  - Page informative, non utilisee comme cancel_url (retour par defaut vers /#tarifs).

## 8) Webhook: evenements et actions
checkout.session.completed
- Creer ou associer le customer.
- Verifier subscription.
- Enregistrer billing_status = paid_active si facture paid confirmee, sinon "pending_invoice".

invoice.paid
- Si subscription active, passer a paid_active.

invoice.payment_failed
- Marquer payment_failed.
- Stopper toute nouvelle production.
- Declencher communication (manuel au MVP).

customer.subscription.deleted
- Marquer offboarded.
- Declencher offboarding checklist.

## 9) Edge cases (a traiter explicitement)
- Client paie puis annule immediatement.
- Client paie mais invoice pas encore paid (latence).
- Webhook non recu (configuration ou signature).
- Client change de carte via Customer Portal.
- Multi-plan: interdit au MVP (un seul abonnement actif).

## 10) Securite minimale
- Signature webhook obligatoire.
- Secrets en env vars.
- Logs des erreurs Stripe cote serveur, jamais exposes au client.
- Ne pas stocker de donnees inutiles.

## 11) Checklist de validation
- Creation de session fonctionne pour chaque plan.
- Success URL redirige vers /merci.
- Cancel URL redirige vers /#tarifs.
- Webhook recoit et traite checkout.session.completed.
- Regle "Paye" appliquee: pas de production sans paid_active.
- Test d'un paiement echoue: invoice.payment_failed.
