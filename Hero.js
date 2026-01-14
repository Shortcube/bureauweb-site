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
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-safety/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-navy leading-tight">
                L'infrastructure web complète pour entrepreneurs québécois.
              </h1>
              <p className="text-xl md:text-2xl text-concrete-600 leading-relaxed max-w-xl">
                Site performant + Optimisation Google + Système d'avis. 
                Un forfait mensuel fixe, sans surprises.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="btn-cta text-lg px-8 py-6 h-auto"
                onClick={scrollToContact}
                aria-label="Démarrer votre projet avec BureauWeb"
              >
                Démarrer mon projet
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Button>
              <button 
                className="text-link text-lg py-3"
                onClick={scrollToForfaits}
                aria-label="Voir nos forfaits et tarifs"
              >
                Voir les forfaits
              </button>
            </div>
            
            {/* Social proof hint */}
            <div className="pt-6 border-t border-concrete-200">
              <p className="text-concrete-500 text-sm">
                Partenaire technique de confiance pour les entrepreneurs de la Rive-Sud et Montréal
              </p>
            </div>
          </div>

          {/* Visual - Hero Image OPTIMISÉE */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              {/* 
                📌 TODO: Télécharger l'image localement
                1. Télécharger depuis: https://images.unsplash.com/photo-1503387762-592deb58ef4e
                2. Placer dans: /public/images/hero-construction-workspace.jpg
                3. Remplacer src par: "/images/hero-construction-workspace.jpg"
                
                AVANTAGES:
                - Pas de dépendance externe
                - Meilleure performance
                - Contrôle total sur la disponibilité
              */}
              <Image 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Bureau de travail d'entrepreneur québécois en construction - Plans de chantier, outils professionnels et tablette avec site web BureauWeb"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                quality={85}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
            </div>
            
            {/* Floating card - Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 border border-concrete-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-safety/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-safety" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy font-bold text-lg">21 jours</p>
                  <p className="text-concrete-500 text-sm">Délai de livraison</p>
                </div>
              </div>
            </div>
            
            {/* Floating card - Service */}
            <div className="absolute -top-4 -right-4 md:right-8 bg-navy text-white rounded-lg shadow-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-safety" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Tout inclus</p>
                  <p className="text-concrete-300 text-xs">Hébergement + Sécurité</p>
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
