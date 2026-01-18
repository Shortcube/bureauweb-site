import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl space-y-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-4 text-center">
          <p className="text-xs font-medium tracking-wide text-slate-500">BureauWeb.ca</p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">404. Route barrée.</h1>
          <p className="text-slate-600">
            Cette page n&apos;existe pas ou elle est partie sur un chantier sans laisser d&apos;adresse. On vous propose
            deux sorties claires, puis quelques raccourcis utiles.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/#diagnostic"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Diagnostic gratuit
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
          <h2 className="text-sm font-semibold text-slate-900">Raccourcis utiles</h2>
          <p className="mt-2 text-sm text-slate-600">
            Si vous cherchiez une info précise, essayez un de ces liens.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link className="text-slate-900 underline underline-offset-4 hover:text-slate-700" href="/">
              Accueil
            </Link>
            <Link className="text-slate-900 underline underline-offset-4 hover:text-slate-700" href="/#comment-ca-fonctionne">
              Comment ça fonctionne
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
      </div>
    </main>
  )
}
