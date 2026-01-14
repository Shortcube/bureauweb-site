'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const STORAGE_KEY = 'bw_cookie_notice_v1'

/**
 * Bannière légère (sans tracking) :
 * - Affiche un avis "cookies / vie privée"
 * - Aucun cookie marketing
 * - Se ferme via localStorage
 */
export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (!saved) setIsVisible(true)
    } catch {
      // Si localStorage est bloqué, on affiche quand même.
      setIsVisible(true)
    }
  }, [])

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      // no-op
    }
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto max-w-4xl rounded-2xl border border-concrete-200 bg-white/95 backdrop-blur shadow-xl p-4 md:p-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-concrete-700 leading-relaxed">
            <p className="font-semibold text-navy">Vie privée</p>
            <p>
              On utilise seulement des cookies essentiels (et/ou du stockage local) pour améliorer
              l’expérience. Pas de tracking publicitaire.
              <span className="ml-1">
                <Link href="/confidentialite" className="text-safety hover:underline">En savoir plus</Link>.
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={accept} className="btn-cta px-5">
              OK
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
