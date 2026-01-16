import { Phone, FileCheck, Rocket, Ship, AlertTriangle, Clock, CheckCircle2 } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      number: '01',
      icon: Phone,
      title: 'On jase ensemble',
      duration: '15 min environ (téléphone ou vidéo)',
      color: 'bg-blue-500',
      content: [
        {
          type: 'text',
          value: 'On vérifie si votre métier et votre coin correspondent à ce qu\'on fait. Pas de perte de temps des deux côtés.',
        },
        {
          type: 'highlight',
          value: 'Vous recevez une liste claire de ce qu\'on a besoin : photos, textes, accès à votre fiche Google.',
        },
      ],
    },
    {
      number: '02',
      icon: FileCheck,
      title: 'Vous envoyez, on construit',
      duration: 'Cible : 21 jours ouvrables',
      color: 'bg-safety',
      content: [
        {
          type: 'split',
          vous: 'Vous nous envoyez vos documents dans les 7 jours suivant la signature.',
          nous: 'On audite votre présence Google, on configure l\'hébergement, on construit le site.',
        },
        {
          type: 'note',
          value: 'Si vous demandez des changements majeurs après qu\'on a validé le design ensemble, ça peut prendre plus de temps.',
        },
        {
          type: 'warning',
          value: 'Si on n\'a pas vos documents après 14 jours, le projet est mis sur pause jusqu\'à réception.',
        },
      ],
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Lancement et formation',
      duration: '1 h environ (vidéo)',
      color: 'bg-green-500',
      content: [
        {
          type: 'text',
          value: 'On vous montre comment fonctionne le système pour demander des avis à vos clients.',
        },
        {
          type: 'text',
          value: 'Vous recevez vos accès (en lecture) et on s\'occupe de toute la technique.',
        },
      ],
    },
    {
      number: '04',
      icon: Ship,
      title: 'On roule',
      duration: 'Service continu',
      color: 'bg-navy',
      content: [
        {
          type: 'split',
          vous: 'Vous nous signalez les changements à faire (nouveaux services, photos de chantiers récents).',
          nous: 'On gère les sauvegardes, la sécurité, les mises à jour techniques.',
        },
        {
          type: 'highlight',
          value: 'Chaque mois, vous recevez un rapport simple par courriel : visiteurs, demandes reçues, nouveaux avis.',
        },
      ],
    },
  ]

  return (
    <section id="processus" className="py-20 md:py-28 bg-white scroll-mt-header">
      <div className="section-container">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-safety/10 text-safety-700 px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Processus clair</span>
          </div>
          <h2 className="text-navy mb-6">
            Comment ça se passe
          </h2>
          <p className="text-xl text-concrete-600 max-w-2xl mx-auto">
            Un processus simple avec des délais réalistes. Pas de promesses en l'air.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Ligne verticale pour desktop */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-concrete-200" />
            
            {/* Étapes */}
            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Carte de l'étape */}
                  <div className="md:ml-20 bg-white rounded-xl border border-concrete-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 border-b border-concrete-100">
                      {/* Badge numéro - Mobile */}
                      <div className="md:hidden flex items-center gap-4">
                        <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-concrete-400">ÉTAPE {step.number}</span>
                          <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                        </div>
                      </div>
                      
                      {/* Titre desktop */}
                      <div className="hidden md:block flex-1">
                        <span className="text-xs font-bold text-concrete-400">ÉTAPE {step.number}</span>
                        <h3 className="text-xl font-semibold text-navy">{step.title}</h3>
                      </div>
                      
                      {/* Badge durée */}
                      <div className="bg-concrete-100 text-concrete-700 px-4 py-2 rounded-lg text-sm font-medium">
                        {step.duration}
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="p-6 space-y-4">
                      {step.content.map((item, itemIndex) => {
                        if (item.type === 'text') {
                          return (
                            <p key={itemIndex} className="text-concrete-600 leading-relaxed">
                              {item.value}
                            </p>
                          )
                        }
                        
                        if (item.type === 'highlight') {
                          return (
                            <div key={itemIndex} className="flex items-start gap-3 bg-safety/5 border border-safety/20 rounded-lg p-4">
                              <CheckCircle2 className="w-5 h-5 text-safety flex-shrink-0 mt-0.5" />
                              <p className="text-concrete-700">{item.value}</p>
                            </div>
                          )
                        }
                        
                        if (item.type === 'split') {
                          return (
                            <div key={itemIndex} className="grid md:grid-cols-2 gap-4">
                              <div className="bg-concrete-50 rounded-lg p-4">
                                <span className="text-xs font-bold text-safety uppercase tracking-wide">Vous</span>
                                <p className="text-concrete-600 mt-2">{item.vous}</p>
                              </div>
                              <div className="bg-navy/5 rounded-lg p-4">
                                <span className="text-xs font-bold text-navy uppercase tracking-wide">Nous</span>
                                <p className="text-concrete-600 mt-2">{item.nous}</p>
                              </div>
                            </div>
                          )
                        }
                        
                        if (item.type === 'note') {
                          return (
                            <div key={itemIndex} className="flex items-start gap-3 text-sm text-concrete-500 italic">
                              <span className="text-concrete-400">Note :</span>
                              <p>{item.value}</p>
                            </div>
                          )
                        }
                        
                        if (item.type === 'warning') {
                          return (
                            <div key={itemIndex} className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4">
                              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                              <p className="text-amber-800 text-sm">{item.value}</p>
                            </div>
                          )
                        }
                        
                        return null
                      })}
                    </div>
                  </div>
                  
                  {/* Point timeline - Desktop */}
                  <div className="hidden md:flex absolute left-0 top-6 items-center justify-center">
                    <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
