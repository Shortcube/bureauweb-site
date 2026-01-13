import { NextResponse } from 'next/server'
// Cloudflare Pages requires Edge Runtime
export const runtime = 'edge'

// GET handler pour tester l'API
export async function GET(request) {
  return NextResponse.json({ 
    message: 'BureauWeb API - Bienvenue',
    status: 'ok',
    timestamp: new Date().toISOString()
  })
}

// POST handler pour le formulaire de lead
export async function POST(request, { params }) {
  const pathSegments = params?.path || []
  const path = '/' + pathSegments.join('/')
  
  // Route pour les leads
  if (path === '/lead') {
    try {
      const body = await request.json()
      
      const { secteur, region, telephone, courriel, siteWeb } = body
      
      // Validation des champs requis
      if (!secteur || !region || !telephone) {
        return NextResponse.json(
          { error: 'Champs requis manquants: secteur, région et téléphone sont obligatoires' },
          { status: 400 }
        )
      }
      
      // Validation du format téléphone
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
      if (!phoneRegex.test(telephone.replace(/\s/g, ''))) {
        return NextResponse.json(
          { error: 'Format de téléphone invalide' },
          { status: 400 }
        )
      }
      
      // Créer le lead avec un UUID (crypto.randomUUID() est disponible dans Edge Runtime)
      const lead = {
        id: crypto.randomUUID(),
        secteur,
        region,
        telephone,
        courriel: courriel || null,
        siteWeb: siteWeb || null,
        createdAt: new Date().toISOString(),
        status: 'nouveau'
      }
      
      // Log le lead (en production, sauvegarder en DB ou envoyer par email)
      console.log('=== NOUVEAU LEAD BUREAUWEB ===')
      console.log(JSON.stringify(lead, null, 2))
      console.log('==============================')
      
      // Ici vous pourriez:
      // 1. Sauvegarder dans MongoDB
      // 2. Envoyer un email via SendGrid/Resend
      // 3. Envoyer à un webhook (Zapier, Make, etc.)
      // 4. Intégrer avec un CRM
      
      return NextResponse.json({
        success: true,
        message: 'Votre demande a été reçue. Nous vous contacterons sous 24h ouvrables.',
        leadId: lead.id
      }, { status: 201 })
      
    } catch (error) {
      console.error('Erreur lors du traitement du lead:', error)
      return NextResponse.json(
        { error: 'Erreur lors du traitement de votre demande' },
        { status: 500 }
      )
    }
  }
  
  // Route par défaut
  return NextResponse.json({ 
    message: 'BureauWeb API',
    path: path
  })
}
