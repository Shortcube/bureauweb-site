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

# CONTEXTE CANONIQUE — PROJET BUREAUWEB

## Objectif
Construire un site B2B ultra-clair pour entreprises de terrain au Québec.
BureauWeb = département web externe (infrastructure), pas une agence créative.

## Positionnement
- Factuel, opérationnel, observable et vérifiable
- Aucune promesse chiffrée ou marketing
- Clarté > persuasion
- Le site sert à filtrer, cadrer et qualifier

## Offre
- Diagnostic gratuit écrit (1 page)
- Décision: GO / Attendre / NO-GO (basée sur preuves)
- Paiement Stripe uniquement après diagnostic
- Aucun travail sans statut “Payé” confirmé (abonnement actif + dernière facture paid)
- Abonnement mensuel avec limites publiques (par forfait)
- Échanges écrits par défaut; téléphone optionnel (selon forfait), jamais requis
- Services complémentaires hors forfait: sur devis, facturés uniquement après acceptation écrite

## Processus validé (6 étapes)
1. Diagnostic (site, mobile, fiche Google, parcours existant)
   - Retour 24–48 h ouvrables
   - 1 page, actions prioritaires
2. Décision
   - GO / Attendre / NO-GO
   - Max 2 options simples si on avance
3. Paiement
   - Stripe Checkout Session (tunnel propre) + webhook
   - Success: /merci
   - Cancel: retour forfaits
   - Aucun travail sans statut “Payé” confirmé
4. Production
   - Modèle BureauWeb + éléments fournis (unknown tracé si manquant)
   - Échanges écrits par défaut, appel optionnel
5. Livraison
   - Mise en ligne + remise courte (accès, checklist)
6. Exploitation mensuelle (selon forfait)
   - Contrôle qualité mensuel (QA)
   - Rapport concis (1 page)
   - Capacité mensuelle selon le forfait:
     - Départ: 1 micro-amélioration (ajustement simple sur l’existant)
     - Pro: 1 intervention mineure + support en français, humain, principalement par écrit (courriel ou texto). Téléphone au besoin (selon le forfait).
     - Croissance: Pro + 1 page de contenu courte (si pertinent) + support en français, humain, principalement par écrit (courriel ou texto). Téléphone au besoin (selon le forfait).

## Blogue (acquisition)
- Blogue court, factuel, utile. Intention commerciale claire.
- Chaque article mène vers “Diagnostic gratuit” (CTA standardisé).
- Exigences: metadata par article, JSON-LD BlogPosting, sitemap, breadcrumbs.

## Ce qui est inclus
- Site web clair et structuré
- Parcours de contact simple (appel, soumission, ou courriel selon choix)
- Pages services (et zones si pertinent)
- Fiche Google cohérente (NAP, catégorie, lien fiche → site si possible)
- Maintenance et exploitation continue, dans les limites mensuelles publiées

## Ce qui n’est pas inclus
- Publicité payante (Google Ads, Meta)
- Création de logo ou branding
- Pas de disponibilité 24/7
- Modifications illimitées
- Gestion de crise ou réputation avancée (en extra)
- Refonte complète ou changement de modèle sans cadrage préalable
- Développement spécifique (fonctionnalités sur mesure)

## Formulaire diagnostic (validé)
Champs:
- Nom de l’entreprise (requis)
- Secteur d’activité (requis)
- Région (requis)
- Téléphone (requis)
- Courriel (optionnel)
- Site web actuel (optionnel)
- Lien fiche Google (optionnel)
- Objectif principal (optionnel, champ unique)
  Placeholder court et clair (ex: “Plus d’appels qualifiés”)

Règle:
- Pas de redondance “objectifs / attentes”.

## UI / UX — Contraintes non négociables
- Mobile-first
- Icônes visibles desktop et mobile
- Réduction maximale du whitespace inutile
- Sections compactes, lisibles en une capture si possible
- Pas de dropdown inutile dans le header
- CTA principal toujours visible: “Diagnostic gratuit”

## Header — Orientation
- Logo (retour /)
- Navigation simple: Comment ça marche, Forfaits, Blogue, FAQ
- CTA principal: “Diagnostic gratuit”
- Pas de sélecteur secteur dans le header (plutôt dans pages ou sections dédiées)
- Futur lien “Espace client”: discret ou désactivé (unknown)

## Stack technique (état)
- Next.js (App Router)
- Tailwind CSS
- Lucide Icons
- Stripe (Checkout Session + Subscriptions + Webhook)
- DNS/Registrar: WHC (confirmé)
- Hébergement applicatif: unknown (Vercel, Cloudflare Pages, autre). Standardiser un seul.
- Codex utilisé pour refactor UI, copy et layout, sans halluciner

## Règles pour l’IA
- Ne pas réinventer ce qui est validé
- Ne pas élargir l’offre
- Optimiser densité, clarté, cohérence
- Proposer des alternatives seulement si mieux justifiées
- Priorité à l’exécution, pas aux concepts
