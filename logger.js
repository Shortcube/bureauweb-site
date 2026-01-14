/**
 * Logger utilitaire pour BureauWeb
 * - Logs visibles en développement
 * - Silencieux en production (sauf errors critiques)
 * - Facile à étendre vers service externe (Sentry, LogRocket, etc.)
 */

const isDev = process.env.NODE_ENV === 'development'

export const logger = {
  /**
   * Info générale - visible uniquement en dev
   */
  info: (...args) => {
    if (isDev) {
      console.log('[INFO]', new Date().toISOString(), ...args)
    }
  },

  /**
   * Erreurs critiques - toujours visible
   */
  error: (...args) => {
    console.error('[ERROR]', new Date().toISOString(), ...args)
    // TODO: Envoyer vers service de monitoring en production
  },

  /**
   * Warnings - visible uniquement en dev
   */
  warn: (...args) => {
    if (isDev) {
      console.warn('[WARN]', new Date().toISOString(), ...args)
    }
  },

  /**
   * Debug détaillé - visible uniquement en dev
   */
  debug: (...args) => {
    if (isDev) {
      console.log('[DEBUG]', new Date().toISOString(), ...args)
    }
  },

  /**
   * Succès - visible uniquement en dev
   */
  success: (...args) => {
    if (isDev) {
      console.log('[SUCCESS]', new Date().toISOString(), ...args)
    }
  },
}
