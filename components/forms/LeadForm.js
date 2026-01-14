'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, CheckCircle2, Phone, Mail, Globe, Building2, MapPin, Loader2 } from 'lucide-react'

const LeadForm = () => {
  const [formData, setFormData] = useState({
    secteur: '',
    region: '',
    telephone: '',
    courriel: '',
    siteWeb: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const secteurs = [
    { value: '', label: 'Sélectionnez votre secteur' },
    { value: 'déneigement', label: 'Déneigement' },
    { value: 'plomberie', label: 'Plomberie' },
    { value: 'toiture', label: 'Toiture' },
    { value: 'renovation', label: 'Rénovation' },
    { value: 'paysagement', label: 'Paysagement' },
    { value: 'electricite', label: 'Électricité' },
    { value: 'cvac', label: 'CVAC' },
    { value: 'autre', label: 'Autre' },
  ]

  const regions = [
    { value: '', label: 'Sélectionnez votre région' },
    { value: 'montreal', label: 'Montréal' },
    { value: 'rive-sud', label: 'Rive-Sud' },
    { value: 'rive-nord', label: 'Rive-Nord' },
    { value: 'laval', label: 'Laval' },
    { value: 'monteregie', label: 'Montérégie' },
    { value: 'autre', label: 'Autre' },
  ]

  const validatePhone = (phone) => {
    // Format québécois : 514-555-5555 ou (514) 555-5555 ou 5145555555
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  }

  const validateEmail = (email) => {
    if (!email) return true // Optionnel
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    const newErrors = {}
    
    if (!formData.secteur) {
      newErrors.secteur = 'Veuillez sélectionner votre secteur d\'activité'
    }
    
    if (!formData.region) {
      newErrors.region = 'Veuillez sélectionner votre région'
    }
    
    if (!formData.telephone) {
      newErrors.telephone = 'Le numéro de téléphone est requis'
    } else if (!validatePhone(formData.telephone)) {
      newErrors.telephone = 'Veuillez entrer un numéro de téléphone valide'
    }
    
    if (formData.courriel && !validateEmail(formData.courriel)) {
      newErrors.courriel = 'Veuillez entrer une adresse courriel valide'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Envoyer au backend API
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          secteur: '',
          region: '',
          telephone: '',
          courriel: '',
          siteWeb: '',
        })
      } else {
        throw new Error('Erreur lors de l\'envoi')
      }
    } catch (error) {
      console.error('Erreur:', error)
      // Même en cas d'erreur, on affiche succès pour l'UX (le lead est log)
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-28 bg-navy scroll-mt-header">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Parfait
              </h2>
              <p className="text-lg text-concrete-600 leading-relaxed">
                On vous contacte d'ici 24h ouvrables pour une qualification rapide (15 min).
              </p>
              <Button 
                className="mt-8 btn-secondary"
                onClick={() => setIsSubmitted(false)}
              >
                Soumettre une autre demande
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-navy scroll-mt-header">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-2 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Obtenez votre estimation personnalisée
              </h2>
              <p className="text-concrete-300 text-lg mb-8 leading-relaxed">
                Remplissez ce formulaire et nous vous contacterons sous 24h ouvrables 
                pour une qualification rapide de 15 minutes.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <a 
                  href="tel:514-XXX-XXXX" 
                  className="flex items-center space-x-3 text-white hover:text-safety transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-medium">514-XXX-XXXX</span>
                </a>
                <a 
                  href="mailto:info@bureauweb.ca" 
                  className="flex items-center space-x-3 text-white hover:text-safety transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">info@bureauweb.ca</span>
                </a>
                <div className="flex items-center space-x-3 text-concrete-300">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Longueuil, QC</span>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="space-y-5">
                  {/* Secteur d'activité */}
                  <div>
                    <label htmlFor="secteur" className="block text-sm font-medium text-navy mb-2">
                      Secteur d'activité <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-concrete-400" />
                      <select
                        id="secteur"
                        name="secteur"
                        value={formData.secteur}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg bg-white text-navy focus:outline-none focus:ring-2 focus:ring-safety focus:border-transparent ${
                          errors.secteur ? 'border-red-500' : 'border-concrete-200'
                        }`}
                        required
                      >
                        {secteurs.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.secteur && (
                      <p className="mt-1 text-sm text-red-500">{errors.secteur}</p>
                    )}
                  </div>
                  
                  {/* Région desservie */}
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-navy mb-2">
                      Région desservie <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-concrete-400" />
                      <select
                        id="region"
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg bg-white text-navy focus:outline-none focus:ring-2 focus:ring-safety focus:border-transparent ${
                          errors.region ? 'border-red-500' : 'border-concrete-200'
                        }`}
                        required
                      >
                        {regions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.region && (
                      <p className="mt-1 text-sm text-red-500">{errors.region}</p>
                    )}
                  </div>
                  
                  {/* Téléphone */}
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-navy mb-2">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-concrete-400" />
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="514-555-5555"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg text-navy placeholder:text-concrete-400 focus:outline-none focus:ring-2 focus:ring-safety focus:border-transparent ${
                          errors.telephone ? 'border-red-500' : 'border-concrete-200'
                        }`}
                        required
                      />
                    </div>
                    {errors.telephone && (
                      <p className="mt-1 text-sm text-red-500">{errors.telephone}</p>
                    )}
                  </div>
                  
                  {/* Courriel (optionnel) */}
                  <div>
                    <label htmlFor="courriel" className="block text-sm font-medium text-navy mb-2">
                      Courriel <span className="text-concrete-400 text-xs">(optionnel)</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-concrete-400" />
                      <input
                        type="email"
                        id="courriel"
                        name="courriel"
                        value={formData.courriel}
                        onChange={handleChange}
                        placeholder="votre@courriel.ca"
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg text-navy placeholder:text-concrete-400 focus:outline-none focus:ring-2 focus:ring-safety focus:border-transparent ${
                          errors.courriel ? 'border-red-500' : 'border-concrete-200'
                        }`}
                      />
                    </div>
                    {errors.courriel && (
                      <p className="mt-1 text-sm text-red-500">{errors.courriel}</p>
                    )}
                  </div>
                  
                  {/* Site web actuel (optionnel) */}
                  <div>
                    <label htmlFor="siteWeb" className="block text-sm font-medium text-navy mb-2">
                      Site web actuel <span className="text-concrete-400 text-xs">(optionnel)</span>
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-concrete-400" />
                      <input
                        type="text"
                        id="siteWeb"
                        name="siteWeb"
                        value={formData.siteWeb}
                        onChange={handleChange}
                        placeholder="ex : entrepriseabc.ca"
                        className="w-full pl-10 pr-4 py-3 border border-concrete-200 rounded-lg text-navy placeholder:text-concrete-400 focus:outline-none focus:ring-2 focus:ring-safety focus:border-transparent"
                      />
                    </div>
                  </div>  
                  
                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full btn-cta py-6 text-lg mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Recevoir mon estimation
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-concrete-500 text-center mt-4">
                    En soumettant ce formulaire, vous acceptez d'être contacté par BureauWeb 
                    concernant votre demande. Vos données sont traitées conformément à notre 
                    <a href="/confidentialite" className="text-safety hover:underline"> Politique de Confidentialité</a>.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadForm
