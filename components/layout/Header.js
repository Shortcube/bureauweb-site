'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { siteConfig, formatPhoneDisplay } from '@/lib/site-config'
import { TRADE_PAGES } from '@/lib/content'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const phoneDigits = siteConfig.phoneDigits
  const phoneDisplay = formatPhoneDisplay(phoneDigits)
  const hasPhone = phoneDigits && String(phoneDigits).replace(/\D/g, '').length >= 10

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#plan24h', label: 'Plan gratuit 24 h' },
    { href: '#forfaits', label: 'Forfaits' },
    { href: '#processus', label: 'Comment ça fonctionne' },
    { href: '#conformite', label: 'Conformité' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            aria-label="Retour à l'accueil BureauWeb"
          >
            <span className="text-xl md:text-2xl font-bold text-navy">
              Bureau<span className="text-safety">Web</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-concrete-700 hover:text-navy font-medium transition-colors ${
                  link.label === 'Plan gratuit 24 h' ? 'whitespace-nowrap' : ''
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="min-w-[220px]">
              <Select
                onValueChange={(value) => {
                  router.push(`/metiers/${value}`)
                }}
              >
                <SelectTrigger
                  className="bg-white w-[260px] lg:w-[280px] whitespace-normal h-auto py-2 text-left items-start"
                  aria-label="Choisir un corps de métier"
                >
                  <SelectValue
                    placeholder={
                      <>
                        <span className="lg:hidden">Métier...</span>
                        <span className="hidden lg:inline">Mon corps de métier est...</span>
                      </>
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {TRADE_PAGES.map((t) => (
                    <SelectItem key={t.slug} value={t.slug}>
                      {t.title.replace(/^Sites web pour /i, '').replace(/ au Québec$/i, '')}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </nav>

          {/* Phone + CTA */}
          <div className="flex items-center flex-nowrap gap-4">
            {/* Téléphone toujours visible */}
            {hasPhone && (
              <a 
                href={`tel:${String(phoneDigits).replace(/\D/g, '')}`}
                className="flex items-center space-x-2 text-navy font-semibold hover:text-safety transition-colors"
                aria-label={`Appelez-nous au ${phoneDisplay}`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{phoneDisplay}</span>
              </a>
            )}
            <Button 
              className="hidden md:inline-flex btn-cta whitespace-nowrap shrink-0"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Recevoir mon plan gratuit 24 h
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-concrete-200 py-4" role="navigation" aria-label="Menu mobile">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-concrete-700 hover:text-navy hover:bg-concrete-50 font-medium px-4 py-3 rounded-lg transition-colors ${
                    link.label === 'Plan gratuit 24 h' ? 'whitespace-nowrap' : ''
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="px-4 pt-3">
                <Select
                  onValueChange={(value) => {
                    setIsMobileMenuOpen(false)
                    router.push(`/metiers/${value}`)
                  }}
                >
                  <SelectTrigger
                    className="whitespace-normal h-auto py-2 text-left items-start"
                    aria-label="Choisir un corps de métier"
                  >
                    <SelectValue placeholder="Mon corps de métier est..." />
                  </SelectTrigger>
                  <SelectContent>
                    {TRADE_PAGES.map((t) => (
                      <SelectItem key={t.slug} value={t.slug}>
                        {t.title.replace(/^Sites web pour /i, '').replace(/ au Québec$/i, '')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="px-4 pt-4 border-t border-concrete-100 mt-2">
                <Button 
                  className="w-full btn-cta"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Recevoir mon plan gratuit 24 h
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
