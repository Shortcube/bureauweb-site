import { XCircle, Megaphone, Palette, Clock, Edit3, MessageCircle } from 'lucide-react'

const NotIncluded = () => {
  const exclusions = [
    {
      icon: Megaphone,
      title: 'Pas de gestion publicitaire',
      description: 'Nous ne gérons pas les campagnes Google Ads ou Facebook (disponible à la carte sur demande).',
    },
    {
      icon: Palette,
      title: 'Pas de création de logo',
      description: "Nous intégrons votre identité existante (si vous n'en avez pas, nous pouvons vous référer un designer).",
    },
    {
      icon: Clock,
      title: 'Pas de support 24/7',
      description: 'Nos heures sont Lun-Ven 9h-17h. Urgences (site complètement hors ligne) : réponse sous 4h ouvrables.',
    },
    {
      icon: Edit3,
      title: 'Pas de modifications illimitées',
      description: 'Voir les limites par forfait ci-dessous.',
    },
  ]

  return (
    <section id="non-inclus" className="py-20 md:py-28 bg-concrete-50 scroll-mt-header">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-concrete-200 text-concrete-700 px-4 py-2 rounded-full mb-6">
              <XCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Gestion des attentes</span>
            </div>
            <h2 className="text-navy mb-6">
              Ce qui n'est PAS inclus dans nos forfaits
            </h2>
          </div>

          {/* Exclusions - Clean paragraphs with icons */}
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

          {/* CTA Message */}
          <div className="bg-navy rounded-xl p-6 md:p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-safety" />
              </div>
            </div>
            <p className="text-white text-lg md:text-xl font-medium mb-2">
              Besoin d'un de ces services?
            </p>
            <p className="text-concrete-300">
              Parlons-en — plusieurs sont disponibles comme services additionnels.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotIncluded
