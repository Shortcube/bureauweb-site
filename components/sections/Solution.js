import { CheckCircle2, BarChart3, Shield, RefreshCw, FileText } from 'lucide-react'

const Solution = () => {
  const benefits = [
    {
      icon: Shield,
      text: 'Hébergement sécurisé et mises à jour faites pour vous',
    },
    {
      icon: BarChart3,
      text: 'Votre fiche Google structurée pour le local (infos, catégories, CTA)',
    },
    {
      icon: RefreshCw,
      text: 'Maintenance continue sans que vous ayez à y penser',
    },
    {
      icon: FileText,
      text: 'Rapport mensuel simple : visiteurs, demandes, avis',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Contenu */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-6">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-medium">La solution</span>
              </div>
              <h2 className="text-navy mb-6">
                Votre département web, sans les frais d'un employé
              </h2>
              <p className="text-xl text-concrete-600 leading-relaxed">
                BureauWeb, c'est comme avoir un gars de web dans votre équipe. 
                On gère l'hébergement, la sécurité, les mises à jour et l'optimisation Google. 
                Vous, vous faites votre métier.
              </p>
            </div>

            {/* Liste des avantages */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-concrete-50 rounded-lg"
                >
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-concrete-700 font-medium pt-2">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visuel - Tableau de bord */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Mockup du dashboard */}
              <div className="absolute inset-0 bg-navy rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-white font-semibold">Votre tableau de bord</span>
                      <span className="text-xs bg-white/10 text-concrete-200 px-2 py-1 rounded-full">Exemple</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Stats (exemple, sans chiffres réels) */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-concrete-300 text-xs mb-1">Visiteurs ce mois</p>
                      <p className="text-white text-2xl font-bold">—</p>
                      <p className="text-concrete-300 text-xs">À configurer</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-concrete-300 text-xs mb-1">Demandes reçues</p>
                      <p className="text-white text-2xl font-bold">—</p>
                      <p className="text-concrete-300 text-xs">Formulaire + appels</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-concrete-300 text-xs mb-1">Nouveaux avis</p>
                      <p className="text-white text-2xl font-bold">—</p>
                      <p className="text-concrete-300 text-xs">Suivi mensuel</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-concrete-300 text-xs mb-1">Temps de chargement</p>
                      <p className="text-white text-2xl font-bold">—</p>
                      <p className="text-concrete-300 text-xs">Mesure après mise en ligne</p>
                    </div>
                  </div>
                  
                  {/* Graphique */}
                  <div className="flex-1 bg-white/5 rounded-lg p-4">
                    <p className="text-concrete-300 text-xs mb-3">Visiteurs (30 derniers jours)</p>
                    <div className="flex items-end justify-between h-20 space-x-1">
                      {[30, 45, 35, 50, 55, 45, 60, 50, 65, 70, 55, 75].map((height, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-safety/60 rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-safety/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy/30 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
