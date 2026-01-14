export default function sitemap() {
  const baseUrl = 'https://bureauweb.ca'

  // Mise à jour manuelle pour les pages légales
  const legalLastModified = new Date('2026-01-14')

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: legalLastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/conditions`,
      lastModified: legalLastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
