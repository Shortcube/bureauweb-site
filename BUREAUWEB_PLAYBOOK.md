# BureauWeb — Playbook opérationnel (v1)

Source de vérité canonique.
Ne pas modifier sans versioning.

Dernière mise à jour: 2026-01-17

1) Positionnement et principes non-négociables
1.1 Positionnement BureauWeb (rappel)

BureauWeb = partenaire d’infrastructure web (pas une agence créative).

Cible: entreprises locales au Québec (construction, métiers manuels, services terrain).

Objectif opérationnel: fiabilité, vitesse, visibilité locale (fiche Google), conversion (contact facile, demandes qui entrent).

1.2 Terminologie du plan gratuit (CTA)

Remplacer « Plan gratuit 24 h » par « Diagnostic gratuit ».

Placement recommandé:

Bouton (header + hero): Diagnostic gratuit ou Recevoir mon diagnostic gratuit

Microcopy (séparée du CTA): « Retour sous 24–48 h ouvrables. 1 page. Actions prioritaires. »

1.3 Catchphrase (bandeau / pill)

Catchphrase retenue: « On gère votre web pendant que vous gérez vos chantiers. »

Intégration UI:

Bandeau/pill au-dessus du hero: OK.

Couleur d’accent: limiter aux mots clés (ex: « web », « chantiers »), éviter de sur-surligner.

2) Pipeline global BureauWeb (vue système)
2.1 Schéma ASCII (pipeline complet)

Lead
↓
Diagnostic (1 page) + Scoring
↓
Décision GO / NO-GO + Offre (2 options max)
↓
Paiement (lien) → Abonnement actif
↓
Production (S1/S2/S3, template)
↓
Livraison (Go-live + handoff)
↓
Exploitation (mensuel: rapport + 1 micro-amélioration + QA)
↓
Offboarding (si sortie)

2.2 Table par étape (objectif, artefacts, automatisation, manuel, outils)
Étape	Objectif	Artefacts produits (fermés)	Automatisable	Manuel (pourquoi)	Outil recommandé (MVP / Scale)
Lead	Capturer l’info minimale, créer une prochaine action	(1) Entrée “Lead”, (2) accusé réception, (3) tâche “diagnostic”	Oui	Non si entrée incomplète	MVP: Form Next.js + Google Sheets, Scale: DB (Airtable/CRM) + webhooks
Diagnostic	Produire 1 page factuelle pour décider	(1) Diagnostic 1 page, (2) liens/preuves, (3) score	Partiel	Jugement + preuves	MVP: Google Sheets + template Doc, Scale: génération guidée + QA humaine
Décision	GO/NO-GO et cadrage	(1) statut GO/NO-GO, (2) “bloquants”, (3) offre proposée	Partiel	Risque et fit	MVP: règles dans Sheets, Scale: règles + “red flags” codifiés
Paiement	Encaisser sans friction	(1) lien paiement, (2) facture, (3) abonnement actif	Oui	Exceptions comptables	MVP: Stripe Payment Link + abonnement, Scale: portail client + dunning
Production	Déployer un site standard rapidement	(1) repo/site, (2) config client, (3) QA checklist	Partiel	Contenu client et QA	MVP: Template repo + config, Scale: générateur + CI/CD standard
Livraison	Go-live sans surprise	(1) URL prod, (2) checklist go-live, (3) handoff court	Partiel	Validation finale	MVP: checklist, Scale: runbook + monitoring
Exploitation	Anti-churn par livrables visibles	(1) rapport 1 page, (2) 1 micro-amélioration, (3) QA mensuelle	Partiel	Choix amélioration	MVP: SOP mensuelle, Scale: backlog + cadence + tickets
Offboarding	Sortie propre	(1) export, (2) retrait accès, (3) clôture facturation	Partiel	Coordination accès	MVP: checklist offboarding, Scale: procédure automatisée + logs
3) Diagnostic client (template 1 page + règles)
3.1 Objectif et contraintes (internes)

Diagnostic écrit: rationnel, non spéculatif, basé sur preuves.

Contrainte: 1 page max côté client.

Section “Règles et cadre”: peut rester interne (non livrée au client) si préféré.

3.2 Système de scoring (Google Sheets)

Statuts: Oui / Non / Incomplet

Conversion: Oui = 3, Incomplet = 1, Non = 0

Affichage: garder la colonne “statut” visible (Oui/Non/Incomplet) et cacher la colonne “Score …”.

NAP (définition):

NAP = Name, Address, Phone

“Infos cohérentes (NAP)” = cohérence nom/adresse/téléphone entre:

site web,

fiche Google,

autres annuaires majeurs.

3.3 Onglet Liste (référentiel)

Nom d’onglet: Liste

Colonnes (A à E):

A: Secteurs d’activités

B: Secteurs d’activités RBQ

C: Secteurs urgents

D: Régions

E: Analyste

3.4 Liste des colonnes (Diagnostics complets), ordre confirmé (59)

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

Quick wins (liste)

Secteur urgent (auto)

Angle de vente final

Problèmes (liste)

Notes internes (références de colonnes):

Scores agrégés: Conversion = AL, Local = AM, Fondations = AN

Score HTTPS = AC

Score lien fiche = AB

3.5 Génération des “Problèmes” (liste + top 3)

Objectif:

Générer une liste de problèmes textuels lisibles, puis extraire les 3 premiers en colonnes.

Règles:

Séparateur de liste: " ||| "

Structure:

Bloquants généraux (site down, aucun contact, formulaire non fonctionnel, fiche Google absente, HTTPS invalide, RBQ non visible si requis)

