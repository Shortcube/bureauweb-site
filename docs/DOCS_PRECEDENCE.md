# Précedence documentation (v1)

NOTE - Precedence documentation (v1)

Ces documents ont ete ajoutes pour eviter le drift et les contradictions.
En cas de divergence, appliquer l'ordre de precedence suivant:

1) BUREAUWEB_PLAYBOOK.md (source de verite)
2) docs/RUNBOOK_STRIPE.md (paiements Stripe)
3) docs/RUNBOOK_BLOG_SEO.md (blog et SEO)
4) docs/SOP_ONBOARDING.md, docs/SOP_PRODUCTION.md, docs/SOP_QA.md (operations)
5) docs/SHEETS_SCHEMA.md (mecanique Sheets, formules, anti donnees fantomes)
6) docs/RBQ_REFERENCE.md (liste RBQ interne)
7) Les autres fichiers (.md) sont du contexte ou des rappels et peuvent contenir du legacy.

Toute mention "Payment Links" ou "lien Stripe" doit etre consideree legacy si elle contredit RUNBOOK_STRIPE.
Toute mention blog sans metadata/JSON-LD/sitemap/breadcrumbs est incomplete si elle contredit RUNBOOK_BLOG_SEO.

## Règle d’édition
- Toute modification de comportement doit mettre à jour la doc canonique correspondante.
- En cas de conflit: BUREAUWEB_PLAYBOOK.md prime sur tout.
