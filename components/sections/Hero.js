'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToForfaits = () => {
    document.getElementById('forfaits')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-concrete-50 to-white">
      <div className="section-container py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-navy">
              L'infrastructure web complète pour entrepreneurs québécois.
            </h1>
            <p className="text-xl text-concrete-600 leading-relaxed max-w-xl">
              Site performant + Optimisation Google + Système d'avis. Un forfait mensuel fixe, sans surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-cta text-lg px-8 py-4"
                onClick={scrollToContact}
              >
                Démarrer mon projet
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <button 
                className="text-link text-lg"
                onClick={scrollToForfaits}
              >
                Voir les forfaits
              </button>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-concrete-100 rounded-xl border border-concrete-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-navy/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-concrete-500 text-sm">
                  Image: Plans de construction + ordinateur avec site web professionnel
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-safety/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-navy/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
