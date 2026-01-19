// app/sitemap.js

import { BLOG_POSTS, REGION_PAGES, TRADE_PAGES } from '@/lib/content'
import { MODELES } from '@/lib/modeles.data'
import { SECTOR_PAGES } from '@/lib/sectors'

export default function sitemap() {
  const baseUrl = 'https://bureauweb.ca'
  const now = new Date()
  const blogEnabled = process.env.BLOG_ENABLED === 'true'

  const staticUrls = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/metiers`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/modeles`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/secteurs`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/regions`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...(blogEnabled
      ? [
          {
            url: `${baseUrl}/blog`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.6,
          },
        ]
      : []),
    {
      url: `${baseUrl}/limites`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/confidentialite`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/conditions`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/gestion-renseignements`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const dynamicUrls = [
    ...TRADE_PAGES.map((t) => ({
      url: `${baseUrl}/metiers/${t.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
    ...MODELES.map((modele) => ({
      url: `${baseUrl}/modeles/${modele.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    })),
    ...SECTOR_PAGES.map((s) => ({
      url: `${baseUrl}/secteurs/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
    ...REGION_PAGES.map((r) => ({
      url: `${baseUrl}/regions/${r.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
    ...(blogEnabled
      ? BLOG_POSTS.map((p) => ({
          url: `${baseUrl}/blog/${p.slug}`,
          lastModified: now,
          changeFrequency: 'yearly',
          priority: 0.4,
        }))
      : []),
  ]

  return [...staticUrls, ...dynamicUrls]
}
