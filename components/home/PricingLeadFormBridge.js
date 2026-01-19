'use client'

import { PlanIntentProvider } from '@/components/context/plan-intent-context'
import Pricing from '@/components/sections/Pricing'
import { LeadForm } from '@/components/forms'

const PricingLeadFormBridge = () => (
  <PlanIntentProvider>
    <div className="space-y-0">
      <Pricing />
      <LeadForm />
    </div>
  </PlanIntentProvider>
)

export default PricingLeadFormBridge
