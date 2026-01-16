import { AlertCircle, MapPin, Smartphone, Star, Clock } from 'lucide-react'

const Problem = () => {
  const problems = [
    {
      icon: MapPin,
      title: 'Invisible sur Google Maps',
      description: 'Vos concurrents apparaissent en premier quand quelqu\'un cherche votre service dans votre coin. Vous, vous êtes en bas de page ou carrément absent.',
    },
    {
      icon: Smartphone,
      title: 'Clients perdus sur mobile',
      description: 'Plus de 70% des gens visitent sur leur téléphone. Si votre numéro n\'est pas cliquable ou que le site charge lentement, ils appellent votre concurrent.',
    },
    {
      icon: Star,
      title: 'Pas assez d\'avis',
      description: 'Vous avez 3 avis Google, votre concurrent en a 47. Devinez qui va être appelé en premier, même si vous faites du meilleur travail.',
    },
    {
      icon: Clock,
      title: 'Site qui vieillit mal',
      description: 'Votre site a 3 ans, il manque des infos, des photos sont floues, les formulaires marchent plus. Personne pour s\'en occuper.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-concrete-50">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full mb-6">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Le problème</span>
            </div>
            <h2 className="text-navy mb-6">
              Ces problèmes vous coûtent des clients chaque semaine
            </h2>
            <p className="text-xl text-concrete-600 leading-relaxed max-w-2xl mx-auto">
              C'est pas de votre faute. Vous êtes occupé à faire votre métier. Mais pendant ce temps, des clients potentiels vous cherchent et ne vous trouvent pas.
            </p>
          </div>

          {/* Cartes des problèmes */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 border border-concrete-200 hover:border-concrete-300 transition-colors"
              >
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-5">
                  <problem.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">
                  {problem.title}
                </h3>
                <p className="text-concrete-600 leading-relaxed">
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
