# SHEETS_SCHEMA - BureauWeb (v1.0)
Derniere mise a jour: 2026-01-19

Objectif: documenter colonnes, formules, et regles anti "donnees fantomes".

## 1) Onglets
- Liste (referentiels)
- Diagnostics complets (donnees)
- Dashboard (KPIs + vue a traiter)

## 2) Onglet Liste (colonnes)
A: Secteurs d'activites
B: Secteurs d'activites RBQ requis
C: Secteurs urgents
D: Regions
E: Analyste

## 3) Onglet Diagnostics complets
La liste complete des 59 colonnes vit dans CONTEXT_BUREAUWEB_DIAGNOSTIC.md.
Regle: si divergence, SHEETS_SCHEMA prevaut pour les formules et la mecanique dashboard.

## 4) Problemes (liste) et extraction top 3
Separateur: " ||| "

Probleme #1:
=IFERROR(TRIM(INDEX(SPLIT(BG2;"|||");1));"")

Probleme #2:
=IFERROR(TRIM(INDEX(SPLIT(BG2;"|||");2));"")

Probleme #3:
=IFERROR(TRIM(INDEX(SPLIT(BG2;"|||");3));"")

## 5) Dashboard KPIs (exemples)
Total diagnostics:
=COUNTA('Diagnostics complets'!A2:A)

A avancer:
=COUNTIFS('Diagnostics complets'!BA2:BA;"Avancer";'Diagnostics complets'!A2:A;"<>")

## 6) Regle anti "donnees fantomes"
Cause:
- drag-down sur des lignes vides recopie formules et valeurs.

Fix:
- supprimer les lignes vides,
- ajouter une entreprise sous la derniere ligne.

Option garde-fou:
- IF($A2="";"";...) sur colonnes cles.

## 7) Locale
- Fonctions en anglais (FILTER, QUERY, COUNTIF, COUNTIFS)
- Separateur d'arguments: ;

## 8) Vue "A traiter maintenant" (QUERY)
Toujours filtrer A is not null.

Exemple:
=QUERY('Diagnostics complets'!A1:BF;"select A,B,C,BA,AZ,BF,BB,AX,AT,E where BA='Avancer' and A is not null label A 'Entreprise', B 'Secteur', C 'Region', BA 'Decision', AZ 'Opportunite', BF 'Angle', BB 'Offre', AX 'Bloquants', AT 'Probleme #1', E 'Analyste'";1)
