// Page principale - Optimisée avec lazy loading
import dynamic from 'next/dynamic'
import { Header, Footer } from '@/components/layout'
import { Hero, TrustBar } from '@/components/sections'
import PricingLeadFormBridge from '@/components/home/PricingLeadFormBridge'

// Lazy load des sections sous le fold pour améliorer le First Contentful Paint
const Problem = dynamic(() => import('@/components/sections/Problem'))
const Solution = dynamic(() => import('@/components/sections/Solution'))
const WhyNotWix = dynamic(() => import('@/components/sections/WhyNotWix'))
const PlanGratuit24h = dynamic(() => import('@/components/sections/PlanGratuit24h'))
const NotIncluded = dynamic(() => import('@/components/sections/NotIncluded'))
const Process = dynamic(() => import('@/components/sections/Process'))
const Reviews = dynamic(() => import('@/components/sections/Reviews'))
const FAQ = dynamic(() => import('@/components/sections/FAQ'))
const Compliance = dynamic(() => import('@/components/sections/Compliance'))

export default function Home() {
  return (
    <main className="min-h-screen pt-32">
      {/* Navigation - Above the fold */}
      <Header />
      <div className="section-container flex justify-center">
        <div className="bg-white/90 backdrop-blur-sm border border-concrete-200 rounded-full px-6 py-3 md:py-4 text-center text-xl md:text-3xl font-bold text-navy shadow-xl mt-4 md:mt-6 mb-8 md:mb-10">
          On gère votre <span className="catchphrase-highlight">web</span> pendant que vous gérez vos <span className="catchphrase-highlight">chantiers</span>.
        </div>
      </div>
      {/* Hero Section - Above the fold */}
      <Hero />
      
      {/* Trust Bar - Above the fold */}
      <TrustBar />
      
      {/* Sections chargées dynamiquement - Below the fold */}
      <Problem />
      <Solution />
      <WhyNotWix />
      <PlanGratuit24h />
      <NotIncluded />
      <Process />
      <PricingLeadFormBridge />
      <FAQ />
      <Reviews />
      <Compliance />

      {/* Footer */}
      <Footer />
    </main>
  )
}
