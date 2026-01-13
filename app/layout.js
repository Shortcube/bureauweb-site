import { Inter } from 'next/font/google'
import './globals.css'

// Optimisation des fonts avec next/font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800']
})

export const metadata = {
  title: 'BureauWeb.ca | Infrastructure web pour entrepreneurs québécois',
  description: "Votre département web externe. Nous bâtissons, hébergeons et maintenons votre infrastructure numérique. Site performant + Optimisation Google + Système d'avis. Un forfait mensuel fixe, sans surprises.",
  keywords: 'site web entrepreneur, infrastructure web québec, google business profile, site plombier, site couvreur, site paysagiste, site entrepreneur construction, rive-sud, montréal',
  authors: [{ name: 'BureauWeb' }],
  creator: 'BureauWeb',
  publisher: 'BureauWeb',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bureauweb.ca'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-CA': '/',
    },
  },
  openGraph: {
    title: 'BureauWeb.ca | Infrastructure web pour entrepreneurs québécois',
    description: "L'infrastructure web complète pour entrepreneurs québécois. Site performant + Optimisation Google + Système d'avis. Un forfait mensuel fixe, sans surprises.",
    url: 'https://bureauweb.ca',
    siteName: 'BureauWeb.ca',
    locale: 'fr_CA',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "BureauWeb - Infrastructure web pour entrepreneurs québécois",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BureauWeb.ca | Infrastructure web pour entrepreneurs québécois',
    description: "L'infrastructure web complète pour entrepreneurs québécois. Site performant + Optimisation Google + Système d'avis.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-token-a-ajouter',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
}

export default function RootLayout({ children }) {
  // Structured Data pour le SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BureauWeb",
    "description": "Infrastructure web complète pour entrepreneurs québécois",
    "url": "https://bureauweb.ca",
    "telephone": "+1-514-XXX-XXXX",
    "email": "info@bureauweb.ca",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Longueuil",
      "addressRegion": "QC",
      "addressCountry": "CA"
    },
    "areaServed": [
      { "@type": "City", "name": "Montréal" },
      { "@type": "City", "name": "Longueuil" },
      { "@type": "City", "name": "Laval" },
      { "@type": "City", "name": "Rive-Sud" },
      { "@type": "City", "name": "Rive-Nord" }
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "12"
    }
  }

  return (
    <html lang="fr-CA" className={inter.variable}>
      <head>
        {/* FIX CRITIQUE : Encodage UTF-8 */}
        <meta charSet="utf-8" />
        
        {/* Structured Data pour Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-background antialiased">
        {children}
      </body>
    </html>
  )
}
