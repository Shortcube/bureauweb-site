import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SECTOR_PAGES, TRADE_PAGES } from '@/lib/content'

// Edge Runtime pour Cloudflare Pages
export const runtime = 'edge'

export function generateMetadata({ params }) {
  const sector = SECTOR_PAGES.find((s) => s.slug === params.slug)
  if (!sector) return { title: 'Secteurs d’activité | BureauWeb' }
  return {
    title: `${sector.title} | BureauWeb`,
    description: `Infrastructure web pour entreprises du secteur ${sector.title} avec diagnostic gratuit.`,
  }
}

export default function SecteurSlugPage({ params }) {
  const sector = SECTOR_PAGES.find((s) => s.slug === params.slug)
  if (!sector) return notFound()

  const relatedTrades = (sector.relatedTrades || [])
    .map((slug) => TRADE_PAGES.find((trade) => trade.slug === slug))
    .filter(Boolean)

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12">
      <nav className="text-sm text-concrete-600">
        <Link href="/secteurs" className="text-safety hover:underline">Secteurs</Link>
        <span className="mx-2">/</span>
        <span className="text-navy">{sector.title}</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-navy">{sector.title}</h1>
        <p className="mt-4 text-lg text-concrete-600">{sector.intro}</p>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-navy">Métiers courants dans ce secteur</h2>
        <p className="mt-4 text-concrete-600">{sector.tradesIntro}</p>
        <p className="mt-2 text-concrete-600">{sector.tradesList.join(', ')}.</p>
        {relatedTrades.length > 0 && (
          <div className="mt-4 text-sm text-concrete-600">
            <span className="font-medium text-navy">Pages métiers disponibles :</span>{' '}
            {relatedTrades.map((trade, index) => (
              <span key={trade.slug}>
                <Link href={`/metiers/${trade.slug}`} className="text-safety hover:underline">
                  {trade.title}
                </Link>
                {index < relatedTrades.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </div>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-navy">Ce que nous mettons en place</h2>
        <ul className="mt-4 space-y-2 text-concrete-600">
          {sector.infrastructure.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-concrete-400">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-navy">Diagnostic gratuit</h2>
        <p className="mt-4 text-concrete-600">{sector.diagnostic}</p>
      </section>

      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link href="/#contact" className="btn-cta inline-flex items-center justify-center px-6 py-3 rounded-md text-white">
          Diagnostic gratuit
        </Link>
      </div>
    </main>
  )
}
