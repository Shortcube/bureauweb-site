# BureauWeb — Contexte de travail (Diagnostic, scoring, dashboard Google Sheets)

Date: 2026-01-17

Ce document compile les décisions, contenus et réglages techniques établis dans la conversation, afin de redémarrer un nouveau fil sans perdre le contexte.

---

## 1) Positionnement BureauWeb (rappel)
- BureauWeb = partenaire d’**infrastructure web** (pas une agence créative).
- Cible: entreprises locales au Québec (construction, métiers manuels, services terrain).
- Promesse: fiabilité, vitesse, visibilité locale (fiche Google), et conversion (contact facile, demandes qui entrent).

---

## 2) Terminologie du plan gratuit (CTA)
### Décision
- L’expression **« Plan gratuit 24 h »** était jugée trop ambiguë.
- Remplacement validé: **« Diagnostic gratuit »**.

### Placement recommandé
- Bouton (header + hero): **Diagnostic gratuit** ou **Recevoir mon diagnostic gratuit**.
- Mention de délai en microcopy, séparée du CTA:
  - « Retour sous 24–48 h ouvrables. 1 page. Actions prioritaires. »

---

## 3) Catchphrase (bandeau / pill)
### Catchphrase retenue
- Version recommandée et intégrée: **« On gère votre web pendant que vous gérez vos chantiers. »**

### Intégration UI
- Bandeau/pill au-dessus du hero OK.
- Couleur d’accent: limiter aux mots clés (ex: « web », « chantiers ») et éviter de sur-surligner.

---

## 4) Diagnostic (livrable client) — structure
### Objectif
- Livrer un diagnostic écrit **lisible, rationnel, non spéculatif**, pour décider si on avance ensemble.

### Contrainte
- **1 page max** côté client.

### Contenu “client” (1 page)
1) Résumé (lecture 30 secondes)
- Score (/100)
- Classe: solide / améliorable / critique
- Opportunité principale
- Recommandation: avancer / attendre / pas un bon fit

2) Problèmes observables (max 3)
- Description factuelle
- Impact logique
- Preuve (page/lien/test/observation)

3) Actions rapides (2 à 3 actions prioritaires)

4) Vue d’ensemble 21 jours (non détaillée)
- Semaine 1 / 2 / 3

5) Périmètre typique si on avance (bullet list courte)

6) Prochaines étapes possibles (bullet list courte)

### « Règles et cadre » (section interne)
- Décision: cette section peut être **interne** (non livrée au client) si tu préfères.
- But interne: standardiser le diagnostic, éviter les promesses, documenter les hypothèses.

---

## 5) Système de scoring (Google Sheets)
### Valeurs de scoring
- Plusieurs colonnes passent en **Oui / Non / Incomplet**.
- Conversion vers score numérique: **Oui = 3**, **Incomplet = 1**, **Non = 0**.

### Colonnes visibles vs scores
- Option acceptée: garder la colonne “statut” visible (Oui/Non/Incomplet) et **cacher** la colonne “Score …”.

---

## 6) Onglet `Liste` (référentiel)
Nom d’onglet: **Liste** (important).

Colonnes (A à E):
- A: Secteurs d’activités
- B: Secteurs d’activités RBQ
- C: Secteurs urgents
- D: Régions
- E: Analyste

---

## 7) Liste des colonnes (Diagnostics complets) — ordre confirmé
59 colonnes en ordre:
1. Entreprise
2. Secteur
3. Région
4. Date diagnostic
5. Analyste
6. RBQ visible
7. RBQ requis ?
8. Score RBQ
9. Site accessible
10. Mobile utilisable
11. Vitesse perçue
12. Message clair en 5 sec
13. Services + région clairs
14. Page contact claire
15. CTA visible
16. Téléphone cliquable
17. Score téléphone clicable
18. Courriel cliquable
19. Score courriel cliquable
20. Formulaire présent
21. Score formulaire présent
22. Formulaire fonctionnel
23. Confirmation après envoi
24. Fiche Google existe ?
25. Score fiche google existe
26. Fiche revendiquée
27. Catégorie correcte
28. Infos cohérentes (NAP)
29. Lien fiche → site
30. Score lien fiche
31. HTTPS valide
32. Score HTTPS
33. Pages légales
34. Score page légales
35. Avis clients
36. Score avis clients
37. Photos réelles
38. Cohérence globale
39. Score Site
40. Score Conversion
41. Score Local
42. Score Fondations
43. Score total
44. Classe
45. Décision suggérée
46. Problème #1
47. Problème #2
48. Problème #3
49. Notes internes
50. Bloquants (nb)
51. Bloquants (détails)
52. Opportunité
53. Décision suggérée v2
54. Type d’offre recommandée
55. Angle de vente
56. Actions rapides (liste)
57. Secteur urgent (auto)
58. Angle de vente final
59. Problèmes (liste)

Notes:
- Les scores agrégés utilisés: Conversion = **AL**, Local = **AM**, Fondations = **AN** (référence interne de l’utilisateur).
- Score HTTPS = **AC** et Score lien fiche = **AB** (confirmé).

---

## 8) NAP (définition courte)
- NAP = **Name, Address, Phone**.
- « Infos cohérentes (NAP) » signifie: nom/adresse/téléphone cohérents entre:
  - site web,
  - fiche Google,
  - autres annuaires majeurs.

---

## 9) Secteurs: ciblage et exceptions
### “Fournisseur d’équipement de chauffage”
- Par défaut: **mauvais fit** (vendeur/distributeur).
- Fit conditionnel si **installation/entretien/service terrain** clairement offert.

---

## 10) RBQ: logique (requis vs non requis)
### Liste “RBQ requis” (référentiel)
Une liste RBQ a été constituée (à maintenir dans `Liste` colonne B). Version courte validée:
- Asphaltage
- Balcons / terrasses
- Béton
- Carrelage
- Charpente
- Climatisation
- Clôtures
- Clôtures et portails
- Construction générale
- CVAC / Chauffage
- Démolition
- Ébénisterie
- Électricité
- Électricité industrielle
- Excavation
- Ferronnerie
- Fondations
- Gaz naturel
- Gicleurs / incendie
- Gypse / tirage de joints
- Isolation
- Maçonnerie
- Menuiserie
- Pavage
- Peinture
- Piscines
- Planchers
- Plomberie
- Portes et fenêtres
- Réfrigération commerciale
- Rénovation commerciale
- Rénovation résidentielle
- Revêtement extérieur
- Soudure
- Spas
- Toiture
- Ventilation

### Colonnes RBQ
- Ajout décidé: colonne **RBQ requis ?** (G) + colonne **Score RBQ** (H).
- Comportement souhaité:
  - Si RBQ non requis: score par défaut = 3.
  - Si RBQ requis: attendre l’input “RBQ visible” et scorer selon Oui/Non/Incomplet.

---

## 11) Génération des “Problèmes” (liste + top 3)
### Objectif
- Générer une liste de problèmes textuels lisibles, puis extraire les 3 premiers en colonnes.

### Formule BG (liste)
- `BG` = `TEXTJOIN` avec séparateur **" ||| "**.
- Exemple (structure):
  - Bloquants généraux (site down, aucun contact, formulaire non fonctionnel, fiche Google absente, HTTPS invalide, RBQ non visible si requis)
  - Puis problèmes contextuels selon l’angle de vente (Conversion/Local)

### Extraction Problème #1/#2/#3
- Problème rencontré: split incohérent (mots isolés) lorsqu’on splittait sur **" ||| "**.
- Correctif retenu: splitter sur **"|||"** (sans dépendre des espaces) + TRIM.

