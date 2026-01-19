'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { SECTOR_PAGES } from '@/lib/sectors'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('diagnostic')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToForfaits = () => {
    document.getElementById('tarifs')?.scrollIntoView({ behavior: 'smooth' })
  }

  const router = useRouter()
  const handleSectorChange = (event) => {
    const slug = event.currentTarget.value
    if (slug) {
      router.push(`/secteurs/${slug}`)
    }
  }

  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-b from-white via-concrete-50/80 to-concrete-50 pt-4 md:pt-6 mt-6 pb-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-safety/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container py-4 md:py-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-navy leading-tight text-3xl md:text-4xl font-semibold max-w-3xl">
                Site rapide, fiche Google solide, demandes de soumission qui entrent.
              </h1>
              <p className="text-xl md:text-2xl text-concrete-600 leading-relaxed max-w-xl">
                Site web, fiche Google, formulaires, suivi...<br />
                Un système simple qui rend votre entreprise plus trouvable et plus facile à contacter.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <Button
                className="btn-cta text-lg px-7 py-4 h-auto w-full"
                onClick={scrollToContact}
                aria-label="Recevoir mon diagnostic gratuit"
              >
                Recevoir mon diagnostic gratuit
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Button>
              <p className="text-concrete-500 text-xs md:text-sm leading-tight">
                Retour sous 24–48 h ouvrables. 1 page. Actions prioritaires.
              </p>
              <Button
                variant="outline"
                className="w-full h-auto border-concrete-200 text-navy text-base md:text-lg font-semibold py-3 hover:bg-concrete-50"
                onClick={scrollToForfaits}
                aria-label="Voir les forfaits et les prix"
              >
                Voir les forfaits
              </Button>
            </div>

            <div className="mt-3 md:mt-4 w-full">
              <label htmlFor="hero-sector" className="text-sm font-semibold text-navy uppercase tracking-wide">
                Votre secteur
              </label>
              <p className="text-concrete-500 text-xs mt-1">
                Un exemple concret de structure (pages, fiche Google, contact) est affiché selon le métier.
              </p>
              <select
                id="hero-sector"
                name="hero-sector"
                defaultValue=""
                onChange={handleSectorChange}
                className="mt-2 block w-full h-9 rounded-full border border-concrete-200 bg-white px-3 text-xs text-navy focus:border-safety focus:outline-none focus:ring-0 transition"
              >
                <option value="" disabled>
                  Choisissez votre secteur
                </option>
                {SECTOR_PAGES.map((sector) => (
                  <option key={sector.slug} value={sector.slug}>
                    {sector.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-white">
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

            <div className="absolute bottom-3 left-3 sm:-bottom-6 sm:-left-6 bg-white rounded-lg shadow-lg p-3 border border-concrete-100">
              <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-safety/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-safety" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-navy font-bold text-lg">Diagnostic gratuit</p>
                <p className="text-concrete-500 text-sm">1 page, zéro engagement</p>
              </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 md:-top-4 md:right-8 bg-navy text-white rounded-lg shadow-lg p-3 z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-safety" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Support en français, humain, principalement par écrit (courriel ou texto). Téléphone au besoin (selon le forfait).</p>
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
