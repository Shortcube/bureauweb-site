'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Error() {
  const router = useRouter()

  return (
    <main className="section-container py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-concrete-500">Erreur</p>
        <h1 className="text-3xl font-semibold text-navy">Une erreur est survenue</h1>
        <p className="text-concrete-600">
          Un problème est arrivé pendant l’affichage de cette page. Vous pouvez revenir en arrière ou retourner à l’accueil.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex w-full items-center justify-center rounded-lg border border-concrete-200 bg-white px-5 py-2 text-sm font-semibold text-navy hover:bg-concrete-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safety focus-visible:ring-offset-2 sm:w-auto"
          >
            Retour
          </button>
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-lg bg-navy px-5 py-2 text-sm font-semibold text-white hover:bg-navy/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-safety focus-visible:ring-offset-2 sm:w-auto"
          >
            Accueil
          </Link>
        </div>
      </div>
    </main>
  )
}
