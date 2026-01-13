// SUPPRIMÉ 'use client' - Cette page est maintenant un Server Component
// Seuls les composants avec interactivité ont 'use client'

import { Header, Footer } from '@/components/layout'
import { 
  Hero, 
  TrustBar, 
  Problem, 
  Solution, 
  NotIncluded, 
  Process,
  Pricing,
  Reviews,
  Compliance
} from '@/components/sections'
import { LeadForm } from '@/components/forms'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation - 'use client' dans Header.js */}
      <Header />
      
      {/* Hero Section - 'use client' dans Hero.js */}
      <Hero />
      
      {/* Trust Bar - Server Component */}
      <TrustBar />
      
      {/* Problem Section - Server Component */}
      <Problem />
      
      {/* Solution Section - Server Component */}
      <Solution />
      
      {/* What's NOT Included - Server Component */}
      <NotIncluded />
      
      {/* Process / How it Works - Server Component */}
      <Process />
      
      {/* Pricing - 'use client' dans Pricing.js */}
      <Pricing />
      
      {/* Google Reviews System - Server Component */}
      <Reviews />
      
      {/* Compliance / Loi 25 - Server Component */}
      <Compliance />
      
      {/* Lead Capture Form - 'use client' dans LeadForm.js */}
      <LeadForm />
      
      {/* Footer - Server Component */}
      <Footer />
    </main>
  )
}