Puis problèmes contextuels selon l’angle de vente (Conversion/Local)

Extraction Problème #1/#2/#3 (splitter sur "|||", TRIM):

Problème #1 (AT): =IFERROR(TRIM(INDEX(SPLIT(BG2;"|||");1));"")

Problème #2 (AU): =IFERROR(TRIM(INDEX(SPLIT(BG2;"|||");2));"")

Problème #3 (AV): =IFERROR(TRIM(INDEX(SPLIT(BG2;"|||");3));"")

3.6 Dashboard (Google Sheets)

Décision:

Dashboard = Google Sheets uniquement.

Problème “données fantômes”:

Cause: drag-down de lignes vides recopie formules/valeurs par défaut.

Décision:

supprimer les lignes vides,

ajouter au fur et à mesure.

Nouvelle entreprise sous la dernière ligne recopie automatiquement les formules.

Locale des formules (dans le fichier):

Fonctions en anglais (FILTER, QUERY, COUNTIF, COUNTIFS)

Séparateur d’arguments = point-virgule ;

KPIs (conditionner avec Entreprise <> "" si nécessaire):

Total diagnostics: =COUNTA('Diagnostics complets'!A2:A)

À avancer: =COUNTIFS('Diagnostics complets'!BA2:BA;"Avancer";'Diagnostics complets'!A2:A;"<>")

Opportunités fortes: =COUNTIFS('Diagnostics complets'!AZ2:AZ;"Forte";'Diagnostics complets'!A2:A;"<>")

Offres mensuelles: =COUNTIFS('Diagnostics complets'!BB2:BB;"Mensuel";'Diagnostics complets'!A2:A;"<>")

Secteurs urgents: =COUNTIFS('Diagnostics complets'!BE2:BE;"OUI";'Diagnostics complets'!A2:A;"<>")

Table “À traiter maintenant” (QUERY):

Filtrer aussi A is not null pour éviter les lignes vides.

Exemple:

=QUERY('Diagnostics complets'!A1:BF;"select A,B,C,BA,AZ,BF,BB,AX,AT,E where BA='Avancer' and A is not null label A 'Entreprise', B 'Secteur', C 'Région', BA 'Décision', AZ 'Opportunité', BF 'Angle', BB 'Offre', AX 'Bloquants', AT 'Problème #1', E 'Analyste'";1)

Angle de vente final (aide-mémoire):

Fondations: crédibilité/conformité cassée (site inaccessible, HTTPS invalide, RBQ requis non visible, pages légales absentes, incohérences majeures).

Conversion: trafic existe mais contacts faibles (CTA/phone/formulaire/message).

Local: contact OK mais entreprise peu trouvable (fiche Google, NAP, lien fiche→site, avis).

Règle: Fondations > (Urgent -> Conversion) sinon Local.

État (au moment de couper la conversation):

Dashboard corrigé: KPIs cohérents sans données fantômes.

Tableau “Avancer” fonctionne, pas de répétitions après correction + suppression lignes vides.

Prochaines étapes (si reprise):

Stabiliser définitivement les colonnes “par défaut” (si besoin, garde-fou IF($A2="";"";...) sur colonnes clés).

Ajouter 10–20 diagnostics réels pour valider: seuils Avancer/Attendre, opportunité, type d’offre, quick wins.

Mise en forme conditionnelle (Dashboard): Avancer=vert, Attendre=jaune, Ne pas prioriser=gris/rouge.

3.7 RBQ (logique requis vs non requis)

Colonnes RBQ:

RBQ requis ? (G)

Score RBQ (H)

Comportement:

Si RBQ non requis: score par défaut = 3.

Si RBQ requis: scorer selon Oui/Non/Incomplet sur “RBQ visible”.

Liste “RBQ requis” (référentiel, Liste colonne B):

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

3.8 Secteurs: ciblage et exceptions

“Fournisseur d’équipement de chauffage”:

Par défaut: mauvais fit (vendeur/distributeur).

Fit conditionnel si installation/entretien/service terrain clairement offert.

3.9 Template final — diagnostic client (1 page)

DIAGNOSTIC GRATUIT (1 page)
Entreprise: {{entreprise}}
Secteur: {{secteur}}
Région: {{region}}
Date: {{date}}

1) Résumé (lecture 30 secondes)

Score: {{score_total}}/100
Classe: {{classe}} (solide, améliorable, critique)
Opportunité principale: {{opportunite_principale}}
Recommandation: {{recommandation_finale}} (Avancer, Attendre, Pas un bon fit)

2) Problèmes observables (max 3)

Problème 1
Constat: {{probleme_1_constat}}
Impact: {{probleme_1_impact}}
Preuve: {{probleme_1_preuve}} (lien, page, test, observation)

Problème 2
Constat: {{probleme_2_constat}}
Impact: {{probleme_2_impact}}
Preuve: {{probleme_2_preuve}}

Problème 3
Constat: {{probleme_3_constat}}
Impact: {{probleme_3_impact}}
Preuve: {{probleme_3_preuve}}

3) Quick wins (2 à 3 actions prioritaires)

{{quick_win_1}}

{{quick_win_2}}

{{quick_win_3}} (optionnel)

4) Vue d’ensemble 21 jours (non détaillée)

Semaine 1: {{plan_s1}}
Semaine 2: {{plan_s2}}
Semaine 3: {{plan_s3}}

5) Périmètre typique si on avance

{{perimetre_1}}

{{perimetre_2}}

{{perimetre_3}}

