import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'

export default function PaiementAnnulePage() {
  return (
    <main className="section-container min-h-screen py-20">
      <div className="max-w-3xl mx-auto space-y-8 text-center">
        <h1 className="text-4xl font-semibold text-navy">Paiement annulé</h1>
        <p className="text-lg text-concrete-600 leading-relaxed">
          Il semble que vous n’ayez pas finalisé la transaction Stripe. Aucun changement n’a été apporté à votre abonnement.
        </p>
        <p className="text-base text-concrete-600">
          Réessayez avec le lien reçu après le diagnostic ou contactez-nous, on vérifie que le lien Stripe est toujours valide.
        </p>
        <div className="flex flex-col items-center gap-2">
          <Button asChild variant="default" size="lg">
            <Link href="/payer">Retour au diagnostic / lien de paiement</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="/compte">Voir mon compte Stripe</Link>
          </Button>
        </div>
        <p className="text-sm text-concrete-500">
          Vous préférez qu’on vous renvoie un lien ? Écrivez-nous à <a className="text-safety hover:underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>
    </main>
  )
}