Formules (Google Sheets):
- AT (Problème #1)
  - `=IFERROR(TRIM(INDEX(SPLIT(BG2;"|||");1));"")`
- AU (Problème #2)
  - `=IFERROR(TRIM(INDEX(SPLIT(BG2;"|||");2));"")`
- AV (Problème #3)
  - `=IFERROR(TRIM(INDEX(SPLIT(BG2;"|||");3));"")`

---

## 12) Dashboard (Google Sheets, pas Smartsheet)
### Correction de confusion
- “Smartsheet” a été mentionné par erreur au milieu; la mise en place finale est **Google Sheets uniquement**.

### Problème des “données fantômes”
- Cause: drag-down de lignes vides qui recopiait des formules/valeurs par défaut, faussant KPI et filtres.
- Décision pratique (simple): **supprimer les lignes vides** et **ajouter au fur et à mesure**.
- Important: écrire une nouvelle entreprise sous la dernière ligne recopie automatiquement les formules, sans créer de faux enregistrements.

### Locale de formules
- Dans le fichier de l’utilisateur:
  - noms de fonctions en **anglais** (FILTER, QUERY, COUNTIF, COUNTIFS)
  - séparateur d’arguments = **point-virgule `;`** (pas virgule)

### KPIs (exemples)
Toujours conditionner avec `Entreprise <> ""` si nécessaire.
- Total diagnostics
  - `=COUNTA('Diagnostics complets'!A2:A)`
- À avancer
  - `=COUNTIFS('Diagnostics complets'!BA2:BA;"Avancer";'Diagnostics complets'!A2:A;"<>")`
- Opportunités fortes
  - `=COUNTIFS('Diagnostics complets'!AZ2:AZ;"Forte";'Diagnostics complets'!A2:A;"<>")`
- Offres mensuelles
  - `=COUNTIFS('Diagnostics complets'!BB2:BB;"Mensuel";'Diagnostics complets'!A2:A;"<>")`
- Secteurs urgents
  - `=COUNTIFS('Diagnostics complets'!BE2:BE;"OUI";'Diagnostics complets'!A2:A;"<>")`

### Table "À traiter maintenant" (QUERY)
- Recommandé: tableau filtré dans `Dashboard` via QUERY.
- Ajout clé: filtrer aussi `A is not null` pour éviter les lignes vides.

Exemple:
- `=QUERY('Diagnostics complets'!A1:BF;"select A,B,C,BA,AZ,BF,BB,AX,AT,E where BA='Avancer' and A is not null label A 'Entreprise', B 'Secteur', C 'Région', BA 'Décision', AZ 'Opportunité', BF 'Angle', BB 'Offre', AX 'Bloquants', AT 'Problème #1', E 'Analyste'";1)`

---

## 13) Angle de vente final (aide-mémoire)
Texte à coller en commentaire de cellule (résumé):
- **Fondations**: à choisir si crédibilité/conformité cassée (site inaccessible, HTTPS invalide, RBQ requis non visible, pages légales absentes, incohérences majeures).
- **Conversion**: à choisir si trafic existe mais contacts faibles (CTA/phone/formulaire/message).
- **Local**: à choisir si contact OK mais entreprise peu trouvable (fiche Google, NAP, lien fiche→site, avis).
Règle: Fondations > (Urgent -> Conversion) sinon Local.

---

## 14) État actuel (au moment de couper la conversation)
- Dashboard corrigé: KPIs cohérents sans données fantômes.
- Tableau Dashboard: liste "Avancer" fonctionne, pas de répétitions après correction + suppression lignes vides.

---

## 15) Prochaines étapes (si reprise)
1) Stabiliser définitivement les colonnes "par défaut" (si besoin, ajouter garde-fou `IF($A2="";"";...)` sur quelques colonnes clés).
2) Ajouter 10–20 diagnostics réels pour valider:
   - seuils Avancer/Attendre,
   - opportunité,
   - type d’offre,
   - Actions rapides.
3) Ajouter mise en forme conditionnelle (Dashboard):
   - Avancer = vert
   - Attendre = jaune
   - Ne pas prioriser = gris/rouge.

