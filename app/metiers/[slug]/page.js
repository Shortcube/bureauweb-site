import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TRADE_PAGES } from '@/lib/content'
import PageNavBack from '@/components/layout/PageNavBack'
import { Check, AlertCircle } from 'lucide-react'

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
        'Votre fiche Google manque d’avis récents, vos concurrents paraissent plus actifs.',
      ],
      implementation: [
        {
          title: 'Site optimisé mobile-first',
          description: 'Téléphone cliquable en un clic, formulaire court pour urgences, temps de chargement rapide.'
        },
        {
          title: 'Fiche Google complète',
          description: 'Catégories précises (plomberie, urgence, drain), photos de chantiers, zones desservies visibles.'
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
          a: 'La visibilité dépend de la concurrence locale et de votre profil actuel. On ne promet pas de délai.'
        },
        {
          q: 'Qu\'est-ce qui est inclus dans le suivi mensuel ?',
          a: 'Petites modifications de contenu (ajout de services, mise à jour de photos), suivi des avis Google, ajustements de la fiche Google si nécessaire, et corrections de bugs ou problèmes techniques.'
        },
        {
          q: 'Est-ce que je peux annuler si ça marche pas ?',
          a: 'Oui. Le service est mensuel, sans engagement de durée. La résiliation prend effet à la fin de la période payée.'
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
          description: 'Type de toiture, urgence ou pas, code postal. Rien de plus. On privilégie un formulaire rapide.'
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
          a: 'On travaille sur votre différenciation : vos zones spécifiques, vos spécialités, vos avis clients. L’objectif est une présence claire et crédible.'
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
    deneigement: {
      problems: [
        'Les clients cherchent “déneigement urgent” et tombent sur les services municipaux plutôt que sur votre entreprise.',
        'Votre site ne clarifie pas vos forfaits (résidentiel, commercial, licence sous contrat).',
        'Impossible de savoir comment demander une soumission rapidement, et le CTA est caché.',
        'Vous recevez trop de demandes hors zone parce que vos villes desservies ne sont pas affichées clairement.',
      ],
      implementation: [
        {
          title: 'CTA urgence visible partout',
          description: 'Bouton fixe ou bandeau sur mobile, formulaire court (type de contrat + type de propriété + code postal).',
        },
        {
          title: 'Pages forfaits et contrats',
          description: 'Page séparée pour résidentiel/entretiens saisonniers, page pour les contrats commerciaux + services d’application.',
        },
        {
          title: 'Zones desservies avec filtres',
          description: 'Liste ou carte qui montre la couverture par secteur (Montréal, Rive-Sud, couronne nord).',
        },
        {
          title: 'Processus de confirmation',
          description: 'Section “Comment ça marche” pour rassurer, avec les étapes et les points de contact.',
        },
      ],
      faq: [
        {
          q: 'Comment vous gérez les demandes urgentes la nuit ?',
          a: 'On affiche vos heures de couverture telles que vous les confirmez à l’onboarding.',
        },
        {
          q: 'J’ai plusieurs contrats, est-ce que je peux montrer ça ?',
          a: 'Oui, on crée une section “Partenaires et contrats” avec logos, témoignages, et un exemple de calendrier d’intervention.',
        },
        {
          q: 'Est-ce que je peux limiter les demandes hors zone ?',
          a: 'Oui, on affiche les villes desservies + un filtre (ex : “Mon adresse est sur la Rive-Sud”) pour orienter les visiteurs.',
        },
      ],
    },
    renovation: {
      problems: [
        'Les propriétaires ne comprennent pas votre spécialité : cuisine, salle de bain, sous-sol ?',
        'Vos projets manquent de preuves sociales (avant/après, témoignages).',
        'Le formulaire demande trop de détails et les visiteurs abandonnent.',
        'Vous ne montrez pas votre processus ni vos garanties, ce qui freine la confiance.',
      ],
      implementation: [
        {
          title: 'Pages projet par type de chantier',
          description: 'Cuisine, salle de bain, sous-sol, ajout de structure : chaque page présente enjeux, photos et délais.',
        },
        {
          title: 'Sections preuve sociale',
          description: 'Témoignages, études de cas et preuves visuelles, sans promesse de budget ou de délai.',
        },
        {
          title: 'Formulaire filtre (type + budget)',
          description: 'Sélecteurs pour préciser le type de rénovation, l’état des lieux, et la marge de budget pour éviter les demandes non qualifiées.',
        },
        {
          title: 'Processus clair',
          description: 'Timeline étape par étape : visite, planification, exécution, suivi. On montre aussi les partenaires (électricien, ébéniste).',
        },
      ],
      faq: [
        {
          q: 'Vous travaillez avec des designers ou architectes ?',
          a: 'On peut intégrer vos partenaires dans la page “Équipe” ou “Processus”, avec des liens vers leurs portfolios.',
        },
        {
          q: 'Comment on montre mes certifications ?',
          a: 'Badge, logos de licences RBQ ou assurances affichés sur chaque page de service.',
        },
        {
          q: 'Peut-on ajouter des contenus au fil des chantiers ?',
          a: 'Oui, on peut publier un petit “journal de chantier” et mettre à jour les photos ou statuts chaque mois.',
        },
      ],
    },
    electricite: {
      problems: [
        'Votre site mélange les services résidentiels et commerciaux et les clients sont confus.',
        'Il n’y a aucune preuve de vos certifications, ce qui rend les projets plus risqués aux yeux des prospects.',
        'Vous recevez des appels pour des services que vous ne faites pas parce que tout est sur la même page.',
        'Le formulaire capture peu d’informations (type d’intervention, urgence, code postal).',
      ],
      implementation: [
        {
          title: 'Pages séparées par type de service',
          description: 'Résidentiel, commercial, industries, inspection, urgences : chaque page précise vos équipes, plans et photos.',
        },
        {
          title: 'Certifications visibles',
          description: 'RBQ, assurances, formation continue : on met ça dans la section “Pourquoi nous” avec icônes.',
        },
        {
          title: 'Formulaire intelligent',
          description: 'Question “Nature de l’interventions” + “Équipement concerné” + “Urgence” pour orienter le triage.',
        },
        {
          title: 'Aide à la conversion',
          description: 'CTA “Planifier une inspection” ou “Obtenir une soumission rapide”, avec preuve sociale en dessous.',
        },
      ],
      faq: [
        {
          q: 'Comment vous montrez que je suis certifié RBQ ?',
          a: 'On affiche votre numéro RBQ, vos assurances, et un court texte sur vos pratiques de sécurité.',
        },
        {
          q: 'Vous pouvez publier mes fiches techniques ?',
          a: 'Oui, on peut intégrer des téléchargements ou sections FAQ pour chaque service (ex : borne de recharge, panneaux électriques).',
        },
        {
          q: 'Est-ce que le site vous aide à trier les urgences ?',
          a: 'Oui, on met en place un formulaire qui vous alerte avec les infos essentielles pour prioriser (code postal, type, urgence).',
        },
      ],
    },
    cvac: {
      problems: [
        'Vous proposez chauffage, ventilation et climatisation, mais le site ne distingue pas ces expertises.',
        'Les clients ne voient pas vos services d’entretien ou vos forfaits saisonniers.',
        'Il n’y a aucun CTA adapté aux contrats (entretien annuel, optimisation d’efficacité).',
        'Vous souffrez d’un manque de témoignages d’entreprises ou hôtellerie qui demandent la stabilité.',
      ],
      implementation: [
        {
          title: 'Pages Chauffage / Ventilation / Climatisation',
          description: 'Chaque système reçoit sa propre page avec photos, problèmes résolus, et pièces couvertes.',
        },
        {
          title: 'Contrats d’entretien mis de l’avant',
          description: 'Section “Maintenance” avec FAQs sur le périmètre et les limites.',
        },
        {
          title: 'Formulaire “Type d’équipement”',
          description: 'Choix entre thermopompe, fournaise, VMC, besoin en urgence ou projet de remplacement.',
        },
        {
          title: 'Témoignages industriels ou commerciaux',
          description: 'Études de cas avec logos de clients, preuves visuelles et contexte factuel.',
        },
      ],
      faq: [
        {
          q: 'Vous faites des contrats annuels ?',
          a: 'Oui, on affiche clairement les forfaits d’entretien et on peut afficher un formulaire de contrat en ligne.',
        },
        {
          q: 'Est-ce que le site explique les garanties ?',
          a: 'Oui, on crée une section “Garanties & certifications” avec vos manufacturiers préférés.',
        },
        {
          q: 'Peut-on ajouter des alertes de température ?',
          a: 'Oui, on peut intégrer un système pour les clients qui ont besoin d’envoyer des relevés ou photos de leur équipement.',
        },
      ],
    },
    autre: {
      problems: [
        'Le site ne reflète pas votre métier spécifique, donc les prospects ont du mal à comprendre votre valeur.',
        'Il n’y a aucune preuve que vous desservez certains secteurs ou villes.',
        'Vous n’avez pas de CTA clair pour générer des demandes qualifiées.',
        'Vous ne pouvez pas montrer vos résultats sans un format flexible.',
      ],
      implementation: [
        {
          title: 'Page “À propos de votre métier” personnalisée',
          description: 'On écrit un texte clair, on organise vos services par catégorie, et on montre vos valeurs.',
        },
        {
          title: 'CTA adaptée',
          description: 'Choix entre “Demander un plan”, “Vérifier la disponibilité” ou “Recevoir notre fiche technique”.',
        },
        {
          title: 'Zones locales et témoignages',
          description: 'On affiche les villes desservies et des témoignages de clients pour chaque type de projet.',
        },
        {
          title: 'Flexibilité dans le contenu',
          description: 'On peut intégrer des vidéos, PDF, ou autres médias selon votre métier (ex : carrelage, menuiserie, etc.).',
        },
      ],
      faq: [
        {
          q: 'Je ne rentre pas dans une catégorie évidente, et si je ne trouve pas ce dont j’ai besoin ?',
          a: 'Lors de l’onboarding, on discute de votre métier, on définit des services clairs et on crée une arborescence sur mesure.',
        },
        {
          q: 'Est-ce que vous pouvez écrire le contenu à ma place ?',
          a: 'Oui, on rédige un contenu simple, clair et réaliste qui met en valeur vos chantiers et votre expertise.',
        },
        {
          q: 'Je travaille sur plusieurs services, ça va être confus ?',
          a: 'On organise les services par sections (Ex : “Services principaux”, “Services complémentaires”) et on guide le visiteur avec des CTA ciblés.',
        },
      ],
    },
  }

  const content = contentBySlug[trade.slug] || {}

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 md:py-20">
      <PageNavBack className="mb-8" backHref="/metiers" backLabel="Retour aux métiers" />

      <header className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-navy mb-4">{trade.title}</h1>
        <p className="text-xl md:text-2xl text-concrete-600 leading-relaxed">{trade.hero}</p>
      </header>

      {content.problems && (
        <section className="mb-12 bg-concrete-50 rounded-xl p-6 md:p-8 border border-concrete-200">
          {/* was: bg-red-50 border-red-100 */}
          <div className="flex items-center gap-3 mb-5">
            {/* was: text-red-600 */}
            <AlertCircle className="w-6 h-6 text-safety" />
            <h2 className="text-2xl font-semibold text-navy">Problèmes typiques qu'on voit souvent</h2>
          </div>
          <ul className="space-y-3">
            {content.problems.map((problem, idx) => (
              <li key={idx} className="flex gap-3 text-concrete-700">
                {/* was: text-red-500 */}
                <span className="text-safety font-bold">•</span>
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
                  {/* was: text-green-600 */}
                  <Check className="w-5 h-5 text-safety flex-shrink-0 mt-1" />
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
                {/* was: text-green-600 */}
                <Check className="w-5 h-5 text-safety flex-shrink-0 mt-0.5" />
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
        <Link href="/#diagnostic" className="btn-cta inline-flex items-center justify-center px-8 py-4 rounded-lg text-white font-semibold">
          Recevoir mon diagnostic gratuit
        </Link>
        <Link href="/#tarifs" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-concrete-300 text-navy hover:bg-concrete-50 font-semibold">
          Voir les forfaits et prix
        </Link>
      </div>
    </main>
  )
}
