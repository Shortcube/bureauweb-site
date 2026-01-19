import { Star, Check, X, MessageSquare, FileText, Link, BookOpen, Send, Reply, AlertTriangle } from 'lucide-react'

const Reviews = () => {
  const included = [
    {
      icon: MessageSquare,
      text: 'Modèles SMS/courriels prêts; les envois restent déclenchés par vos systèmes, on ne les automatise pas à votre place.',
    },
    {
      icon: Link,
      text: 'Documentation précise pour brancher le flux à votre CRM ou votre facturation; la configuration technique reste de votre ressort sauf mandat additionnel.',
    },
    {
      icon: FileText,
      text: 'Une page conforme aux règles Google qui facilite le dépôt d’avis et clarifie le périmètre de vos témoignages.',
    },
    {
      icon: BookOpen,
      text: 'Comment demander des avis Google de la bonne façon',
    },
  ]

  const notIncluded = [
    {
      icon: Send,
      text: 'Envoi automatique par nos systèmes n’est pas offert; vous gardez le contrôle des déclencheurs et des suivis.',
    },
    {
      icon: Reply,
      text: 'Rédaction de réponses aux avis Google (sur demande): 75$ par avis. Non illimité.',
    },
    {
      icon: AlertTriangle,
      text: 'Gestion de crise (client très mécontent, faux avis) : service additionnel sur demande.',
    },
  ]

  return (
    <section id="avis" className="py-12 md:py-16 bg-concrete-50 scroll-mt-header">
      <div className="section-container">
        {/* En-tête */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center space-x-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 fill-yellow-500" />
            <span className="text-sm font-medium">Réputation en ligne</span>
          </div>
          <h2 className="text-navy mb-6">
            Système d'avis Google
          </h2>
          <p className="text-xl text-concrete-600 max-w-2xl mx-auto">
            Voici exactement ce qui est inclus dans votre forfait.
          </p>
        </div>

        {/* Deux colonnes */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Colonne inclus */}
          {/* was: bg-green-50 border-green-100 */}
          <div className="bg-safety/10 rounded-2xl p-6 md:p-8 border border-safety/20">
            <div className="flex items-center gap-3 mb-6">
              {/* was: bg-green-100 */}
              <div className="w-10 h-10 bg-safety/10 rounded-full flex items-center justify-center">
                {/* was: text-green-600 */}
                <Check className="w-5 h-5 text-safety" />
              </div>
              {/* was: text-green-800 */}
              <h3 className="text-xl font-semibold text-safety">
                Ce qui est inclus
              </h3>
            </div>
            
            <div className="space-y-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  {/* was: bg-green-100 */}
                  <div className="w-8 h-8 bg-safety/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {/* was: text-green-600 */}
                    <item.icon className="w-4 h-4 text-safety" />
                  </div>
                  <p className="text-concrete-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne non inclus */}
          <div className="bg-concrete-50 rounded-2xl p-6 md:p-8 border border-concrete-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-concrete-200 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-concrete-600" />
              </div>
              <h3 className="text-xl font-semibold text-concrete-700">
                Ce qui n'est pas inclus
              </h3>
            </div>
            
            <div className="space-y-4">
              {notIncluded.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  <div className="w-8 h-8 bg-concrete-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-concrete-500" />
                  </div>
                  <p className="text-concrete-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Note du bas */}
        <div className="max-w-3xl mx-auto mt-10 text-center">
          <div className="bg-navy/5 rounded-xl p-6">
            <div className="flex justify-center mb-3">
              <div className="flex text-yellow-400 text-2xl">
                {'★'.repeat(5)}
              </div>
            </div>
            <p className="text-concrete-600">
              Nous fournissons une structure claire et conforme pour faciliter la demande d’avis. BureauWeb n’apporte pas de volume garanti; vous gardez le contrôle du suivi.
            </p>
            <p className="mt-3 text-xs text-concrete-500">
              Aucun nombre minimal d’avis ni résultat n’est garanti et aucune incitation, filtrage ou manipulation d’avis n’est proposée; on respecte les règles Google.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
