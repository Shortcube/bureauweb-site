import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-bold">
              Bureau<span className="text-safety">Web</span>
            </span>
            <p className="text-concrete-300 text-sm leading-relaxed">
              Votre département web externe. Infrastructure complète pour entrepreneurs québécois.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-3 text-concrete-300">
              <li>
                <a href="tel:514-XXX-XXXX" className="flex items-center space-x-2 hover:text-safety transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>514-XXX-XXXX</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@bureauweb.ca" className="flex items-center space-x-2 hover:text-safety transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>info@bureauweb.ca</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>Longueuil, QC</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Légal</h4>
            <ul className="space-y-3 text-concrete-300">
              <li>
                <a href="/conditions" className="hover:text-safety transition-colors">
                  Conditions de Service
                </a>
              </li>
              <li>
                <a href="/confidentialite" className="hover:text-safety transition-colors">
                  Politique de Confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Partenaires</h4>
            <p className="text-concrete-300 text-sm">
              Nous comprenons votre industrie.
            </p>
            <div className="flex flex-wrap gap-2">
              {/* Placeholders for partner logos */}
              <span className="bg-navy-800 text-concrete-400 text-xs px-3 py-1 rounded">APCHQ</span>
              <span className="bg-navy-800 text-concrete-400 text-xs px-3 py-1 rounded">CMMTQ</span>
              <span className="bg-navy-800 text-concrete-400 text-xs px-3 py-1 rounded">RBQ</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-concrete-400 text-sm text-center md:text-left">
              BureauWeb est une division de [Nom d'Entreprise], immatriculée au Registre des Entreprises du Québec (NEQ : [à compléter]).
            </p>
            <p className="text-concrete-400 text-sm">
              TPS/TVQ : [à compléter]
            </p>
          </div>
          <p className="text-concrete-500 text-xs mt-4 text-center">
            Nous utilisons des outils d'analyse respectueux de la vie privée. Hébergement avec préférence pour les régions canadiennes.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
