import Link from 'next/link'
import { REGION_PAGES } from '@/lib/content'

export const metadata = {
  title: 'Régions | BureauWeb',
  description: 'Squelettes de pages par région (SEO local) pour BureauWeb.',
}

export default function RegionsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-navy">Régions</h1>
        <p className="mt-3 text-concrete-600">
          Squelettes SEO local. On adapte selon vos zones réelles et vos services.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-4">
        {REGION_PAGES.map((r) => (
          <Link
            key={r.slug}
            href={`/regions/${r.slug}`}
            className="rounded-xl border border-concrete-200 bg-white p-6 hover:border-concrete-300 hover:shadow-sm transition"
          >
            <p className="text-xl font-semibold text-navy">{r.title}</p>
            <p className="mt-2 text-concrete-600">{r.hero}</p>
            <p className="mt-4 text-safety font-medium">Voir la page</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
