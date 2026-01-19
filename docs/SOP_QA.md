# SOP_QA - BureauWeb (v1.0)
Derniere mise a jour: 2026-01-19

## QA Go-live (Oui/Non)
Technique
- Site accessible (prod)
- HTTPS valide (prod)
- Vitesse percue acceptable

Conversion
- Message clair en 5 sec
- CTA visible
- Telephone cliquable (mobile)
- Courriel cliquable
- Formulaire fonctionnel (test)
- Confirmation apres envoi
- Page contact claire

Legal
- Pages legales presentes
- Mentions coherentes avec collecte
- Aucun claim non verifiable

Mobile
- Nav utilisable
- Aucun texte coupe
- Boutons accessibles

Local (si applicable)
- Fiche Google existe
- Categorie correcte
- NAP coherent
- Lien fiche vers site

RBQ
- RBQ non requis, ou RBQ visible = Oui

## QA Mensuelle (Oui/Non)
Valeur visible
- Rapport 1 page produit
- 1 micro-amelioration livree
- Unknown residuels listes et mis a jour

Non regression
- Site accessible
- HTTPS valide
- Mobile utilisable
- CTA visible
- Formulaire fonctionnel

Signaux churn
- Client silencieux 2 cycles
- Paiement en echec
- Demandes hors-scope repetees
- Bloquants jamais fournis

Action si churn = Oui
- Envoyer recap 1 page des livrables + prochain micro-livrable.
- Si paiement en echec: pause/offboarding selon RUNBOOK_STRIPE.
