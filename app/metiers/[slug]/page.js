import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TRADE_PAGES } from '@/lib/content'

export function generateMetadata({ params }) {
  const trade = TRADE_PAGES.find((t) => t.slug === params.slug)
  if (!trade) return { title: 'Corps de métier | BureauWeb' }
  return {
    title: `${trade.title} | BureauWeb`,
    description: trade.hero,
  }
}

export default function MetierSlugPage({ params }) {
  const trade = TRADE_PAGES.find((t) => t.slug === params.slug)
  if (!trade) return notFound()

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12">
      <nav className="text-sm text-concrete-600">
        <Link href="/metiers" className="text-safety hover:underline">Corps de métier</Link>
        <span className="mx-2">/</span>
        <span className="text-navy">{trade.slug}</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-navy">{trade.title}</h1>
        <p className="mt-4 text-lg text-concrete-600">{trade.hero}</p>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-navy">Ce qu’on met en place (exemples)</h2>
        <ul className="mt-4 space-y-2 text-concrete-600">
          {trade.bullets.map((b, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-concrete-400">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-xl border border-concrete-200 bg-concrete-50 p-6">
        <h2 className="text-xl font-semibold text-navy">À personnaliser</h2>
        <p className="mt-2 text-concrete-600">
          Ajouter vos vrais services, vos zones, vos FAQ, vos photos, et vos preuves (avis, réalisations). Si on n’a pas la donnée, on n’invente rien.
        </p>
      </section>

      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link href="/#contact" className="btn-cta inline-flex items-center justify-center px-6 py-3 rounded-md text-white">Recevoir mon plan gratuit 24 h</Link>
        <Link href="/#forfaits" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-concrete-200 text-navy hover:bg-concrete-50">Voir les forfaits</Link>
      </div>
    </main>
  )
}
