import { XCircle, Megaphone, Palette, Clock, Edit3, MessageCircle } from 'lucide-react'

const NotIncluded = () => {
  const exclusions = [
    {
      icon: Megaphone,
      title: 'Pas de publicité payante',
      description: 'On ne gère pas vos campagnes Google Ads ou Facebook. Si ça vous intéresse, on peut en discuter à part.',
    },
    {
      icon: Palette,
      title: 'Pas de création de logo',
      description: 'On intègre votre identité visuelle existante. Si vous n\'en avez pas, on peut vous référer quelqu\'un de bon.',
    },
    {
      icon: Clock,
      title: 'Pas de support 24/7',
      description: 'Support par courriel pendant les heures ouvrables (lun-ven, 9 h à 17 h, heure de l’Est).',
    },
    {
      icon: Edit3,
      title: 'Pas de modifications illimitées',
      description: 'Les limites mensuelles sont définies publiquement. Au-delà, on clarifie le périmètre avant d’agir.',
    },
  ]

  return (
    <section id="non-inclus" className="py-20 md:py-28 bg-concrete-50 scroll-mt-header">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-concrete-200 text-concrete-700 px-4 py-2 rounded-full mb-6">
              <XCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Pour être clair</span>
            </div>
            <h2 className="text-navy mb-6">
              Ce qui n'est pas inclus
            </h2>
          </div>

          {/* Liste des exclusions */}
          <div className="space-y-6 mb-12">
            {exclusions.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 border border-concrete-200 flex flex-col md:flex-row md:items-start gap-5"
              >
                <div className="w-14 h-14 bg-concrete-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-concrete-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-concrete-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message CTA */}
          <div className="bg-navy rounded-xl p-6 md:p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-safety" />
              </div>
            </div>
            <p className="text-white text-lg md:text-xl font-medium mb-2">
              Besoin d'un de ces services ?
            </p>
            <p className="text-concrete-300">
              On peut en discuter. Certains sont disponibles en extra selon vos besoins (sur devis).
            </p>
            <p className="mt-3 text-concrete-300 text-sm">
              <a href="/limites" className="text-safety hover:underline">Voir les limites mensuelles</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotIncluded
