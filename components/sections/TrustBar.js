import { Shield, MapPin, Database, HeadphonesIcon } from 'lucide-react'

const TrustBar = () => {
  const trustItems = [
    {
      icon: Shield,
      label: 'Outils de conformité (Loi 25)',
    },
    {
      icon: MapPin,
      label: 'Optimisation du profil Google',
    },
    {
      icon: Database,
      label: 'Collecte de données minimisée',
    },
    {
      icon: HeadphonesIcon,
      label: 'Support Local (Lun-Ven)',
    },
  ]

  return (
    <section className="bg-navy py-6">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-center space-x-3 text-white"
            >
              <item.icon className="w-5 h-5 text-safety flex-shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
