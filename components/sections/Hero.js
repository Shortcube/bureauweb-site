'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToForfaits = () => {
    document.getElementById('forfaits')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-concrete-50 to-white pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-safety/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-navy leading-tight">
                Vous gérez vos chantiers. Nous, on gère votre présence en ligne : site rapide, fiche Google solide, demandes de soumission qui entrent.
              </h1>
              <p className="text-xl md:text-2xl text-concrete-600 leading-relaxed max-w-xl">
                Site web, fiche Google, formulaires, suivi. Un système simple qui rend votre entreprise plus trouvable et plus facile à contacter.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="btn-cta text-lg px-8 py-6 h-auto"
                onClick={scrollToContact}
                aria-label="Recevoir le plan gratuit 24 h"
              >
                Recevoir mon plan gratuit 24 h
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Button>
              <button
                className="text-link text-lg py-3"
                onClick={scrollToForfaits}
                aria-label="Voir les forfaits et les prix"
              >
                Voir les forfaits
              </button>
            </div>

            <div className="pt-6 border-t border-concrete-200">
              <p className="text-concrete-500 text-sm">
                Basé à Longueuil. Support en français. Cible: site en ligne en 21 jours ouvrables après réception des accès.
              </p>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-white">
              <Image
                src="/images/hero-illustration.svg"
                alt="Illustration de BureauWeb: présence en ligne gérée pendant que vous gérez vos chantiers"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 border border-concrete-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-safety/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-safety" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy font-bold text-lg whitespace-nowrap">Plan gratuit 24 h</p>
                  <p className="text-concrete-500 text-sm">1 page, zéro BS</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 md:right-8 bg-navy text-white rounded-lg shadow-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-safety" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Support humain FR</p>
                  <p className="text-concrete-300 text-xs">Pas de chatbot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
