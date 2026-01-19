import PageNavBack from '@/components/layout/PageNavBack'

export const metadata = {
  title: 'Limites mensuelles | BureauWeb',
  description: 'Cadre public des limites mensuelles BureauWeb.',
}

const bullet = (text) => (
  <li className="flex gap-2">
    <span className="text-concrete-400">•</span>
    <span>{text}</span>
  </li>
)

export default function LimitesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-navy">Limites mensuelles</h1>
        <p className="text-concrete-600">
          Ces limites encadrent ce qui est inclus dans l’abonnement mensuel. Tout besoin hors cadre est confirmé par écrit (périmètre, coût) avant d’agir. Aucun travail n’est fait sans abonnement actif confirmé.
        </p>
        <PageNavBack />
      </header>

      <section className="rounded-xl border border-concrete-200 bg-white p-6 space-y-4">
        <h2 className="text-xl font-semibold text-navy">Forfait Départ</h2>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-concrete-500">Inclus chaque mois</h3>
          <ul className="space-y-2 text-concrete-600">
            {bullet('Contrôle qualité mensuel (vérifications de base): site accessible (mobile et desktop), formulaire fonctionnel, liens clés actifs, vérification de base de la fiche Google.')}
            {bullet('Rapport 1 page: faits observables et points d’attention.')}
            {bullet('1 micro-amélioration (selon la définition ci-dessous).')}
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-concrete-500">Définition</h3>
          <p className="text-concrete-600 font-semibold">micro-amélioration</p>
          <p className="text-concrete-600">
            Un seul ajustement simple, à faible risque, sur une page existante. But: corriger une friction évidente ou clarifier un élément, sans ajout de fonctionnalité. Une seule itération de correction. Si ça exige plusieurs allers-retours ou du cadrage, c’est hors cadre.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-concrete-500">Exemples</h3>
          <ul className="space-y-2 text-concrete-600">
            {bullet('Corriger un lien brisé ou un bouton qui ne mène pas au bon endroit.')}
            {bullet('Corriger un problème d’affichage mobile (retours à la ligne, débordement, espacement).')}
            {bullet('Mettre à jour une information simple (téléphone, courriel, heures) à un seul endroit du site.')}
            {bullet('Clarifier un libellé court (ex: un titre, un bouton, une phrase de microcopy) sans réécriture complète.')}
            {bullet('Remplacer une image trop lourde par une version optimisée, sans changer le visuel.')}
            {bullet('Corriger une incohérence évidente (ex: une région mentionnée à un endroit et pas à un autre).')}
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-concrete-500">Limites</h3>
          <ul className="space-y-2 text-concrete-600">
            {bullet('1 demande regroupée par mois (idéalement dans un seul courriel).')}
            {bullet('Pas de nouvelle page.')}
            {bullet('Pas de refonte complète, pas de changement de modèle.')}
            {bullet('Pas d’intégration d’outils tiers (CRM, prise de rendez-vous, chat, automatisations).')}
            {bullet('Pas de production de contenu en volume.')}
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-concrete-200 bg-white p-6 space-y-4">
        <h2 className="text-xl font-semibold text-navy">Forfait Pro</h2>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-concrete-500">Inclus chaque mois</h3>
          <ul className="space-y-2 text-concrete-600">
            {bullet('Contrôle qualité mensuel (vérifications de base): site accessible (mobile et desktop), formulaire fonctionnel, liens clés actifs, vérification de base de la fiche Google.')}
            {bullet('Rapport 1 page: faits observables et points d’attention.')}
            {bullet('Support par courriel (première réponse sous 2 jours ouvrables).')}
            {bullet('1 intervention mineure mensuelle (selon la définition ci-dessous).')}
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-concrete-500">Définition</h3>
          <p className="text-concrete-600 font-semibold">intervention mineure</p>
          <p className="text-concrete-600">
            Action ponctuelle, à faible risque, par exemple: ajustement de contenu existant, correction technique légère, amélioration UX mineure, ajustement SEO local simple. Ce que ce n’est pas: refonte, nouvelle stratégie, tests A/B, développement spécifique. L’intervention vise une seule tâche cadrée. Si le besoin se transforme en chantier, on confirme un devis avant d’aller plus loin.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-concrete-500">Exemples</h3>
          <ul className="space-y-2 text-concrete-600">
            {bullet('Ajuster une page existante (structure légère, titres, ordre des sections, clarté du message) sans réécrire toute la page.')}
            {bullet('Ajouter une section courte sur une page existante (ex: précisions “inclus et non inclus”, “zones desservies”, “processus”), si l’information est fournie et vérifiable.')}
            {bullet('Correction technique légère (ex: un formulaire qui échoue, un message d’erreur, une validation).')}
            {bullet('Ajustement SEO local simple (ex: titres, meta, cohérence de base des informations NAP).')}
            {bullet('Ajustement simple de la fiche Google (ex: corriger une information incohérente, ajuster une catégorie si justifiée), sans promesse de résultats.')}
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-concrete-500">Limites</h3>
          <ul className="space-y-2 text-concrete-600">
            {bullet('2 demandes regroupées par mois (si possible, regroupées dans un seul fil).')}
            {bullet('Pas de nouvelle page complète (hors cadrage initial prévu au diagnostic).')}
            {bullet('Pas de développement spécifique, pas de fonctionnalités sur mesure.')}
            {bullet('Pas de migrations, pas de changements majeurs d’architecture.')}
            {bullet('Pas de publicité payante (Google Ads, Meta Ads).')}
            {bullet('Pas de tests A/B, pas de promesse de performance.')}
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-concrete-200 bg-white p-6 space-y-4">
        <h2 className="text-xl font-semibold text-navy">Forfait Croissance</h2>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-concrete-500">Inclus chaque mois</h3>
          <ul className="space-y-2 text-concrete-600">
            {bullet('Tout le forfait Pro.')}
            {bullet('1 page de contenu courte par mois (si pertinent).')}
            {bullet('Support prioritaire par courriel ou par téléphone (première réponse sous 2 jours ouvrables).')}
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-concrete-500">Définition</h3>
          <p className="text-concrete-600 font-semibold">page de contenu courte</p>
          <p className="text-concrete-600">
            Une page unique, structurée, sur un seul sujet (service ou zone), format “site”, pas un article long. L’information provient de ce que tu fournis ou de ce qui est vérifiable. Si une information manque, on l’indique plutôt que d’inventer. Objectif: clarifier l’offre et couvrir un besoin concret (service, zone, questions fréquentes), sans spéculation.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-concrete-500">Exemples</h3>
          <ul className="space-y-2 text-concrete-600">
            {bullet('Page “Service” (un service précis, une seule page).')}
            {bullet('Page “Zone desservie” (une ville ou une région, une seule page).')}
            {bullet('Page “Processus” (comment ça se passe, si tu peux le décrire factuellement).')}
            {bullet('Page “FAQ” courte (questions fréquentes basées sur tes réponses).')}
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-concrete-500">Limites</h3>
          <ul className="space-y-2 text-concrete-600">
            {bullet('3 demandes regroupées par mois.')}
            {bullet('1 seule page courte par mois.')}
            {bullet('Pas de production en volume, pas de stratégie éditoriale complète.')}
            {bullet('Pas de développement spécifique, pas de fonctionnalités sur mesure.')}
            {bullet('Pas de refonte complète sans cadrage préalable.')}
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-concrete-200 bg-concrete-50 p-6 space-y-4">
        <h2 className="text-xl font-semibold text-navy">Non inclus (tous les forfaits)</h2>
        <ul className="space-y-2 text-concrete-600">
          {bullet('Refonte complète ou changement de modèle sans cadrage préalable.')}
          {bullet('Campagnes publicitaires payantes (Google Ads, Meta Ads).')}
          {bullet('Création de marque ou de logo.')}
          {bullet('Contenus ou pages en volume non cadré (sur devis).')}
          {bullet('Modifications illimitées.')}
          {bullet('Support 24/7.')}
        </ul>
      </section>

      <section className="rounded-xl border border-concrete-200 bg-white p-6 space-y-4">
        <h2 className="text-xl font-semibold text-navy">Comment on traite un besoin hors cadre</h2>
        <p className="text-concrete-600">
          On clarifie le périmètre, les délais et le coût avant d’agir. Tout besoin hors cadre est traité sur devis.
        </p>
      </section>

      <section className="rounded-xl border border-concrete-200 bg-concrete-50 p-6 space-y-4">
        <h2 className="text-xl font-semibold text-navy">Services complémentaires (hors forfait)</h2>
        <p className="text-concrete-600">
          Tarifs indicatifs (avant taxes). Disponibles avec abonnement actif. Confirmés par écrit avant d’agir. Tout service complémentaire est facturé uniquement après acceptation écrite du devis par le client.
        </p>
        <ul className="space-y-2 text-concrete-600">
          {bullet('Bloc d’intervention hors cadre (petites demandes regroupées): à partir de 250 $.')}
          {bullet('Page additionnelle courte (en dehors de ce qui est inclus): à partir de 200 $.')}
          {bullet('Intégration simple d’un outil tiers (ex: prise de rendez-vous, CRM, chat): à partir de 300 $.')}
          {bullet('Récupération ou assainissement d’accès (domaines, DNS, fiche Google, comptes): à partir de 150 $.')}
          {bullet('Traitement prioritaire, quand possible: supplément à partir de 75 $.')}
          {bullet('Besoins techniques plus complexes (migration, refonte, redirections multiples): sur devis.')}
        </ul>
      </section>
    </main>
  )
}