{{perimetre_4}} (optionnel)

6) Prochaines étapes possibles

Option A: {{next_step_a}}

Option B: {{next_step_b}}

Option C: {{next_step_c}} (optionnel)

4) Décision GO / NO-GO (règles complètes)
4.1 Table des signaux (fermée)

Règle d’agrégation:

Si ≥ 1 ligne déclenche NO-GO → décision = NO-GO

Sinon, si ≥ 1 ligne déclenche Attendre → décision = Attendre

Sinon → décision = GO

Signal observé	Source (site / GBP / légal / RBQ)	Statut (Oui / Non / Incomplet)	Impact	Décision automatique
Site accessible	site	Non	Impossible d’opérer	NO-GO
Mobile utilisable	site	Non	Conversion cassée	Attendre
Page contact claire	site	Non	Conversion cassée	Attendre
CTA visible	site	Non	Conversion cassée	Attendre
Téléphone cliquable	site	Non	Conversion cassée	Attendre
Courriel cliquable	site	Non	Conversion affaiblie	Attendre
Formulaire présent	site	Non	Conversion affaiblie	Attendre
Formulaire fonctionnel	site	Non	Conversion cassée	Attendre
Confirmation après envoi	site	Non	Friction, confiance	Attendre
HTTPS valide	site	Non	Fondations cassées	Attendre
Pages légales	légal	Non	Fondations cassées	Attendre
Fiche Google existe ?	GBP	Non	Local cassé	Attendre
Fiche revendiquée	GBP	Non	Local fragile	Attendre
Catégorie correcte	GBP	Non	Local affaibli	Attendre
Infos cohérentes (NAP)	site / GBP	Non	Confiance, local	Attendre
Lien fiche → site	GBP	Non	Local affaibli	Attendre
RBQ requis ?	RBQ	Oui	Active règles RBQ	(voir ci-dessous)
RBQ visible	RBQ	Non ET RBQ requis = Oui	Risque conformité	Attendre
Secteur = “Fournisseur d’équipement de chauffage”	site / offre	Oui	Fit conditionnel	Attendre (exception ci-dessous)
4.2 Exceptions tolérées (fermées)
Exception	Condition observable	Décision
Avis clients absents	Avis clients = Non	Toléré (n’affecte pas GO si aucun autre Attendre/NO-GO)
Photos réelles absentes	Photos réelles = Non	Toléré (mais doit être collecté en onboarding)
Vitesse perçue “Incomplet”	Vitesse perçue = Incomplet	Toléré (devient action S2)
Fournisseur d’équipement de chauffage	Services montrent “installation/entretien/service terrain” = Oui (preuve: page services)	Continue règles normales (sinon Attendre)
4.3 Seuils minimaux (fermés)
Seuil minimal	Formulation	Décision
Contact minimal opérationnel	(Téléphone cliquable = Oui) OU (Formulaire fonctionnel = Oui) OU (Courriel cliquable = Oui)	Sinon Attendre
Fondations minimales	Site accessible = Oui ET HTTPS valide ≠ Non	Si HTTPS = Non alors Attendre; si Site = Non alors NO-GO
RBQ	Si RBQ requis = Non alors Score RBQ = 3 (par défaut)	Continue
RBQ requis	Si RBQ requis = Oui ET RBQ visible ≠ Oui	Attendre
5) Banque de sites (core / modules / variantes)
5.1 Principe Core / Modules / Variantes

Core (figé, identique partout)

Layout, design system, composants UI.

Composants NAP centralisés.

Formulaire, anti-spam, hooks tracking (si inclus).

Pages légales (gabarits).

Modules (paramétrables, via config)

Services

Zones desservies

FAQ

Photos réelles

Avis (si inclus)

GBP (si inclus)

Variantes (par métier / région)

Copy, sections spécifiques, FAQ métier.

Taxonomie services par métier.

Angle principal (urgence vs planifié) si applicable.

Figé vs paramétrable

Figé: structure, composants, règles QA, système de config, pipeline CI.

Paramétrable: contenu, services, zones, CTA principal, preuves, RBQ si requis.

5.2 Structure de dossiers (type)

Structure logique (hiérarchique):

/bureauweb-bank

/core

/ui

/layout

/legal

/forms

/seo

/modules

/services

/zones

/faq

/photos

/reviews

/gbp

/variants

/trades

/plomberie

/toiture

/paysagement

/electricite

/renovation

/cvac

/regions

/montreal

/rive-sud

/rive-nord

/laval

/monteregie

/sites

/_template-site

/clients

/client_slug_1

/client_slug_2

/tools

/scaffold

/qa

5.3 Exemple de config client (équivalent pseudo-JSON, sans code block)

client

slug: plomberie-roy-laval

entreprise: unknown

secteur: plomberie

region_principale: laval

nap

name: unknown

address: unknown

phone: unknown

email: unknown

cta_principal: appel

rbq

requis: true

numero_visible: unknown

modules

services: true

zones: true

faq: true

photos: true

reviews: false

gbp_pack: false

content

hero_h1: unknown

hero_sub: unknown

services: [unknown]

zones: [unknown]

faq: [{ q: unknown, a: unknown }]

constraints

claims_only_if_proven: true

unknown_if_not_verifiable: true

5.4 Exemple variation “plombier vs couvreur”
Dimension	Plombier	Couvreur
Variant	/variants/trades/plomberie	/variants/trades/toiture
Services (exemples)	Débouchage, chauffe-eau, fuite	Réparation toiture, bardeaux, inspection
Angle	Urgence possible	Saisonnier + inspection
RBQ	requis (liste RBQ inclut “Plomberie”)	requis (liste RBQ inclut “Toiture”)
FAQ	dégâts d’eau, assurance	infiltrations, garantie, ventilation
5.5 SEO & visibilité (structure industrialisable)

