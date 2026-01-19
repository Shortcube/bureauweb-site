export const MODELES = [
  {
    slug: 'plomberie',
    metierLabel: 'Plombier',
    regionLabel: 'Montréal',
    heroTitle: 'Plombier à Montréal (exemple)',
    heroSubtitle:
      'Site vitrine optimisé mobile avec contact simple. Informations à confirmer selon votre entreprise.',
    services: [
      'Débouchage et drainage (résidentiel/commercial)',
      'Réparation de fuites d’eau',
      'Installation de robinetterie',
      'Remplacement de chauffe-eau',
      'Inspection visuelle de plomberie',
      'Entretien préventif',
      'Raccordement d’appareils',
      'Réparation de toilettes et éviers',
    ],
    zones: ['Montréal', 'Laval', 'Longueuil', 'Rive-Sud', 'Rive-Nord', 'Montérégie', 'Lanaudière'],
    processSteps: [
      {
        title: 'Appel ou formulaire',
        detail: 'On précise le besoin et les contraintes d’accès.',
      },
      {
        title: 'Évaluation',
        detail: 'Visite ou échange photos selon la situation.',
      },
      {
        title: 'Soumission',
        detail: 'Soumission écrite avec périmètre clair.',
      },
      {
        title: 'Travaux',
        detail: 'Intervention planifiée, documentation si requis.',
      },
    ],
    faq: [
      {
        q: 'Êtes-vous membres de la RBQ ?',
        a: 'À confirmer selon l’entreprise. Le numéro RBQ devrait être affiché si requis.',
      },
      {
        q: 'Intervenez-vous en urgence ?',
        a: 'À confirmer. Les modalités d’urgence varient selon la disponibilité.',
      },
      {
        q: 'Faites-vous des travaux commerciaux ?',
        a: 'À confirmer selon le périmètre de services choisi.',
      },
      {
        q: 'Pouvez-vous installer un chauffe-eau fourni par le client ?',
        a: 'À confirmer. Certains fabricants exigent une installation certifiée.',
      },
      {
        q: 'Proposez-vous une inspection préventive ?',
        a: 'Oui, sur demande, pour éviter les problèmes récurrents.',
      },
      {
        q: 'Quels modes de paiement acceptez-vous ?',
        a: 'À confirmer. Les options sont précisées sur la soumission.',
      },
    ],
    contact: {
      company: 'Plomberie Horizon (exemple)',
      address: '1234 Rue Sainte-Catherine O., Montréal (exemple)',
      phone: '514 555-0182',
      email: 'info@plomberie-horizon.exemple',
      hours: 'Lun–Ven 7 h–17 h (exemple)',
    },
    theme: {
      icon: 'Wrench',
      accentClass: 'text-safety',
    },
    reportExample: {
      qaChecks: [
        { label: 'Téléphone cliquable sur mobile', status: 'Oui' },
        { label: 'Formulaire valide les champs requis', status: 'Oui' },
        { label: 'Pages services/zones indexables', status: 'Oui' },
        { label: 'Photos réelles fournies', status: 'Non (à fournir)' },
      ],
      microAmelioration: 'Clarifier les services hors urgence sur la page Services.',
      prochaineAction: 'Confirmer la liste des zones exactes avec l’entreprise.',
      inconnus: ['Numéro RBQ à confirmer', 'Assurances responsabilité à confirmer'],
    },
  },
  {
    slug: 'toiture',
    metierLabel: 'Couvreur',
    regionLabel: 'Laval',
    heroTitle: 'Couvreur à Laval (exemple)',
    heroSubtitle:
      'Présentation claire des services de toiture. Informations fictives à confirmer selon votre entreprise.',
    services: [
      'Inspection de toiture',
      'Réparation de bardeaux',
      'Réparation de membrane',
      'Ventilation et évents de toit',
      'Détection d’infiltrations',
      'Entretien saisonnier',
      'Remplacement partiel',
      'Soumission pour toiture complète',
    ],
    zones: ['Laval', 'Montréal', 'Rive-Nord', 'Terrebonne', 'Blainville', 'Mascouche'],
    processSteps: [
      {
        title: 'Prise de contact',
        detail: 'Résumé du problème et accès au toit.',
      },
      {
        title: 'Inspection',
        detail: 'Évaluation visuelle et photos si nécessaire.',
      },
      {
        title: 'Soumission',
        detail: 'Détails des travaux et des matériaux proposés.',
      },
      {
        title: 'Exécution',
        detail: 'Travaux planifiés, suivi de fin de chantier.',
      },
    ],
    faq: [
      {
        q: 'Offrez-vous la réparation et le remplacement complet ?',
        a: 'Oui, selon l’état de la toiture et le budget.',
      },
      {
        q: 'Avez-vous une licence RBQ ?',
        a: 'À confirmer. Le numéro RBQ doit être disponible si requis.',
      },
      {
        q: 'Intervenez-vous après une tempête ?',
        a: 'À confirmer. Les interventions d’urgence dépendent de la capacité.',
      },
      {
        q: 'Quels matériaux installez-vous ?',
        a: 'À confirmer (bardeaux, membrane, métal, etc.).',
      },
      {
        q: 'Faites-vous l’entretien annuel ?',
        a: 'Oui, sur demande, pour inspecter l’état général.',
      },
      {
        q: 'Proposez-vous une garantie ?',
        a: 'À confirmer. Les garanties varient selon les matériaux.',
      },
    ],
    contact: {
      company: 'Toiture Laurentides (exemple)',
      address: '2250 Boul. du Souvenir, Laval (exemple)',
      phone: '450 555-0139',
      email: 'contact@toiture-laurentides.exemple',
      hours: 'Lun–Sam 7 h–18 h (exemple)',
    },
    theme: {
      icon: 'Home',
      accentClass: 'text-navy',
    },
    reportExample: {
      qaChecks: [
        { label: 'CTA soumission visible au-dessus du pli', status: 'Oui' },
        { label: 'Ancrages Services/Zones fonctionnels', status: 'Oui' },
        { label: 'Photos réelles disponibles', status: 'Non (à fournir)' },
        { label: 'FAQ métier présente', status: 'Oui' },
      ],
      microAmelioration: 'Ajouter un texte sur la ventilation de toiture.',
      prochaineAction: 'Confirmer les matériaux réellement offerts.',
      inconnus: ['Numéro RBQ à confirmer', 'Couverture d’assurance à confirmer'],
    },
  },
  {
    slug: 'paysagement',
    metierLabel: 'Paysagiste',
    regionLabel: 'Rive-Sud',
    heroTitle: 'Paysagiste sur la Rive-Sud (exemple)',
    heroSubtitle:
      'Site vitrine clair pour services extérieurs. Données fictives, à confirmer selon votre entreprise.',
    services: [
      'Conception d’aménagement extérieur',
      'Pose de pavé-uni',
      'Installation de plates-bandes',
      'Entretien de pelouse',
      'Taille et entretien d’arbustes',
      'Irrigation (installation/entretien)',
      'Nivellement et préparation du sol',
      'Petits travaux de drainage',
    ],
    zones: ['Brossard', 'Longueuil', 'Saint-Hubert', 'Boucherville', 'La Prairie', 'Saint-Lambert'],
    processSteps: [
      {
        title: 'Prise de besoin',
        detail: 'Description du terrain et objectifs du projet.',
      },
      {
        title: 'Visite',
        detail: 'Évaluation sur place si nécessaire.',
      },
      {
        title: 'Soumission',
        detail: 'Proposition par type de travaux.',
      },
      {
        title: 'Planification',
        detail: 'Calendrier selon la saison et la météo.',
      },
    ],
    faq: [
      {
        q: 'Faites-vous des projets complets et des petits mandats ?',
        a: 'Oui, selon la disponibilité et la saison.',
      },
      {
        q: 'Offrez-vous un plan d’entretien ?',
        a: 'Oui, sur demande, avec fréquence à confirmer.',
      },
      {
        q: 'Pouvez-vous travailler avec un budget fixe ?',
        a: 'À confirmer. Le périmètre est défini dans la soumission.',
      },
      {
        q: 'Les matériaux sont-ils inclus ?',
        a: 'À confirmer selon le type de mandat.',
      },
      {
        q: 'Intervenez-vous en copropriété ?',
        a: 'À confirmer selon la taille du terrain.',
      },
      {
        q: 'Faites-vous l’ouverture/fermeture de terrain ?',
        a: 'Oui, selon la saison.',
      },
    ],
    contact: {
      company: 'Paysagement Rivage (exemple)',
      address: '8900 Ch. de Chambly, Longueuil (exemple)',
      phone: '450 555-0221',
      email: 'bonjour@paysagement-rivage.exemple',
      hours: 'Lun–Ven 8 h–17 h (exemple)',
    },
    theme: {
      icon: 'Leaf',
      accentClass: 'text-concrete-700',
    },
    reportExample: {
      qaChecks: [
        { label: 'Services saisonniers bien séparés', status: 'Oui' },
        { label: 'Zones desservies listées', status: 'Oui' },
        { label: 'Galerie photo fournie', status: 'Non (à fournir)' },
        { label: 'Formulaire fonctionne sur mobile', status: 'Oui' },
      ],
      microAmelioration: 'Clarifier les travaux de drainage offerts.',
      prochaineAction: 'Valider les photos de réalisations disponibles.',
      inconnus: ['Assurances responsabilité à confirmer', 'Équipe disponible en haute saison'],
    },
  },
  {
    slug: 'deneigement',
    metierLabel: 'Entrepreneur en déneigement',
    regionLabel: 'Montréal',
    heroTitle: 'Déneigement à Montréal (exemple)',
    heroSubtitle:
      'Présence claire pour services hivernaux. Informations fictives à confirmer selon votre entreprise.',
    services: [
      'Déneigement résidentiel',
      'Déneigement commercial',
      'Contrats saisonniers',
      'Déglacement des accès',
      'Épandage d’abrasifs',
      'Dégagement d’issues',
      'Suivi des avis de tempête',
    ],
    zones: ['Montréal', 'Outremont', 'Villeray', 'Saint-Laurent', 'Ville-Marie', 'Ahuntsic'],
    processSteps: [
      {
        title: 'Demande initiale',
        detail: 'Type de propriété et priorités de déneigement.',
      },
      {
        title: 'Évaluation',
        detail: 'Superficie, accès, contraintes de stationnement.',
      },
      {
        title: 'Soumission',
        detail: 'Tarification par contrat ou par passage.',
      },
      {
        title: 'Service hivernal',
        detail: 'Interventions selon les conditions météo.',
      },
    ],
    faq: [
      {
        q: 'Proposez-vous des contrats saisonniers ?',
        a: 'Oui, selon les types de propriétés.',
      },
      {
        q: 'Faites-vous le déglaçage ?',
        a: 'Oui, sur demande et selon les accès.',
      },
      {
        q: 'Quand déclenchez-vous une intervention ?',
        a: 'À confirmer selon l’épaisseur et les conditions.',
      },
      {
        q: 'Pouvez-vous prioriser les issues de secours ?',
        a: 'Oui, si précisé à la soumission.',
      },
      {
        q: 'Travaillez-vous la nuit ?',
        a: 'À confirmer selon la logistique.',
      },
      {
        q: 'Avez-vous une assurance ?',
        a: 'À confirmer. Les documents sont fournis sur demande.',
      },
    ],
    contact: {
      company: 'Déneigement Ville-Neige (exemple)',
      address: '4100 Av. Papineau, Montréal (exemple)',
      phone: '514 555-0475',
      email: 'service@deneigement-ville-neige.exemple',
      hours: 'Service saisonnier (exemple)',
    },
    theme: {
      icon: 'Snowflake',
      accentClass: 'text-concrete-600',
    },
    reportExample: {
      qaChecks: [
        { label: 'Services hivernaux regroupés', status: 'Oui' },
        { label: 'FAQ sur déclenchement des passages', status: 'Oui' },
        { label: 'Modalités de contrat précisées', status: 'À confirmer' },
        { label: 'Formulaire mobile testés', status: 'Oui' },
      ],
      microAmelioration: 'Ajouter une section sur le déglaçage.',
      prochaineAction: 'Confirmer la couverture exacte par quartier.',
      inconnus: ['Assurance responsabilité à confirmer', 'Disponibilité de nuit à confirmer'],
    },
  },
  {
    slug: 'renovation',
    metierLabel: 'Entrepreneur en rénovation',
    regionLabel: 'Lanaudière',
    heroTitle: 'Entrepreneur en rénovation dans Lanaudière (exemple)',
    heroSubtitle:
      'Structure de site vitrine pour projets résidentiels. Informations fictives, à confirmer.',
    services: [
      'Rénovation de cuisine',
      'Rénovation de salle de bain',
      'Finition de sous-sol',
      'Travaux de structure légère',
      'Remplacement de planchers',
      'Installation de cloisons',
      'Peinture et finition intérieure',
      'Coordination de sous-traitants',
    ],
    zones: ['Joliette', 'Repentigny', 'Terrebonne', 'L’Assomption', 'Mascouche', 'Lavaltrie'],
    processSteps: [
      {
        title: 'Premier contact',
        detail: 'Budget approximatif et type de projet.',
      },
      {
        title: 'Visite',
        detail: 'Relevé des mesures et contraintes.',
      },
      {
        title: 'Soumission',
        detail: 'Détails des travaux et calendrier indicatif.',
      },
      {
        title: 'Chantier',
        detail: 'Exécution par phases et suivi.',
      },
    ],
    faq: [
      {
        q: 'Avez-vous une licence RBQ ?',
        a: 'À confirmer selon l’entreprise. Le numéro RBQ devrait être affiché.',
      },
      {
        q: 'Pouvez-vous gérer les permis ?',
        a: 'À confirmer selon le type de travaux.',
      },
      {
        q: 'Proposez-vous des plans ?',
        a: 'À confirmer. Les plans peuvent être fournis par un partenaire.',
      },
      {
        q: 'Travaillez-vous en occupation ?',
        a: 'Oui, selon l’organisation du chantier.',
      },
      {
        q: 'Faites-vous des petits travaux ?',
        a: 'À confirmer selon la charge de travail.',
      },
      {
        q: 'Quels délais prévoir ?',
        a: 'À confirmer. Le calendrier dépend du projet.',
      },
    ],
    contact: {
      company: 'Rénovation Nord-Est (exemple)',
      address: '75 Rue Beaudry, Joliette (exemple)',
      phone: '450 555-0312',
      email: 'info@renovation-nord-est.exemple',
      hours: 'Lun–Ven 8 h–17 h (exemple)',
    },
    theme: {
      icon: 'Hammer',
      accentClass: 'text-navy',
    },
    reportExample: {
      qaChecks: [
        { label: 'Navigation ancrée par section', status: 'Oui' },
        { label: 'Processus en 4 étapes clair', status: 'Oui' },
        { label: 'Liste des services détaillée', status: 'Oui' },
        { label: 'Portfolio réel', status: 'Non (à fournir)' },
      ],
      microAmelioration: 'Ajouter une note sur la coordination des sous-traitants.',
      prochaineAction: 'Confirmer les spécialités prioritaires.',
      inconnus: ['Numéro RBQ à confirmer', 'Assurances responsabilité à confirmer'],
    },
  },
  {
    slug: 'electricite',
    metierLabel: 'Électricien',
    regionLabel: 'Montréal',
    heroTitle: 'Électricien à Montréal (exemple)',
    heroSubtitle:
      'Site vitrine factuel pour interventions électriques. Informations fictives à confirmer.',
    services: [
      'Mise aux normes électriques',
      'Remplacement de panneau',
      'Installation d’éclairage',
      'Branchement d’appareils',
      'Ajout de prises et circuits',
      'Inspection électrique visuelle',
      'Service résidentiel et commercial',
    ],
    zones: ['Montréal', 'Laval', 'Longueuil', 'Rive-Sud', 'Rive-Nord', 'West Island'],
    processSteps: [
      {
        title: 'Demande',
        detail: 'Type de bâtiment et symptômes.',
      },
      {
        title: 'Évaluation',
        detail: 'Inspection ou échange technique.',
      },
      {
        title: 'Soumission',
        detail: 'Liste des travaux à réaliser.',
      },
      {
        title: 'Intervention',
        detail: 'Travaux sécuritaires, documentation si applicable.',
      },
    ],
    faq: [
      {
        q: 'Êtes-vous membres de la CMEQ ?',
        a: 'À confirmer selon l’entreprise. Les informations doivent être visibles si requis.',
      },
      {
        q: 'Faites-vous des mises aux normes ?',
        a: 'Oui, selon le diagnostic et le code applicable.',
      },
      {
        q: 'Installez-vous des bornes de recharge ?',
        a: 'À confirmer selon l’équipement disponible.',
      },
      {
        q: 'Pouvez-vous intervenir rapidement ?',
        a: 'À confirmer. Les délais dépendent de la disponibilité.',
      },
      {
        q: 'Travaillez-vous sur des panneaux existants ?',
        a: 'Oui, selon l’état du panneau.',
      },
      {
        q: 'Offrez-vous une estimation écrite ?',
        a: 'Oui, avant le début des travaux.',
      },
    ],
    contact: {
      company: 'Électricité Plateau (exemple)',
      address: '3100 Rue Saint-Denis, Montréal (exemple)',
      phone: '514 555-0624',
      email: 'contact@electricite-plateau.exemple',
      hours: 'Lun–Ven 7 h–16 h (exemple)',
    },
    theme: {
      icon: 'Bolt',
      accentClass: 'text-safety',
    },
    reportExample: {
      qaChecks: [
        { label: 'CTA contact clair', status: 'Oui' },
        { label: 'Services résidentiel/commercial séparés', status: 'Oui' },
        { label: 'Certifications affichées', status: 'À confirmer' },
        { label: 'FAQ sur mises aux normes', status: 'Oui' },
      ],
      microAmelioration: 'Ajouter une précision sur les bornes de recharge si pertinentes.',
      prochaineAction: 'Valider la liste des services prioritaires.',
      inconnus: ['Numéro RBQ/CMEQ à confirmer', 'Assurance responsabilité à confirmer'],
    },
  },
  {
    slug: 'cvac',
    metierLabel: 'Entrepreneur CVAC',
    regionLabel: 'Rive-Nord',
    heroTitle: 'Entrepreneur CVAC sur la Rive-Nord (exemple)',
    heroSubtitle:
      'Page vitrine compacte pour chauffage, ventilation et climatisation. Informations fictives à confirmer.',
    services: [
      'Installation de thermopompes',
      'Entretien de systèmes CVAC',
      'Diagnostic de climatisation',
      'Remplacement de filtres',
      'Ventilation résidentielle',
      'Chauffage central',
      'Maintenance préventive',
    ],
    zones: ['Rive-Nord', 'Laval', 'Boisbriand', 'Sainte-Thérèse', 'Saint-Eustache', 'Mirabel'],
    processSteps: [
      {
        title: 'Demande initiale',
        detail: 'Type d’équipement et symptômes.',
      },
      {
        title: 'Évaluation',
        detail: 'Visite technique ou échange de photos.',
      },
      {
        title: 'Soumission',
        detail: 'Solutions proposées et options d’équipement.',
      },
      {
        title: 'Installation/entretien',
        detail: 'Travaux planifiés et suivi.',
      },
    ],
    faq: [
      {
        q: 'Installez-vous des thermopompes ?',
        a: 'Oui, selon le type d’équipement souhaité.',
      },
      {
        q: 'Faites-vous l’entretien annuel ?',
        a: 'Oui, sur demande.',
      },
      {
        q: 'Offrez-vous des services commerciaux ?',
        a: 'À confirmer selon la capacité et les certifications.',
      },
      {
        q: 'Pouvez-vous diagnostiquer un bruit anormal ?',
        a: 'Oui, lors de l’évaluation.',
      },
      {
        q: 'Proposez-vous des options écoénergétiques ?',
        a: 'À confirmer selon les produits disponibles.',
      },
      {
        q: 'Quels sont vos délais ?',
        a: 'À confirmer selon la saison.',
      },
    ],
    contact: {
      company: 'CVAC Boréal (exemple)',
      address: '1200 Boul. Curé-Labelle, Saint-Eustache (exemple)',
      phone: '450 555-0750',
      email: 'info@cvac-boreal.exemple',
      hours: 'Lun–Ven 7 h–17 h (exemple)',
    },
    theme: {
      icon: 'Fan',
      accentClass: 'text-concrete-700',
    },
    reportExample: {
      qaChecks: [
        { label: 'Liste des équipements couverts', status: 'Oui' },
        { label: 'Formulaire avec type de besoin', status: 'Oui' },
        { label: 'Documentation technique fournie', status: 'À confirmer' },
        { label: 'Zones desservies listées', status: 'Oui' },
      ],
      microAmelioration: 'Ajouter une note sur l’entretien des filtres.',
      prochaineAction: 'Confirmer les marques d’équipement supportées.',
      inconnus: ['Certifications à confirmer', 'Couverture commerciale à confirmer'],
    },
  },
]

export const MODELES_BY_SLUG = Object.fromEntries(MODELES.map((modele) => [modele.slug, modele]))
