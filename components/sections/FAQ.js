'use client'

import { HelpCircle } from 'lucide-react'

const FAQ = () => {
  const items = [
    {
      question: 'Êtes-vous une agence ?',
      answer:
        'Non. BureauWeb est un partenaire d’infrastructure web. On met en place un système stable (site, fiche Google, parcours de contact) et on l’opère dans le temps.',
    },
    {
      question: 'Pourquoi ne pas rester sur Wix ou Squarespace ?',
      answer:
        'Si votre site actuel fait le travail, on ne force pas un changement. Le diagnostic sert à vérifier ce qui bloque la visibilité locale ou la conversion, puis à décider si une refonte est utile.',
    },
    {
      question: 'Qu’est-ce qui est inclus chaque mois ?',
      answer:
        'Une micro-amélioration par mois, une vérification QA mensuelle et un rapport simple. Le détail est décrit dans les limites mensuelles.',
    },
    {
      question: 'Que se passe-t-il après le diagnostic ?',
      answer:
        'On envoie une décision GO/NO-GO et, si on avance, un lien de paiement Stripe. Vous choisissez ensuite si vous démarrez la production.',
    },
    {
      question: 'Est-ce qu’il y a des engagements ou des délais garantis ?',
      answer:
        'Non. Aucun engagement de durée, et aucun délai garanti. Le diagnostic précise ensuite le périmètre et le calendrier réaliste.',
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-28 bg-white scroll-mt-header">
      <div className="section-container">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-safety/10 text-safety-700 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            <span className="text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-navy mb-4">Questions fréquentes</h2>
          <p className="text-xl text-concrete-600 max-w-2xl mx-auto">
            Des réponses simples, sans promesses non vérifiables.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item) => (
            <div
              key={item.question}
              className="rounded-xl border border-concrete-200 bg-concrete-50 p-6"
            >
              <h3 className="text-lg font-semibold text-navy">{item.question}</h3>
              <p className="mt-2 text-concrete-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
