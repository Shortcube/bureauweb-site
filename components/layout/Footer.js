import Link from 'next/link'
import { Phone, Mail, MapPin, Briefcase } from 'lucide-react'
import { siteConfig, formatPhoneDisplay } from '@/lib/site-config'
import Logo from '@/components/ui/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const phoneDigits = siteConfig.phoneDigits
  const phoneDisplay = formatPhoneDisplay(phoneDigits)
  const hasPhone = phoneDigits && String(phoneDigits).replace(/\D/g, '').length >= 10
  
  return (
    <footer className="bg-navy-950 text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Marque */}
          <div className="space-y-3">
            <div className="max-w-[240px]">
              <Logo
                className="w-full h-auto"
                primaryColor="#FFFFFF"
              />
            </div>
            <p className="text-concrete-400 text-sm leading-relaxed -mt-1">
              Votre département web externe. On s'occupe de votre site et de votre fiche Google pour que vous puissiez vous concentrer sur vos chantiers.
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
                  aria-label={`Écrivez-nous à ${siteConfig.email}`}
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
              <Link
                href="/secteurs"
                className="text-concrete-300 hover:text-safety transition-colors"
              >
                Secteurs d’activité
              </Link>
              </li>
              <li>
              <Link
                href="/blog"
                className="text-concrete-300 hover:text-safety transition-colors"
              >
                Blogue
              </Link>
              </li>
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
                  href="/limites"
                  className="text-concrete-300 hover:text-safety transition-colors"
                >
                  Limites mensuelles
                </a>
              </li>
              <li>
                <a
                  href="/conditions"
                  className="text-concrete-300 hover:text-safety transition-colors"
                >
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a
                  href="/gestion-renseignements"
                  className="text-concrete-300 hover:text-safety transition-colors"
                >
                  Gestion des renseignements
                </a>
              </li>
              <li>
                <Link
                  href="/compte"
                  className="text-concrete-300 hover:text-safety transition-colors"
                >
                  Compte client
                </Link>
              </li>
            </ul>
          </div>

          {/* Secteurs */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Secteurs servis</h4>
            <p className="text-concrete-400 text-sm">On travaille avec des entrepreneurs de services partout au Québec.</p>
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

        {/* Barre du bas */}
        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-concrete-500 text-sm text-center lg:text-left">
              <p className="flex items-center justify-center lg:justify-start gap-2">
                <Briefcase className="w-4 h-4" aria-hidden="true" />
                <span>Entreprise enregistrée au Québec. Support par courriel.</span>
              </p>
            </div>
            <p className="text-concrete-500 text-sm">
              © {currentYear} BureauWeb. Tous droits réservés.
            </p>
          </div>
          <p className="text-concrete-600 text-xs mt-6 text-center">
            Pas de tracking publicitaire. 
            Hébergement avec préférence pour les serveurs canadiens.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
