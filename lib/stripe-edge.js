const PRICE_IDS = {
  depart: process.env.STRIPE_PRICE_ID_DEPART,
  pro: process.env.STRIPE_PRICE_ID_PRO,
  croissance: process.env.STRIPE_PRICE_ID_CROISSANCE,
}

const ACTIVATION_PRICE_IDS = {
  pro: process.env.STRIPE_PRICE_ID_ACTIVATION_PRO,
  croissance: process.env.STRIPE_PRICE_ID_ACTIVATION_CROISSANCE,
}

const ALLOWED_PLANS = Object.keys(PRICE_IDS)

const ensurePriceConfig = (plan) => {
  const price = PRICE_IDS[plan]
  if (!price) {
    throw new Error(`Missing price ID for plan "${plan}". Configure STRIPE_PRICE_ID_${plan.toUpperCase()}.`)
  }
  return price
}

const ensureActivationPrice = (plan) => {
  const price = ACTIVATION_PRICE_IDS[plan]
  if (!price) {
    throw new Error(`Missing activation price for "${plan}". Configure STRIPE_PRICE_ID_ACTIVATION_${plan.toUpperCase()}.`)
  }
  return price
}

export function normalizePlan(input) {
  const plan = String(input || '').trim().toLowerCase()
  if (!ALLOWED_PLANS.includes(plan)) {
    throw new Error(`Plan must be one of ${ALLOWED_PLANS.join(', ')}.`)
  }
  return plan
}

export function getOriginFromHeaders(headers) {
  const forwardedProto = headers.get('x-forwarded-proto') || headers.get('x-forwarded-protocol')
  const protocol = forwardedProto || headers.get('proto') || 'https'
  const host = headers.get('x-forwarded-host') || headers.get('host')
  if (!host) {
    throw new Error('Missing host header to build origin.')
  }
  return `${protocol}://${host}`
}

export async function createCheckoutSessionUrl({ plan, origin }) {
  const price = ensurePriceConfig(plan)
  const activationRequired = plan === 'pro' || plan === 'croissance'
  const secret = process.env.STRIPE_SECRET_KEY
  if (!secret) {
    throw new Error('STRIPE_SECRET_KEY is not configured')
  }
  const payload = new URLSearchParams()
  payload.set('mode', 'subscription')
  payload.set('payment_method_types[0]', 'card')
  payload.set('success_url', `${origin}/merci?session_id={CHECKOUT_SESSION_ID}`)
  payload.set('cancel_url', `${origin}/paiement-annule?plan=${encodeURIComponent(plan)}`)
  payload.set('locale', 'fr-CA')
  payload.set('customer_creation', 'always')
  payload.set('metadata[plan]', plan)
  payload.set('metadata[activation]', activationRequired ? 'required' : 'not_required')
  payload.set('subscription_data[metadata][plan]', plan)
  payload.set('subscription_data[metadata][activation]', activationRequired ? 'required' : 'not_required')
  payload.set('line_items[0][price]', price)
  payload.set('line_items[0][quantity]', '1')

  if (activationRequired) {
    const activationPrice = ensureActivationPrice(plan)
    payload.set('subscription_data[add_invoice_items][0][price]', activationPrice)
    payload.set('subscription_data[add_invoice_items][0][quantity]', '1')
  }

  const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${secret}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: payload.toString(),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`Stripe Checkout creation failed: ${errorBody}`)
  }

  const data = await response.json()
  if (!data.url) {
    throw new Error('Stripe Checkout did not return a redirect URL.')
  }

  return data.url
}
