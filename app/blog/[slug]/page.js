import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/content'
import { siteConfig } from '@/lib/site-config'

// Edge Runtime pour Cloudflare Pages
export const runtime = 'edge'

export function generateMetadata({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Blogue | BureauWeb' }
  return {
    title: `${post.title} | BureauWeb`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  const tags = post.tags || []
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'BureauWeb',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`,
    },
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav className="text-sm text-concrete-600" aria-label="Breadcrumb">
        <Link href="/" className="text-safety hover:underline">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="text-safety hover:underline">Blogue</Link>
        <span className="mx-2">/</span>
        <span className="text-navy">{post.title}</span>
      </nav>

      <article className="mt-6">
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-navy">{post.title}</h1>
          <p className="mt-3 text-concrete-600">{post.excerpt}</p>
          <p className="mt-2 text-sm text-concrete-500">Publié le {post.publishedAt}</p>
          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-concrete-200 bg-concrete-50 px-3 py-1 text-concrete-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="mt-10 space-y-8">
          {post.sections.map((s, idx) => (
            <section key={idx}>
              <h2 className="text-xl font-semibold text-navy">{s.h2}</h2>
              <p className="mt-2 text-concrete-600 leading-relaxed">{s.p}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-concrete-200 bg-concrete-50 p-6">
          <p className="text-navy font-semibold">Prochaine étape</p>
          <p className="mt-2 text-concrete-600">
            Si vous voulez une version adaptée à votre entreprise, utilisez le diagnostic gratuit. On part de votre site, de votre mobile, et de votre fiche Google, sans rien inventer.
          </p>
          <div className="mt-4">
            <Link href="/#diagnostic" className="btn-cta inline-flex items-center justify-center px-6 py-3 rounded-md text-white">Recevoir mon diagnostic gratuit</Link>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-navy">Articles liés</h2>
            <div className="mt-4 space-y-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="block rounded-lg border border-concrete-200 bg-white px-4 py-3 text-sm text-navy hover:border-concrete-300 hover:shadow-sm transition"
                >
                  {related.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  )
}
