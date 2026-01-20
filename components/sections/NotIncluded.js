import Link from 'next/link'
import { XCircle, Megaphone, Palette, Clock, Edit3 } from 'lucide-react'

const NotIncluded = () => {
  const exclusions = [
    {
      icon: Megaphone,
      title: 'Pas de publicité payante',
      description:
        'On ne gère pas Google Ads/Meta. Si vous en faites déjà, on s’assure seulement que le site et le suivi sont propres.',
    },
    {
      icon: Palette,
      title: 'Pas de création de logo',
      description:
        'On utilise votre identité existante. Si vous n’en avez pas, on peut recommander un fournisseur externe.',
    },
    {
      icon: Clock,
      title: 'Pas de disponibilité 24/7',
      description: 'Support en français, humain, principalement par écrit (courriel ou texto). Téléphone au besoin (selon le forfait).',
    },
    {
      icon: Edit3,
      title: 'Pas de modifications illimitées',
      description:
        'Les limites mensuelles sont publiques. Si ça dépasse, on confirme le périmètre et le coût avant d’agir.',
    },
  ]

  return (
    <section id="limites-mensuelles" className="py-12 md:py-16 bg-concrete-50 scroll-mt-header">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-1.5 bg-concrete-200 text-concrete-700 px-3 py-1.5 rounded-full mb-4">
              <XCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Pour être clair</span>
            </div>
            <h2 className="text-navy mb-6">
              Ce qui n'est pas inclus
            </h2>
          </div>

          {/* Liste des exclusions */}
          <div className="space-y-4 mb-10">
            {exclusions.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 md:p-5 border border-concrete-200 flex flex-col md:flex-row md:items-start gap-4"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-concrete-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-concrete-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-navy mb-1">
                    {item.title}
                  </h3>
                  <p className="text-concrete-600 text-sm leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message CTA */}
          <div className="bg-navy rounded-xl p-5 md:p-6 text-center space-y-2">
            <p className="text-white text-lg font-semibold">Prêt à avancer ?</p>
            <p className="text-concrete-300 text-sm leading-snug">
              Demandez votre diagnostic gratuit ou consultez les limites mensuelles.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-1">
              <Link
                href="/#diagnostic"
                className="inline-flex items-center justify-center bg-safety text-white rounded-full px-5 py-2 text-sm font-semibold shadow"
              >
                Diagnostic gratuit
              </Link>
              <Link
                href="/limites?from=limites-mensuelles"
                className="inline-flex items-center justify-center text-concrete-300 hover:text-white text-sm font-semibold"
              >
                Voir les limites mensuelles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotIncluded
