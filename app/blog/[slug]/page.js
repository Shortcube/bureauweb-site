import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/lib/content'

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

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12">
      <nav className="text-sm text-concrete-600">
        <Link href="/blog" className="text-safety hover:underline">Blogue</Link>
        <span className="mx-2">/</span>
        <span className="text-navy">{post.slug}</span>
      </nav>

      <article className="mt-6">
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-navy">{post.title}</h1>
          <p className="mt-3 text-concrete-600">{post.excerpt}</p>
          <p className="mt-2 text-sm text-concrete-500">Publié le {post.publishedAt}</p>
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
            Si vous voulez une version adaptée à votre entreprise, utilisez le plan gratuit 24 h. On part de votre site, de votre mobile, et de votre fiche Google, sans rien inventer.
          </p>
          <div className="mt-4">
            <Link href="/#contact" className="btn-cta inline-flex items-center justify-center px-6 py-3 rounded-md text-white">Recevoir mon plan gratuit 24 h</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
