import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'
import { normalizePlan } from '@/lib/stripe-edge'

export const metadata = {
  title: 'Paiement annulé | BureauWeb',
  description: 'Le paiement a été annulé. Vous pouvez réessayer ou revenir à l’accueil.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PaiementAnnulePage({ searchParams }) {
  const planParam = String(searchParams?.plan || '')
  let plan
  try {
    plan = normalizePlan(planParam)
  } catch (error) {
    plan = null
  }

  const retryHref = plan ? `/payer?plan=${plan}` : '/#tarifs'

  return (
    <main className="section-container min-h-screen py-20">
      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-semibold text-navy">Paiement annulé</h1>
        <p className="text-lg text-concrete-600 leading-relaxed">
          Le tunnel Stripe a été quitté prématurément. Aucun changement n’a été appliqué à votre abonnement.
        </p>
        <p className="text-base text-concrete-600">
          {plan
            ? `On peut réessayer le plan "${plan}" en cliquant sur le bouton ci-dessous.`
            : "Choisissez d'abord un forfait valide pour relancer une session Stripe."}
        </p>
        <div className="flex flex-col items-center gap-3">
          <Button asChild variant="default" size="lg">
            <Link href={retryHref}>Réessayer</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="/">Retour à l'accueil</Link>
          </Button>
        </div>
        <p className="text-sm text-concrete-500">
          Besoin d'aide ? Écrivez-nous à <a className="text-safety hover:underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>
    </main>
  )
}
