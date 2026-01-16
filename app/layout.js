import { Inter } from 'next/font/google'
import './globals.css'
import CookieBanner from '@/components/privacy/CookieBanner'
import { siteConfig, formatPhoneDisplay } from '@/lib/site-config'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800']
})

export const metadata = {
  title: 'BureauWeb.ca | Sites web pour entrepreneurs québécois',
  description: 'Votre site web et votre fiche Google, gérés par quelqu\'un qui comprend votre métier. Forfait mensuel fixe dès 199$/mois. Service local au Québec.',
  keywords: 'site web entrepreneur, site web plombier, site web couvreur, site web paysagiste, site web construction québec, google business profile, rive-sud, montréal',
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
    title: 'BureauWeb.ca | Sites web pour entrepreneurs québécois',
    description: 'Votre site web et votre fiche Google, gérés par quelqu\'un qui comprend votre métier. Forfait mensuel fixe dès 199$/mois.',
    url: 'https://bureauweb.ca',
    siteName: 'BureauWeb.ca',
    locale: 'fr_CA',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BureauWeb - Sites web pour entrepreneurs québécois',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BureauWeb.ca | Sites web pour entrepreneurs québécois',
    description: 'Votre site web et votre fiche Google, gérés par quelqu\'un qui comprend votre métier. Forfait mensuel fixe dès 199$/mois.',
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
  const phoneDigits = siteConfig.phoneDigits
  const phoneDisplay = formatPhoneDisplay(phoneDigits)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'BureauWeb',
    'description': 'Sites web et optimisation Google pour entrepreneurs québécois. Service local, forfait mensuel fixe.',
    'url': siteConfig.url,
    'email': siteConfig.email,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Longueuil',
      'addressRegion': 'QC',
      'addressCountry': 'CA'
    },
    'areaServed': {
      '@type': 'AdministrativeArea',
      'name': 'Québec'
    },
    'priceRange': '$$'
  }

  if (phoneDigits && String(phoneDigits).replace(/\D/g, '').length >= 10) {
    structuredData.telephone = `+1-${phoneDisplay}`
  }

  return (
    <html lang="fr-CA" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
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
