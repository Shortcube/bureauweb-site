import { AlertCircle, MapPin, Smartphone, Star, Clock } from 'lucide-react'

const Problem = () => {
  const problems = [
    {
      icon: MapPin,
      title: 'Invisible sur Google Maps',
      description: 'Vos concurrents occupent les résultats locaux et votre fiche est reléguée en bas de page ou absente.',
    },
    {
      icon: Smartphone,
      title: 'Clients perdus sur mobile',
      description: 'Plus de 70% visitent via mobile, et un site lent ou sans numéro cliquable les pousse vers un concurrent.',
    },
    {
      icon: Star,
      title: 'Pas assez d\'avis',
      description: 'Une poignée d’avis contre plusieurs dizaines chez vos compétiteurs augmente le risque d’être ignoré.',
    },
    {
      icon: Clock,
      title: 'Site qui vieillit mal',
      description: 'Un site de 3 ans sans infos à jour, photos nettes ou formulaires fonctionnels ne convertit plus.',
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-concrete-50">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-6 md:mb-10">
            {/* was: bg-red-50 text-red-700 */}
            <div className="inline-flex items-center space-x-2 bg-concrete-200 text-navy px-4 py-2 rounded-full mb-4">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Le problème</span>
            </div>
            <h2 className="text-navy text-3xl md:text-[2.6rem] mb-4">
              Ces problèmes vous coûtent des clients chaque semaine
            </h2>
            <p className="text-base md:text-lg text-concrete-600 leading-relaxed max-w-2xl mx-auto">
              Des clients cherchent vos services en ligne et atterrissent sur les profils des concurrents parce que vous êtes difficile à trouver.
            </p>
          </div>

          {/* Cartes des problèmes */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl px-5 py-4 md:px-6 md:py-5 border border-concrete-200 hover:border-concrete-300 transition-colors"
              >
                {/* was: bg-red-50 */}
                <div className="w-12 h-12 bg-concrete-100 rounded-lg flex items-center justify-center mb-5">
                  {/* was: text-red-600 */}
                  <problem.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {problem.title}
                </h3>
                <p className="text-concrete-600 text-sm leading-snug">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
