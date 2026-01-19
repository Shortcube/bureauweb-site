<!-- DOCS_PRECEDENCE_V1 -->
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

---

BureauWeb - Rappels avant production
1) Placeholders à remplacer

Téléphone placeholder (ex: 514-XXX-XXXX)

Email placeholder (si utilisé)

Données structurées (Organization) si elles contiennent placeholders

Commande de recherche:

rg -n "514-XXX-XXXX|XXX-XXXX|info@bureauweb\.ca|unknown" . --hidden --glob '!.next/**' --glob '!node_modules/**'

2) Recommandation (variables d’environnement)

Créer .env.local (ou équivalent selon ton host):

NEXT_PUBLIC_PHONE_NUMBER="514-123-4567"
NEXT_PUBLIC_PHONE_NUMBER_FORMATTED="(514) 123-4567"
NEXT_PUBLIC_PUBLIC_EMAIL="info@bureauweb.ca"


Règle:

Le rendu UI doit utiliser ces variables.

Les données structurées doivent utiliser les mêmes sources pour éviter divergences.

3) Vérifications fonctionnelles (mobile)

Header: logo retourne à /

Header: téléphone cliquable

CTA: “Diagnostic gratuit” visible et fonctionne

Formulaire: envoi OK + message de confirmation

Blogue: breadcrumb retour Accueil et Blogue

4) Vérifications Stripe (si tunnel Checkout Session)

/payer (si présent) crée une session sans erreur

/merci s’affiche après succès

Webhook reçu et traité

Statut “Payé” cohérent (abonnement actif + facture paid)

5) Vérifications SEO minimales

Sitemap inclut /blog et /blog/[slug]

Chaque article a title et description

H1 unique par page

JSON-LD BlogPosting valide

6) Domaine et DNS

Registrar/DNS: WHC (confirmé)

Hébergement applicatif: unknown (standardiser un seul)