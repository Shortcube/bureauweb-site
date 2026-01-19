Précedence: voir docs/DOCS_PRECEDENCE.md

# BureauWeb — Playbook opérationnel (v1.1)

Source de vérité canonique.
Ne pas modifier sans versioning (vX.Y + changelog).

Dernière mise à jour: 2026-01-19

## Changelog (v1.1)
- Blog MVP activé (règles éditoriales + exigences SEO/tech).
- Paiements: passage MVP recommandé vers Stripe Checkout Session (tunnel propre) plutôt que Payment Links (legacy).
- Ajout pages obligatoires: /merci (post-paiement), /404.
- Clarification “Diagnostic gratuit” comme CTA unique (tolérance: noms internes peuvent rester).
- Ajustement mapping Next.js vers .js/.jsx (TS optionnel, explicite).

---

## 1) Positionnement et principes non négociables

### 1.1 Positionnement BureauWeb
BureauWeb = partenaire d’infrastructure web (pas une agence créative).

Cible: entreprises locales au Québec (construction, métiers manuels, services terrain).

Objectif opérationnel: fiabilité, vitesse perçue, visibilité locale (fiche Google), conversion (contact facile, demandes qui entrent).

Règle de copy: contenu factuel, actionnable, observable. Aucune promesse.

### 1.2 CTA principal (terminologie)
Remplacer toute mention visible “Plan gratuit 24 h” par:
- « Diagnostic gratuit »
- Variante bouton: « Recevoir mon diagnostic gratuit »

Microcopy (séparée du CTA):
« Retour sous 24–48 h ouvrables. 1 page. Actions prioritaires. »

Règle:
- Le code peut garder des noms internes (ex: PlanGratuit24h) si l’UI n’expose jamais ces termes.
- À chaque release: audit rapide “Plan gratuit” dans le rendu (UI + metadata).

### 1.3 Catchphrase (bandeau/pill)
Catchphrase retenue:
« On gère votre web pendant que vous gérez vos chantiers. »

Intégration:
- Bandeau/pill au-dessus du hero: OK.
- Accent couleur minimal, pas de surlignage agressif.

---

## 2) Pipeline global (vue système)

### 2.1 Pipeline (end-to-end)
Lead
↓
Diagnostic (1 page) + scoring
↓
Décision GO / Attendre / NO-GO + offre (2 options max)
↓
Paiement (Checkout Session) → abonnement actif
↓
Onboarding (infos + accès + preuves)
↓
Production (S1/S2/S3, template)
↓
Livraison (go-live + handoff)
↓
Exploitation mensuelle (rapport + 1 micro-amélioration + QA)
↓
Offboarding (si sortie)

### 2.2 Table par étape (MVP)
Lead
- Objectif: capter l’info minimale, déclencher diagnostic.
- Artefacts: lead structuré + accusé réception + tâche “diagnostic”.
- Outils MVP: Next.js form + stockage (Sheets ou DB) + email notification.

Diagnostic
- Objectif: décider sur preuves, produire 1 page client.
- Artefacts: diagnostic 1 page + preuves + score + décision suggérée.
- Automatisable: partiel. Jugement humain requis.

Décision
- Objectif: cadrer, éviter mauvais fit, proposer 1 chemin.
- Artefacts: GO/Attendre/NO-GO + offre + bloquants.

Paiement
- Objectif: encaisser sans friction et déclencher la production.
- MVP recommandé: Stripe Checkout Session + webhook + portail client.
- Fallback: Payment Links (legacy; uniquement si tunnel non prêt; voir docs/RUNBOOK_STRIPE.md).

Production/Livraison/Mensuel/Offboarding
- Voir SOP sections 7–15.

---

## 3) Diagnostic client (template + scoring)

### 3.1 Contraintes
- Diagnostic client: 1 page max, factuel, non spéculatif.
- “Unknown” autorisé mais tracé, jamais caché.

### 3.2 Scoring (Sheets)
Statuts: Oui / Non / Incomplet
Points: Oui=3, Incomplet=1, Non=0
Règle: garder statut visible, score peut être masqué.

NAP
NAP = Name, Address, Phone.
“NAP cohérent” = cohérence site vs fiche Google vs annuaires majeurs.

### 3.3 Dashboard: règle anti “données fantômes”
- Supprimer lignes vides.
- Ajouter au fur et à mesure.
- Option: garde-fous IF($A2="";"";...) sur colonnes clés.

---

## 4) GO / Attendre / NO-GO (règles)

### 4.1 Agrégation
Si ≥ 1 signal NO-GO → décision = NO-GO
Sinon si ≥ 1 signal Attendre → décision = Attendre
Sinon → GO

### 4.2 Seuils minimaux
Contact minimal opérationnel:
(Téléphone cliquable = Oui) OU (Formulaire fonctionnel = Oui) OU (Courriel cliquable = Oui)
Sinon → Attendre

Fondations minimales:
Site accessible = Oui
Si Site = Non → NO-GO

RBQ:
- Si RBQ requis = Oui et RBQ visible ≠ Oui → Attendre
- Si RBQ non requis → score RBQ par défaut = 3