Sites clients (priorité MVP)

/

/services + /services/[slug]

/zones + /zones/[slug] (si module actif)

/contact

/confidentialite (+ autres légales selon collecte)

Secondaire (après 10+)

FAQ enrichie (par métier)

Guides légers seulement si alimentés par contenu réel

BureauWeb (acquisition)

Pages métiers (slugs exemples):

/metiers/plombier

/metiers/couvreur

/metiers/electricien

/metiers/cvac

Pages régions (slugs exemples):

/regions/montreal

/regions/rive-sud

/regions/laval

Combinaisons:

/plombier/montreal (si contenu substantif; sinon NO-GO)

Navigation recommandée

Site client (header): Accueil, Services, Zones (si inclus), FAQ, Contact

BureauWeb (header): Comment ça marche, Forfaits, Diagnostic gratuit, FAQ

Blog

MVP: NO (par défaut)

Scale: OUI seulement si contenu “intention commerciale” non générique

6) Architecture technique et déploiement
6.1 Stack recommandée (avec unknown)
Domaine	MVP	Scale
Front	Next.js (App Router) + composants standard	Idem + outillage génération + tests
Hébergement	unknown (Cloudflare Pages, Vercel, autre)	standardiser 1 seul
Email leads	unknown (ex: Resend)	logs + retries
Paiements	Stripe (Payment Links + Subscriptions)	Stripe + dunning + portail
Data ops	Google Sheets	migration possible vers Airtable/DB
Monitoring	logs minimal	monitoring + alerting
6.2 Variantes (config centrale)

1 fichier config par client (site.config.*).

Schéma validé (ex: Zod) pour éviter config cassée.

Aucune logique métier dans le JSX, uniquement via config.

6.3 Déploiement multi-sites (options)

Option A (MVP): 1 repo par client

Générer repo depuis /sites/_template-site

Remplir site.config.*

Déployer

Isolation + rollback simple

Coût: maintenance multi-repos

Option B (Scale): core versionné + sites minces

Core versionné (package interne) + sites minces

Script “bump” sites (PRs)

Patch sécurité à grande échelle

6.4 Schéma textuel architecture

[Lead Form Next.js] → [API lead] → [Email/log + Sheet/DB] → [Task: Diagnostic]
[Diagnostic Template + Sheet scoring] → [GO/NO-GO]
[Stripe Payment Link] → [Subscription Active]
[Site Generator] → [Repo Client] → [Deploy Host]
[Monthly SOP] → [Report 1 page + 1 change + QA] → [Retention]
[Offboarding SOP] → [Export + revoke + billing close]

6.5 Checklist d’implémentation MVP (fermée)

Fixer 1 hébergeur unique (unknown).

Créer /bureauweb-bank (core/modules/variants).

Créer site.config.* + validation schema.

Écrire script scaffold (copie template + inject config).

Standardiser QA go-live + QA mensuelle (checklists).

Standardiser scoring (Sheets) et règles GO/NO-GO.

Standardiser paiements Stripe: produits + liens + dunning.

Définir limites mensuelles et règles hors-scope.

6.6 Remplacement / mise à jour des fichiers du projet (règle)

Remplacer des fichiers “core” uniquement si:

modification générique (bénéficie à tous),

passage QA (go-live + formulaire + légal + perf),

versionnement (tag core vX.Y).

7) Process client de A à Z
Étape	Actions exactes (fermées)	Livrables visibles client	Durée cible	Frictions à surveiller
Entrée lead	Capturer: entreprise, contact, site, zone, métier (sinon unknown)	Accusé réception + “Diagnostic gratuit”	unknown	infos manquantes
Diagnostic	Remplir 1 page: score, 3 problèmes avec preuve, 2–3 quick wins, vue 21 jours	Diagnostic 1 page	microcopy: 24–48h ouvrables	preuves insuffisantes, claims non prouvés
Décision	Appliquer règles: bloquants, score/fit	Message GO/NO-GO + prochaine étape	unknown	objections: prix, propriété, sortie
Paiement	Envoyer lien Stripe: abonnement (et activation si applicable)	Reçu + confirmation abonnement	immédiat si payé	échecs carte, confusion
Onboarding	Collecter services, zones, photos, accès DNS/GBP, claims validés	Checklist onboarding partagée + statut	unknown	retards contenu, accès
Production	S1/S2/S3: template + config + QA	Staging + notes	21 jours (cadre)	scope creep, contenu manquant
Mise en ligne	DNS/SSL, smoke test, formulaire prod testé	URL live + handoff	unknown	DNS, emails spam
Exploitation mensuelle	Rapport 1 page + 1 micro-amélioration + QA mensuelle	Rapport + changelog	mensuel	valeur non visible = churn
Offboarding	Export + retrait accès + fin facturation	Paquet de sortie + confirmation	unknown	accès, DNS, attentes
8) SOP onboarding client
8.1 Préconditions (blocantes)

 Paiement actif confirmé (abonnement actif + facture payée).

 Dossier onboarding créé.

 “Unknown accepté mais tracé” appliqué (unknown dans config).

8.2 Ce que le client doit fournir (ordre, format)

Identité et NAP

 Nom (texte): {{name}}

 Adresse (texte): {{address}}

 Téléphone (texte): {{phone}}

 Courriel (texte): {{email}}

 Heures (texte) ou unknown

