# SOP_ONBOARDING - BureauWeb (v1.0)
Derniere mise a jour: 2026-01-19

## Preconditions
- Statut client = Paye (abonnement actif + facture paid).
- Dossier onboarding ouvert.
- Unknown accepte mais trace (liste d'unknown).

## Collecte (ordre)
1) NAP
- Nom, adresse, telephone, courriel.
- Heures (ou unknown).

2) Offre
- Services (5 a 12) ou unknown.
- Zones (5 a 25) ou unknown.
- Urgence oui/non (ou unknown).

3) Preuves et conformite
- RBQ si requis: numero exact (ou unknown).
- Assurances/certifs: uniquement si verifiables.

4) Visuels
- 10 photos reelles (sinon placeholders neutres).

5) Acces techniques (si applicable)
- DNS/hebergement (ou contact fournisseur).
- Fiche Google: lien exact + acces (ou unknown).

## Bloquants binaires
- Paye = Non: STOP.
- Aucun canal contact fonctionnel (tel/email/form): STOP.
- RBQ requis et RBQ visible != Oui: STOP (Attendre).
- Fiche Google inexistante: STOP (Attendre) si le pack local est requis.

## Relances
- J+2 ouvrables: items manquants.
- J+5 ouvrables: items manquants.
- J+10 ouvrables: dossier incomplet imminent.

## Dossier incomplet
Apres J+10, si un item bloquant manque:
- statut = dossier incomplet
- production = STOP
- decision: pause ou offboarding (voir RUNBOOK_STRIPE).
