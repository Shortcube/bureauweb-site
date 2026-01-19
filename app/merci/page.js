import Link from 'next/link'

import { siteConfig } from '@/lib/site-config'

export const runtime = 'edge'

export const metadata = {
  title: 'Paiement confirmé | BureauWeb',
  description: 'Confirmation de paiement et accès au portail client.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MerciPage() {
  return (
    <main className="section-container min-h-screen py-20">
      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-semibold text-navy">Merci, paiement confirmé</h1>
        <p className="text-lg text-concrete-600 leading-relaxed">
          Stripe a traité votre session. Vous recevrez un reçu officiel par courriel et votre abonnement est visible dans le portail client.
        </p>
        <p className="text-base text-concrete-600">
          Besoin de gérer la carte, annuler ou télécharger une facture ? Passez par <Link href="/compte" className="font-semibold text-safety hover:underline">le Portail client</Link>.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/compte"
            className="inline-flex items-center justify-center rounded-xl bg-safety px-5 py-3 text-sm font-semibold text-white hover:bg-safety/90"
          >
            Gérer mon abonnement
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-safety px-5 py-3 text-sm font-semibold text-safety hover:bg-safety/10"
          >
            Retour à l'accueil
          </Link>
        </div>
        <p className="text-sm text-concrete-500">
          Si vous avez des questions, répondez au diagnostic ou écrivez-nous à <a className="text-safety hover:underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>
    </main>
  )
}
