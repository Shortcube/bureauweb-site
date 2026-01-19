# RUNBOOK_BLOG_SEO - BureauWeb (v1.0)
Derniere mise a jour: 2026-01-19

Objectif: blog utile, intention commerciale claire, SEO propre, sans thin content.

## 1) Role
- Point d'entree qualifie.
- Reduction d'incertitude.
- CTA standardise vers Diagnostic gratuit.

## 2) Regles editoriales (non negociables)
- Contenu factuel, actionnable, verifiable.
- Aucune promesse.
- Eviter le contenu generique, toujours ancre metier terrain.
- Longueur courte a moyenne.

## 3) Structure obligatoire d'un article
- Title SEO (unique).
- Meta description.
- H1 unique.
- Date publiee.
- Tags (2 a 4).
- Breadcrumbs cliquables (Accueil > Blogue > Article).
- CTA en bas: "Recevoir mon diagnostic gratuit".
- Section "Articles lies" (2 a 4 liens).

## 4) SEO technique (Next.js)
- generateMetadata() par article.
- JSON-LD BlogPosting par article:
  - headline, description, datePublished, author = BureauWeb, mainEntityOfPage.
- Sitemap:
  - inclure /blog et /blog/[slug] pour chaque article.
- Robots:
  - ne pas bloquer /blog.
- Canonical:
  - coherent, pas de duplication.

## 5) Maillage interne
Chaque article pointe vers:
- le diagnostic (CTA),
- 1 a 2 articles lies,
- pages services/zones si elles existent et si pertinent.

## 6) Taxonomie tags (MVP)
Tags suggers:
- fiche-google
- conversion-mobile
- site-vitrine
- seo-local
- loi-25
- avis-google
- performance

Regle: pas plus de 10 tags au MVP.

## 7) Anti-thin-content
Interdit:
- pages de villes identiques en masse.
- articles definitionnels sans methode.
- listicles sans verification.

Autorise:
- checklists.
- guides 1 page.
- comparatifs concrets.
- "sous votre controle vs pas sous votre controle".

## 8) Checklist release blog
- /blog: nav + retour accueil OK.
- Chaque article: title/description OK.
- Breadcrumbs cliquables.
- JSON-LD present.
- Sitemap contient tous les slugs.
- CTA mene au diagnostic.
