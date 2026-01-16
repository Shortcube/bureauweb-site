import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/content'

export const metadata = {
  title: 'Blogue | BureauWeb',
  description: 'Articles courts sur la conversion, la fiche Google, et les bases d’une présence en ligne.',
}

export default function BlogPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-navy">Blogue</h1>
        <p className="mt-3 text-concrete-600">
          Contenu de base. On évite les promesses. On explique ce qui est observable et actionnable.
        </p>
      </header>

      <div className="space-y-4">
        {BLOG_POSTS.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block rounded-xl border border-concrete-200 bg-white p-6 hover:border-concrete-300 hover:shadow-sm transition"
          >
            <p className="text-xl font-semibold text-navy">{p.title}</p>
            <p className="mt-2 text-concrete-600">{p.excerpt}</p>
            <p className="mt-4 text-sm text-concrete-500">Publié le {p.publishedAt}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
