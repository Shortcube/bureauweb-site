// Page principale - Optimisée avec lazy loading
import dynamic from 'next/dynamic'
import { Header, Footer } from '@/components/layout'
import { Hero, TrustBar } from '@/components/sections'
import { LeadForm } from '@/components/forms'

// Lazy load des sections sous le fold pour améliorer le First Contentful Paint
const Problem = dynamic(() => import('@/components/sections/Problem'))
const Solution = dynamic(() => import('@/components/sections/Solution'))
const NotIncluded = dynamic(() => import('@/components/sections/NotIncluded'))
const Process = dynamic(() => import('@/components/sections/Process'))
const Pricing = dynamic(() => import('@/components/sections/Pricing'))
const Reviews = dynamic(() => import('@/components/sections/Reviews'))
const Compliance = dynamic(() => import('@/components/sections/Compliance'))

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation - Above the fold */}
      <Header />
      
      {/* Hero Section - Above the fold */}
      <Hero />
      
      {/* Trust Bar - Above the fold */}
      <TrustBar />
      
      {/* Sections chargées dynamiquement - Below the fold */}
      <Problem />
      <Solution />
      <NotIncluded />
      <Process />
      <Pricing />
      <Reviews />
      <Compliance />
      
      {/* Lead Capture Form */}
      <LeadForm />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
