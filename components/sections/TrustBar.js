import { Shield, MapPin, Database, HeadphonesIcon } from 'lucide-react'

const TrustBar = () => {
  const trustItems = [
    {
      icon: Shield,
      label: 'Conformité Loi 25 incluse',
    },
    {
      icon: MapPin,
      label: 'Fiche Google structurée',
    },
    {
      icon: Database,
      label: 'Données minimisées',
    },
    {
      icon: HeadphonesIcon,
      label: 'Support local (lun-ven)',
    },
  ]

  return (
    <section className="bg-navy py-8 md:py-10">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col sm:flex-row items-center justify-center sm:space-x-3 space-y-2 sm:space-y-0 text-white text-center sm:text-left"
            >
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-safety" />
              </div>
              <span className="text-sm md:text-base font-medium leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
