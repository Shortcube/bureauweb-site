'use client'

import { FileText, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PlanGratuit24h = () => {
  const scrollToContact = () => {
    document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="diagnostic-info" className="py-16 md:py-20 bg-white scroll-mt-header">
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-navy/5 text-navy px-4 py-2 rounded-full mb-6">
              <FileText className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium break-words">Diagnostic gratuit</span>
            </div>
            <h2 className="text-navy mb-4">Un diagnostic écrit, 1 page max</h2>
            <p className="text-xl text-concrete-600 break-words">
              Objectif: montrer quoi faire, sans rien inventer, pour décider si on avance ensemble.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-concrete-50 rounded-xl p-5 border border-concrete-200">
              <p className="text-navy font-semibold mb-1">Basé sur du vérifiable</p>
              <p className="text-concrete-600 break-words">Site web, mobile, fiche Google, et infos que vous fournissez.</p>
            </div>
            <div className="bg-concrete-50 rounded-xl p-5 border border-concrete-200">
              <p className="text-navy font-semibold mb-1">Pas une soumission</p>
              <p className="text-concrete-600 break-words">Pas de maquette, pas d’audit SEO complet, pas de promesse de résultats.</p>
            </div>
            <div className="bg-concrete-50 rounded-xl p-5 border border-concrete-200">
              <p className="text-navy font-semibold mb-1">Décision claire</p>
              <p className="text-concrete-600 break-words">Un constat structuré pour comprendre la situation et prendre une décision éclairée.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-concrete-200 shadow-sm p-5 md:p-6">
            <h3 className="text-xl font-semibold text-navy mb-4">Structure du diagnostic</h3>

            <ol className="space-y-4 break-words">
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-safety/10 text-safety flex items-center justify-center font-bold">1</div>
                <div className="space-y-1">
                  <p className="font-semibold text-navy">Résumé</p>
                  <p className="text-concrete-600 break-words mt-1">Score BureauWeb, classe, opportunité principale, recommandation: avancer, attendre, ou pas un bon fit.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-safety/10 text-safety flex items-center justify-center font-bold">2</div>
                <div className="space-y-1">
                  <p className="font-semibold text-navy">Problèmes observables</p>
                  <p className="text-concrete-600 break-words mt-1">Description courte, preuve (site, mobile, fiche Google), lien ou référence.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-safety/10 text-safety flex items-center justify-center font-bold">3</div>
                <div className="space-y-1">
                  <p className="font-semibold text-navy">Actions rapides</p>
                  <p className="text-concrete-600 break-words mt-1">Actions concrètes qu’on ferait en premier, avec impact logique (non spéculatif).</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-safety/10 text-safety flex items-center justify-center font-bold">4</div>
                <div className="space-y-1">
                  <p className="font-semibold text-navy">Plan 21 jours (vue d’ensemble)</p>
                  <p className="text-concrete-600 break-words mt-1">Vue d’ensemble (non détaillée).</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-safety/10 text-safety flex items-center justify-center font-bold">5</div>
                <div className="space-y-1">
                  <p className="font-semibold text-navy">Ce qui serait inclus si on avance</p>
                  <p className="text-concrete-600 break-words mt-1">Infrastructure web, fiche Google, maintenance mensuelle (selon limites).</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-safety/10 text-safety flex items-center justify-center font-bold">6</div>
                <div className="space-y-1">
                  <p className="font-semibold text-navy">Prochaines étapes</p>
                  <p className="text-concrete-600 break-words mt-1">Décision (GO/NO-GO): on avance ou non. Si on avance: lien Stripe, puis production.</p>
                </div>
              </li>
            </ol>

            <p className="mt-6 text-center text-sm text-concrete-500 break-words">
              Retour sous 24–48 h ouvrables. 1 page. Actions prioritaires.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="btn-cta px-8 py-6 h-auto text-lg" onClick={scrollToContact}>
                Recevoir mon diagnostic gratuit
              </Button>
              <Button variant="outline" className="px-8 py-6 h-auto text-lg" onClick={() => document.getElementById('forfaits')?.scrollIntoView({ behavior: 'smooth' })}>
                Voir les forfaits
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlanGratuit24h
