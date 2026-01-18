import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
const stripe = stripeSecretKey ? new Stripe(stripeSecretKey, { apiVersion: '2023-11-15' }) : null

export const runtime = 'nodejs'

const handleEvent = (event) => {
  const { type, data } = event
  switch (type) {
    case 'checkout.session.completed':
      console.log('[Stripe] checkout.session.completed', data.object)
      break
    case 'invoice.payment_succeeded':
      console.log('[Stripe] invoice.payment_succeeded', data.object)
      break
    case 'invoice.payment_failed':
      console.warn('[Stripe] invoice.payment_failed', data.object)
      break
    case 'customer.subscription.deleted':
      console.log('[Stripe] customer.subscription.deleted', data.object)
      break
    default:
      console.log('[Stripe] ignored event', type)
  }
}

export async function POST(request) {
  if (!stripe) {
    return NextResponse.json({ error: 'STRIPE_SECRET_KEY is not configured' }, { status: 500 })
  }
  if (!webhookSecret) {
    return NextResponse.json({ error: 'STRIPE_WEBHOOK_SECRET is not configured' }, { status: 500 })
  }

  const signature = request.headers.get('stripe-signature')
  if (!signature) {
    return NextResponse.json({ error: 'Missing Stripe signature' }, { status: 400 })
  }

  const body = await request.text()

  let event
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('[Stripe] signature verification failed', err)
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 })
  }

  handleEvent(event)

  return NextResponse.json({ received: true })
}
