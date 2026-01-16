import Link from 'next/link'
import { notFound } from 'next/navigation'
import { REGION_PAGES } from '@/lib/content'

// Edge Runtime pour Cloudflare Pages
export const runtime = 'edge'

export function generateMetadata({ params }) {
  const region = REGION_PAGES.find((r) => r.slug === params.slug)
  if (!region) return { title: 'Régions | BureauWeb' }
  return {
    title: `${region.title} | BureauWeb`,
    description: region.hero,
  }
}

export default function RegionSlugPage({ params }) {
  const region = REGION_PAGES.find((r) => r.slug === params.slug)
  if (!region) return notFound()

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12">
      <nav className="text-sm text-concrete-600">
        <Link href="/regions" className="text-safety hover:underline">Régions</Link>
        <span className="mx-2">/</span>
        <span className="text-navy">{region.slug}</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-navy">{region.title}</h1>
        <p className="mt-4 text-lg text-concrete-600">{region.hero}</p>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-navy">Structure recommandée</h2>
        <ul className="mt-4 space-y-2 text-concrete-600">
          <li className="flex gap-2"><span className="text-concrete-400">•</span><span>Services (pages dédiées) et zones desservies (pages dédiées)</span></li>
          <li className="flex gap-2"><span className="text-concrete-400">•</span><span>CTA unique (appel ou soumission) et formulaire court</span></li>
          <li className="flex gap-2"><span className="text-concrete-400">•</span><span>NAP cohérent (nom, adresse, téléphone) et lien vers la fiche Google</span></li>
        </ul>
      </section>

      <section className="mt-10 rounded-xl border border-concrete-200 bg-concrete-50 p-6">
        <h2 className="text-xl font-semibold text-navy">À personnaliser</h2>
        <p className="mt-2 text-concrete-600">
          Ajouter vos vraies zones, vos contraintes de déplacement, vos horaires, et vos preuves. Si une info n’est pas confirmée, on la marque unknown.
        </p>
      </section>

      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link href="/#contact" className="btn-cta inline-flex items-center justify-center px-6 py-3 rounded-md text-white">Recevoir mon plan gratuit 24 h</Link>
        <Link href="/#forfaits" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-concrete-200 text-navy hover:bg-concrete-50">Voir les forfaits</Link>
      </div>
    </main>
  )
}
