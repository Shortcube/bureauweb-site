import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-start justify-between gap-6">
          <div className="min-w-0">
            <p className="text-xs font-medium tracking-wide text-slate-500">
              BureauWeb.ca
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              404. Route barree.
            </h1>

            <p className="mt-3 text-slate-600">
              Cette page n&apos;existe pas, ou elle est partie sur un chantier sans laisser d&apos;adresse.
              On garde votre navigation simple: deux sorties claires, puis quelques raccourcis utiles.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                Retour a l&apos;accueil
              </Link>

              <Link
                href="/#diagnostic"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                Recevoir mon diagnostic gratuit
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold text-slate-700">Panneau de chantier</p>
              <p className="mt-2 text-sm text-slate-600">
                Objectif: remettre le visiteur sur une trajectoire utile, sans friction.
              </p>
              <div className="mt-4 h-1 w-full rounded bg-slate-900" />
              <p className="mt-3 text-xs text-slate-500">
                Infrastructure web. Pas de detours inutiles.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-slate-900">
              Raccourcis utiles
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Si vous cherchiez une info precise, essayez un de ces liens.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link className="text-slate-900 underline underline-offset-4 hover:text-slate-700" href="/">
                Accueil
              </Link>
              <Link className="text-slate-900 underline underline-offset-4 hover:text-slate-700" href="/#comment-ca-fonctionne">
                Comment ca fonctionne
              </Link>
              <Link className="text-slate-900 underline underline-offset-4 hover:text-slate-700" href="/#forfaits">
                Forfaits
              </Link>
              <Link className="text-slate-900 underline underline-offset-4 hover:text-slate-700" href="/limites">
                Limites du service
              </Link>
              <Link className="text-slate-900 underline underline-offset-4 hover:text-slate-700" href="/payer">
                Paiement
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-sm font-semibold text-slate-900">
              Mini diagnostic, version 10 secondes
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Si vous etes une entreprise de services terrain, le plus rapide est de demander un diagnostic gratuit.
              Une page, des constats observables, des actions prioritaires.
            </p>
            <div className="mt-4">
              <Link
                href="/#diagnostic"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              >
                Demarrer le diagnostic
              </Link>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Aucun resultat garanti, uniquement des constats et un plan realiste.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm text-slate-600">
            Phrase cle: <span className="font-medium text-slate-900">on gere votre web pendant que vous gerez vos chantiers.</span>
            <span className="text-slate-500"> Si vous etes perdu, l&apos;accueil est la meilleure rampe de retour.</span>
          </p>
        </div>
      </div>
    </main>
  )
}
