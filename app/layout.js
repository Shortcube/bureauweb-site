import { Inter } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/privacy/CookieBanner'
import { siteConfig, formatPhoneDisplay } from '@/lib/site-config'

// Optimisation des fonts avec next/font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800']
})

export const metadata = {
  title: 'BureauWeb.ca | Infrastructure web pour entrepreneurs québécois',
  description: "Site + fiche Google gérés au complet pour entrepreneurs québécois. Simple, rapide, sans niaisage technique. Forfait mensuel fixe dès 399$/mois.",
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
    description: "Ton site + ta fiche Google gérés au complet. Simple, rapide, sans niaisage technique. Forfait mensuel fixe dès 399$/mois.",
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
    description: "Ton site + ta fiche Google gérés au complet. Simple, rapide, sans niaisage technique. Forfait mensuel fixe dès 399$/mois.",
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
  // Ajoute ton token Search Console seulement quand tu l'as (sinon, on n'affiche rien)
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
  const phoneDigits = siteConfig.phoneDigits
  const phoneDisplay = formatPhoneDisplay(phoneDigits)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "BureauWeb",
    "description": "Site + fiche Google gérés au complet pour entrepreneurs québécois.",
    "url": siteConfig.url,
    "email": siteConfig.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Longueuil",
      "addressRegion": "QC",
      "addressCountry": "CA"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Québec"
    },
    "priceRange": "$$"
  }

  // On n'ajoute le téléphone QUE si tu l'as vraiment.
  if (phoneDigits && String(phoneDigits).replace(/\D/g, '').length >= 10) {
    structuredData.telephone = `+1-${phoneDisplay}`
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
        <CookieBanner />
      </body>
    </html>
  )
}
