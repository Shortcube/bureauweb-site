import { FileCheck, CheckCircle2, CreditCard, Hammer, Rocket, ShieldCheck, Clock } from 'lucide-react'

const Process = () => {
  const compactSteps = new Set(['02', '03', '05', '06'])
  const steps = [
    {
      number: '01',
      icon: FileCheck,
      title: 'Diagnostic',
      color: 'bg-blue-500',
      content: [
        {
          type: 'text',
          value:
            'On observe votre site, votre fiche Google et le parcours de contact que vous avez déjà. Diagnostic écrit basé sur ce qui est visible.',
        },
        {
          type: 'highlight',
          value: 'Retour sous 24–48 h ouvrables. 1 page. Actions prioritaires.',
        },
      ],
    },
    {
      number: '02',
      icon: CheckCircle2,
      title: 'Décision',
      color: 'bg-safety',
      content: [
        {
          type: 'text',
          value: 'GO/NO-GO clair, avec au maximum deux options simples si on avance.',
        },
        {
          type: 'highlight',
          value: 'Si on avance, on précise le périmètre et les limites mensuelles.',
        },
      ],
    },
    {
      number: '03',
      icon: CreditCard,
      title: 'Paiement',
      color: 'bg-green-500',
      content: [
        {
          type: 'text',
          value: 'Paiement envoyé après diagnostic (lien Stripe).',
        },
        {
          type: 'text',
          value: 'Aucun travail ne commence sans un abonnement actif confirmé par Stripe.',
        },
      ],
    },
    {
      number: '04',
      icon: Hammer,
      title: 'Production',
      color: 'bg-navy',
      content: [
        {
          type: 'text',
          value: 'On construit le site à partir du template BureauWeb et des éléments fournis.',
        },
        {
          type: 'highlight',
          value: 'Échanges écrits par défaut. Appel optionnel si utile.',
        },
      ],
    },
    {
      number: '05',
      icon: Rocket,
      title: 'Livraison',
      color: 'bg-slate-700',
      content: [
        {
          type: 'text',
          value: 'Go-live + handoff court (accès, checklist, points d’attention).',
        },
      ],
    },
    {
      number: '06',
      icon: ShieldCheck,
      title: 'Exploitation mensuelle',
      color: 'bg-slate-900',
      content: [
        {
          type: 'text',
          value: 'Rapport mensuel concis (1 page) avec synthèse, 1 micro-amélioration, QA mensuelle.',
        },
      ],
    },
  ]

  return (
    <section id="processus" className="process-section py-10 md:py-12 bg-white scroll-mt-header">
      <div className="section-container">
        {/* En-tête */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center space-x-2 bg-safety/10 text-safety-700 px-4 py-2 rounded-full mb-4">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Processus clair</span>
          </div>
          <h2 className="text-navy mb-4 md:mb-5 leading-tight">Comment ça se passe</h2>
          <p className="text-base md:text-lg text-concrete-600 max-w-2xl mx-auto">
            Un processus clair, sans téléphone obligatoire et sans promesse inventée.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Ligne verticale pour desktop */}
            <div className="hidden md:block absolute left-6 top-2 bottom-0 w-px bg-concrete-200" />

            {/* Étapes */}
            <div className="space-y-4 md:space-y-5">
              {steps.map((step, index) => {
                const isCompact = compactSteps.has(step.number)
                const marginClass = isCompact ? 'md:ml-10' : 'md:ml-12'
                return (
                  <div key={index} className="relative">
                    {/* Carte de l'étape */}
                    <div
                      className={`${marginClass} bg-white rounded-xl border border-concrete-200 overflow-hidden shadow-sm transition-shadow hover:shadow-md`}
                    >
                      {/* Header */}
                      <div
                        className={`flex items-center gap-3 ${isCompact ? 'p-3' : 'p-4'} ${
                          isCompact ? '' : 'border-b border-concrete-100'
                        }`}
                      >
                        <div
                          className={`w-9 h-9 ${step.color} rounded-lg flex items-center justify-center`}
                        >
                          <step.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <span className="text-[0.625rem] uppercase tracking-[0.3em] text-concrete-400">
                            Étape {step.number}
                          </span>
                          <h3 className="text-lg font-semibold text-navy leading-tight">{step.title}</h3>
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className={`px-4 ${isCompact ? 'py-3 space-y-1.5' : 'py-3 space-y-2'}`}>
                        {step.content.map((item, itemIndex) => {
                          if (item.type === 'text') {
                            return (
                              <p
                                key={itemIndex}
                                className={`text-concrete-600 leading-snug ${isCompact ? 'text-sm' : ''}`}
                              >
                                {item.value}
                              </p>
                            )
                          }

                          if (item.type === 'highlight') {
                            return (
                              <p
                                key={itemIndex}
                                className="flex items-center gap-2 text-xs text-concrete-500"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-safety flex-shrink-0" />
                                {item.value}
                              </p>
                            )
                          }

                          if (item.type === 'split') {
                            return (
                              <div key={itemIndex} className="grid md:grid-cols-2 gap-4">
                                <div className="bg-concrete-50 rounded-lg p-3">
                                  <span className="text-xs font-bold text-safety uppercase tracking-wide">Vous</span>
                                  <p className="text-concrete-600 mt-2">{item.vous}</p>
                                </div>
                                <div className="bg-navy/5 rounded-lg p-3">
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

                          return null
                        })}
                      </div>
                    </div>

                    {/* Point timeline - Desktop */}
                    <div className="hidden md:flex absolute left-0 top-3 items-center justify-center">
                      <div className={`w-8 h-8 ${step.color} rounded-lg flex items-center justify-center shadow-sm`}>
                        <step.icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
