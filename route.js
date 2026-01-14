import { NextResponse } from 'next/server'
import { z } from 'zod'
import { logger } from '@/lib/logger'

// Edge Runtime pour Cloudflare Pages
export const runtime = 'edge'

// Schema de validation Zod - VALIDATION SIMPLIFIÉE
const leadSchema = z.object({
  secteur: z.enum(['plomberie', 'toiture', 'renovation', 'paysagement', 'electricite', 'cvac', 'deneigement','autre'], {
    errorMap: () => ({ message: "Secteur d'activité invalide" })
  }),
  region: z.enum(['montreal', 'rive-sud', 'rive-nord', 'laval', 'monteregie', 'autre'], {
    errorMap: () => ({ message: "Région invalide" })
  }),
  telephone: z.string()
    .min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres")
    .refine(
      (val) => val.replace(/\D/g, '').length >= 10,
      { message: "Le numéro doit contenir au moins 10 chiffres" }
    ),
  courriel: z.string().email("Adresse courriel invalide").optional().or(z.literal('')),
  siteWeb: z.string().trim().max(200).optional().or(z.literal(''))
})

// GET handler
export async function GET(request) {
  return NextResponse.json({ 
    message: 'BureauWeb API - Bienvenue',
    status: 'ok',
    timestamp: new Date().toISOString()
  })
}

// POST handler
export async function POST(request, { params }) {
  const pathSegments = params?.path || []
  const path = '/' + pathSegments.join('/')
  
  // Route pour les leads
if (path === '/lead') {
  try {
    const body = await request.json()
    
    // Nettoyer le téléphone AVANT validation (enlever tous les non-chiffres)
    if (body?.telephone) {
      body.telephone = String(body.telephone).replace(/\D/g, '')
    }

    logger.debug("Lead submission - Body après nettoyage:", body)

    // Validation avec Zod
    const validatedData = leadSchema.parse(body)

    // Traiter le site web
    let siteWeb = validatedData.siteWeb?.trim() || null
    if (siteWeb) {
      const looksLikeDomain = siteWeb.includes('.') || siteWeb.toLowerCase().startsWith('www.')
      if (looksLikeDomain && !/^https?:\/\//i.test(siteWeb)) {
        siteWeb = `https://${siteWeb}`
      }
    }

    // Créer le lead avec UUID
    const lead = {
      id: crypto.randomUUID(),
      secteur: validatedData.secteur,
      region: validatedData.region,
      telephone: validatedData.telephone,
      courriel: validatedData.courriel || null,
      siteWeb,
      createdAt: new Date().toISOString(),
      status: 'nouveau'
    }

    logger.success('=== NOUVEAU LEAD BUREAUWEB ===')
    logger.info(JSON.stringify(lead, null, 2))
    logger.success('==============================')

    // Envoi email via Resend (si configuré)
    if (process.env.RESEND_API_KEY) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
  from: 'BureauWeb <info@bureauweb.ca>',
  to: 'info@bureauweb.ca',
  subject: `🎯 Nouveau Lead - ${lead.secteur} (${lead.region})`,
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0f172a; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; }
        .info-row { margin: 10px 0; padding: 15px; background: white; border-radius: 6px; border-left: 4px solid #f97316; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
        .label { font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; display: block; margin-bottom: 5px; }
        .value { color: #0f172a; font-size: 16px; font-weight: 500; }
        .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #94a3b8; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin:0; font-size: 24px;">🎯 Nouveau Lead BureauWeb</h1>
        </div>
        
        <div class="content">
          <div class="info-row">
            <span class="label">Secteur d'activité</span>
            <span class="value" style="text-transform: capitalize;">${lead.secteur}</span>
          </div>

          <div class="info-row">
            <span class="label">Région</span>
            <span class="value" style="text-transform: capitalize;">${lead.region}</span>
          </div>

          <div class="info-row">
            <span class="label">Téléphone</span>
            <span class="value">
              <a href="tel:${lead.telephone}" style="color: #0f172a; text-decoration: none;">${lead.telephone}</a>
            </span>
          </div>

          ${lead.courriel ? `
          <div class="info-row">
            <span class="label">Courriel</span>
            <span class="value">
              <a href="mailto:${lead.courriel}" style="color: #0f172a; text-decoration: none;">${lead.courriel}</a>
            </span>
          </div>` : ''}

          ${lead.siteWeb ? `
          <div class="info-row">
            <span class="label">Site Web actuel</span>
            <span class="value">
              <a href="${lead.siteWeb}" target="_blank" style="color: #f97316;">${lead.siteWeb}</a>
            </span>
          </div>` : ''}

        </div>

        <div class="footer">
          ID: ${lead.id} • Reçu le ${new Date().toLocaleString('fr-CA', { timeZone: 'America/Montreal' })}
        </div>
      </div>
    </body>
    </html>
  `
})
        })

        if (!emailResponse.ok) {
          const errorData = await emailResponse.json()
          logger.error('Erreur Resend:', errorData)
        } else {
          logger.success('Email envoyé avec succès via Resend')
        }
      } catch (emailError) {
        logger.error('Erreur envoi email:', emailError)
      }
    }

    // Webhook optionnel (Zapier/Make/etc.)
    if (process.env.WEBHOOK_URL) {
      try {
        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(lead)
        })
        logger.success('Webhook appelé avec succès')
      } catch (webhookError) {
        logger.error('Erreur webhook:', webhookError)
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Votre demande a été reçue. Nous vous contacterons sous 24h ouvrables.',
      leadId: lead.id
    }, { status: 201 })

  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn("Validation Zod échouée:", error.errors)
      return NextResponse.json({
        error: 'Données invalides',
        details: error.errors.map(e => ({
          field: e.path.join('.'),
          message: e.message
        }))
      }, { status: 400 })
    }

    logger.error('Erreur lors du traitement du lead:', error)
    return NextResponse.json({
      error: 'Erreur lors du traitement de votre demande',
      message: 'Veuillez réessayer ou nous contacter directement.'
    }, { status: 500 })
  }
}

  // Route par défaut
  return NextResponse.json({ 
    message: 'BureauWeb API',
    path: path
  })
}
