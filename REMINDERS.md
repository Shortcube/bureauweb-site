Précedence: voir docs/DOCS_PRECEDENCE.md

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

Hébergement applicatif: Cloudflare Pages (OpenNext).
