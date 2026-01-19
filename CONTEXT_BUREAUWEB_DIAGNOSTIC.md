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

BureauWeb - Contexte de travail (Diagnostic, scoring, dashboard Google Sheets)

Date: 2026-01-19

Ce document compile les décisions, contenus et réglages techniques établis, afin de redémarrer un nouveau fil sans perdre le contexte.

1) Positionnement BureauWeb (rappel)

BureauWeb = partenaire d’infrastructure web (pas une agence créative).

Cible: entreprises locales au Québec (construction, métiers manuels, services terrain).

Objectif: fiabilité, vitesse perçue, visibilité locale (fiche Google), conversion (contact facile, demandes qui entrent).

Règle: aucune promesse chiffrée, uniquement du vérifiable.

2) Terminologie du CTA

Décision:

Remplacer toute mention visible « Plan gratuit 24 h » par « Diagnostic gratuit ».

Placement:

Bouton (header + hero): Diagnostic gratuit ou Recevoir mon diagnostic gratuit.

Microcopy séparée: « Retour sous 24–48 h ouvrables. 1 page. Actions prioritaires. »

3) Catchphrase (bandeau)

Catchphrase retenue:

« On gère votre web pendant que vous gérez vos chantiers. »

Règles:

Bandeau au-dessus du hero: OK.

Accent minimal, pas de surlignage agressif.

4) Diagnostic (livrable client) - structure

Objectif:

Livrer un diagnostic écrit lisible, rationnel, non spéculatif, pour décider si on avance.

Contrainte:

1 page max côté client.

Contenu “client” (1 page):

Résumé (30 secondes)

Score (/100)

Classe: solide / améliorable / critique

Opportunité principale

Recommandation: avancer / attendre / pas un bon fit

Problèmes observables (max 3)

Constat factuel

Impact logique

Preuve (page/lien/test/observation)

Actions rapides (2 à 3 actions prioritaires)

Vue d’ensemble 21 jours (non détaillée)

Semaine 1 / 2 / 3

Périmètre typique si on avance (liste courte)

Prochaines étapes possibles (liste courte)

Section interne (optionnelle):

Règles et cadre internes pour standardiser et éviter les claims.

5) Rôle du blogue dans le diagnostic

Le blogue sert de point d’entrée informatif pour des entrepreneurs déjà conscients d’un problème (site, mobile, fiche Google, conversion).

Chaque article:

traite d’un sujet concret et observable,

clarifie ce qui est sous contrôle vs ce qui ne l’est pas,

mène vers le diagnostic gratuit comme prochaine étape logique.

Le blogue ne vise pas:

le trafic générique,

l’éducation théorique,

la notoriété abstraite.

Il vise:

la qualification minimale du lecteur,

la réduction d’incertitude avant contact,

l’alignement entre le problème perçu et le diagnostic proposé.

Le diagnostic gratuit peut être déclenché depuis:

la page d’accueil,

les pages de services,

chaque article de blogue (CTA standardisé).

6) Système de scoring (Google Sheets)

Valeurs:

Statuts: Oui / Non / Incomplet

Points: Oui = 3, Incomplet = 1, Non = 0

Règle:

Statut visible, scores peuvent être masqués.

7) Onglet Liste (référentiel)

Nom d’onglet: Liste

Colonnes (A à E):

A: Secteurs d’activités

B: Secteurs d’activités RBQ

C: Secteurs urgents

D: Régions

E: Analyste

8) Colonnes Diagnostics complets (ordre confirmé, 59)

Entreprise

Secteur

Région

Date diagnostic

Analyste

RBQ visible

RBQ requis ?

Score RBQ

Site accessible

Mobile utilisable

Vitesse perçue

Message clair en 5 sec

Services + région clairs

Page contact claire

CTA visible

Téléphone cliquable

Score téléphone clicable

Courriel cliquable

Score courriel cliquable

Formulaire présent

Score formulaire présent

Formulaire fonctionnel

