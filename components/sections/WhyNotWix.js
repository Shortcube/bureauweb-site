'use client'

import { Check, X, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WhyNotWix = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const wixLimits = [
    'Vous êtes responsable de tout (mises à jour, sécurité, optimisation)',
    'Support en anglais via chatbot',
    'Vous devez comprendre SEO, Google Business Profile, tracking',
    'Si ça brise ou si Google change quelque chose, vous êtes seul',
  ]

  const bureauwebBenefits = [
    'On opère tout, vous n\'avez rien à gérer',
    'Support en français, humain, réponse rapide',
    'On s\'occupe du SEO local et de la fiche Google',
    'Si ça brise, on règle ça',
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-navy/5 text-navy px-4 py-2 rounded-full mb-6">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-medium">La question légitime</span>
            </div>
            <h2 className="text-navy mb-6">
              Wix, Squarespace, GoDaddy : pourquoi payer plus ?
            </h2>
            <p className="text-xl text-concrete-600 leading-relaxed">
              C'est une bonne question. Wix, c'est 20$/mois. BureauWeb, c'est 199$/mois. 
              Voici la différence concrète :
            </p>
          </div>

          {/* Comparaison */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Wix */}
            <div className="bg-concrete-50 rounded-xl p-6 border border-concrete-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-concrete-200 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🏗️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Wix / Squarespace</h3>
                  <p className="text-sm text-concrete-500">~20$/mois</p>
                </div>
              </div>
              <ul className="space-y-3">
                {wixLimits.map((limit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-concrete-700 text-sm">{limit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BureauWeb */}
            <div className="bg-safety/5 rounded-xl p-6 border-2 border-safety">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-safety/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">BureauWeb</h3>
                  <p className="text-sm text-safety-700">À partir de 199$/mois</p>
                </div>
              </div>
              <ul className="space-y-3">
                {bureauwebBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-concrete-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-navy/5 rounded-xl p-6 text-center">
            <p className="text-concrete-700 leading-relaxed mb-6">
              <strong>En résumé :</strong> Wix si vous aimez bricoler et avez du temps. 
              BureauWeb si vous voulez vous concentrer sur vos chantiers et avoir quelqu'un qui s'occupe de votre présence en ligne de A à Z.
            </p>
            <Button className="btn-cta" onClick={scrollToContact}>
              Recevoir mon diagnostic gratuit
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyNotWix
