export const metadata = {
  title: 'Limites mensuelles | BureauWeb',
  description: 'Cadre public des limites mensuelles BureauWeb.',
}

export default function LimitesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-navy">Limites mensuelles</h1>
        <p className="mt-4 text-concrete-600">
          Cette page décrit le cadre public pour éviter le scope creep. Tout besoin hors cadre est traité sur devis.
        </p>
      </header>

      <section className="mb-10 rounded-xl border border-concrete-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-navy">Inclus chaque mois</h2>
        <ul className="mt-4 space-y-2 text-concrete-600">
          <li className="flex gap-2"><span className="text-concrete-400">•</span><span>1 micro-amélioration par mois</span></li>
          <li className="flex gap-2"><span className="text-concrete-400">•</span><span>QA mensuelle (vérifications techniques)</span></li>
          <li className="flex gap-2"><span className="text-concrete-400">•</span><span>Rapport 1 page (faits et points d’attention)</span></li>
        </ul>
      </section>

      <section className="mb-10 rounded-xl border border-concrete-200 bg-concrete-50 p-6">
        <h2 className="text-xl font-semibold text-navy">Non inclus</h2>
        <ul className="mt-4 space-y-2 text-concrete-600">
          <li className="flex gap-2"><span className="text-concrete-400">•</span><span>Refonte complète ou changement de template sans cadrage préalable</span></li>
          <li className="flex gap-2"><span className="text-concrete-400">•</span><span>Campagnes publicitaires payantes (Google Ads, Meta Ads)</span></li>
          <li className="flex gap-2"><span className="text-concrete-400">•</span><span>Création de marque ou de logo</span></li>
          <li className="flex gap-2"><span className="text-concrete-400">•</span><span>Contenus ou pages en volume non cadré (sur devis)</span></li>
        </ul>
      </section>

      <section className="rounded-xl border border-concrete-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-navy">Comment on traite un besoin hors cadre</h2>
        <p className="mt-4 text-concrete-600">
          On clarifie le périmètre, les délais et le coût avant d’agir. Tout besoin hors cadre est traité sur devis.
        </p>
      </section>
    </main>
  )
}