Offres et zones

 Services (liste 5–12) ou unknown

 Zones (liste 5–25) ou unknown

 Urgence (oui/non) ou unknown

Preuves et conformité

 RBQ (si requis): numéro exact ou unknown

 Logos/certifs/assurances (si vérifiables) ou unknown

Actifs visuels

 10 photos réelles minimum (jpg/png) sinon unknown

 Si aucune photo: placeholders neutres (module photos)

Accès techniques (si applicable)

 Accès DNS ou contact fournisseur ou unknown

 Accès GBP ou unknown

 Lien exact GBP si existe

8.3 Ce qui bloque la production (règles binaires)

 Paiement actif = Non → STOP.

 Site accessible = Non → STOP (NO-GO).

 Contact minimal opérationnel = Non → STOP (Attendre).

 RBQ requis = Oui et RBQ visible ≠ Oui → STOP (Attendre).

 Fiche Google existe = Non → STOP (Attendre).

8.4 Relances (default prudent)

 Relance 1: J+2 ouvrables (items manquants listés).

 Relance 2: J+5 ouvrables (items manquants listés).

 Relance 3: J+10 ouvrables (“dossier incomplet” imminent).

8.5 Déclarer “dossier incomplet”

 Après Relance 3, si ≥ 1 item bloquant manquant → statut = Dossier incomplet, production = STOP, pause ou offboarding (voir Stripe).

9) SOP production (S1 / S2 / S3)
9.1 S1 (semaine 1), checklist

Objectifs

 Site généré depuis template.

 Config client complétée (unknown tracés).

 Conversion minimale fonctionnelle.

Actions

 Créer repo client depuis template.

 Remplir site.config.* (NAP, secteur, région, modules).

 Activer modules selon onboarding.

 Définir CTA principal (config).

 Page Contact (téléphone, courriel, formulaire).

 Formulaire + confirmation après envoi.

 Pages légales (gabarits).

Livrables

 URL staging.

 Captures écran mobile (hero, contact, formulaire).

 Liste “unknown” restante.

Validation (Oui/Non)

 Site accessible.

 Mobile utilisable.

 Téléphone cliquable.

 Formulaire fonctionnel.

 Confirmation après envoi.

 HTTPS valide (staging/prod selon hébergeur).

Blocages

 Paiement inactif.

 NAP tout unknown.

 Aucun canal contact fonctionnel.

9.2 S2 (semaine 2), checklist

Objectifs

 Services + zones structurés.

 Local minimum (NAP cohérent, GBP prêt).

Actions

 Pages services (liste + pages).

 Pages zones (si module actif).

 FAQ métier (variant).

 Photos réelles si fournies, sinon placeholders neutres.

 Vérifier cohérence NAP site vs GBP (si accès/lien).

 Ajouter lien GBP → site si accès, sinon unknown.

Livrables

 Staging complet (services/zones/faq).

 Checklist local (GBP existe, revendiquée, catégorie, NAP, lien → site) avec statuts.

Validation (Oui/Non)

 Message clair en 5 sec.

 Services + région clairs.

 CTA visible sur mobile.

 Page contact claire.

Blocages

 Zones/services refusés et non acceptés en unknown.

 GBP introuvable.

9.3 S3 (semaine 3), checklist

Objectifs

 Go-live prêt.

 QA go-live complété.

Actions

 Finaliser contenu, retirer placeholders non autorisés.

 Vérifier HTTPS, pages légales, contact, formulaire, confirmation.

 Vérifier NAP, CTA, contact mobile.

 Préparer DNS + bascule prod (si applicable).

 Lier GBP → site (si accès).

 Exécuter QA Go-Live complète.

Livrables

 URL production.

 Changelog livraison (liste courte).

 Handoff client (1 page courte ou email standard).

Validation (Oui/Non)

 QA Go-Live = 100% Oui.

 Aucun bloquant.

Blocages

 DNS non accessible.

 RBQ requis et non visible.

10) QA go-live
QA Go-Live (checklist Oui/Non)

Technique

 Site accessible (prod).

 HTTPS valide (prod).

 Vitesse perçue acceptable (test simple).

Conversion

 Message clair en 5 sec (hero).

 Services + région clairs.

 CTA visible (hero + bas de page).

 Téléphone cliquable (mobile).

 Courriel cliquable.

 Formulaire présent.

 Formulaire fonctionnel (test envoi).

 Confirmation après envoi.

 Page contact claire.

Légal

 Pages légales présentes.

 Mentions cohérentes avec collecte (formulaire, email, téléphone).

 Aucun claim non vérifiable.

Mobile

 Mobile utilisable (nav, lecture, boutons).

 Aucun texte coupé (hero, sections clés).

 Boutons CTA accessibles.

Local (GBP)

 Fiche Google existe.

 Fiche revendiquée (si accès).

 Catégorie correcte.

 NAP cohérent site vs GBP.

 Lien GBP → site présent.

RBQ

 RBQ requis ? = Non, ou RBQ visible = Oui.

11) QA mensuelle
QA Mensuelle (checklist Oui/Non)

Valeur visible

 Rapport 1 page produit (mois courant).

 Changelog 1 item livré (micro-amélioration unique).

 Unknown résiduels listés et mis à jour si résolus.

Micro-amélioration (1 seule)

 1 amélioration conversion OU local appliquée.

 Test post-changement: téléphone, courriel, formulaire, confirmation.

Prévention régression

 Site accessible.

 HTTPS valide.

 Mobile utilisable.

 CTA visible.

 Formulaire fonctionnel.

