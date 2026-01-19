import { siteConfig } from '@/lib/site-config'

export const runtime = 'edge'

const MAX_REQUESTS_PER_MINUTE = 6
const RATE_LIMIT_TTL_SECONDS = 60
const HONEYPOT_FIELD = 'website'

const besoinsOptions = new Set([
  'Diagnostic ou inspection',
  'Installation ou remplacement',
  'Réparation',
  'Entretien préventif',
  'Soumission pour projet',
])

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^[0-9\s()+.-]{7,}$/

const normalizeText = (value) => (typeof value === 'string' ? value.trim() : '')

const isAllowedOrigin = (request) => {
  const origin = request.headers.get('origin')
  const referer = request.headers.get('referer')
  const candidate = origin || referer
  if (!candidate) return true

  try {
    const host = new URL(candidate).host
    const allowedHost = siteConfig.domain
    return host === allowedHost || host.endsWith(`.${allowedHost}`)
  } catch (error) {
    return false
  }
}

const getClientIp = (request) => {
  const cfConnectingIp = request.headers.get('cf-connecting-ip')
  if (cfConnectingIp) return cfConnectingIp
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  return 'unknown'
}

const isRateLimited = async (request) => {
  const cache = caches.default
  const minuteBucket = Math.floor(Date.now() / 60000)
  const clientIp = getClientIp(request)
  const cacheKey = new Request(`https://rate-limit.bureauweb.local/demo-soumission/${clientIp}/${minuteBucket}`)

  const cached = await cache.match(cacheKey)
  const count = cached ? Number(await cached.text()) : 0

  if (count >= MAX_REQUESTS_PER_MINUTE) return true

  const nextCount = Number.isFinite(count) ? count + 1 : 1
  await cache.put(
    cacheKey,
    new Response(String(nextCount), {
      headers: {
        'Cache-Control': `max-age=${RATE_LIMIT_TTL_SECONDS}`,
      },
    })
  )

  return false
}

const validatePayload = (payload) => {
  const nom = normalizeText(payload.nom)
  const telephone = normalizeText(payload.telephone)
  const courriel = normalizeText(payload.courriel)
  const adresse = normalizeText(payload.adresse)
  const besoin = normalizeText(payload.besoin)
  const description = normalizeText(payload.description)

  if (!nom || nom.length < 2 || nom.length > 80) return false
  if (!telephone || telephone.length < 7 || telephone.length > 25 || !phoneRegex.test(telephone)) return false
  if (!courriel || courriel.length > 254 || !emailRegex.test(courriel)) return false
  if (adresse && adresse.length > 120) return false
  if (!besoin || !besoinsOptions.has(besoin)) return false
  if (!description || description.length < 10 || description.length > 2000) return false

  return true
}

export async function POST(request) {
  const payload = await request.json().catch(() => ({}))

  if (!isAllowedOrigin(request)) {
    return Response.json({ ok: false }, { status: 403 })
  }

  if (await isRateLimited(request)) {
    return Response.json({ ok: false }, { status: 429 })
  }

  if (normalizeText(payload[HONEYPOT_FIELD])) {
    return Response.json({ ok: false }, { status: 400 })
  }

  if (!validatePayload(payload)) {
    return Response.json({ ok: false }, { status: 400 })
  }

  console.log('Démo soumission reçue (sans persistance):', payload)
  return Response.json({ ok: true })
}
