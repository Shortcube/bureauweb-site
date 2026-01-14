/**
 * Config centrale du site (évite les placeholders dans le UI).
 *
 * 👉 Mets ton numéro dès qu'il est prêt:
 *    - Dans Cloudflare Pages: variable NEXT_PUBLIC_CONTACT_PHONE
 *    - Exemple: 5145551234
 */

export const siteConfig = {
  name: 'BureauWeb',
  url: 'https://bureauweb.ca',
  domain: 'bureauweb.ca',
  email: 'info@bureauweb.ca',

  /**
   * Numéro de téléphone (optionnel)
   * - On l'affiche seulement s'il est fourni.
   */
  phoneDigits: process.env.NEXT_PUBLIC_CONTACT_PHONE || '',

  /**
   * Affichage (NAP)
   */
  city: 'Longueuil, QC',
  provinceRegion: 'QC',
  country: 'CA',

  /**
   * Secteurs (ceci n'implique PAS de partenariat)
   */
  sectors: ['Plomberie', 'Toiture', 'CVAC', 'Paysagement', 'Rénovation', 'Déneigement'],
}

export function formatPhoneDisplay(phoneDigits) {
  const digits = String(phoneDigits || '').replace(/\D/g, '')
  if (digits.length === 10) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  return digits
}