Signal churn (Oui/Non)

 Client n’a pas répondu aux 2 dernières communications.

 Paiement en échec (Stripe).

 Demandes hors-scope répétées.

 Contenu bloquant jamais fourni (photos, GBP, RBQ si requis).

Action si signal churn = Oui (fermée)

 Envoyer récap 1 page des livrables + prochain micro-livrable.

 Si paiement en échec: appliquer pause vs offboarding (Stripe).

12) Paiements et facturation (Stripe runbook)
12.1 Flux exact BureauWeb

Diagnostic → Décision → Lien de paiement → Abonnement actif → Production → Maintenance (mensuel) → Offboarding (si sortie)

12.2 Ordre exact de création (Stripe, MVP)

 Créer Produit “Abonnement BureauWeb” (récurrent).

 Créer Prix récurrent mensuel (montant = unknown).

 Optionnel: Produit “Activation” (one-time), montant = unknown.

 Activer facturation automatique et emails de reçus.

 Activer Customer Portal (si disponible).

12.3 Lien de paiement (quoi envoyer, quand)

 Après décision GO: envoyer 1 Payment Link qui démarre l’abonnement.

 Si activation: inclure activation dans le même checkout (ligne one-time) ou lien séparé.

12.4 Quand un client est “payé” (règle)

Client = Payé si et seulement si:

 Abonnement Stripe = Active

 Dernière facture = Paid

Règle:

 Pas de production, pas de livraison, pas de mise en ligne tant que Payé = Non.

12.5 Échec de paiement (dunning)

 Statut interne “Paiement en échec”.

 Aucune nouvelle production.

 Stripe dunning activé (relances automatiques).

 Message manuel au client + lien portail client.

Seuil “prolongé”:

 unknown, default prudent: 14 jours après premier échec.

12.6 Pause vs offboarding (règles)

Pause si:

 Site déjà livré et problème = paiement seulement.

Offboarding si:

 Dossier incomplet bloquant persistant.

 Paiement en échec prolongé.

 Conditions minimales impossibles (site inaccessible durable, RBQ requis impossible).

12.7 Résiliation propre

 Annuler abonnement fin de période par défaut.

 Confirmer date fin de service.

 Lancer checklist offboarding.

13) Rapport mensuel client (template 1 page)

RAPPORT MENSUEL — {{mois_annee}}
Entreprise: {{entreprise}}
Site: {{url_site}}
Forfait: {{forfait}}
Période couverte: {{date_debut}} → {{date_fin}}

1) Rappel contexte

Objectif du site: {{objectif_site}} (ex: appels, soumissions, visibilité locale)

CTA principal: {{cta_principal}} (appel, soumission)

Secteur / Région: {{secteur}} / {{region}}

2) État QA (Oui / Non)
Contrôle	Statut
Site accessible	{{qa_site_accessible}}
HTTPS valide	{{qa_https_valide}}
Mobile utilisable	{{qa_mobile_utilisable}}
CTA visible	{{qa_cta_visible}}
Téléphone cliquable (mobile)	{{qa_tel_cliquable}}
Courriel cliquable	{{qa_email_cliquable}}
Formulaire présent	{{qa_form_present}}
Formulaire fonctionnel (test envoi)	{{qa_form_fonctionnel}}
Confirmation après envoi	{{qa_confirmation_envoi}}
Pages légales présentes	{{qa_pages_legales}}
NAP cohérent site vs GBP (si applicable)	{{qa_nap_coherent}}
Lien GBP → site (si applicable)	{{qa_gbp_lien_vers_site}}
RBQ visible (si requis)	{{qa_rbq_visible}}
3) Micro-amélioration livrée (1 seule)

Type: {{type_amelioration}} (conversion, local, stabilité, contenu)

Description factuelle: {{description_amelioration}}

Emplacement: {{emplacement_amelioration}} (page/section)

4) Vérifications clés (Oui / Non)
Vérification	Statut
Test appel (numéro cliquable)	{{test_appel}}
Test courriel (lien mailto)	{{test_courriel}}
Test formulaire (soumission)	{{test_formulaire}}
Test mobile (page accueil + contact)	{{test_mobile}}
5) Unknown encore ouverts (si applicable)

{{unknown_1}}

{{unknown_2}}

{{unknown_3}}

6) Prochaine action prévue (1 seule)

Action: {{prochaine_action}}

Pré-requis client (si applicable): {{prerequis_client}} (sinon: aucun)

Échéance cible: {{echeance}} (default prudent: prochain cycle mensuel)

14) Politique limites mensuelles (opération + client + CGU)
14.1 Encadré interne (opération)

LIMITES MENSUELLES — BUREAUWEB (OPÉRATION)

Inclus: 1 micro-amélioration par mois (1 seul changement livrable).

Toute demande = ticket.

Toute demande non incluse = hors-scope ou upsell.

Aucun travail si paiement non actif.

Inclus (liste fermée)

1 micro-amélioration (conversion OU local OU stabilité OU contenu léger)

QA mensuelle (site, HTTPS, mobile, CTA, contact, formulaire, confirmation)

Corrections de régression causées par BureauWeb (si applicable)

Mises à jour mineures de contenu liées à la micro-amélioration (uniquement)

Rapport mensuel 1 page (QA + amélioration + prochaine action + unknown)

Exclus (liste fermée)

Refonte design, refonte structure complète, nouvelles maquettes

Nouvelles sections majeures ou nouvelles pages multiples (au-delà de la micro-amélioration)

