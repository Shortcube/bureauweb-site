import Link from 'next/link'

const PageNavBack = ({ backHref, backLabel = 'Retour', className = '' }) => {
  return (
    <nav className={`flex flex-wrap items-center gap-3 text-sm ${className}`.trim()} aria-label="Navigation de retour">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-semibold text-safety hover:text-navy transition"
      >
        ← Retour à l'accueil
      </Link>
      {backHref ? (
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-concrete-600 hover:text-navy transition"
        >
          ← {backLabel}
        </Link>
      ) : null}
    </nav>
  )
}

export default PageNavBack