Exceptions tolérées:
- Avis absents: toléré si le reste est solide.
- Photos réelles absentes: toléré, devient action onboarding/S2.

---

## 5) Banque de sites (core/modules/variants)

### 5.1 Principes
Core (figé):
- Layout, design system, composants UI.
- Formulaire + anti-spam minimal.
- Pages légales (gabarits).
- SEO de base (metadata, sitemap, robots).

Modules (paramétrables):
- Services, Zones, FAQ, Photos, Avis, GBP pack.

Variantes:
- Par métier: copy, services typiques, FAQ métier, angle (urgence vs planifié).

Règle: aucune logique métier hardcodée dans le JSX. Tout via config/variant.

---

## 6) Blog BureauWeb (acquisition)

### 6.1 Décision
MVP: OUI
Blog court, factuel, utile. Intention commerciale explicite.
Objectifs: SEO local, clarification, support conversion (diagnostic).

Scale: OUI
Uniquement si le contenu reste “décisionnel” (diagnostic, réduction d’incertitude).
Aucun contenu générique/inspirationnel.

### 6.2 Standard d’un article (obligatoire)
Chaque article doit avoir:
- Title + meta description (SEO).
- H1 unique.
- Breadcrumbs cliquables (Accueil → Blogue → Article).
- Date publiée.
- Tags (2–4).
- CTA standardisé en bas: « Recevoir mon diagnostic gratuit » (lien vers ancre home réelle).
- JSON-LD BlogPosting (headline, description, datePublished, author BureauWeb).
- Inclusion dans sitemap.

Règles éditoriales:
- Aucune promesse (“augmenter”, “doubler”, etc.).
- “Ce qui est sous votre contrôle” vs “ce qui ne l’est pas” quand pertinent.
- Actions vérifiables, pas de théorie.

---

## 7) Paiements Stripe (tunnel propre)

### 7.1 MVP recommandé (Checkout Session)
Flux:
Diagnostic → Décision → création Checkout Session → paiement → webhook → abonnement actif → /merci

Composants requis:
- Route “créer session” (API).
- Success URL: /merci
- Cancel URL: /#tarifs
- Webhook Stripe:
  - vérifier signature
  - traiter checkout.session.completed
  - marquer client “Payé” (abonnement actif + facture paid)

Règle “Payé”:
Client = Payé si et seulement si:
- subscription = active (ou trialing accepté si tu utilises trial)
- dernière invoice = paid

Fallback autorisé:
- Payment Links seulement si Checkout Session non prêt (legacy; voir docs/RUNBOOK_STRIPE.md).
- Doit être explicitement marqué comme fallback dans le code.

### 7.2 Produits/prix
Forfaits:
- Départ: 199$/mois, activation 0
- Pro: 349$/mois, activation 499$
- Croissance: 549$/mois, activation 799$
UI: les montants d’activation sont affichés dans le pricing pour transparence (Pro/Croissance).

Si tu veux garder les montants hors playbook:
- remplacer par unknown et stocker les montants dans un fichier pricing dédié versionné.

---

## 8) Pages obligatoires du site BureauWeb

MVP:
- /
- /blog
- /blog/[slug]
- /merci (post-paiement)
- /payer (si utilisé)
- /404 (custom)
- Pages légales (selon collecte)

Règle navigation:
- Logo = retour /
- Header inclut “Blogue”
- /blog et /blog/[slug] doivent réutiliser le même layout (header/footer) que le reste.

---

## 9) Stack, déploiement, et mapping Next.js

### 9.1 Stack (MVP)
Front: Next.js (App Router)
Paiements: Stripe (Checkout Session + Webhook)
Ops: Google Sheets (MVP) ou DB (scale)
Domaine/DNS: unknown (si WHC utilisé, le documenter ici)
Hébergement: Cloudflare Pages (OpenNext)

### 9.2 Mapping projet (adapter au repo actuel en .js)
Arborescence minimale attendue:
- app/
  - page.js
  - blog/
    - page.js
    - [slug]/page.js
  - merci/page.js
  - (option) payer/page.js
  - api/ (routes Stripe + leads)
- components/
- lib/ (ex: lib/blog/*, lib/stripe/*)

Règles:
- Pas de duplication par client dans BureauWeb acquisition.
- Toute page doit avoir metadata propre.

---

## 10) QA go-live et QA mensuelle (résumé)
Go-live: site accessible, HTTPS, mobile, CTA, téléphone cliquable, formulaire + confirmation, légales, aucun claim non vérifiable.
Mensuel: 1 micro-amélioration + rapport 1 page + QA non régression.

---

## 11) Unknown et décisions ouvertes
- Hébergeur unique: unknown
- Source de vérité leads: unknown (Sheets vs DB)
- Portail client: activer Stripe Customer Portal si possible, sinon unknown
- Seuil “paiement en échec prolongé”: default prudent 14 jours

Règle:
Si unknown, il doit exister dans un inventaire (liste) et être revisité à cadence mensuelle.
