'use client'

import { PlanIntentProvider } from '@/components/context/plan-intent-context'
import Pricing from '@/components/sections/Pricing'
import { LeadForm } from '@/components/forms'

const PricingLeadFormBridge = () => (
  <PlanIntentProvider>
    <div className="space-y-8">
      <div className="space-y-6">
        <Pricing />
        <div className="text-center mt-6">
          <a href="#limites-mensuelles" className="text-sm font-semibold text-safety hover:text-safety/80">
            Voir les limites mensuelles
          </a>
        </div>
      </div>
      <LeadForm />
    </div>
  </PlanIntentProvider>
)

export default PricingLeadFormBridge
