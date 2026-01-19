# BureauWeb — Référence Offre, Funnel et Décisions Structurelles

Ce document est la source de vérité concernant :
- le fonctionnement du funnel (Pricing → Diagnostic),
- la structure et l’intention des forfaits,
- les règles UI critiques (espacement, cartes),
- les limites opérationnelles assumées (par forfait),
- les services complémentaires (hors forfait).

Il doit être lu avant toute modification du pricing, du formulaire ou des sections liées.

---

## 1. Funnel Pricing → Diagnostic

### Principe
BureauWeb utilise un **formulaire unique** de diagnostic, commun à tous les forfaits.
Les cartes de forfaits servent uniquement à capter une **intention**, pas à enclencher une transaction.

### Comportement des CTA Pricing
- Les boutons « Recevoir mon diagnostic gratuit » :
  - déclenchent un scroll vers le formulaire sur la page d’accueil ;
  - définissent une intention de forfait (`plan_intent`) parmi :
    - `depart`
    - `pro`
    - `croissance`.

### Transmission de l’intention
- L’intention est stockée côté client via un contexte local (`PlanIntentProvider`).
- Le formulaire inclut un champ caché :
  - `plan_intent`, soumis avec la demande.
- Le formulaire ne change pas visuellement selon le forfait.

### Objectif
- Réduire la friction (pas de navigation inutile).
- Conserver un funnel unique.
- Donner du contexte à l’analyse interne, sans promesse de personnalisation automatique.

---

## 2. Architecture technique (Plan Intent)

### Bridge dédié
- Un composant client dédié (`PricingLeadFormBridge`) encapsule :
  - la section Pricing ;
  - le lien « Voir les limites mensuelles » ;
  - le LeadForm.
- Le reste de la page demeure server-rendered.

### Règle stricte
Le `PlanIntentProvider` :
- ne doit PAS entourer toute la page ;
- ne doit exister que dans le périmètre Pricing → Formulaire.

Objectif : éviter une dérive full client inutile.

---

## 3. Cartes de forfaits — règles de contenu

### Ce qui DOIT apparaître
- Prix.
- Liste des inclus mensuels (résumé).
- CTA principal.
- Lien vers les limites mensuelles (global, pas par carte).

### Ce qui NE DOIT PAS apparaître
- Éléments ponctuels (activation, onboarding, démarrage).
- Disclaimers généraux.
- Phrases de posture ou marketing.

Règle :
> Une carte de forfait ne contient que ce qui est inclus de façon continue pour ce prix.

---

## 4. Intention et périmètre des forfaits

### Forfait Départ
Objectif :
- Mettre en place une présence web fonctionnelle et maintenable, sans gestion technique.

Inclus :
- Infrastructure minimale propre.
- QA mensuelle (fonctionnement vérifié) + rapport 1 page.
- 1 micro-amélioration mensuelle, selon les limites définies.
- Aucun engagement de performance.

---

### Forfait Pro
Objectif :
- Structurer ou consolider la présence locale et l’organisation du site.

Inclus :
- QA mensuelle + rapport 1 page.
- Pages de services et de zones géographiques pour le SEO local (selon diagnostic).
- Processus d’avis.
- Support par courriel (réponse sous 2 jours ouvrables).
- 1 intervention mineure mensuelle, selon les limites définies.

---

### Forfait Croissance
Objectif :
- Faire évoluer la structure et le contenu de façon continue, sans embauche interne.

Inclus :
- Tout le forfait Pro.
- 1 page de contenu courte par mois (si pertinent).
- Support prioritaire par courriel ou par téléphone
  (première réponse sous 2 jours ouvrables).
- 1 intervention mineure mensuelle, selon les limites définies.

---

## 5. Définitions opérationnelles

### Micro-amélioration
Un seul ajustement simple, à faible risque, sur une page existante.
Exemples typiques :
- correction d’un lien brisé ;
- correction d’un problème d’affichage mobile ;
- mise à jour d’une information simple (téléphone, courriel, heures) à un seul endroit ;
- micro-ajustement de libellé (sans réécriture complète).

Ce que ce n’est pas :
- une nouvelle page ;
- une refonte ;
- une intégration d’outil tiers ;
- une suite de demandes au fil de l’eau.

---

### Intervention mineure
Action ponctuelle, à faible risque, ex. :
- ajustement de contenu existant ;
- correction technique légère ;
- amélioration UX mineure ;
- ajustement SEO local simple.

Ce que ce n’est pas :
- refonte ;
- nouvelle stratégie ;
- tests A/B ;
- développement spécifique.

---

### Page de contenu courte
Une page unique, structurée, sur un seul sujet (service ou zone), format « site », pas un article long.
- L’information provient de ce qui est fourni ou vérifiable.
- Si une information manque, elle est indiquée comme telle plutôt que d’être inventée.

---

### QA mensuelle (contrôle qualité)
Vérification de base :
- site accessible (bureau / mobile) ;
- formulaire fonctionnel ;
- liens clés actifs ;
- fiche Google toujours conforme.

---

## 6. Limites mensuelles (page publique)

- La page publique « limites mensuelles » détaille, par forfait :
  - inclus mensuels ;
  - définitions ;
  - exemples ;
  - limites.
- Cette page doit rester strictement cohérente avec les définitions et le périmètre ci-dessus.

---

## 7. Services complémentaires (hors forfait)

Règles :
- Tarifs indicatifs (avant taxes), disponibles avec abonnement actif.
- Confirmés par écrit avant d’agir.
- Tout service complémentaire est facturé uniquement après acceptation écrite du devis par le client.

Barème indicatif :
- Bloc d’intervention hors cadre (petites demandes regroupées) : à partir de 250 $.
- Page additionnelle courte (en dehors de ce qui est inclus) : à partir de 200 $.
- Intégration simple d’un outil tiers (ex: prise de rendez-vous, CRM, chat) : à partir de 300 $.
- Récupération ou assainissement d’accès (domaines, DNS, fiche Google, comptes) : à partir de 150 $.
- Traitement prioritaire, quand possible : supplément à partir de 75 $.
- Besoins techniques plus complexes (migration, refonte, redirections multiples) : sur devis.

---

## 8. Espacement et UI — règles verrouillées

### Tokens d’espacement autorisés (sections)
- `py-12`
- `py-16`
- `py-20`
- `md:py-16`
- `md:py-20`
- `md:py-24` (sections piliers uniquement)

### Règles
- Deux sections consécutives ne doivent jamais utiliser `md:py-24`.
- Les sections liées logiquement (Problème → Solution) doivent être plus denses.
- Aucun nouveau token d’espacement ne doit être introduit sans justification.

---

## 9. Loi 101 — ligne directrice

- Éviter les anglicismes évitables (onboarding, go-live, kickoff).
- Acronymes acceptés si courants et techniques (SEO).
- Préférer le français clair et opérationnel au jargon.

---

## 10. Règle de modification future

Avant toute modification :
- vérifier si le changement touche le funnel, les forfaits ou le formulaire ;
- mettre à jour ce document si le comportement, le périmètre ou le barème change.

Ce fichier prévaut sur toute interprétation implicite du code.
