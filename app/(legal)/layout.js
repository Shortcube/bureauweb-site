import Link from "next/link"

export default function LegalLayout({ children }) {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900"
        >
          ← Retour à l’accueil
        </Link>
      </div>

      {children}
    </main>
  )
}
