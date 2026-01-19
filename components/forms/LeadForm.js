'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Send, CheckCircle2, Phone, Mail, Globe, MapPin, Loader2 } from 'lucide-react'
import { siteConfig, formatPhoneDisplay } from '@/lib/site-config'
import { SECTOR_PAGES } from '@/lib/sectors'
import { usePlanIntent } from '@/components/context/plan-intent-context'

const LeadForm = () => {
  const { planIntent } = usePlanIntent()
  const [formData, setFormData] = useState({
    entreprise: '',
    secteur: '',
    region: '',
    telephone: '',
    courriel: '',
    siteWeb: '',
    ficheGoogle: '',
    objectif: '',
    definitionSucces: '',
    hp: '',
  })
  const phoneDigits = siteConfig.phoneDigits
  const phoneDisplay = formatPhoneDisplay(phoneDigits)
  const hasPhone = phoneDigits && String(phoneDigits).replace(/\D/g, '').length >= 10
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')

  const secteurs = SECTOR_PAGES.map((sector) => ({
    value: sector.slug,
    label: sector.title,
  }))

  const regions = [
    { value: 'montreal', label: 'Montréal' },
    { value: 'rive-sud', label: 'Rive-Sud' },
    { value: 'rive-nord', label: 'Rive-Nord' },
    { value: 'laval', label: 'Laval' },
    { value: 'monteregie', label: 'Montérégie' },
    { value: 'autre', label: 'Autre région' },
  ]

  const validatePhone = (phone) => {
    const digitsOnly = phone.replace(/\D/g, '')
    return digitsOnly.length >= 10
  }

  const validateEmail = (email) => {
    if (!email) return true
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSelectChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setSubmitError('')

    const newErrors = {}

    if (!formData.entreprise || !formData.entreprise.trim()) {
      newErrors.entreprise = 'Entrez le nom de votre entreprise'
    }
    
    if (!formData.secteur) {
      newErrors.secteur = 'Choisissez votre secteur d\'activité'
    }
    
    if (!formData.region) {
      newErrors.region = 'Choisissez votre région'
    }
    
    if (formData.telephone && !validatePhone(formData.telephone)) {
      newErrors.telephone = 'Le numéro doit avoir au moins 10 chiffres'
    }

    // Champs optionnels: on valide seulement si rempli
    if (formData.siteWeb && String(formData.siteWeb).length > 200) {
      newErrors.siteWeb = 'URL trop longue'
    }

    if (formData.ficheGoogle && String(formData.ficheGoogle).length > 200) {
      newErrors.ficheGoogle = 'URL trop longue'
    }
    
    if (!formData.courriel) {
      newErrors.courriel = 'Entrez une adresse courriel'
    } else if (!validateEmail(formData.courriel)) {
      newErrors.courriel = 'Entrez une adresse courriel valide'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitting(true)
    
    try {
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
          entreprise: '',
          secteur: '',
          region: '',
          telephone: '',
          courriel: '',
          siteWeb: '',
          ficheGoogle: '',
          objectif: '',
          definitionSucces: '',
          hp: '',
        })
        return
      }

      let errPayload = null
      try {
        errPayload = await response.json()
      } catch {
        // no-op
      }

      setSubmitError(
        errPayload?.message ||
          errPayload?.error ||
          "Erreur lors de l'envoi. Réessayez ou contactez-nous directement."
      )
    } catch (error) {
      console.error('Erreur:', error)
      setSubmitError('Erreur réseau. Réessayez ou contactez-nous directement.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
    <section id="diagnostic" className="py-16 md:py-20 bg-navy scroll-mt-header">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Parfait, c'est reçu
              </h2>
              <p className="text-lg text-concrete-600 leading-relaxed">
                Retour sous 24–48 h ouvrables. 1 page. Actions prioritaires.
              </p>
              <Button 
                className="mt-8 btn-secondary"
                onClick={() => setIsSubmitted(false)}
              >
                Envoyer une autre demande
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="diagnostic" className="py-16 md:py-20 bg-navy scroll-mt-header">
      <div className="section-container">
        <div id="lead-form" aria-hidden="true" className="scroll-mt-24" />
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contenu gauche */}
            <div className="lg:col-span-2 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Parlons de votre projet
              </h2>
              <p className="text-concrete-300 text-lg mb-3 leading-relaxed">
                Remplissez ces infos et on vous revient avec :
              </p>
              <p className="text-concrete-300 text-lg mb-8 leading-relaxed">
                Retour sous 24–48 h ouvrables. 1 page. Actions prioritaires.
              </p>
              <ul className="text-concrete-300 text-lg mb-8 space-y-2">
                <li>• Un diagnostic gratuit (1 page) basé sur du vérifiable</li>
                <li>• 2 à 3 problèmes observables + 2 à 3 quick wins</li>
                <li>• Une recommandation claire: avancer, attendre, ou pas un fit</li>
              </ul>
              
              {/* Coordonnées */}
              <div className="space-y-4">
                {hasPhone && (
                  <a 
                    href={`tel:${String(phoneDigits).replace(/\D/g, '')}`}
                    className="flex items-center space-x-3 text-white hover:text-safety transition-colors"
                    aria-label={`Appelez-nous au ${phoneDisplay}`}
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="font-medium">{phoneDisplay}</span>
                  </a>
                )}
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center space-x-3 text-white hover:text-safety transition-colors"
                  aria-label={`Écrivez-nous à ${siteConfig.email}`}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="font-medium">{siteConfig.email}</span>
                </a>
                <div className="flex items-center space-x-3 text-concrete-300">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span>{siteConfig.city}</span>
                </div>
              </div>
            </div>
            
            {/* Formulaire */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                {/* Honeypot */}
                <input type="hidden" name="plan_intent" value={planIntent ?? ''} />
                <input
                  type="text"
                  name="hp"
                  value={formData.hp}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />


                {submitError && (
                  <div
                    className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                    role="alert"
                  >
                    {submitError}
                  </div>
                )}
                <div className="space-y-5">
                  {/* Entreprise */}
                  <div>
                    <Label htmlFor="entreprise" className="block text-sm font-medium text-navy mb-2">
                      Nom de l’entreprise <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="entreprise"
                      name="entreprise"
                      type="text"
                      value={formData.entreprise}
                      onChange={handleChange}
                      placeholder="Ex: Plomberie Roy"
                      className={errors.entreprise ? 'border-red-500' : ''}
                      aria-invalid={Boolean(errors.entreprise)}
                      aria-describedby={errors.entreprise ? 'entreprise-error' : undefined}
                    />
                    {errors.entreprise && (
                      <p id="entreprise-error" className="mt-1 text-sm text-red-500" role="alert">
                        {errors.entreprise}
                      </p>
                    )}
                  </div>

                  {/* Secteur */}
                  <div>
                    <Label htmlFor="secteur" className="block text-sm font-medium text-navy mb-2">
                      Votre secteur d'activité <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.secteur} onValueChange={(value) => handleSelectChange('secteur', value)}>
                      <SelectTrigger 
                        id="secteur"
                        className={`w-full ${errors.secteur ? 'border-red-500' : ''}`}
                        aria-label="Choisissez votre secteur d'activité"
                      >
                        <SelectValue placeholder="Choisissez votre secteur" />
                      </SelectTrigger>
                      <SelectContent>
                        {secteurs.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.secteur && (
                      <p className="mt-1 text-sm text-red-500" role="alert">{errors.secteur}</p>
                    )}
                  </div>
                  
                  {/* Région */}
                  <div>
                    <Label htmlFor="region" className="block text-sm font-medium text-navy mb-2">
                      Votre région <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.region} onValueChange={(value) => handleSelectChange('region', value)}>
                      <SelectTrigger 
                        id="region"
                        className={`w-full ${errors.region ? 'border-red-500' : ''}`}
                        aria-label="Choisissez votre région"
                      >
                        <SelectValue placeholder="Choisissez votre région" />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.region && (
                      <p className="mt-1 text-sm text-red-500" role="alert">{errors.region}</p>
                    )}
                  </div>
                  
                  {/* Courriel */}
                  <div>
                    <Label htmlFor="courriel" className="block text-sm font-medium text-navy mb-2">
                      Courriel <span className="text-red-500">*</span>
                    </Label>
                    <p className="text-xs text-concrete-500 mb-1">
                      Utilisé pour vous envoyer le diagnostic gratuit.
                    </p>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-concrete-400" aria-hidden="true" />
                      <Input
                        type="email"
                        id="courriel"
                        name="courriel"
                        value={formData.courriel}
                        onChange={handleChange}
                        placeholder="votre@courriel.com"
                        className={`pl-10 ${errors.courriel ? 'border-red-500' : ''}`}
                        aria-describedby={errors.courriel ? 'courriel-error' : undefined}
                        aria-invalid={!!errors.courriel}
                      />
                    </div>
                    {errors.courriel && (
                      <p id="courriel-error" className="mt-1 text-sm text-red-500" role="alert">{errors.courriel}</p>
                    )}
                  </div>

                  {/* Téléphone */}
                  <div>
                    <Label htmlFor="telephone" className="block text-sm font-medium text-navy mb-2">
                      Téléphone <span className="text-concrete-400 text-xs">(optionnel)</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-concrete-400" aria-hidden="true" />
                      <Input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="514-555-5555"
                        className={`pl-10 ${errors.telephone ? 'border-red-500' : ''}`}
                        aria-describedby={errors.telephone ? 'telephone-error' : undefined}
                        aria-invalid={!!errors.telephone}
                      />
                    </div>
                    {errors.telephone && (
                      <p id="telephone-error" className="mt-1 text-sm text-red-500" role="alert">{errors.telephone}</p>
                    )}
                    <p className="mt-1 text-xs text-concrete-500">
                      Utilisé uniquement si une clarification est nécessaire.
                    </p>
                  </div>
                  
                  {/* Site web */}
                  <div>
                    <Label htmlFor="siteWeb" className="block text-sm font-medium text-navy mb-2">
                      Site web actuel <span className="text-concrete-400 text-xs">(optionnel)</span>
                    </Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-concrete-400" aria-hidden="true" />
                      <Input
                        type="text"
                        id="siteWeb"
                        name="siteWeb"
                        value={formData.siteWeb}
                        onChange={handleChange}
                        placeholder="ex : monentreprise.ca"
                        className="pl-10"
                      />
                    </div>
                  </div>  

                  {/* Fiche Google */}
                  <div>
                    <Label htmlFor="ficheGoogle" className="block text-sm font-medium text-navy mb-2">
                      Lien de votre fiche Google <span className="text-concrete-400 text-xs">(optionnel)</span>
                    </Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-concrete-400" aria-hidden="true" />
                      <Input
                        type="text"
                        id="ficheGoogle"
                        name="ficheGoogle"
                        value={formData.ficheGoogle}
                        onChange={handleChange}
                        placeholder="Collez l’URL si vous l’avez"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Objectif */}
                  <div>
                    <Label htmlFor="objectif" className="block text-sm font-medium text-navy mb-2">
                      Objectif principal <span className="text-concrete-400 text-xs">(optionnel)</span>
                    </Label>
                    <Input
                      type="text"
                      id="objectif"
                      name="objectif"
                      value={formData.objectif}
                      onChange={handleChange}
                      placeholder="Ex.: plus d’appels qualifiés ou plus de soumissions"
                    />
                    <p className="mt-1 text-xs text-concrete-500">
                      Objectifs fréquents : appels, soumissions, filtrage, visibilité Google...
                    </p>
                  </div>
                  
                  {/* Bouton */}
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
                        Recevoir mon diagnostic gratuit
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-concrete-500 text-center mt-4">
                    En soumettant ce formulaire, vous acceptez qu'on vous contacte pour donner suite à votre demande. Vos données sont traitées uniquement pour analyser votre demande et transmettre le diagnostic gratuit, selon notre{' '}
                    <a href="/confidentialite" className="text-safety hover:underline">politique de confidentialité</a>.
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
