// Contenu centralisé (pricing + SEO). Objectif: cohérence et maintenance simple.

export const PRICING_PLANS = [
  {
    slug: 'depart',
    name: 'Forfait départ',
    monthlyPrice: 199,
    activationFee: 0,
    popular: false,
    description: 'Pour partir propre, sans se battre avec la technique.',
    included: [
      'Site vitrine optimisé mobile (structure définie au diagnostic)',
      'Hébergement, SSL et mises à jour de sécurité',
      'Formulaire de demande de soumission (courriel)',
      'Base Google Business Profile (infos, catégories, description)',
      'Suivi mensuel: 1 micro-amélioration, QA, rapport 1 page (selon limites mensuelles)',
    ],
    notes: [
      "Aucune promesse de résultats, on met en place un système mesurable.",
    ],
  },
  {
    slug: 'pro',
    name: 'Forfait pro',
    monthlyPrice: 349,
    activationFee: 499,
    popular: true,
    description: "Pour convertir davantage et structurer le SEO local.",
    included: [
      'Tout ce qui est inclus dans le forfait départ',
      'Pages services et zones pour le SEO local (selon diagnostic)',
      'Système d’avis (process + modèles SMS/courriel)',
      'Support par courriel (réponse sous 2 jours ouvrables)',
      'Micro-amélioration mensuelle selon limites',
    ],
    notes: [
      'Activation: onboarding + collecte des accès + mise en place des fondations.',
    ],
  },
  {
    slug: 'croissance',
    name: 'Forfait croissance',
    monthlyPrice: 549,
    activationFee: 799,
    popular: false,
    description: 'Pour pousser la cadence de contenu et l’itération.',
    included: [
      'Tout ce qui est inclus dans le forfait pro',
      'Pages services/zones additionnelles (selon diagnostic)',
      'Contenu éditorial: 1 page courte/mois (FAQ ou guide), si validé au diagnostic, incluse dans la micro-amélioration mensuelle',
      'Support par courriel (réponse sous 2 jours ouvrables)',
      'Micro-amélioration mensuelle selon limites',
    ],
    notes: [
      'Pensé pour les entreprises en croissance qui veulent itérer régulièrement.',
    ],
  },
]

export const ENGAGEMENT_INITIAL_MOIS = 'Aucun contrat à long terme'


export { SECTOR_PAGES } from './sectors'

