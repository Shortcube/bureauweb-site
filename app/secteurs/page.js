import Link from 'next/link'
import { SECTOR_PAGES } from '@/lib/sectors'

export const metadata = {
  title: 'Secteurs d’activité | BureauWeb',
  description: 'Pages par secteur d’activité pour orienter les services BureauWeb sans casser les pages métiers existantes.',
}

export default function SecteursPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-navy">Secteurs d’activité</h1>
        <p className="mt-3 text-concrete-600">
          Un point d’entrée par secteur pour clarifier l’infrastructure web proposée, sans promesse chiffrée.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-4">
        {SECTOR_PAGES.map((sector) => (
          <Link
            key={sector.slug}
            href={`/secteurs/${sector.slug}`}
            className="rounded-xl border border-concrete-200 bg-white p-6 hover:border-concrete-300 hover:shadow-sm transition"
          >
            <p className="text-xl font-semibold text-navy">{sector.title}</p>
            <p className="mt-2 text-concrete-600">{sector.intro}</p>
            <p className="mt-4 text-safety font-medium">Voir le secteur</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
