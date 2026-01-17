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

export const SECTOR_PAGES = [
  {
    slug: 'construction-renovation',
    title: 'Construction et rénovation',
    intro:
      'BureauWeb agit comme département web externe pour les entreprises de construction et rénovation. Nous posons l’infrastructure numérique qui clarifie vos services et vos demandes. Le positionnement reste factuel et opérationnel.',
    tradesIntro: 'Métiers fréquemment rencontrés dans ce secteur.',
    tradesList: [
      'Entrepreneurs généraux',
      'Rénovateurs résidentiels',
      'Entrepreneurs en agrandissement',
      'Spécialistes des fondations',
      'Couvreurs',
      'Poseurs de gypse',
      'Menuisiers',
      'Installateurs de revêtements',
    ],
    infrastructure: [
      'Site web clair qui présente les types de projets pris en charge.',
      'Fiche Google structurée et cohérente avec vos informations publiques.',
      'Pages de services lisibles pour éviter les demandes hors périmètre.',
      'Parcours de contact simple (appel, courriel, formulaire).',
      'Base technique fiable et maintenance continue.',
    ],
    diagnostic:
      'Le diagnostic gratuit est un document écrit fondé sur des éléments observables. Il sert à vérifier l’alignement entre vos besoins et notre approche, sans engagement.',
    relatedTrades: ['renovation', 'toiture', 'plomberie', 'electricite'],
  },
  {
    slug: 'services-techniques',
    title: 'Services techniques du bâtiment',
    intro:
      'BureauWeb se positionne comme département web externe pour les services techniques du bâtiment. Nous mettons en place une infrastructure numérique stable pour expliquer vos interventions et vos modes de contact. Le discours reste neutre et orienté vers le service rendu.',
    tradesIntro: 'Exemples de métiers courants dans ce secteur.',
    tradesList: [
      'Électriciens',
      'Plombiers',
      'Techniciens CVAC',
      'Spécialistes en ventilation',
      'Entrepreneurs en chauffage',
      'Inspecteurs techniques',
      'Techniciens de maintenance',
    ],
    infrastructure: [
      'Site web structuré avec sections par type d’intervention.',
      'Fiche Google complète et alignée sur vos services.',
      'Clarté des services et des secteurs desservis.',
      'Contact direct avec options d’appel et de demande écrite.',
      'Base technique sécurisée et maintenance régulière.',
    ],
    diagnostic:
      'Le diagnostic gratuit est remis par écrit à partir d’éléments observables. Il permet de confirmer s’il existe un fit, sans engagement ni promesse.',
    relatedTrades: ['electricite', 'plomberie', 'cvac', 'autre'],
  },
  {
    slug: 'amenagement-exterieur',
    title: 'Aménagement et entretien extérieur',
    intro:
      'BureauWeb agit comme département web externe pour les entreprises d’aménagement et d’entretien extérieur. Nous installons une infrastructure numérique qui présente clairement vos services saisonniers et récurrents. L’approche est factuelle et sans promesse commerciale.',
    tradesIntro: 'Métiers courants rencontrés dans ce secteur.',
    tradesList: [
      'Paysagistes',
      'Poseurs de pavé-uni',
      'Installateurs de clôtures',
      'Constructeurs de terrasses',
      'Spécialistes en irrigation',
      'Entrepreneurs en entretien paysager',
      'Entrepreneurs en déneigement',
    ],
    infrastructure: [
      'Site web avec présentation claire des services saisonniers.',
      'Fiche Google à jour pour la visibilité locale.',
      'Pages services qui précisent les types de mandats.',
      'Contact accessible pour demandes résidentielles et commerciales.',
      'Base technique solide et maintenance planifiée.',
    ],
    diagnostic:
      'Le diagnostic gratuit prend la forme d’un document écrit basé sur ce qui est observable. Il sert à décider s’il y a un fit avec votre organisation, sans engagement.',
    relatedTrades: ['paysagement', 'deneigement', 'renovation', 'autre'],
  },
  {
    slug: 'services-residentiels',
    title: 'Services résidentiels spécialisés',
    intro:
      'BureauWeb fonctionne comme département web externe pour les services résidentiels spécialisés. Nous mettons en place l’infrastructure numérique qui présente vos interventions et votre façon de travailler. Le ton reste neutre et explicatif.',
    tradesIntro: 'Métiers représentatifs dans ce secteur.',
    tradesList: [
      'Menuisiers',
      'Vitriers',
      'Installateurs d’isolation',
      'Poseurs de planchers',
      'Installateurs de revêtements',
      'Spécialistes en salles de bain',
      'Entrepreneurs en finition intérieure',
    ],
    infrastructure: [
      'Site web sobre qui met en avant les services résidentiels.',
      'Fiche Google structurée avec informations de contact fiables.',
      'Clarté des services offerts et des limites d’intervention.',
      'Canaux de contact simples pour les demandes ciblées.',
      'Base technique et maintenance continue.',
    ],
    diagnostic:
      'Le diagnostic gratuit est un écrit basé sur des éléments observables. Il permet de juger si notre façon de travailler convient, sans engagement.',
    relatedTrades: ['renovation', 'plomberie', 'electricite', 'cvac'],
  },
  {
    slug: 'commercial-industriel',
    title: 'Services commerciaux et industriels',
    intro:
      'BureauWeb se positionne comme département web externe pour les services commerciaux et industriels. Nous mettons en place une infrastructure numérique qui clarifie vos prestations et vos canaux de demande. Le langage reste sobre et orienté sur la fiabilité.',
    tradesIntro: 'Métiers courants pour ce type de services.',
    tradesList: [
      'Entrepreneurs en maintenance d’immeubles',
      'Techniciens en mécanique industrielle',
      'Spécialistes en mises aux normes',
      'Entrepreneurs en installations techniques',
      'Équipes de maintenance préventive',
      'Inspecteurs industriels',
      'Entrepreneurs en services commerciaux',
    ],
    infrastructure: [
      'Site web structuré par types de services commerciaux.',
      'Fiche Google alignée avec vos informations corporatives.',
      'Présentation claire des services et de leurs périmètres.',
      'Contact direct avec options de demande écrite.',
      'Base technique fiable et maintenance régulière.',
    ],
    diagnostic:
      'Le diagnostic gratuit est un document écrit basé sur des éléments observables. Il sert à établir s’il y a un fit entre vos besoins et notre cadre, sans engagement.',
    relatedTrades: ['electricite', 'cvac', 'plomberie', 'autre'],
  },
  {
    slug: 'services-mobiles',
    title: 'Services mobiles et locaux',
    intro:
      'BureauWeb agit comme département web externe pour les services mobiles et locaux. Nous installons une infrastructure numérique qui facilite la compréhension de vos interventions et des zones couvertes. L’approche reste neutre et sans promesse de résultats.',
    tradesIntro: 'Métiers souvent présents dans ce secteur.',
    tradesList: [
      'Réparateurs mobiles',
      'Techniciens de dépannage sur route',
      'Entrepreneurs en services d’urgence',
      'Installateurs itinérants',
      'Techniciens en maintenance mobile',
      'Entrepreneurs locaux multi-services',
      'Intervenants sur appel',
    ],
    infrastructure: [
      'Site web simple avec indications claires des zones couvertes.',
      'Fiche Google cohérente pour la recherche locale.',
      'Clarté des services et des types d’intervention.',
      'Contact rapide avec options d’appel et de formulaire.',
      'Base technique fiable et maintenance continue.',
    ],
    diagnostic:
      'Le diagnostic gratuit est transmis par écrit à partir d’éléments observables. Il sert à confirmer le fit avec votre réalité terrain, sans engagement.',
    relatedTrades: ['deneigement', 'plomberie', 'electricite', 'autre'],
  },
  {
    slug: 'autre-service-terrain',
    title: 'Autre service terrain',
    intro:
      'BureauWeb agit comme département web externe pour les services terrain qui ne rentrent pas dans une catégorie standard. Nous mettons en place l’infrastructure numérique nécessaire pour présenter votre offre et recevoir des demandes. Le ton est factuel et sans promesse commerciale.',
    tradesIntro: 'Métiers pouvant se retrouver dans ce secteur.',
    tradesList: [
      'Entrepreneurs en services manuels',
      'Spécialistes de maintenance terrain',
      'Intervenants ponctuels',
      'Installateurs spécialisés',
      'Techniciens multi-services',
      'Entrepreneurs locaux généralistes',
    ],
    infrastructure: [
      'Site web clair pour présenter une offre non standardisée.',
      'Fiche Google complète avec informations essentielles.',
      'Explication précise des services et du périmètre.',
      'Contact direct pour qualifier les demandes entrantes.',
      'Base technique fiable et maintenance continue.',
    ],
    diagnostic:
      'Le diagnostic gratuit est un écrit fondé sur des éléments observables. Il permet de valider le fit avec votre service terrain, sans engagement.',
    relatedTrades: ['autre', 'renovation', 'paysagement', 'electricite'],
  },
]

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
      'CTA 24/7 pour les urgences',
      'Pages « contrat hivernal » et « déneigement commercial »',
      'Zones desservies et temps de réponse clairs',
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
