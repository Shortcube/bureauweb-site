import './globals.css'

export const metadata = {
  title: 'BureauWeb.ca | Infrastructure web pour entrepreneurs québécois',
  description: "Votre département web externe. Nous bâtissons, hébergeons et maintenons votre infrastructure numérique. Site performant + Optimisation Google + Système d'avis. Un forfait mensuel fixe, sans surprises.",
  keywords: 'site web entrepreneur, infrastructure web québec, google business profile, site plombier, site couvreur, site paysagiste, site entrepreneur construction',
  authors: [{ name: 'BureauWeb' }],
  openGraph: {
    title: 'BureauWeb.ca | Infrastructure web pour entrepreneurs québécois',
    description: "L'infrastructure web complète pour entrepreneurs québécois. Site performant + Optimisation Google + Système d'avis.",
    locale: 'fr_CA',
    type: 'website',
    siteName: 'BureauWeb.ca',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BureauWeb.ca | Infrastructure web pour entrepreneurs québécois',
    description: "L'infrastructure web complète pour entrepreneurs québécois.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr-CA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background">
        {children}
      </body>
    </html>
  )
}
