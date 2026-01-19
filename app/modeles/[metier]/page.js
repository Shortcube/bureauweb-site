import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Bolt,
  CheckCircle,
  Fan,
  FileText,
  Hammer,
  HelpCircle,
  Home,
  Leaf,
  MapPin,
  Phone,
  Snowflake,
  Wrench,
} from 'lucide-react'
import { MODELES_BY_SLUG } from '@/lib/modeles.data'
import DemoSoumissionForm from '@/components/modeles/DemoSoumissionForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const iconMap = {
  Bolt,
  Fan,
  Hammer,
  Home,
  Leaf,
  Snowflake,
  Wrench,
}

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(MODELES_BY_SLUG).map((slug) => ({ metier: slug }))
}

export async function generateMetadata({ params }) {
  const modele = MODELES_BY_SLUG[params.metier]
  if (!modele) return {}
  return {
    title: `${modele.metierLabel} | Modèle de démonstration`,
    description: modele.heroSubtitle,
  }
}

export default function ModeleDetailPage({ params }) {
  const modele = MODELES_BY_SLUG[params.metier]
  if (!modele) return notFound()

  const Icon = iconMap[modele.theme.icon] || Wrench

  return (
    <main className="space-y-0">
      <div className="border-b border-concrete-200 bg-concrete-50">
        <div className="section-container py-3 text-xs text-concrete-700">
          Modèle de démonstration. Informations et entreprise fictives.
        </div>
      </div>

      <section id="accueil" className="scroll-mt-header py-12 md:py-16">
        <div className="section-container space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-concrete-500">
                Site vitrine {modele.metierLabel.toLowerCase()}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-navy">
                {modele.heroTitle}
              </h1>
              <p className="text-concrete-600 max-w-2xl">{modele.heroSubtitle}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy/90"
                >
                  Demander une soumission (démo)
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-md border border-navy px-4 py-2 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
                >
                  Voir services
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-concrete-200 bg-white p-4 text-sm text-concrete-700 md:w-64">
              <div className="flex items-center gap-2">
                <Icon className={`h-5 w-5 ${modele.theme.accentClass}`} />
                <span className="font-semibold text-navy">{modele.metierLabel}</span>
              </div>
              <p className="mt-2">Région&nbsp;: {modele.regionLabel} (exemple)</p>
              <p className="mt-1">Numéro RBQ&nbsp;: à confirmer</p>
              <p className="mt-1">Assurances&nbsp;: à confirmer</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-3 rounded-xl border border-concrete-200 bg-white px-4 py-3 text-sm">
            {[
              ['#accueil', 'Accueil'],
              ['#services', 'Services'],
              ['#zones', 'Zones'],
              ['#processus', 'Processus'],
              ['#faq', 'FAQ'],
              ['#contact', 'Contact'],
              ['#rapport', 'Rapport mensuel'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="text-concrete-700 hover:text-navy">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section id="services" className="scroll-mt-header py-12 md:py-16 bg-white">
        <div className="section-container space-y-6">
          <div className="flex items-center gap-3">
            <Wrench className={`h-5 w-5 ${modele.theme.accentClass}`} />
            <div>
              <h2 className="text-2xl font-semibold text-navy">Services</h2>
              <p className="text-sm text-concrete-600">Exemples typiques, à confirmer selon l’entreprise.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {modele.services.map((service) => (
              <div key={service} className="rounded-xl border border-concrete-200 bg-concrete-50 p-4 text-sm">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="zones" className="scroll-mt-header py-12 md:py-16">
        <div className="section-container space-y-6">
          <div className="flex items-center gap-3">
            <MapPin className={`h-5 w-5 ${modele.theme.accentClass}`} />
            <div>
              <h2 className="text-2xl font-semibold text-navy">Zones desservies</h2>
              <p className="text-sm text-concrete-600">Liste d’exemple, à confirmer.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {modele.zones.map((zone) => (
              <div key={zone} className="rounded-xl border border-concrete-200 bg-white p-4 text-sm">
                {zone}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="processus" className="scroll-mt-header py-12 md:py-16 bg-concrete-50">
        <div className="section-container space-y-6">
          <div className="flex items-center gap-3">
            <CheckCircle className={`h-5 w-5 ${modele.theme.accentClass}`} />
            <div>
              <h2 className="text-2xl font-semibold text-navy">Processus</h2>
              <p className="text-sm text-concrete-600">Étapes factuelles, sans promesse de délai.</p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {modele.processSteps.map((step) => (
              <Card key={step.title} className="border-concrete-200 shadow-sm">
                <CardHeader className="p-4">
                  <CardTitle className="text-base text-navy">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm text-concrete-700">{step.detail}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-header py-12 md:py-16">
        <div className="section-container space-y-6">
          <div className="flex items-center gap-3">
            <HelpCircle className={`h-5 w-5 ${modele.theme.accentClass}`} />
            <div>
              <h2 className="text-2xl font-semibold text-navy">FAQ</h2>
              <p className="text-sm text-concrete-600">Réponses concrètes, à adapter selon votre réalité.</p>
            </div>
          </div>
          <div className="space-y-3">
            {modele.faq.map((item) => (
              <details key={item.q} className="rounded-xl border border-concrete-200 bg-white p-4">
                <summary className="cursor-pointer text-sm font-semibold text-navy">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-concrete-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-header py-12 md:py-16 bg-concrete-50">
        <div className="section-container space-y-6">
          <div className="flex items-center gap-3">
            <Phone className={`h-5 w-5 ${modele.theme.accentClass}`} />
            <div>
              <h2 className="text-2xl font-semibold text-navy">Contact</h2>
              <p className="text-sm text-concrete-600">Coordonnées fictives pour démonstration.</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <Card className="border-concrete-200 shadow-sm">
              <CardHeader className="p-4">
                <CardTitle className="text-base text-navy">{modele.contact.company}</CardTitle>
                <p className="text-xs text-concrete-500">Exemple</p>
              </CardHeader>
              <CardContent className="space-y-2 p-4 pt-0 text-sm text-concrete-700">
                <p>{modele.contact.address}</p>
                <p>Téléphone&nbsp;: {modele.contact.phone}</p>
                <p>Courriel&nbsp;: {modele.contact.email}</p>
                <p>Heures&nbsp;: {modele.contact.hours}</p>
                <p className="text-xs text-concrete-500">Coordonnées fictives, à confirmer.</p>
              </CardContent>
            </Card>

            <Card className="border-concrete-200 shadow-sm">
              <CardHeader className="p-4">
                <CardTitle className="text-base text-navy">Demande de soumission (démo)</CardTitle>
                <p className="text-xs text-concrete-500">Aucune donnée n’est envoyée.</p>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <DemoSoumissionForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="rapport" className="scroll-mt-header py-12 md:py-16">
        <div className="section-container space-y-6">
          <div className="flex items-center gap-3">
            <FileText className={`h-5 w-5 ${modele.theme.accentClass}`} />
            <div>
              <h2 className="text-2xl font-semibold text-navy">Exemple de rapport mensuel</h2>
              <p className="text-sm text-concrete-600">Synthèse 1 page, sans métriques inventées.</p>
            </div>
          </div>

          <Card className="border-concrete-200 shadow-sm">
            <CardContent className="p-4 space-y-4">
              <div>
                <p className="text-sm font-semibold text-navy">Contrôles QA</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {modele.reportExample.qaChecks.map((check) => (
                    <div
                      key={check.label}
                      className="flex items-start justify-between gap-3 rounded-lg border border-concrete-200 bg-white px-3 py-2 text-sm"
                    >
                      <span>{check.label}</span>
                      <span className="font-semibold text-concrete-700">{check.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-lg border border-concrete-200 bg-concrete-50 p-3 text-sm">
                  <p className="font-semibold text-navy">Micro-amélioration</p>
                  <p className="mt-1 text-concrete-700">{modele.reportExample.microAmelioration}</p>
                </div>
                <div className="rounded-lg border border-concrete-200 bg-concrete-50 p-3 text-sm">
                  <p className="font-semibold text-navy">Prochaine action</p>
                  <p className="mt-1 text-concrete-700">{modele.reportExample.prochaineAction}</p>
                </div>
              </div>
              <div className="rounded-lg border border-concrete-200 bg-white p-3 text-sm">
                <p className="font-semibold text-navy">Inconnus / à confirmer</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-concrete-700">
                  {modele.reportExample.inconnus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
