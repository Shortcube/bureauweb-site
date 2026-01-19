Précedence: voir docs/DOCS_PRECEDENCE.md

BureauWeb - Référence Offre, Funnel et Décisions Structurelles

Ce document est la source de vérité concernant:

le fonctionnement du funnel (Pricing et Blogue → Diagnostic),

la structure et l’intention des forfaits,

les règles UI critiques (cartes, espacement),

les limites opérationnelles assumées (par forfait),

les services complémentaires (hors forfait),

la frontière Diagnostic vs Paiement (Stripe).

Il doit être lu avant toute modification du pricing, du formulaire, du blog, ou du tunnel Stripe.

1) Funnel (entrées) → Diagnostic
Principe

BureauWeb utilise un formulaire unique de diagnostic.
Les cartes de forfaits et le blogue servent à capter une intention et à réduire l’incertitude, pas à enclencher une transaction.

Entrées supportées:

Pricing (page d’accueil) → formulaire diagnostic

Blogue (articles) → formulaire diagnostic

Pages services (si présentes) → formulaire diagnostic

CTA standard

Libellé: « Recevoir mon diagnostic gratuit »

Action: scroll vers le formulaire (sur la home) ou navigation vers /#ancre-formulaire (selon implémentation).

Le CTA du blogue pointe vers le même diagnostic (même wording, même destination).

2) Comportement des CTA Pricing (plan_intent)
Intention de forfait

Les cartes définissent une intention plan_intent:

depart

pro

croissance

Règle:

L’intention est stockée côté client (context local).

Le formulaire soumet plan_intent en champ caché.

Le formulaire ne change pas visuellement selon le forfait.

Objectif:

Réduire la friction.

Conserver un funnel unique.

Donner du contexte à l’analyse interne, sans promesse de personnalisation automatique.

3) Cartes de forfaits (contenu autorisé)
DOIT apparaître

Prix mensuel

Inclus mensuels (résumé)

CTA diagnostic

Lien vers “limites mensuelles” (global, pas par carte)

NE DOIT PAS apparaître

Disclaimers généraux

Phrases marketing

Autorisé (uniquement Pro/Croissance):
Une ligne discrète sous la carte:
“Frais d’activation: 499$ (Pro) / 799$ (Croissance)”

Justification: transparence, réduction friction support.

Règle:
Une carte de forfait ne contient que ce qui est inclus de façon continue pour ce prix.

4) Prix et frais ponctuels (activation)

Prix mensuels:

Départ: 199$/mois

Pro: 349$/mois

Croissance: 549$/mois

Frais d’activation (ponctuels):

Départ: 0

Pro: 499$

Croissance: 799$

Règle UI:
L’activation peut être affichée sous Pro/Croissance via la ligne standard ci-dessus.
L’activation est expliquée au bon endroit (après diagnostic, page paiement, ou encadré “modalités”).

5) Intention et périmètre des forfaits
Départ

Objectif:

Présence web fonctionnelle et maintenable, sans gestion technique interne.

Inclus:

QA mensuelle + rapport 1 page.

1 micro-amélioration mensuelle (définition ci-dessous).

Aucun engagement de performance.

Pro

Objectif:

Consolider la présence locale et l’organisation du site.

Inclus:

QA mensuelle + rapport 1 page.

Structuration services et zones (si pertinent).

Processus d’avis.

Support: voir section Support et communication (canonique).

1 intervention mineure mensuelle (définition ci-dessous).

Croissance

Objectif:

Évolution continue de structure et contenu, sans embauche interne.

Inclus:

Tout Pro.

1 page de contenu courte par mois (si pertinent).

Support: voir section Support et communication (canonique).

1 intervention mineure mensuelle.

6) Définitions opérationnelles
Micro-amélioration

Un seul ajustement simple, faible risque, sur une page existante.
Exemples:

corriger un lien brisé;

corriger un problème mobile;

mettre à jour téléphone, courriel, heures à un seul endroit;

micro-ajustement de libellé (sans réécriture complète).

Ce que ce n’est pas:

nouvelle page;

refonte;

intégration d’outil tiers;

suite de demandes au fil de l’eau.

Intervention mineure

Action ponctuelle, faible risque:

ajustement contenu existant;

correction technique légère;

amélioration UX mineure;

ajustement SEO local simple.

Ce que ce n’est pas:

refonte;

stratégie marketing;

tests A/B;

développement sur mesure.

Page de contenu courte

Page unique, structurée, sur un seul sujet (service ou zone), format “site”, pas un article long.

L’information provient de ce qui est fourni ou vérifiable.

Si info manquante: unknown, jamais inventer.

QA mensuelle

Vérifications:

site accessible;

mobile utilisable;

CTA et contacts;

formulaire + confirmation;

fiche Google cohérente si applicable.

7) Limites mensuelles (page publique)

La page “limites mensuelles” doit rester strictement cohérente avec les définitions ci-dessus.
Toute modification de périmètre doit mettre à jour ce fichier et la page publique.

8) Paiement Stripe (frontière diagnostic → exécution)

Règle:

Aucun travail tant que Payé = Non.

Définition Payé:

abonnement Stripe actif

dernière facture paid

MVP recommandé:

Stripe Checkout Session (tunnel propre) + webhook.

Success URL: /merci

Cancel URL: /#tarifs.

9) Services complémentaires (hors forfait)

Règles:

Sur devis, confirmé par écrit avant d’agir.

Facturé uniquement après acceptation écrite.

Barème indicatif (avant taxes, ajustable):

Bloc d’intervention hors cadre: à partir de 250$.

Page additionnelle courte: à partir de 200$.

Intégration simple (prise de rendez-vous, CRM, chat): à partir de 300$.

Récupération ou assainissement d’accès (DNS, fiche Google, comptes): à partir de 150$.

Traitement prioritaire, quand possible: supplément à partir de 75$.

Besoins complexes (migration, refonte, redirections multiples): sur devis.

10) Espacement et UI (règles verrouillées)

Tokens d’espacement autorisés:

py-12

py-16

py-20

md:py-16

md:py-20

md:py-24 (sections piliers uniquement)

Règles:

Deux sections consécutives ne doivent jamais utiliser md:py-24.

Les sections liées logiquement (Problème → Solution) doivent être plus denses.

Aucun nouveau token sans justification.

11) Loi 101 (ligne directrice)

Éviter les anglicismes évitables (onboarding, go-live, kickoff).

Acronymes techniques courants acceptés (SEO).

Français clair et opérationnel.

12) Règle de modification future

Avant toute modification:

vérifier si le changement touche le funnel, les forfaits, le blog, le formulaire, ou Stripe;

mettre à jour ce document si comportement ou périmètre change.

Ce fichier prévaut sur toute interprétation implicite du code.

### Support et communication
- Support en français, humain, principalement par écrit (courriel ou texto). Téléphone au besoin (selon le forfait).
- Aucune promesse de disponibilité immédiate ou 24/7
- Les échanges servent à cadrer, prioriser et exécuter dans les limites mensuelles

### Annulation et facturation
- L’abonnement peut être annulé à tout moment via le Portail client Stripe
- L’annulation prend effet à la fin de la période déjà payée
- Aucun remboursement rétroactif
