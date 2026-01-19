Précedence: voir docs/DOCS_PRECEDENCE.md

BureauWeb - Documentation canonique du projet

Ce dossier contient les documents de référence utilisés comme “source de vérité” pour le produit BureauWeb et son exécution (site, diagnostic, pricing, tunnel, règles UI, opérations).

Règles:

Le playbook est canonique. Les autres documents complètent le playbook (contexte, runbooks, références).

Toute décision structurante (offre, tunnel, CTA, navigation, SEO blog) doit être reflétée dans les documents concernés.

Si une info est inconnue ou non confirmée: écrire unknown.

Documents:

BUREAUWEB_PLAYBOOK.md

Source de vérité principale (principes, décisions, règles, exigences).

BUREAUWEB_CONTEXT.md

Résumé court: positionnement, offre, contraintes UI, stack, règles IA.

CONTEXT_BUREAUWEB_DIAGNOSTIC.md

Décisions et détails opérationnels du diagnostic et du dashboard Google Sheets.

BUREAUWEB_FUNNEL_AND_OFFER_REFERENCE.md

Référence “Pricing → Diagnostic”, plan_intent, règles de cartes, limites mensuelles, upsells.

CORRECTIONS_SUMMARY.md

Journal des standards et corrections à respecter dans le code (sans inventer d’état si non vérifié).

REMINDERS.md

Checklist avant production (placeholders, env vars, vérifications).

Politique de mise à jour:

Modifier en versionnant (vX.Y et date).

Éviter les duplications de vérité. Si une règle est centrale, elle doit vivre dans le playbook; les autres fichiers y référencent.

============================
BUREAUWEB_CONTEXT.md
CONTEXTE CANONIQUE - PROJET BUREAUWEB
Objectif

Construire un site B2B ultra-clair pour entreprises de terrain au Québec.
BureauWeb = département web externe (infrastructure), pas une agence marketing.

Positionnement

Factuel, opérationnel, observable

Aucune promesse chiffrée ou marketing

Clarté > persuasion

Le site sert à filtrer, cadrer et qualifier

Offre

Diagnostic gratuit écrit (1 page)

Décision GO / Attendre / NO-GO basée sur preuves

Paiement Stripe uniquement après diagnostic

Aucun travail sans abonnement actif confirmé (et facture payée)

Abonnement mensuel avec limites publiques (par forfait)

Échanges écrits par défaut; téléphone optionnel selon forfait, jamais requis

Hors forfait: sur devis, facturé uniquement après acceptation écrite

Processus validé (6 étapes)

Diagnostic (site, mobile, fiche Google, parcours)

Retour 24–48 h ouvrables

1 page, actions prioritaires

Décision

GO / Attendre / NO-GO

Max 2 options simples si on avance

Paiement

Stripe Checkout Session (tunnel propre)

Succès: /merci

Aucun travail sans abonnement actif + facture paid

Production

Modèle BureauWeb + éléments fournis (ou unknown tracé)

Échanges écrits; appel optionnel

Livraison

Mise en ligne + remise courte (accès, checklist)

Exploitation mensuelle (selon forfait)

QA mensuelle

Rapport concis (1 page)

Capacité mensuelle selon forfait

Forfaits (prix et activation)

Départ: 199$/mois, activation 0

Pro: 349$/mois, activation 499$

Croissance: 549$/mois, activation 799$

Règle UI:

Les cartes de forfait affichent le prix et les inclus mensuels.

Une ligne discrète d’activation est autorisée sous Pro/Croissance:
“Frais d’activation: 499$ (Pro) / 799$ (Croissance)”.
L’activation est expliquée au bon endroit (après diagnostic, page paiement, ou encadré clair).

Ce qui est inclus

Site web clair et structuré

Parcours de contact simple (appel, soumission, ou courriel selon choix)

Pages services (et zones si pertinent)

Cohérence fiche Google (NAP, catégorie, lien)

Maintenance et exploitation continue, dans les limites mensuelles

Ce qui n’est pas inclus

Publicité payante (Google Ads, Meta)

Branding complet (logo, identité)

Pas de disponibilité 24/7

Modifications illimitées

Gestion de réputation avancée (en extra)

Refonte complète sans cadrage

Développement sur mesure (fonctionnalités spécifiques)

Blogue (acquisition)

But:

Point d’entrée qualifié, contenu court et décisionnel.

Chaque article mène vers “Diagnostic gratuit” comme prochaine étape.
Règles:

Aucune promesse.

“Sous votre contrôle vs pas sous votre contrôle” quand pertinent.

SEO propre (metadata, JSON-LD, sitemap, breadcrumbs).

Formulaire diagnostic (validé)

Champs:

Nom de l’entreprise (requis)

Secteur d’activité (requis)

Région (requis)

Téléphone (requis)

Courriel (optionnel)

Site web (optionnel)

Lien fiche Google (optionnel)

Objectif principal (optionnel, champ unique)

Règle:

Pas de champs redondants “objectifs/attentes”.

UI/UX - Contraintes non négociables

Mobile-first

Icônes visibles desktop et mobile

Réduction du whitespace inutile

Sections compactes, lisibles en une capture si possible

Pas de dropdown inutile dans le header

CTA principal toujours visible: “Diagnostic gratuit”

Header - Orientation

Logo (retour /)

Navigation simple: Comment ça marche, Forfaits, Blogue, FAQ

CTA: Diagnostic gratuit

Futur lien “Espace client”: discret ou désactivé (unknown)

Stack technique (état)

Next.js (App Router)

Tailwind CSS

shadcn/ui (si déjà en place)

Stripe (Checkout Session + Subscriptions + Webhook)

Domaine et DNS: WHC (confirmé)

Hébergement applicatif: Cloudflare Pages (OpenNext).

Codex: refactor UI, copy et layout, sans halluciner

Règles pour l’IA

SAUF lorsque demandé explicitement par l'utilisateur, :

Ne pas réinventer ce qui est validé

Ne pas élargir l’offre

Optimiser densité, clarté, cohérence

Proposer des alternatives seulement si mieux justifiées

Priorité à l’exécution, pas aux concepts


## Documentation additionnelle (runbooks)
- docs/RUNBOOK_STRIPE.md
- docs/RUNBOOK_BLOG_SEO.md
- docs/SOP_ONBOARDING.md
- docs/SOP_PRODUCTION.md
- docs/SOP_QA.md
- docs/SHEETS_SCHEMA.md
- docs/RBQ_REFERENCE.md
