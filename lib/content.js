// Contenu centralisé (pricing + SEO). Objectif: cohérence et maintenance simple.

export const PRICING_PLANS = [
  {
    slug: 'depart',
    name: 'Forfait départ',
    monthlyPrice: 199,
    activationFee: 0,
    popular: false,
    description: 'Pour mettre en place une présence web fonctionnelle et maintenable, sans gestion technique.',
    included: [
      'Site vitrine optimisé mobile (structure définie au diagnostic)',
      'Hébergement, SSL et mises à jour de sécurité',
      'Formulaire de demande de soumission (courriel)',
      'Base Google Business Profile (infos, catégories, description)',
      'Rapport mensuel concis (1 page) avec synthèse, 1 ajustement mineur au besoin et vérification mensuelle.',
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
    description: "Pour structurer ou consolider la présence locale et améliorer l’organisation du site.",
    included: [
      'Tout ce qui est inclus dans le forfait départ',
      'Pages de services et de zones géographiques pour le SEO local (selon diagnostic)',
      'Système d’avis (process + modèles SMS/courriel)',
      'Support en français, humain, principalement par écrit (courriel ou texto). Téléphone au besoin (selon le forfait).',
      'Une intervention mineure mensuelle, selon les limites définies (ex. : ajustement de contenu ou correction technique légère)',
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
      'Support en français, humain, principalement par écrit (courriel ou texto). Téléphone au besoin (selon le forfait).',
      'Une intervention mineure mensuelle, selon les limites définies (ex. : ajustement de contenu ou correction technique légère)',
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
    slug: 'fiche-google-audit-entrepreneurs-quebec',
    title: 'Fiche Google locale: audit rapide pour entrepreneurs de services au Québec',
    excerpt: 'Un tour rapide, factuel, pour voir ce qui est cohérent, ce qui manque, et ce qui crée de la confusion.',
    publishedAt: '2026-01-19',
    tags: ['fiche-google', 'seo-local', 'avis-google'],
    sections: [
      {
        h2: 'NAP cohérent entre fiche, site et annuaires',
        p: 'La base d’une fiche locale solide, c’est la cohérence du nom, de l’adresse et du téléphone. Si la fiche affiche « Plomberie Martin » et le site « Plomberie Martin Inc. », le client doute. Même chose si l’adresse est abrégée à un endroit et complète ailleurs, ou si le téléphone principal change selon la page. Pour un entrepreneur de services au Québec, ces détails jouent sur la confiance et la facilité de contact. L’audit consiste à vérifier que les mêmes infos apparaissent partout, dans le même ordre et avec les mêmes mots. Quand le NAP est clair, le client n’a pas besoin de valider trois fois. Il choisit plus vite.',
      },
      {
        h2: 'Catégories et services réellement offerts',
        p: 'Les catégories et services doivent refléter le terrain, pas une liste idéale. Un entrepreneur en toiture peut offrir réparation, entretien et remplacement, mais si la fiche mélange des services non offerts, le client arrive avec une demande qui ne sera pas traitée. Côté Google, la clarté des catégories aide surtout à éviter les malentendus. L’audit consiste à lire la fiche comme un client local: est‑ce que c’est évident, en quelques secondes, ce qui est fait et ce qui ne l’est pas? Une fiche claire réduit les appels hors scope et montre une entreprise qui sait se présenter sans embellir.',
      },
      {
        h2: 'Avis: ce qui est sous contrôle et ce qui ne l’est pas',
        p: 'Les avis influencent la décision, mais ils ne se gèrent pas comme un inventaire. Ce qui est sous contrôle: demander un avis au bon moment, envoyer un lien direct, répondre calmement aux avis difficiles. Ce qui ne l’est pas: le ton du client et le moment où il choisit d’écrire. L’audit observe la dynamique globale plutôt que de juger un avis isolé. On regarde si les réponses sont professionnelles, si les clients comprennent le service rendu, et si la fiche reflète le travail réel. Pour un entrepreneur local, des avis clairs et factuels valent plus que des superlatifs.',
      },
      {
        h2: 'Photos et preuves terrain qui rassurent',
        p: 'Les photos servent à prouver ce qui est dit. Pour un service local, des images de chantiers, d’équipes, d’équipements et de véhicules donnent un repère concret. À l’inverse, des images génériques ou trop lisses peuvent créer un doute. L’audit vérifie si les photos représentent le vrai terrain: types de travaux, contextes locaux, qualité du travail. On vérifie aussi si la fiche montre une activité récente, sans forcer. Une fiche qui expose des preuves simples rassure un client qui n’a pas le temps de lire un long texte.',
      },
      {
        h2: 'Signaux d’alerte qui font hésiter un client',
        p: 'Un client local veut éviter les surprises. Les signaux d’alerte sont souvent simples: horaires incohérents, services contradictoires, absence de zone desservie, ou liens qui ne mènent nulle part. Un autre signal fréquent est l’écart entre le site et la fiche, par exemple une adresse différente ou un téléphone secondaire mis de l’avant sans explication. L’audit cherche ces frictions concrètes. Rien de théorique. L’objectif est de retirer les ambiguïtés qui font penser « est‑ce que c’est vraiment la bonne entreprise? »',
      },
      {
        h2: 'Quand un diagnostic devient utile',
        p: 'Un diagnostic devient utile quand les éléments visibles ne racontent pas la même histoire. Si la fiche, le site et les demandes entrantes ne semblent pas alignés, il faut clarifier ce qui est réel, ce qui est souhaité, et ce qui manque. C’est particulièrement vrai pour les entrepreneurs qui offrent plusieurs services ou qui desservent plusieurs zones. Le diagnostic sert à recadrer ce qui est observable, sans inventer de résultats. L’objectif n’est pas de refaire la fiche au complet, mais d’identifier les points qui bloquent la confiance et la conversion.',
      },
    ],
  },
  {
    slug: 'site-vitrine-local-verifications-conversion',
    title: 'Site vitrine local: 7 vérifications qui évitent les demandes perdues',
    excerpt: 'Une liste de vérifications simples pour voir si le site aide vraiment à recevoir des appels et des demandes.',
    publishedAt: '2026-01-19',
    tags: ['site-vitrine', 'conversion-mobile', 'performance'],
    sections: [
      {
        h2: 'Message clair dès l’arrivée',
        p: 'Un site vitrine local doit dire clairement ce que l’entreprise fait, pour qui, et dans quelle zone. Si l’internaute doit deviner, il quitte. La vérification consiste à lire le haut de page comme un client pressé: est‑ce que le service est évident, est‑ce que la zone est mentionnée, est‑ce que la promesse reste factuelle? Pour un entrepreneur de services au Québec, la clarté est plus importante qu’un long texte. Un message court, concret et cohérent avec la réalité du terrain facilite la décision et évite les demandes hors cible.',
      },
      {
        h2: 'CTA unique et visible sur mobile',
        p: 'La plupart des visites locales se font sur mobile. La vérification est simple: l’action principale est‑elle visible sans chercher? Appel ou demande de soumission, pas les deux en compétition. Un bouton principal clair, visible et stable réduit l’hésitation. Un CTA multiple disperse l’attention. L’objectif n’est pas d’ajouter des boutons, mais d’en garder un seul qui oriente l’action. Pour un service terrain, une action claire est souvent la différence entre un appel réel et une visite qui se perd dans la navigation.',
      },
      {
        h2: 'Téléphone et courriel cliquables',
        p: 'C’est basique, mais souvent négligé. Sur mobile, le numéro doit être cliquable et fiable. Même chose pour le courriel. La vérification consiste à tester le clic, pas seulement à voir le texte. Un numéro dans un visuel ou un footer non cliquable est une occasion manquée. Si l’entreprise reçoit surtout des appels, le téléphone doit être accessible partout où l’attention se pose. Cette vérification est rapide, observable et facile à corriger, mais elle a un impact direct sur la capacité à convertir des visiteurs en demandes.',
      },
      {
        h2: 'Formulaire court et fonctionnel',
        p: 'Un formulaire trop long crée de la friction. Un formulaire qui échoue crée de la frustration. La vérification consiste à tester un envoi réel et à s’assurer que la confirmation est claire. Pour un entrepreneur local, un formulaire court suffit: nom, contact, type de service, zone. Tout le reste peut être clarifié ensuite. Ce qui compte, c’est la fiabilité et la simplicité. Si le formulaire ne fonctionne pas, ou si la confirmation est floue, le visiteur ne saura pas si sa demande est bien partie.',
      },
      {
        h2: 'Preuves minimales et visibles',
        p: 'Les preuves n’ont pas besoin d’être spectaculaires. Elles doivent être vraies. Photos de réalisations, avis, certifications, véhicules identifiés, ou exemples de chantiers locaux. La vérification consiste à se demander si un client peut valider rapidement que l’entreprise existe et travaille réellement dans son secteur. Un site sans preuve concrète ressemble à un gabarit générique, et ça réduit la confiance. Pour un service local, des preuves simples et cohérentes ont plus d’effet qu’un texte long ou un slogan.',
      },
      {
        h2: 'Pages de services et zones utiles',
        p: 'Chaque page doit répondre à une question claire: est‑ce que vous faites ce service, et est‑ce que vous le faites dans ma zone? Des pages trop vagues ou trop nombreuses diluent la clarté. La vérification consiste à lire une page service et à vérifier si elle décrit un service réel, avec des détails concrets, sans promesse. Pour les zones, il faut éviter la répétition mécanique. Une page utile donne un contexte local réel, pas un texte interchangeable. Cela évite le sentiment de « page fabriquée ».',
      },
      {
        h2: 'Quand un diagnostic devient utile',
        p: 'Si plusieurs de ces vérifications échouent, un diagnostic permet de prioriser. L’idée n’est pas de tout refaire, mais de corriger ce qui bloque la conversion et la compréhension. Pour un entrepreneur local, l’important est d’avoir un site qui reflète le terrain: services réels, zones claires, et un contact simple. Un diagnostic sert à évaluer ce qui est visible aujourd’hui, à repérer les incohérences, et à proposer un plan réaliste. C’est un outil de clarté, pas un document marketing.',
      },
    ],
  },
  {
    slug: 'pages-services-zones-seo-local',
    title: 'Pages de services et zones: quand ça aide vraiment (et quand ça nuit)',
    excerpt: 'Ces pages peuvent clarifier l’offre locale ou créer du contenu inutile. Tout dépend de ce qui est vérifiable.',
    publishedAt: '2026-01-19',
    tags: ['seo-local', 'site-vitrine', 'performance'],
    sections: [
      {
        h2: 'À quoi servent vraiment ces pages',
        p: 'Une page de service ou de zone sert d’abord à clarifier. Elle dit ce qui est fait, où, et pour qui. Pour un entrepreneur local, c’est utile quand la page réduit les ambiguïtés et aide le client à se reconnaître. Ce n’est pas un outil de volume, ni un moyen d’énumérer toutes les villes possibles. Une page utile permet à un client de comprendre rapidement si l’entreprise couvre son besoin. Si la page ne répond à aucune question concrète, elle devient un écran de plus, sans valeur. L’objectif doit rester la clarté et la cohérence.',
      },
      {
        h2: 'Ce qui est vérifiable, et ce qui ne l’est pas',
        p: 'Une page utile s’appuie sur des informations vérifiables: services réellement offerts, zones réellement couvertes, preuves concrètes, type de clients servis. Ce qui n’est pas vérifiable crée un doute: promesses vagues, superlatifs, listes de villes sans contexte. Pour un service terrain, les détails concrets comptent: types de projets, contraintes locales, méthodes, équipements, photos réelles. La vérification consiste à se demander: est‑ce que ce texte correspond à ce qui se passe réellement? Si ce n’est pas clair, la page perd sa raison d’être.',
      },
      {
        h2: 'Structure minimale d’une page utile',
        p: 'Une structure simple suffit. Un titre clair, une description factuelle du service ou de la zone, des exemples concrets, et un moyen de contact. L’idée n’est pas d’écrire beaucoup, mais d’écrire juste. Pour une page de service, préciser ce qui est inclus, ce qui ne l’est pas, et le type de demandes visées. Pour une page de zone, indiquer les limites de déplacement et un contexte local réel. Une page utile ne ressemble pas à un modèle générique. Elle ressemble à un briefing terrain, sans embellir.',
      },
      {
        h2: 'Risques du “mass city”',
        p: 'Créer des dizaines de pages de villes presque identiques donne l’impression d’un contenu fabriqué. Les clients le sentent, et les signaux deviennent moins crédibles. Pour un entrepreneur local, le risque est double: perte de confiance et confusion sur les zones réellement desservies. Une page de zone doit avoir une raison d’exister: un type de client local, une contrainte de déplacement, un exemple réel. Sans ça, la page devient un bruit inutile. Il vaut mieux moins de pages, mais plus justes, que des pages en série sans fond.',
      },
      {
        h2: 'Signaux qui indiquent qu’il faut attendre',
        p: 'Si les services ne sont pas clairement définis, ou si les zones changent selon les saisons, il vaut mieux attendre avant de créer des pages dédiées. Même chose si les preuves terrain sont faibles ou si les informations de base ne sont pas cohérentes. Une page de service ou de zone amplifie ce qui est déjà vrai. Si la base est floue, la page accentue la confusion. Pour un entrepreneur local, le bon moment est celui où les services sont stables et où les limites sont claires. Sinon, la page devient un texte qui ne reflète pas le terrain.',
      },
      {
        h2: 'Quand un diagnostic devient utile',
        p: 'Un diagnostic est utile quand il faut trancher entre créer des pages utiles ou éviter du contenu inutile. Il permet d’identifier ce qui est vérifiable, ce qui manque, et ce qui doit être clarifié avant d’écrire. Pour un service local, la clarté des services et des zones est un facteur de confiance. Le diagnostic aide à structurer cette clarté sans inventer. Il ne sert pas à produire du volume, mais à décider quoi dire et quoi éviter. C’est un filtre pratique avant d’ajouter des pages.',
      },
    ],
  },
]
