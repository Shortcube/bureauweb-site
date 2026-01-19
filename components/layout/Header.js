'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig, formatPhoneDisplay } from '@/lib/site-config'
import Logo from '@/components/ui/Logo'

const Header = () => {
  const portalUrl =
    process.env.NEXT_PUBLIC_STRIPE_PORTAL_LOGIN_URL ||
    'https://billing.stripe.com/p/login/6oUeVe9WJ6wra7VeYJeEo00'
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
    { href: '#processus', label: 'Comment ça marche' },
    { href: '#forfaits', label: 'Forfaits' },
    { href: '/blog', label: 'Blogue' },
    { href: '#faq', label: 'FAQ' },
  ]

  const handleNavClick = (e, href) => {
    if (!href.startsWith('#')) {
      setIsMobileMenuOpen(false)
      return
    }
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
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            aria-label="Retour à l'accueil BureauWeb"
          >
            <Logo className="h-[4.05rem] w-auto md:h-[4.6rem]" aria-hidden="true" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-concrete-700 hover:text-navy font-medium transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <a
              href={portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy/70 hover:text-navy font-medium transition-colors"
            >
              Portail client
            </a>
          </nav>

          {/* Phone + CTA */}
          <div className="flex items-center flex-nowrap gap-4">
            {/* Téléphone toujours visible */}
            {hasPhone && (
              <a 
                href={`tel:${String(phoneDigits).replace(/\D/g, '')}`}
                className="flex items-center space-x-2 text-navy font-semibold hover:text-safety transition-colors whitespace-nowrap lg:hidden"
                aria-label={`Appelez-nous au ${phoneDisplay}`}
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">{phoneDisplay}</span>
              </a>
            )}
            <Button
              className="btn-cta whitespace-nowrap shrink-0 text-sm px-4 py-2"
              onClick={(e) => handleNavClick(e, '#diagnostic')}
              aria-label="Diagnostic gratuit"
            >
              Diagnostic gratuit
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
                    link.label === 'Diagnostic gratuit' ? 'whitespace-nowrap' : ''
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <a
                href={portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-concrete-700 hover:text-navy hover:bg-concrete-50 font-medium px-4 py-3 rounded-lg transition-colors"
              >
                Portail client
              </a>
              <div className="px-4 pt-4 border-t border-concrete-100 mt-2">
                <Button 
                  className="w-full btn-cta"
                  onClick={(e) => handleNavClick(e, '#diagnostic')}
                  aria-label="Diagnostic gratuit"
                >
                  Diagnostic gratuit
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
