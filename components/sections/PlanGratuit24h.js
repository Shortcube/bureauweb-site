'use client'

import { FileText, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PlanGratuit24h = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="plan24h" className="py-20 md:py-28 bg-white scroll-mt-header">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-navy/5 text-navy px-4 py-2 rounded-full mb-6">
              <FileText className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium whitespace-nowrap">Plan gratuit 24 h</span>
            </div>
            <h2 className="text-navy mb-4">Un diagnostic écrit, 1 page max</h2>
            <p className="text-xl text-concrete-600">
              Objectif: montrer exactement quoi faire et comment, sans rien inventer, pour décider rationnellement si on travaille ensemble.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-concrete-50 rounded-xl p-6 border border-concrete-200">
              <p className="text-navy font-semibold mb-2">Basé sur du vérifiable</p>
              <p className="text-concrete-600">Site web, mobile, fiche Google, et infos que vous fournissez.</p>
            </div>
            <div className="bg-concrete-50 rounded-xl p-6 border border-concrete-200">
              <p className="text-navy font-semibold mb-2">Pas une soumission</p>
              <p className="text-concrete-600">Pas de maquette, pas d’audit SEO complet, pas de promesse de résultats.</p>
            </div>
            <div className="bg-concrete-50 rounded-xl p-6 border border-concrete-200">
              <p className="text-navy font-semibold mb-2">Même structure, toujours</p>
              <p className="text-concrete-600">Rapide à lire. Comparables d’un client à l’autre.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-concrete-200 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-navy mb-6">Structure du plan</h3>

            <ol className="space-y-5">
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-safety/10 text-safety flex items-center justify-center font-bold">1</div>
                <div>
                  <p className="font-semibold text-navy">Résumé (30 sec)</p>
                  <p className="text-concrete-600">Score BureauWeb, classe, opportunité principale, recommandation: avancer, attendre, ou pas un fit.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-safety/10 text-safety flex items-center justify-center font-bold">2</div>
                <div>
                  <p className="font-semibold text-navy">Problèmes observables (max 3)</p>
                  <p className="text-concrete-600">Description courte, preuve (site, mobile, fiche Google), lien ou référence. Pas de suppositions.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-safety/10 text-safety flex items-center justify-center font-bold">3</div>
                <div>
                  <p className="font-semibold text-navy">Quick wins (2 à 3)</p>
                  <p className="text-concrete-600">Actions concrètes qu’on ferait en premier, avec impact logique (non spéculatif).</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-safety/10 text-safety flex items-center justify-center font-bold">4</div>
                <div>
                  <p className="font-semibold text-navy">Plan 21 jours (vue d’ensemble)</p>
                  <p className="text-concrete-600">Semaine 1: fondations. Semaine 2: conversion + SEO local. Semaine 3: QA + lancement.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-safety/10 text-safety flex items-center justify-center font-bold">5</div>
                <div>
                  <p className="font-semibold text-navy">Ce qui serait inclus si on avance</p>
                  <p className="text-concrete-600">Site DFY + maintenance, fiche Google, avis (selon forfait), support.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-safety/10 text-safety flex items-center justify-center font-bold">6</div>
                <div>
                  <p className="font-semibold text-navy">Prochaines étapes</p>
                  <p className="text-concrete-600">Paiement activation + abonnement, signature entente, onboarding, production, lancement.</p>
                </div>
              </li>
            </ol>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 bg-concrete-50 rounded-xl p-4 border border-concrete-200">
                <ShieldCheck className="w-5 h-5 text-safety mt-0.5" aria-hidden="true" />
                <p className="text-sm text-concrete-700">
                  Règles strictes: si une info n’est pas vérifiable, on l’écrit comme unknown ou null. Aucun chiffre, badge, avis, délai ou claim inventé.
                </p>
              </div>
              <div className="flex gap-3 bg-concrete-50 rounded-xl p-4 border border-concrete-200">
                <CheckCircle2 className="w-5 h-5 text-safety mt-0.5" aria-hidden="true" />
                <p className="text-sm text-concrete-700">
                  Temps cible: 20 à 30 minutes. Même template à chaque fois. Ton neutre, clair, professionnel.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="btn-cta px-8 py-6 h-auto text-lg" onClick={scrollToContact}>
                Recevoir mon plan gratuit 24 h
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
