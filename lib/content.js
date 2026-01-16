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
      'Site vitrine rapide et optimisé mobile (1 page + sections)',
      'Hébergement, SSL et mises à jour de sécurité',
      'Formulaire de demande de soumission (courriel)',
      'Base Google Business Profile (infos, catégories, description)',
      'Suivi mensuel léger (petites corrections incluses)',
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
      'Pages services (2) et zones (2) pour le SEO local',
      'Système d’avis (process + modèles SMS/courriel)',
      'Support prioritaire par courriel (réponse cible 24 h ouvrables)',
      '4 petites modifications incluses par mois',
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
      'Pages services/zones additionnelles (jusqu’à 4 au total)',
      '1 contenu de blogue par mois (court et utile)',
      'Support prioritaire (réponse cible 12 h ouvrables)',
      '8 petites modifications incluses par mois',
    ],
    notes: [
      'Pensé pour les entreprises en croissance qui veulent itérer régulièrement.',
    ],
  },
]

export const ENGAGEMENT_INITIAL_MOIS = 3

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