Intégrations avancées (CRM, réservation, ERP, API sur mesure)

Migration complète de contenu volumineux

Création de contenu non fourni (textes inventés, avis inventés, claims non vérifiables)

Gestion publicitaire, campagnes, promesses de performance

Support “illimité” ou demandes en continu sans priorisation

Traitement d’une demande (règle binaire)

Si la demande correspond à 1 item inclus et tient dans 1 micro-amélioration → planifier ce mois-ci.

Sinon → hors-scope.

Quand une demande devient un upsell (règles fermées)

Plus d’un changement livrable dans le mois → upsell.

Nouvelle fonctionnalité (intégration, réservation, CRM, automation) → upsell.

Création de contenu non fourni → upsell ou refus (si non vérifiable).

Plus d’une page nouvelle → upsell.

Default prudent upsell

Offre upsell = unknown (montant et forme).

Par défaut: 1 bloc de travail distinct, payable avant exécution.

14.2 Texte client (copier-coller)

LIMITES MENSUELLES (MAINTENANCE)

Chaque mois: 1 micro-amélioration + rapport 1 page.

QA mensuelle (site, mobile, contact, formulaire).

Les demandes hors cadre: hors-scope ou upsell.

Inclus

1 micro-amélioration par mois

QA mensuelle (test site, mobile, contact, formulaire)

Rapport mensuel 1 page

Exclus

Refonte complète, nouvelles fonctionnalités, intégrations sur mesure

Création de contenu non fourni

Tout travail avant paiement actif

Hors-scope / Upsell

Si une demande nécessite plus d’un changement dans le mois, ou une nouvelle fonctionnalité → upsell.

Upsells facturés séparément, exécutés après paiement.

14.3 Clause CGU (courte)

LIMITES DE SERVICE
Le service mensuel inclut une (1) micro-amélioration par mois, une QA mensuelle, et un rapport mensuel. Toute demande au-delà est hors-scope et peut faire l’objet d’un devis distinct (upsell). Aucune livraison n’est effectuée sans paiement actif.

15) Offboarding client (checklist complète)
15.1 Déclencheur et verrouillage

 Déclencheur identifié (résiliation client, impayé prolongé, dossier incomplet, fin de service) = Oui / Non

 Date de fin de service confirmée = Oui / Non

 Statut Stripe décidé (annulation fin de période, annulation immédiate) = Oui / Non

 Production et changements arrêtés = Oui / Non

 Checklist offboarding créée et assignée = Oui / Non

15.2 Communication client (ordre exact)

 Avis offboarding envoyé (date fin, remise, retraits) = Oui / Non

 Confirmation reçue ou absence de réponse tracée = Oui / Non

 Coordonnées remise actifs confirmées = Oui / Non

 Fenêtre technique transfert confirmée (si DNS/hébergement) = Oui / Non

15.3 Export et remise des actifs

 Export config client (site.config.*) = Oui / Non

 Export assets fournis (photos, logos, fichiers) = Oui / Non

 Export textes finaux = Oui / Non

 Export pages légales = Oui / Non

 Export paramètres SEO de base (titres/meta/slugs) = Oui / Non

 Export logs/formulaires (si stockés) ou “unknown” = Oui / Non

 Remise exports + accusé réception = Oui / Non

15.4 Accès à retirer

 Accès repo retiré = Oui / Non

 Tokens/keys révoqués (si existants) = Oui / Non

 Accès hébergeur retiré = Oui / Non

 Accès DNS retiré (si BureauWeb avait accès) = Oui / Non

 Accès outil email (formulaires) retiré = Oui / Non

 Accès analytics/monitoring retiré (si existants) = Oui / Non

 Accès GBP retiré (si BureauWeb avait accès) = Oui / Non

15.5 DNS / Hébergement

 Propriétaire domaine confirmé = Oui / Non

 Scénario choisi (transfert, maintien temporaire, coupure) = Oui / Non

 Si transfert: instructions DNS remises = Oui / Non

 Si transfert: preuve reprise DNS = Oui / Non

 Si coupure: date/heure confirmée par écrit = Oui / Non

 SSL/HTTPS vérifié post-transfert ou post-coupure = Oui / Non

 Redirections confirmées ou “unknown” = Oui / Non

15.6 Fin de facturation (Stripe)

 Abonnement annulé selon décision = Oui / Non

 Factures ouvertes vérifiées = Oui / Non

 Méthode paiement gérée via portail (statut noté) = Oui / Non

 Confirmation “facturation terminée” envoyée = Oui / Non

 Statut final enregistré (actif, annulé, impayé) = Oui / Non

15.7 Clôture interne

 Dossier archivé (exports inclus) = Oui / Non

 Inventaire “unknown” final archivé = Oui / Non

 Dernier rapport mensuel envoyé ou “non applicable” = Oui / Non

 Checklist offboarding complétée = Oui / Non

 Date clôture interne enregistrée = Oui / Non

16) Mapping projet Next.js
16.1 Arborescence cible minimale

Arborescence logique (hiérarchique):

/app

/(site)

layout.tsx

page.tsx

services/

zones/

faq/

contact/

legal/

/api

/lead

/form

/core

/ui

/layout

/legal

/forms

/seo

/modules

/services

/zones

/faq

/photos

/reviews

/gbp

/variants

/trades

/plomberie

/toiture

/...

/regions

/montreal

/rive-sud

/...

/config

site.config.ts (ou .json)

site.schema.ts

/tools

scaffold/

qa/

16.2 Point d’entrée unique de config

Fichier: config/site.config.ts (ou .json)