export const TRADE_PAGES = [
  {
    slug: 'plomberie',
    title: 'Sites web pour plombiers au Québec',
    hero: 'On met en place une présence en ligne qui aide vos clients à vous trouver et à vous contacter.',
    bullets: [
      'CTA clair « soumission » sur mobile',
      'Pages services et zones pour le SEO local',
      'Fiche Google structurée pour les appels',
    ],
    dropdownLabel: 'Plombier',
  },
  {
    slug: 'toiture',
    title: 'Sites web pour couvreurs au Québec',
    hero: 'Un site simple, rapide, et orienté conversion, sans promesses inventées.',
    bullets: [
      'Photos de réalisations + avis',
      'Pages services (bardeaux, tôle, etc.)',
      'Zones desservies',
    ],
    dropdownLabel: 'Couvreur',
  },
  {
    slug: 'paysagement',
    title: 'Sites web pour paysagistes au Québec',
    hero: 'On vous aide à être trouvable sur Google et à recevoir des demandes claires.',
    bullets: [
      'Galerie avant/après',
      'Services saisonniers',
      'Formulaire qui filtre mieux les demandes',
    ],
    dropdownLabel: 'Paysagiste',
  },
  {
    slug: 'deneigement',
    title: 'Sites web pour entrepreneurs en déneigement au Québec',
    hero: 'On montre vos services hivernaux, vos forfaits et vos interventions d\'urgence pour que les clients sachent qui appeler dès la première chute de neige.',
    bullets: [
      'CTA clair pour les demandes urgentes',
      'Pages « contrat hivernal » et « déneigement commercial »',
      'Zones desservies clairement affichées',
    ],
    dropdownLabel: 'Entrepreneur en déneigement',
  },
  {
    slug: 'renovation',
    title: 'Sites web pour entrepreneurs en rénovation au Québec',
    hero: 'Mettons en valeur vos projets de rénovation, votre méthode et votre sérieux pour convaincre les propriétaires de vous confier leur chantier.',
    bullets: [
      'Avant/après et chantiers types',
      'Pages services par spécialité (salle de bain, cuisine, sous-sol)',
      'Processus de soumission clair',
    ],
    dropdownLabel: 'Entrepreneur en rénovation',
  },
  {
    slug: 'electricite',
    title: 'Sites web pour électriciens au Québec',
    hero: 'On clarifie vos services électriques, vos certifications et vos secteurs pour que vos clients sachent exactement ce que vous faites.',
    bullets: [
      'Services (résidentiel, commercial, urgences)',
      'Certifications et assurances affichées',
      'Demande de soumission rapide avec type de service',
    ],
    dropdownLabel: 'Électricien',
  },
  {
    slug: 'cvac',
    title: 'Sites web pour entrepreneurs CVAC au Québec',
    hero: 'Chauffage, ventilation et climatisation, on explique vos remplacements, votre maintenance et vos interventions d\'urgence.',
    bullets: [
      'Page chauffage + climatisation + ventilation',
      'Formulaire qui filtre type d’équipement et urgences',
      'Photos d’installations propres',
    ],
    dropdownLabel: 'Entrepreneur CVAC',
  },
  {
    slug: 'autre',
    title: 'Sites web pour entrepreneurs en services manuels',
    hero: 'Si vous ne trouvez pas votre métier ici, on construit un site sur mesure qui présente vos compétences et vos zones locales.',
    bullets: [
      'Processus d’onboarding personnalisé',
      'Contenu centré sur vos services et différenciation',
      'Mis à jour rapide selon vos priorités',
    ],
    dropdownLabel: 'Entrepreneur général',
  },
]

export const REGION_PAGES = [
  {
    slug: 'montreal',
    title: 'Présence en ligne pour entrepreneurs à Montréal',
    hero: 'Site + fiche Google, pensés pour le local.',
  },
  {
    slug: 'rive-sud',
    title: 'Présence en ligne pour entrepreneurs sur la Rive-Sud',
    hero: 'On s’occupe de la technique, vous faites vos chantiers.',
  },
]

export const BLOG_POSTS = [
  {
    slug: 'avis-google-entrepreneurs',
    title: 'Avis Google: ce qui change vraiment pour un entrepreneur local',
    excerpt: 'Sans promesse magique, juste ce qui est observable et utile pour mieux convertir.',
    publishedAt: '2026-01-15',
    sections: [
      { h2: 'Pourquoi les avis comptent', p: 'Ils servent surtout de preuve sociale au moment où un client hésite.' },
      { h2: 'Ce qui est sous votre contrôle', p: 'Demande structurée, lien direct, et suivi simple.' },
      { h2: 'Ce qui ne l’est pas', p: 'Vous ne contrôlez pas qui laisse un avis, ni son contenu.' },
    ],
  },
  {
    slug: 'site-vitrine-conversion',
    title: 'Un site vitrine qui convertit: la base (sans se compliquer)',
    excerpt: 'Le strict nécessaire pour recevoir des appels et des demandes claires.',
    publishedAt: '2026-01-15',
    sections: [
      { h2: 'Mobile d’abord', p: 'CTA visible, téléphone cliquable, formulaire court.' },
      { h2: 'Une seule action principale', p: 'Appel ou soumission, pas dix liens.' },
      { h2: 'Mesurer sans se mentir', p: 'On suit les demandes, pas des vanity metrics.' },
    ],
  },
]