Confirmation après envoi

Fiche Google existe ?

Score fiche google existe

Fiche revendiquée

Catégorie correcte

Infos cohérentes (NAP)

Lien fiche → site

Score lien fiche

HTTPS valide

Score HTTPS

Pages légales

Score page légales

Avis clients

Score avis clients

Photos réelles

Cohérence globale

Score Site

Score Conversion

Score Local

Score Fondations

Score total

Classe

Décision suggérée

Problème #1

Problème #2

Problème #3

Notes internes

Bloquants (nb)

Bloquants (détails)

Opportunité

Décision suggérée v2

Type d’offre recommandée

Angle de vente

Actions rapides (liste)

Secteur urgent (auto)

Angle de vente final

Problèmes (liste)

Notes internes (références):

Scores agrégés: Conversion = AL, Local = AM, Fondations = AN

Score HTTPS = AC, Score lien fiche = AB

9) NAP (définition)

NAP = Name, Address, Phone
NAP cohérent = cohérence nom/adresse/téléphone entre site, fiche Google, annuaires majeurs.

10) Secteurs: exception “Fournisseur d’équipement de chauffage”

Par défaut: mauvais fit (vendeur/distributeur).

Fit conditionnel si installation/entretien/service terrain clairement offert.

11) RBQ: logique requis vs non requis

Colonnes:

RBQ requis ? (G)

Score RBQ (H)

Comportement:

Si RBQ non requis: score par défaut = 3.

Si RBQ requis: scorer selon RBQ visible (Oui/Non/Incomplet).

Liste RBQ requis (à maintenir dans Liste colonne B):

Asphaltage

Balcons / terrasses

Béton

Carrelage

Charpente

Climatisation

Clôtures

Clôtures et portails

Construction générale

CVAC / Chauffage

Démolition

Ébénisterie

Électricité

Électricité industrielle

Excavation

Ferronnerie

Fondations

Gaz naturel

Gicleurs / incendie

Gypse / tirage de joints

Isolation

Maçonnerie

Menuiserie

Pavage

Peinture

Piscines

Planchers

Plomberie

Portes et fenêtres

Réfrigération commerciale

Rénovation commerciale

Rénovation résidentielle

Revêtement extérieur

Soudure

Spas

Toiture

Ventilation

12) Problèmes (liste) + extraction top 3

Objectif:

Générer une liste textuelle lisible, puis extraire 3 items.

Règle:

Séparateur de liste: " ||| "

Correctif extraction:

Splitter sur "|||", puis TRIM.

Formules:

AT: =IFERROR(TRIM(INDEX(SPLIT(BG2;"|||");1));"")

AU: =IFERROR(TRIM(INDEX(SPLIT(BG2;"|||");2));"")

AV: =IFERROR(TRIM(INDEX(SPLIT(BG2;"|||");3));"")

13) Dashboard (Google Sheets)

Décision:

Dashboard = Google Sheets uniquement.

Données fantômes:

Cause: drag-down sur lignes vides recopie des valeurs/formules.

Fix: supprimer les lignes vides, ajouter au fur et à mesure.

Locale:

Fonctions en anglais (FILTER, QUERY, COUNTIF, COUNTIFS)

Séparateur = point-virgule ;

KPIs exemples:

Total diagnostics: =COUNTA('Diagnostics complets'!A2:A)

À avancer: =COUNTIFS('Diagnostics complets'!BA2:BA;"Avancer";'Diagnostics complets'!A2:A;"<>")

Table “À traiter maintenant”:

Filtrer A is not null.

14) Angle de vente final (aide-mémoire)

Fondations: crédibilité ou conformité cassée (site inaccessible, HTTPS invalide, RBQ requis non visible, pages légales absentes).
Conversion: contacts faibles (CTA, téléphone, formulaire, message).
Local: entreprise peu trouvable (fiche Google, NAP, lien fiche→site, avis).
Règle: Fondations > (Urgent -> Conversion) sinon Local.