import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

const PORTAL_URL =
  process.env.NEXT_PUBLIC_STRIPE_PORTAL_LOGIN_URL ||
  'https://billing.stripe.com/p/login/6oUeVe9WJ6wra7VeYJeEo00'

export default function ComptePage() {
  return (
    <main className="section-container min-h-screen py-20">
      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-semibold text-navy">Votre compte Stripe</h1>
        <p className="text-lg text-concrete-600 leading-relaxed">
          Stripe reste la source de vérité pour vos abonnements, l’historique de factures et vos moyens de paiement.
          Ce portail officiel vous permet d’annuler en autonomie, de mettre à jour votre carte et d’éditer vos informations de facturation.
        </p>
        <div className="flex justify-center">
          <Button asChild size="lg">
            <a href={PORTAL_URL} target="_blank" rel="noreferrer">Gérer mon abonnement</a>
          </Button>
        </div>
        <p className="text-sm text-concrete-500">
          Besoin d’aide ? Contactez-nous à <a className="text-safety hover:underline" href="mailto:support@bureauweb.ca">support@bureauweb.ca</a>.
        </p>
      </div>
    </main>
  )
}
