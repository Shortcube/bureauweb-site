import { Phone, Mail, MapPin, Briefcase } from 'lucide-react'
import { siteConfig, formatPhoneDisplay } from '@/lib/site-config'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const phoneDigits = siteConfig.phoneDigits
  const phoneDisplay = formatPhoneDisplay(phoneDigits)
  const hasPhone = phoneDigits && String(phoneDigits).replace(/\D/g, '').length >= 10
  
  return (
    <footer className="bg-navy-950 text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-bold">
              Bureau<span className="text-safety">Web</span>
            </span>
            <p className="text-concrete-400 text-sm leading-relaxed">
              Votre département web externe. Infrastructure complète pour entrepreneurs québécois.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-3">
              {hasPhone && (
                <li>
                  <a 
                    href={`tel:${String(phoneDigits).replace(/\D/g, '')}`}
                    className="flex items-center space-x-3 text-concrete-300 hover:text-safety transition-colors group"
                    aria-label={`Appelez-nous au ${phoneDisplay}`}
                  >
                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-safety/20 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>{phoneDisplay}</span>
                  </a>
                </li>
              )}
              <li>
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center space-x-3 text-concrete-300 hover:text-safety transition-colors group"
                  aria-label={`Envoyez-nous un courriel à ${siteConfig.email}`}
                >
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-safety/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-3 text-concrete-400">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{siteConfig.city}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Infos légales</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/confidentialite"
                  className="text-concrete-300 hover:text-safety transition-colors"
                >
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a
                  href="/conditions"
                  className="text-concrete-300 hover:text-safety transition-colors"
                >
                  Conditions d’utilisation
                </a>
              </li>
              <li>
                <a
                  href="/gestion-renseignements"
                  className="text-concrete-300 hover:text-safety transition-colors"
                >
                  Gestion des renseignements personnels
                </a>
              </li>
            </ul>
          </div>

          {/* Secteurs servis (sans claim de partenariat) */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Secteurs servis</h4>
            <p className="text-concrete-400 text-sm">On travaille avec des entrepreneurs de services au Québec.</p>
            <div className="flex flex-wrap gap-2">
              {siteConfig.sectors.map((sector) => (
                <span
                  key={sector}
                  className="bg-white/5 text-concrete-400 text-xs px-3 py-2 rounded-lg border border-white/10"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-concrete-500 text-sm text-center lg:text-left">
              <p className="flex items-center justify-center lg:justify-start gap-2">
                <Briefcase className="w-4 h-4" aria-hidden="true" />
                <span>Entreprise enregistrée au Québec. Support principalement par écrit (courriel).</span>
              </p>
              <p className="mt-1">
                Facturation, taxes et numéros d’enregistrement : indiqués sur vos factures au besoin.
              </p>
            </div>
            <p className="text-concrete-500 text-sm">
              © {currentYear} BureauWeb. Tous droits réservés.
            </p>
          </div>
          <p className="text-concrete-600 text-xs mt-6 text-center">
            Pas de tracking publicitaire. 
            Hébergement avec préférence pour les régions canadiennes lorsque disponible.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
