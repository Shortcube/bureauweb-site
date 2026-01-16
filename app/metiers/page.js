import Link from 'next/link'
import { TRADE_PAGES } from '@/lib/content'

export const metadata = {
  title: 'Corps de métier | BureauWeb',
  description: 'Pages de base par corps de métier pour expliquer l’approche BureauWeb.',
}

export default function MetiersPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-navy">Corps de métier</h1>
        <p className="mt-3 text-concrete-600">
          Squelettes SEO de base. Objectif: clarifier l’offre par métier, sans inventer de résultats.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-4">
        {TRADE_PAGES.map((t) => (
          <Link
            key={t.slug}
            href={`/metiers/${t.slug}`}
            className="rounded-xl border border-concrete-200 bg-white p-6 hover:border-concrete-300 hover:shadow-sm transition"
          >
            <p className="text-xl font-semibold text-navy">{t.title}</p>
            <p className="mt-2 text-concrete-600">{t.hero}</p>
            <p className="mt-4 text-safety font-medium">Voir la page</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-concrete-200 bg-concrete-50 p-6">
        <p className="text-navy font-semibold">Note</p>
        <p className="mt-2 text-concrete-600">
          Ces pages sont un point de départ. Une version finale devrait intégrer vos vrais services, vos zones, et vos preuves (photos, FAQ, politique, etc.).
        </p>
      </div>
    </main>
  )
}
