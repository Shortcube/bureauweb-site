'use client'

import { createContext, useContext, useState } from 'react'

const PlanIntentContext = createContext({
  planIntent: '',
  setPlanIntent: () => {},
})

export const PlanIntentProvider = ({ children }) => {
  const [planIntent, setPlanIntent] = useState('')

  return (
    <PlanIntentContext.Provider value={{ planIntent, setPlanIntent }}>
      {children}
    </PlanIntentContext.Provider>
  )
}

export const usePlanIntent = () => {
  const context = useContext(PlanIntentContext)
  if (!context) {
    throw new Error('usePlanIntent must be used within a PlanIntentProvider')
  }
  return context
}
