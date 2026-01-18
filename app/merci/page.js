import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

export default function MerciPage() {
  return (
    <main className="section-container min-h-screen py-20">
      <div className="max-w-3xl mx-auto space-y-8 text-center">
        <h1 className="text-4xl font-semibold text-navy">Merci, votre paiement est enregistré</h1>
        <p className="text-lg text-concrete-600 leading-relaxed">
          On confirme la réception dans les minutes qui suivent via <span className="font-semibold text-navy">{siteConfig.email}</span>.
          Pendant ce temps, votre abonnement est visible et géré directement depuis Stripe.
        </p>
        <p className="text-base text-concrete-600">
          Besoin de vérifier le prochain micro-livrable, la facturation ou la carte utilisée ? Rendez-vous sur <Link className="font-semibold text-safety hover:underline" href="/compte">votre compte Stripe</Link> en quelques clics.
        </p>
        <div className="flex justify-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/compte">Accéder au portail client</Link>
          </Button>
        </div>
        <p className="text-sm text-concrete-500">
          Si vous avez des questions urgentes, écrivez-nous à <a className="text-safety hover:underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> ou répondez directement au diagnostic reçu.
        </p>
      </div>
    </main>
  )
}
