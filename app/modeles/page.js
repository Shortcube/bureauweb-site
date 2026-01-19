import Link from 'next/link'
import PageNavBack from '@/components/layout/PageNavBack'
import { MODELES } from '@/lib/modeles.data'
import { SECTOR_PAGES } from '@/lib/sectors'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: 'Modèles de démonstration | BureauWeb',
  description: 'Bibliothèque de modèles de démonstration pour sites vitrines par métier.',
}

function ModeleCard({ modele }) {
  return (
    <Card className="border-concrete-200 shadow-sm">
      <CardHeader className="p-4">
        <CardTitle className="text-base text-navy">{modele.metierLabel}</CardTitle>
        <p className="text-xs text-concrete-500">{modele.regionLabel} (exemple)</p>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-3">
        <p className="text-sm text-concrete-700">{modele.heroSubtitle}</p>
        <Link
          href={`/modeles/${modele.slug}`}
          className="text-sm font-semibold text-safety hover:underline"
        >
          Voir le modèle
        </Link>
      </CardContent>
    </Card>
  )
}

export default function ModelesPage() {
  const modeleMap = new Map(MODELES.map((modele) => [modele.slug, modele]))
  const usedSlugs = new Set()

  const groupedSectors = SECTOR_PAGES.map((sector) => {
    const modelsForSector = sector.relatedTrades
      .map((slug) => modeleMap.get(slug))
      .filter(Boolean)

    modelsForSector.forEach((modele) => usedSlugs.add(modele.slug))

    return {
      slug: sector.slug,
      title: sector.title,
      intro: sector.tradesIntro,
      models: modelsForSector,
    }
  }).filter((sector) => sector.models.length > 0)

  const remainingModels = MODELES.filter((modele) => !usedSlugs.has(modele.slug))

  return (
    <main className="section-container py-12 md:py-16 space-y-10">
      <PageNavBack className="mb-4" />
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-concrete-500">Modèles</p>
        <h1 className="text-3xl font-semibold tracking-tight text-navy">Modèles de démonstration</h1>
        <p className="text-concrete-600 max-w-3xl">
          Ces modèles montrent la structure d’un site vitrine type par métier. Contenu fictif et
          information à confirmer, sans promesses ni résultats inventés.
        </p>
      </header>

      {groupedSectors.map((sector) => (
        <section key={sector.slug} className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-navy">{sector.title}</h2>
            <p className="text-sm text-concrete-600">{sector.intro}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sector.models.map((modele) => (
              <ModeleCard key={modele.slug} modele={modele} />
            ))}
          </div>
        </section>
      ))}

      {remainingModels.length > 0 ? (
        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-navy">Autres modèles</h2>
            <p className="text-sm text-concrete-600">
              Liste complémentaire lorsque le métier n’est pas rattaché à un secteur.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {remainingModels.map((modele) => (
              <ModeleCard key={modele.slug} modele={modele} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  )
}