Champs minimaux:

client.slug, secteur, region_principale

nap.name, nap.address, nap.phone, nap.email

cta_principal

modules (services, zones, faq, photos, reviews, gbp_pack)

contraintes: claims_only_if_proven, unknown_if_not_verifiable

16.3 Composants qui lisent la config (mapping)

app/(site)/layout.tsx: NAP global, navigation, CTA principal

modules/services/*: config.content.services

modules/zones/*: config.content.zones

modules/faq/*: config.content.faq

core/legal/*: NAP, email, collecte formulaire

core/forms/* + app/api/form/*: destinations + anti-spam

16.4 Interdits dans le JSX (règles)

 Textes métier hardcodés dans core.

 Conditions métier écrites en dur dans JSX (if secteur == ...).

 Duplication de pages entières par client.

 Autorisé: rendu basé sur config + modules activés.

16.5 Activation modules et variantes sans duplication

Modules

 Chaque module: 1 composant Section + 1 route optionnelle.

 Layout assemble uniquement modules activés par config.modules.

Variantes métier

 Variant fournit contenu (textes, services par défaut, FAQ par défaut).

 Config client choisit 1 variant + surcharge champs nécessaires.

Variantes région

 Surcharge navigation, zones, libellés région.

17) Règles anti-churn et anti-scope creep
17.1 Anti-churn (règles fermées)

 Exploitation mensuelle = rapport 1 page + 1 micro-amélioration + QA mensuelle.

 Toute valeur doit être visible dans le rapport mensuel (QA + amélioration + prochaine action + unknown).

 Signal churn (oui/non) traité par action fermée (récap 1 page + prochain micro-livrable, et Stripe si paiement en échec).

17.2 Anti-scope creep (règles fermées)

 “Support illimité” refusé.

 Limites mensuelles appliquées (1 micro-amélioration).

 Toute demande = ticket.

 Hors-scope → refus ou upsell.

 Upsell → bloc distinct payable avant exécution (default montant unknown).

17.3 Standardisation anti-chaos (checklist)

Ce qui doit être documenté

 SOP Lead → Diagnostic → Paiement → Onboarding → S1/S2/S3 → Go-live → Mensuel → Offboarding

 Definition of Done (site livré)

 Limites mensuelles

 Politique unknown/null + QA

 (Scale) versioning core + runbooks incidents + registre décisions

Ce qui doit être refusé

 Support illimité

 Résultats garantis

 Contenu inventé (avis, années, certifications, chiffres)

 Variantes sur-mesure hors banque (sauf upsell cadré)

Ce qui provoque une explosion de charge

 Changements illimités

 Pages SEO massives vides (thin)

 Absence de preuves/photos (bloque production)

 Absence anti-spam (attaque formulaire)

 Absence livrables mensuels visibles

17.4 Risques (Risque → Cause → Conséquence → Contre-mesure)
Risque	Cause	Conséquence	Contre-mesure
Freelance déguisé	Tout ad hoc	Temps/client explose	Banque core/modules/variants + limites
Churn	Rien de visible mensuellement	Annulations	Rapport 1 page + micro-amélioration + QA mensuelle
Scope creep	Support illimité implicite	Charge infinie	Limite updates/mois + upsell
Promesses implicites	Copy trop agressif	Conflits	Diagnostic factuel, claims seulement prouvés
Thin content SEO	Pages massives vides	Dégradation	Prioriser services/zones utiles, refuser auto-blog
Impayés	Dunning absent	Travail non payé	Stripe dunning + pause/offboarding
Problèmes légaux	Pages légales absentes	Risque conformité	Templates légaux + inventaire outils
Qualif faible	GO mauvais fit	Support élevé + churn	Règles GO/NO-GO + bloquants + RBQ si requis
18) Décisions ouvertes, unknown et defaults prudents
Décision ouverte	Statut	Impact	Valeur par défaut prudente
Hébergeur unique (Cloudflare Pages, Vercel, autre)	unknown	Déploiement, DNS, SSL, coûts	Choisir 1 seul hébergeur et s’y tenir (default: celui déjà le plus intégré au stack actuel)
Montants Stripe (abonnement, activation)	unknown	Cashflow, friction	Default: 1 abonnement mensuel au départ; activation = 0 jusqu’à validation
Seuils score /100 pour classe (solide/améliorable/critique)	unknown	Cohérence diagnostics	Default: utiliser la classe déjà calculée dans Sheets; pas de remap
Seuils Avancer/Attendre dans Sheets	unknown	GO/NO-GO	Default: décision = agrégation des règles bloquantes, indépendamment du score
Cadence relances onboarding	unknown	Temps perdu vs churn	Default: J+2, J+5, J+10 ouvrables puis dossier incomplet
Seuil “paiement en échec prolongé”	unknown	Pause vs offboarding	Default: 14 jours après premier échec
Politique “pause” (site reste live ou non)	unknown	Risque, perception	Default: site reste live si déjà livré; aucun changement tant que non payé
Format exact rapport mensuel 1 page	unknown	Valeur visible	Default: template rapport mensuel (section 13)
Ce qui est inclus mensuellement (limites)	unknown	Explosion charge	Default: 1 micro-amélioration/mois; reste = hors-scope/upsell
Garde-fous colonnes Sheets (IF($A2="";"";...))	unknown	Données fantômes	Default: appliquer sur colonnes clés si besoin
Validation seuils (Avancer/Attendre, opportunité, offre, quick wins)	unknown	Qualité décision	Default: ajouter 10–20 diagnostics réels pour valider