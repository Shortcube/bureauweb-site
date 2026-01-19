import Link from 'next/link'
import { redirect } from 'next/navigation'

import PageNavBack from '@/components/layout/PageNavBack'
import { Button } from '@/components/ui/button'
import { normalizePlan } from '@/lib/stripe-edge'

export const metadata = {
  title: 'Redirection vers Stripe | BureauWeb',
  description: 'Redirection vers Stripe pour finaliser le paiement.',
  robots: {
    index: false,
    follow: false,
  },
}

const getMissingStripeConfig = (plan) => {
  const missing = []
  if (!process.env.STRIPE_SECRET_KEY) {
    missing.push('STRIPE_SECRET_KEY')
  }
  if (plan) {
    const priceKey = `STRIPE_PRICE_ID_${plan.toUpperCase()}`
    if (!process.env[priceKey]) {
      missing.push(priceKey)
    }
    if (plan === 'pro' || plan === 'croissance') {
      const activationKey = `STRIPE_PRICE_ID_ACTIVATION_${plan.toUpperCase()}`
      if (!process.env[activationKey]) {
        missing.push(activationKey)
      }
    }
  }
  return missing
}

export default function PayerPage({ searchParams }) {
  const planParam = String(searchParams?.plan || '')
  const pricingHref = '/#tarifs'
  let plan = null
  let planError = ''
  try {
    plan = normalizePlan(planParam)
  } catch (error) {
    planError = 'Le lien de paiement est incomplet ou invalide.'
  }

  const missingConfig = plan ? getMissingStripeConfig(plan) : []
  const isConfigReady = Boolean(plan) && missingConfig.length === 0

  if (isConfigReady) {
    redirect(`/api/stripe/checkout?plan=${plan}`)
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-16">
      <PageNavBack className="mb-6" />
      <h1 className="text-3xl font-semibold text-navy">Redirection vers Stripe</h1>
      <p className="mt-4 text-concrete-600">
        Ce point d’entrée redirige vers Stripe lorsque la configuration est prête.
      </p>
      {planError && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900">
          <p className="font-semibold">Lien incomplet</p>
          <p className="text-sm text-amber-900/90">
            {planError} Sélectionnez un forfait pour poursuivre.
          </p>
        </div>
      )}
      {!planError && missingConfig.length > 0 && (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900">
          <p className="font-semibold">Configuration Stripe incomplète sur cet environnement</p>
          <p className="text-sm text-amber-900/90">
            Les variables suivantes doivent être renseignées pour activer la redirection.
          </p>
          <ul className="mt-2 list-disc pl-5 text-sm text-amber-900/90">
            {missingConfig.map((key) => (
              <li key={key}>{key}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-6">
        <Button asChild className="btn-cta">
          <Link href={pricingHref}>Retour aux forfaits</Link>
        </Button>
      </div>
    </main>
  )
}
