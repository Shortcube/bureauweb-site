import { redirect } from 'next/navigation'

import PageNavBack from '@/components/layout/PageNavBack'
import { normalizePlan } from '@/lib/stripe-edge'

export const runtime = 'edge'

export default function PayerPage({ searchParams }) {
  const planParam = String(searchParams?.plan || '')
  let plan = null
  try {
    plan = normalizePlan(planParam)
  } catch (error) {
    plan = null
  }

  if (plan) {
    redirect(`/api/stripe/checkout?plan=${plan}`)
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-16">
      <PageNavBack className="mb-6" />
      <h1 className="text-3xl font-semibold text-navy">Redirection vers Stripe</h1>
      <p className="mt-4 text-concrete-600">
        Ce point d’entrée redirige immédiatement vers Stripe.
      </p>
      <p className="mt-2 text-sm text-concrete-500">
        Si rien ne se passe, le lien de paiement est incomplet.
      </p>
    </main>
  )
}
