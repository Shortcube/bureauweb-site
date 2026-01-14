import { CheckCircle2, BarChart3, Shield, RefreshCw, FileText } from 'lucide-react'

const Solution = () => {
  const benefits = [
    {
      icon: Shield,
      text: 'Hébergement sécurisé et mises à jour automatiques',
    },
    {
      icon: BarChart3,
      text: 'Optimisation Google Business Profile',
    },
    {
      icon: RefreshCw,
      text: 'Maintenance continue sans tracas',
    },
    {
      icon: FileText,
      text: 'Rapport mensuel simple : visiteurs, soumissions, avis',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-6">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-medium">La solution</span>
              </div>
              <h2 className="text-navy mb-6">
                Votre département web externe
              </h2>
              <p className="text-xl text-concrete-600 leading-relaxed">
                BureauWeb est un partenaire technique à long terme. Nous gérons 
                l'hébergement, la sécurité, les mises à jour et l'optimisation Google.
              </p>
            </div>

            {/* Benefits List */}
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

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main visual - Dashboard mockup */}
              <div className="absolute inset-0 bg-navy rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-white font-semibold">Tableau de bord</span>
                      <span className="text-xs bg-white/10 text-concrete-200 px-2 py-1 rounded-full">Exemple</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-concrete-300 text-xs mb-1">Visiteurs ce mois</p>
                      <p className="text-white text-2xl font-bold">—</p>
                      <p className="text-concrete-300 text-xs">Aperçu sur demande</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-concrete-300 text-xs mb-1">Demandes de soumission</p>
                      <p className="text-white text-2xl font-bold">—</p>
                      <p className="text-concrete-300 text-xs">Selon ton secteur</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-concrete-300 text-xs mb-1">Nouveaux avis Google</p>
                      <p className="text-white text-2xl font-bold">—</p>
                      <p className="text-concrete-300 text-xs">On met le système en place</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-concrete-300 text-xs mb-1">Temps de chargement</p>
                      <p className="text-white text-2xl font-bold">&lt; 2s</p>
                      <p className="text-concrete-300 text-xs">Objectif de performance</p>
                    </div>
                  </div>
                  
                  {/* Chart placeholder */}
                  <div className="flex-1 bg-white/5 rounded-lg p-4">
                    <p className="text-concrete-300 text-xs mb-3">Visiteurs (30 derniers jours)</p>
                    <div className="flex items-end justify-between h-20 space-x-1">
                      {[40, 55, 45, 60, 75, 65, 80, 70, 85, 90, 78, 95].map((height, i) => (
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
              
              {/* Decorative elements */}
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
