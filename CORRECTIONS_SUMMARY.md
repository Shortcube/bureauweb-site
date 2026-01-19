Précedence: voir docs/DOCS_PRECEDENCE.md

BureauWeb - Résumé des corrections et standards (journal)

Date: 2026-01-19

But:

Conserver une trace des correctifs, standards et points de vigilance.

Ne pas affirmer “c’est fait” si non vérifié. Si incertain: marquer “à valider”.

1) Standards UI et copy (verrouillés)

CTA unique: “Diagnostic gratuit”.

Mobile-first, whitespace contrôlé.

Icônes visibles desktop et mobile.

Aucune promesse, uniquement du vérifiable.

Breadcrumbs cliquables sur /blog et /blog/[slug].

2) Blogue (exigences techniques)

generateMetadata par article (title, description).

JSON-LD BlogPosting par article.

Sitemap inclut /blog et tous les slugs.

CTA standard en bas d’article (diagnostic).

Statut: à valider dans le code.

3) Stripe (tunnel propre)

Cible MVP:

Checkout Session via API route

Webhook: validation signature + traitement checkout.session.completed

Success page: /merci

Bloquer la production tant que Payé = Non

Statut: à valider dans le code.

4) Placeholders à éliminer avant production

Numéros téléphone placeholder (ex: 514-XXX-XXXX)

Emails placeholder si présents

Prix incohérents entre pages

Statut: à faire avant lancement.

5) Performance (principes)

Charger les sections lourdes de manière progressive si nécessaire.

Éviter scripts tiers inutiles.

Polices: privilégier une stratégie stable (local si besoin).

Statut: continu.

6) Formulaire et anti-spam (minimum)

Validation input côté serveur.

Protection simple (rate limit ou honeypot) si exposé.

Confirmation après envoi, claire et factuelle.

Statut: à valider.

7) SEO de base (BureauWeb)

Meta title et description cohérents avec l’offre réelle (dès 199$/mois si affiché).

Sitemap et robots cohérents.

Données structurées (Organization et BlogPosting si blog actif).

Statut: à valider.
