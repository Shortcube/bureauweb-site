import { Shield, Check, Cookie, FileText, Globe, Database, AlertCircle, Scale } from 'lucide-react'

const Compliance = () => {
  const features = [
    {
      icon: Cookie,
      title: 'Bannière de cookies',
      description: 'Alignée sur les bonnes pratiques courantes; on documente la configuration sans en imposer une interprétation normative.',
    },
    {
      icon: FileText,
      title: 'Politique de confidentialité',
      description: 'Modèle adapté à votre entreprise',
    },
    {
      icon: Globe,
      title: 'Hébergement au Canada',
      description: 'Préférence pour les serveurs canadiens selon les contraintes techniques et les capacités des fournisseurs de l’infrastructure.',
    },
    {
      icon: Database,
      title: 'Données minimisées',
      description: 'On collecte seulement ce qui est nécessaire',
    },
  ]

  return (
    <section id="conformite" className="py-12 md:py-16 bg-concrete-50 scroll-mt-header">
      <div className="section-container">
        {/* En-tête */}
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Protection des données</span>
          </div>
          <h2 className="text-navy mb-6">
            Conformité et vie privée
          </h2>
          <p className="text-xl text-concrete-600 max-w-2xl mx-auto">
            Loi 25 : les outils de base sont inclus
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contenu principal */}
          <div className="bg-white rounded-2xl border border-concrete-200 overflow-hidden mb-8">
            {/* Header */}
            <div className="bg-navy p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-safety" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Loi 25 du Québec
                  </h3>
                  <p className="text-concrete-300">
                    On configure les éléments techniques de base pour vous faciliter la vie
                  </p>
                </div>
              </div>
            </div>
            
            {/* Grille de fonctionnalités */}
            <div className="p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-concrete-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Avertissement important */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">
                  Important à savoir
                </h4>
                <p className="text-blue-800 leading-relaxed">
                  Chaque entreprise doit adapter sa politique selon comment elle collecte et utilise les données. 
                  On vous fournit l'infrastructure technique de base, mais ça ne remplace pas un avis juridique.
                </p>
                <p className="mt-3 font-medium text-blue-900">
                  Pour une conformité légale complète, consultez un avocat spécialisé.
                </p>
              </div>
            </div>
          </div>

          {/* Note NAP */}
          <div className="bg-white rounded-xl border border-concrete-200 p-6">
            <div className="flex items-start gap-4">
              {/* was: bg-green-50 */}
              <div className="w-10 h-10 bg-safety/10 rounded-full flex items-center justify-center flex-shrink-0">
                {/* was: text-green-600 */}
                <Check className="w-5 h-5 text-safety" />
              </div>
              <div>
                <h4 className="font-semibold text-navy mb-2">
                  Pour le référencement local
                </h4>
                <p className="text-concrete-600 leading-relaxed">
                  On utilise vos coordonnées officielles (nom, adresse, téléphone) pour maintenir la cohérence des signaux locaux (NAP) et éviter les incohérences d’information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compliance
