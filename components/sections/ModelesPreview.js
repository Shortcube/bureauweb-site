import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MODELES } from '@/lib/modeles.data'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ModelesPreview = () => {
  const previewModeles = []
  const seenSlugs = new Set()
  for (const modele of MODELES) {
    if (seenSlugs.has(modele.slug)) continue
    previewModeles.push(modele)
    seenSlugs.add(modele.slug)
    if (previewModeles.length >= 3) break
  }

  return (
    <section id="modeles" className="py-12 md:py-16 bg-white scroll-mt-header">
      <div className="section-container space-y-6">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 bg-navy/10 text-navy px-3 py-1.5 rounded-full">
            <span className="text-sm font-medium">Modèles</span>
          </div>
          <h2 className="text-navy text-3xl md:text-[2.5rem]">Aperçu des modèles par métier</h2>
          <p className="text-concrete-600 max-w-2xl mx-auto">
            Exemples de sites vitrines par métier pour illustrer la structure, les sections et les CTA.
            Contenus fictifs, à confirmer.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {previewModeles.map((modele) => (
            <Card key={modele.slug} className="border-concrete-200 shadow-sm">
              <CardHeader className="p-5 space-y-2">
                <CardTitle className="text-lg text-navy">{modele.metierLabel}</CardTitle>
                <p className="text-xs text-concrete-500">{modele.regionLabel} (exemple)</p>
              </CardHeader>
              <CardContent className="p-5 pt-0 space-y-3">
                <p className="text-sm text-concrete-600">{modele.heroSubtitle}</p>
                <Link
                  href={`/modeles/${modele.slug}`}
                  className="text-sm font-semibold text-safety hover:underline"
                >
                  Voir le modèle
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild className="btn-cta px-6 py-3 h-auto text-base">
            <Link href="/modeles">
              Voir tous les modèles
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ModelesPreview
