import { CheckCircle2, BarChart3, Shield, RefreshCw, FileText } from 'lucide-react'

const Solution = () => {
  const benefits = [
    { icon: Shield, text: 'Hébergement sécurisé et mises à jour faites pour vous' },
    { icon: BarChart3, text: 'Votre fiche Google structurée pour le local (infos, catégories, CTA)' },
    { icon: RefreshCw, text: 'Maintenance continue sans que vous ayez à y penser' },
    { icon: FileText, text: 'Rapport mensuel simple : visiteurs, demandes, avis' },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="text-center space-y-2">
            {/* was: bg-green-50 text-green-700 */}
            <div className="inline-flex items-center space-x-2 bg-safety/10 text-safety px-4 py-2 rounded-full">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-medium">La solution</span>
            </div>
            <h2 className="text-navy text-3xl md:text-[2.6rem] mb-0">
              Votre département web, sans les frais d&apos;un employé
            </h2>
            <p className="text-base md:text-lg text-concrete-600 leading-relaxed">
              BureauWeb prend en charge l’hébergement, la maintenance, les mises à jour et la structure Google de votre site, sans les coûts fixes liés à un employé interne.
            </p>
          </div>

          <div className="space-y-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 bg-concrete-50 rounded-lg"
              >
                <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-concrete-700 text-sm leading-snug font-medium pt-1">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
