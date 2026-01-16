import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TRADE_PAGES } from '@/lib/content'
import { Check, AlertCircle } from 'lucide-react'

// Edge Runtime pour Cloudflare Pages
export const runtime = 'edge'

export function generateMetadata({ params }) {
  const trade = TRADE_PAGES.find((t) => t.slug === params.slug)
  if (!trade) return { title: 'Corps de métier | BureauWeb' }
  return {
    title: `${trade.title} | BureauWeb`,
    description: trade.hero,
  }
}

export default function MetierSlugPage({ params }) {
  const trade = TRADE_PAGES.find((t) => t.slug === params.slug)
  if (!trade) return notFound()

  // Contenu spécifique selon le métier
  const contentBySlug = {
    plomberie: {
      problems: [
        'Vous êtes invisible sur Google Maps quand quelqu\'un cherche « plombier Longueuil » ou « urgence plomberie Rive-Sud »',
        'Votre numéro de téléphone n\'est pas cliquable sur mobile - les gens appellent votre concurrent',
        'Votre site ne montre pas vos services clairement (drain bouché, chauffe-eau, réparation, installation)',
        'Vous avez 3 avis Google, votre concurrent en a 50+',
      ],
      implementation: [
        {
          title: 'Site optimisé mobile-first',
          description: 'Téléphone cliquable en un clic, formulaire court pour urgences, temps de chargement rapide.'
        },
        {
          title: 'Fiche Google complète',
          description: 'Catégories précises (plomberie, urgence 24h, drain), photos de chantiers, zones desservies visibles.'
        },
        {
          title: 'Pages services et zones',
          description: 'Une page par service principal (drain, chauffe-eau, réparation) + pages par ville/quartier pour le SEO local.'
        },
        {
          title: 'Système d\'avis structuré',
          description: 'Process simple pour demander des avis après chaque intervention, avec modèles SMS/courriel prêts.'
        },
      ],
      faq: [
        {
          q: 'Combien de temps avant d\'être visible sur Google ?',
          a: 'Votre fiche Google est active dès qu\'on la complète (1-2 jours). Pour le référencement organique (apparaître dans les résultats de recherche), ça prend généralement 4-8 semaines selon la concurrence dans votre coin.'
        },
        {
          q: 'Qu\'est-ce qui est inclus dans le suivi mensuel ?',
          a: 'Petites modifications de contenu (ajout de services, mise à jour de photos), suivi des avis Google, ajustements de la fiche Google si nécessaire, et corrections de bugs ou problèmes techniques.'
        },
        {
          q: 'Est-ce que je peux annuler si ça marche pas ?',
          a: 'Oui. Engagement initial de 3 mois (le temps de livrer et de stabiliser), ensuite mensuel avec préavis de 30 jours. Si vous quittez, on fait un transfert propre des accès et du contenu.'
        },
        {
          q: 'Vous garantissez un nombre de demandes par mois ?',
          a: 'Non, on ne garantit pas de volume. Ce qui influence les demandes : votre concurrence locale, votre réputation, vos prix, votre capacité à répondre rapidement. On garantit la qualité de l\'infrastructure (site rapide, fiche Google optimisée, système de conversion en place).'
        },
      ],
    },
    toiture: {
      problems: [
        'Personne ne trouve votre entreprise quand quelqu\'un cherche « couvreur Montréal » ou « réparation toiture urgence »',
        'Votre site n\'a pas de galerie de réalisations, pas de photos avant/après',
        'Impossible de voir quels types de toiture vous faites (bardeaux, tôle, membrane)',
        'Vous manquez des appels parce que le formulaire est compliqué ou le site lent',
      ],
      implementation: [
        {
          title: 'Galerie avant/après professionnelle',
          description: 'Vos meilleures réalisations mises en valeur, optimisées pour le mobile, avec descriptions courtes.'
        },
        {
          title: 'Pages services détaillées',
          description: 'Une page par type de toiture (bardeaux d\'asphalte, tôle, membrane, réparation urgence) avec photos et infos claires.'
        },
        {
          title: 'Formulaire de soumission court',
          description: 'Type de toiture, urgence ou pas, code postal. Rien de plus. Les gens remplissent en 30 secondes sur mobile.'
        },
        {
          title: 'Zones géographiques visibles',
          description: 'Pages dédiées par région/ville pour le SEO local, avec carte de territoire desservi.'
        },
      ],
      faq: [
        {
          q: 'Comment je mets à jour les photos de mes réalisations ?',
          a: 'Vous nous envoyez les photos par courriel avec une courte description, on les optimise et on les ajoute au site. Ça fait partie du suivi mensuel selon votre forfait.'
        },
        {
          q: 'Est-ce que vous gérez aussi les demandes de soumission ?',
          a: 'Non, on met en place le système (formulaire + email) mais vous recevez les demandes directement. C\'est à vous de répondre et de faire les suivis.'
        },
        {
          q: 'Qu\'est-ce qui se passe si mon concurrent est déjà bien positionné ?',
          a: 'On travaille sur votre différenciation : vos zones spécifiques, vos spécialités, vos avis clients. Parfois, être #2-3 dans votre coin, c\'est déjà très rentable.'
        },
      ],
    },
    paysagement: {
      problems: [
        'Votre site ne montre pas vos services saisonniers (aménagement, entretien, déneigement)',
        'Pas de galerie de projets - les clients veulent voir des exemples avant d\'appeler',
        'Impossible de savoir si vous desservez leur quartier',
        'Trop de demandes de projets hors de votre capacité ou zone de service',
      ],
      implementation: [
        {
          title: 'Services saisonniers clairement organisés',
          description: 'Printemps/été (aménagement, entretien), automne (nettoyage, préparation), hiver (déneigement). Facile à naviguer.'
        },
        {
          title: 'Galerie de projets par catégorie',
          description: 'Avant/après bien visibles, organisés par type (terrasse, pavé-uni, aménagement paysager, entretien).'
        },
        {
          title: 'Formulaire qui filtre les demandes',
          description: 'Type de projet, budget approximatif, code postal. Ça réduit les demandes non qualifiées et vous fait gagner du temps.'
        },
        {
          title: 'Carte de territoire',
          description: 'Carte interactive ou liste claire des villes/quartiers desservis pour éviter les demandes hors zone.'
        },
      ],
      faq: [
        {
          q: 'Comment vous gérez les demandes hors saison ?',
          a: 'On peut adapter le site selon la saison (mettre déneigement en avant l\'hiver, aménagement au printemps). C\'est inclus dans le suivi mensuel.'
        },
        {
          q: 'Je fais beaucoup de services différents, comment organiser ça ?',
          a: 'On crée des pages distinctes pour chaque service principal, avec navigation claire. Trop d\'infos sur une page = confusion. Mieux vaut des pages courtes et claires.'
        },
        {
          q: 'Est-ce que je peux ajouter des témoignages clients ?',
          a: 'Oui, on peut ajouter une section témoignages (avec photos de projets si possible). Encore mieux : on vous aide à obtenir des avis Google, qui ont plus d\'impact.'
        },
      ],
    },
  }

  const content = contentBySlug[trade.slug] || {}

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 md:py-20">
      <nav className="text-sm text-concrete-600 mb-8">
        <Link href="/" className="text-safety hover:underline">Accueil</Link>
        <span className="mx-2">/</span>
        <span className="text-navy">{trade.slug}</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-navy mb-4">{trade.title}</h1>
        <p className="text-xl md:text-2xl text-concrete-600 leading-relaxed">{trade.hero}</p>
      </header>

      {content.problems && (
        <section className="mb-12 bg-red-50 rounded-xl p-6 md:p-8 border border-red-100">
          <div className="flex items-center gap-3 mb-5">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-semibold text-navy">Problèmes typiques qu'on voit souvent</h2>
          </div>
          <ul className="space-y-3">
            {content.problems.map((problem, idx) => (
              <li key={idx} className="flex gap-3 text-concrete-700">
                <span className="text-red-500 font-bold">•</span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {content.implementation && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-navy mb-6">Ce qu'on met en place concrètement</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.implementation.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-concrete-200 hover:border-concrete-300 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-navy">{item.title}</h3>
                </div>
                <p className="text-concrete-600 text-sm leading-relaxed pl-8">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {!content.implementation && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-navy mb-6">Ce qu'on met en place (exemples)</h2>
          <ul className="space-y-3 text-concrete-600">
            {trade.bullets.map((b, idx) => (
              <li key={idx} className="flex gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {content.faq && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-navy mb-6">Questions fréquentes</h2>
          <div className="space-y-6">
            {content.faq.map((item, idx) => (
              <div key={idx} className="bg-concrete-50 rounded-xl p-6 border border-concrete-200">
                <h3 className="font-semibold text-navy mb-3">{item.q}</h3>
                <p className="text-concrete-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="mt-12 flex flex-col sm:flex-row gap-4 pt-8 border-t border-concrete-200">
        <Link href="/#contact" className="btn-cta inline-flex items-center justify-center px-8 py-4 rounded-lg text-white font-semibold">
          Recevoir mon plan gratuit 24 h
        </Link>
        <Link href="/#forfaits" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-concrete-300 text-navy hover:bg-concrete-50 font-semibold">
          Voir les forfaits et prix
        </Link>
      </div>
    </main>
  )
}
