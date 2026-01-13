import { NextResponse } from 'next/server'
import { z } from 'zod'

// Edge Runtime pour Cloudflare Pages
export const runtime = 'edge'

// Schema de validation Zod
const leadSchema = z.object({
  secteur: z.enum(['plomberie', 'toiture', 'renovation', 'paysagement', 'electricite', 'cvac', 'autre'], {
    errorMap: () => ({ message: "Secteur d'activité invalide" })
  }),
  region: z.enum(['montreal', 'rive-sud', 'rive-nord', 'laval', 'monteregie', 'autre'], {
    errorMap: () => ({ message: "Région invalide" })
  }),
  telephone: z.string()
    .min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres")
    .regex(/^\d{10}$|^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/, {
      message: "Format de téléphone invalide (ex: 514-555-5555)"
    }),
  courriel: z.string().email("Adresse courriel invalide").optional().or(z.literal('')),
  siteWeb: z.string().url("URL invalide").optional().or(z.literal(''))
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
      
      // Validation avec Zod
      const validatedData = leadSchema.parse(body)
      
      // Créer le lead avec UUID
      const lead = {
        id: crypto.randomUUID(),
        secteur: validatedData.secteur,
        region: validatedData.region,
        telephone: validatedData.telephone,
        courriel: validatedData.courriel || null,
        siteWeb: validatedData.siteWeb || null,
        createdAt: new Date().toISOString(),
        status: 'nouveau'
      }
      
      // Log du lead (backup console)
      console.log('=== NOUVEAU LEAD BUREAUWEB ===')
      console.log(JSON.stringify(lead, null, 2))
      console.log('==============================')
      
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
              from: 'leads@bureauweb.ca',
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
                    .header { background: #0f172a; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                    .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
                    .info-row { margin: 15px 0; padding: 10px; background: white; border-radius: 4px; }
                    .label { font-weight: bold; color: #0f172a; }
                    .value { color: #475569; }
                    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
                    .cta { display: inline-block; margin-top: 15px; padding: 12px 24px; background: #f97316; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <div class="header">
                      <h1 style="margin:0;">🎯 Nouveau Lead BureauWeb</h1>
                    </div>
                    <div class="content">
                      <div class="info-row">
                        <span class="label">ID:</span>
                        <span class="value">${lead.id}</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Secteur d'activité:</span>
                        <span class="value">${lead.secteur}</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Région:</span>
                        <span class="value">${lead.region}</span>
                      </div>
                      <div class="info-row">
                        <span class="label">Téléphone:</span>
                        <span class="value"><a href="tel:${lead.telephone}" style="color:#f97316;">${lead.telephone}</a></span>
                      </div>
                      ${lead.courriel ? `
                      <div class="info-row">
                        <span class="label">Courriel:</span>
                        <span class="value"><a href="mailto:${lead.courriel}" style="color:#f97316;">${lead.courriel}</a></span>
                      </div>
                      ` : ''}
                      ${lead.siteWeb ? `
                      <div class="info-row">
                        <span class="label">Site web actuel:</span>
                        <span class="value"><a href="${lead.siteWeb}" target="_blank" style="color:#f97316;">${lead.siteWeb}</a></span>
                      </div>
                      ` : ''}
                      <div class="info-row">
                        <span class="label">Date de soumission:</span>
                        <span class="value">${new Date(lead.createdAt).toLocaleString('fr-CA', { 
                          dateStyle: 'full', 
                          timeStyle: 'short',
                          timeZone: 'America/Montreal'
                        })}</span>
                      </div>
                      
                      <a href="tel:${lead.telephone}" class="cta">📞 Appeler maintenant</a>
                      
                      <div class="footer">
                        <p><strong>Action recommandée:</strong> Contactez ce lead dans les 24h ouvrables pour maximiser vos chances de conversion.</p>
                        <p style="margin-top:10px;">Cet email a été généré automatiquement par bureauweb.ca</p>
                      </div>
                    </div>
                  </div>
                </body>
                </html>
              `
            })
          })

          if (!emailResponse.ok) {
            const errorData = await emailResponse.json()
            console.error('Erreur Resend:', errorData)
            // On continue quand même pour ne pas bloquer l'UX
          }
        } catch (emailError) {
          console.error('Erreur envoi email:', emailError)
          // On continue quand même pour ne pas bloquer l'UX
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
        } catch (webhookError) {
          console.error('Erreur webhook:', webhookError)
          // On continue quand même
        }
      }
      
      return NextResponse.json({
        success: true,
        message: 'Votre demande a été reçue. Nous vous contacterons sous 24h ouvrables.',
        leadId: lead.id
      }, { status: 201 })
      
    } catch (error) {
      // Erreur de validation Zod
      if (error instanceof z.ZodError) {
        return NextResponse.json({
          error: 'Données invalides',
          details: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        }, { status: 400 })
      }
      
      // Autres erreurs
      console.error('Erreur lors du traitement du lead:', error)
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
