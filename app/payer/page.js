import { redirect } from 'next/navigation'
import { siteConfig } from '@/lib/site-config'

export const runtime = 'edge'

const getPaymentLink = (plan, activation) => {
  const { payments } = siteConfig
  if (!payments) return ''

  if (plan === 'depart') return payments.depart
  if (plan === 'pro') return activation ? payments.activationPro : payments.pro
  if (plan === 'croissance') return activation ? payments.activationCroissance : payments.croissance
  return ''
}

export default function PayerPage({ searchParams }) {
  const plan = String(searchParams?.plan || '').toLowerCase()
  const activation = ['1', 'true', 'oui'].includes(String(searchParams?.activation || '').toLowerCase())
  const paymentLink = getPaymentLink(plan, activation)

  if (paymentLink) {
    redirect(paymentLink)
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-navy">Paiement</h1>
      <p className="mt-4 text-concrete-600">
        Lien de paiement: <strong>envoyé par courriel après le diagnostic (Stripe)</strong>.
      </p>
      <p className="mt-4 text-concrete-600">
        Si vous avez reçu ce lien par courriel, contactez-nous pour obtenir le bon lien Stripe.
      </p>
      <div className="mt-6 rounded-lg border border-concrete-200 bg-concrete-50 p-4 text-sm text-concrete-600">
        <p className="font-semibold text-navy mb-2">Paramètres attendus</p>
        <ul className="space-y-1">
          <li>• <code>?plan=depart</code></li>
          <li>• <code>?plan=pro</code> (optionnel: <code>&amp;activation=true</code>)</li>
          <li>• <code>?plan=croissance</code> (optionnel: <code>&amp;activation=true</code>)</li>
        </ul>
      </div>
    </main>
  )
}
