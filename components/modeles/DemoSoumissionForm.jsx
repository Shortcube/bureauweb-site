'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const initialState = {
  nom: '',
  telephone: '',
  courriel: '',
  adresse: '',
  besoin: '',
  description: '',
  website: '',
}

const besoinsOptions = [
  'Diagnostic ou inspection',
  'Installation ou remplacement',
  'Réparation',
  'Entretien préventif',
  'Soumission pour projet',
]

const emailRegex = /\S+@\S+\.\S+/
const phoneRegex = /^[0-9\s()+.-]{7,}$/

export default function DemoSoumissionForm() {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!values.nom.trim()) nextErrors.nom = 'Le nom est requis.'
    if (!values.telephone.trim() || !phoneRegex.test(values.telephone)) {
      nextErrors.telephone = 'Le téléphone est requis (format permissif).'
    }
    if (!values.courriel.trim() || !emailRegex.test(values.courriel)) {
      nextErrors.courriel = 'Le courriel est requis.'
    }
    if (!values.besoin) nextErrors.besoin = 'Veuillez choisir un type de besoin.'
    if (!values.description.trim()) nextErrors.description = 'La description est requise.'
    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'loading') return

    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('loading')
    try {
      const response = await fetch('/api/demo-soumission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error('Erreur de soumission')
      setStatus('success')
      setValues(initialState)
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="website">Site web</Label>
        <Input
          id="website"
          name="website"
          value={values.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nom">Nom</Label>
          <Input id="nom" name="nom" value={values.nom} onChange={handleChange} />
          {errors.nom ? <p className="text-xs text-safety">{errors.nom}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="telephone">Téléphone</Label>
          <Input
            id="telephone"
            name="telephone"
            value={values.telephone}
            onChange={handleChange}
            placeholder="514 555-1234"
          />
          {errors.telephone ? <p className="text-xs text-safety">{errors.telephone}</p> : null}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="courriel">Courriel</Label>
          <Input
            id="courriel"
            name="courriel"
            type="email"
            value={values.courriel}
            onChange={handleChange}
            placeholder="nom@entreprise.exemple"
          />
          {errors.courriel ? <p className="text-xs text-safety">{errors.courriel}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="adresse">Adresse (optionnel)</Label>
          <Input id="adresse" name="adresse" value={values.adresse} onChange={handleChange} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="besoin">Type de besoin</Label>
        <select
          id="besoin"
          name="besoin"
          value={values.besoin}
          onChange={handleChange}
          className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
        >
          <option value="">Choisir</option>
          {besoinsOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.besoin ? <p className="text-xs text-safety">{errors.besoin}</p> : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <textarea
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
          placeholder="Décrivez le besoin, le contexte et les contraintes d’accès."
        />
        {errors.description ? <p className="text-xs text-safety">{errors.description}</p> : null}
      </div>

      <div className="space-y-2">
        <Button type="submit" className="w-full bg-navy text-white hover:bg-navy/90" disabled={status === 'loading'}>
          {status === 'loading' ? 'Envoi en cours…' : 'Demander une soumission (démo)'}
        </Button>
        <p className="text-xs text-concrete-600">
          Formulaire de démonstration. À l’activation, on branche le vrai flux (courriel + suivi).
        </p>
        {status === 'success' ? (
          <p className="rounded-md border border-safety/30 bg-safety/10 px-3 py-2 text-sm text-navy">
            Démo&nbsp;: rien n’a été envoyé. Exemple de confirmation.
          </p>
        ) : null}
        {status === 'error' ? (
          <p className="rounded-md border border-safety/30 bg-safety/10 px-3 py-2 text-sm text-navy">
            Démo&nbsp;: un problème est survenu. Réessayez.
          </p>
        ) : null}
      </div>
    </form>
  )
}
