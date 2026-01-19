'use client'

import { Check, Clock, AlertCircle, FileText } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PRICING_PLANS, ENGAGEMENT_INITIAL_MOIS } from '@/lib/content'
import { usePlanIntent } from '@/components/context/plan-intent-context'

const Pricing = () => {
  const { setPlanIntent } = usePlanIntent()
  const scrollToLeadForm = () => {
    const el = document.getElementById('lead-form')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  const handlePlanSelect = (planSlug) => {
    setPlanIntent(planSlug)
    scrollToLeadForm()
  }

  return (
    <section id="tarifs" className="py-12 md:py-16 bg-concrete-50 scroll-mt-header">
      <div className="section-container">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-safety/10 text-safety-700 px-4 py-2 rounded-full mb-6">
            <FileText className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">Tarification simple</span>
          </div>
          <h2 className="text-navy mb-6">Forfaits et prix</h2>
          <p className="text-xl text-concrete-600 max-w-2xl mx-auto">
            Trois options claires. Aucun chiffre inventé, aucune promesse magique. On met en place un système mesurable et on l’opère.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-4">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.slug}
              className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'border-safety shadow-lg scale-[1.01]' : 'border-concrete-200 hover:border-concrete-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-safety text-white px-4 py-1 rounded-full text-sm font-semibold">Recommandé</div>
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-navy mb-3">{plan.name}</h3>
                  <p className="text-concrete-600 mb-5">{plan.description}</p>

                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl md:text-5xl font-bold text-navy">{plan.monthlyPrice}</span>
                    {typeof plan.monthlyPrice === 'number' && (
                      <span className="text-xl text-concrete-500">$/mois</span>
                    )}
                  </div>
                  {plan.activationFee > 0 && (
                    <p className="mt-3 text-xs text-concrete-500">
                      Activation {plan.activationFee}$ (une seule fois, après diagnostic)
                    </p>
                  )}

                </div>

                <div className="space-y-3 mb-6 flex-1">
                  <p className="text-sm font-semibold text-concrete-500 uppercase tracking-wide">Ce qui est inclus</p>
                  {plan.included.map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {/* was: bg-green-100 */}
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-safety/10">
                        {/* was: text-green-600 */}
                        <Check className="w-3 h-3 text-safety" aria-hidden="true" />
                      </div>
                      <span className="text-concrete-600 leading-relaxed">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto space-y-3 text-center">
                  <Button
                    className={`w-full py-6 text-lg font-semibold ${plan.popular ? 'btn-cta' : 'bg-navy hover:bg-navy-800 text-white'}`}
                    onClick={() => handlePlanSelect(plan.slug)}
                  >
                    Recevoir mon diagnostic gratuit
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-concrete-500 text-center">
          Frais d’activation possibles selon le forfait, payables une seule fois après le diagnostic.
        </p>
        <div className="max-w-4xl mx-auto mt-6">
          <div className="bg-white rounded-xl border border-concrete-200 p-6 md:p-8">
            <h4 className="text-xl font-semibold text-navy mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-safety" aria-hidden="true" />
              Comment ça fonctionne
            </h4>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-concrete-50 rounded-lg">
                  <p className="text-2xl font-bold text-navy">{ENGAGEMENT_INITIAL_MOIS}</p>
                  <p className="text-concrete-600 text-sm mt-1">Engagement initial</p>
                  <p className="text-concrete-500 text-xs mt-2">
                    Service mensuel, facturé d’avance. Chaque mois payé déclenche un mois d’opération.
                  </p>
                </div>
                <div className="text-center p-4 bg-concrete-50 rounded-lg">
                  <p className="text-2xl font-bold text-navy">Mensuel</p>
                  <p className="text-concrete-600 text-sm mt-1">Ensuite</p>
                  <p className="text-concrete-500 text-xs mt-2">Modalités: facturé au mois, renouvellement automatique.</p>
              </div>
              <div className="text-center p-4 bg-concrete-50 rounded-lg">
                <p className="text-2xl font-bold text-navy">Préavis</p>
                <p className="text-concrete-600 text-sm mt-1">Condition</p>
                <p className="text-concrete-500 text-xs mt-2">
                  Annulation possible via le Portail client. Elle prend effet à la fin de la période mensuelle déjà payée; aucun remboursement partiel.
                </p>
              </div>
            </div>

            <div className="bg-concrete-50 rounded-lg p-4 text-sm text-concrete-600">
              <p className="font-medium text-navy mb-1">Paiement</p>
              <p>
                Paiement requis pour démarrer toute production. Tant qu’un abonnement actif n’est pas en vigueur, aucun travail n’est effectué.
              </p>
            </div>
            <div className="bg-concrete-50 rounded-lg p-4 text-sm text-concrete-600 mt-4">
              <p className="font-medium text-navy mb-1">Limites mensuelles</p>
              <p>
                <Link href="/limites" className="text-navy underline underline-offset-2 decoration-concrete-300 hover:text-navy/80 hover:decoration-navy/50">
                  Cliquez ici afin de consulter les limites mensuelles pour chaque forfait
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-amber-600" aria-hidden="true" />
              </div>
              <div>
              <h4 className="font-semibold text-amber-800 mb-2">Soyons clairs sur les résultats</h4>
              <p className="text-amber-800 leading-relaxed">
                On installe et on opère l’infrastructure (site, fiche Google, conversion). Le volume de demandes dépend aussi du marché, de la concurrence et de votre capacité à répondre.
              </p>
              <p className="mt-3 text-amber-800 leading-relaxed">
                Le diagnostic gratuit existe justement pour montrer quoi faire, sans rien inventer, avant de s’engager.
                <br />
                BureauWeb fournit des moyens (infrastructure, visibilité, conversion), pas des garanties de volume.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
