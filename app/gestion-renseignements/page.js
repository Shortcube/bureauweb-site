// app/app/gestion-renseignements/page.js

export const metadata = {
  title: "Gestion des renseignements personnels | BureauWeb",
  description:
    "Aperçu de nos pratiques de gouvernance : rôles, accès, conservation, destruction et processus de plainte.",
}

export default function GestionRenseignementsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Gestion des renseignements personnels
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          BureauWeb.ca · En vigueur depuis le 14 janvier 2026
        </p>
      </header>

      <section className="space-y-4 text-slate-800">
        <p>
          Cette page résume, de façon simple, comment BureauWeb.ca organise la
          gestion des renseignements personnels dans ses activités. Elle complète
          notre{" "}
          <a className="underline" href="/confidentialite">
            politique de confidentialité
          </a>
          .
        </p>
        <p>
          L’objectif ici est d’être clair sur notre façon de gérer les
          renseignements personnels, de leur collecte jusqu’à leur destruction,
          et sur la façon de nous contacter en cas de question ou de plainte.
        </p>
      </section>

      <hr className="my-10 border-slate-200" />

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            1. Rôles et responsabilités
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              BureauWeb.ca est une petite entreprise. La personne responsable de
              la protection des renseignements personnels est :
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Responsable :</strong> Patrick Lanoue
              </li>
              <li>
                <strong>Courriel :</strong>{" "}
                <a className="underline" href="mailto:info@bureauweb.ca">
                  info@bureauweb.ca
                </a>
              </li>
            </ul>
            <p>
              Le rôle du responsable est d’assurer la cohérence des pratiques,
              de répondre aux demandes, et de traiter les plaintes liées à la
              protection des renseignements personnels.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            2. Accès aux renseignements
          </h2>
          <p className="mt-2 text-slate-800">
            L’accès aux renseignements personnels est limité au strict nécessaire
            pour traiter une demande, fournir un service, ou assurer le bon
            fonctionnement du site. Dans notre cas, cet accès est généralement
            limité au responsable.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            3. Conservation et destruction
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Nous conservons les renseignements personnels seulement pour le
              temps nécessaire aux fins pour lesquelles ils ont été recueillis
              (par exemple répondre à une demande, assurer un suivi, exécuter un
              mandat).
            </p>
            <p>
              Lorsqu’ils ne sont plus requis, nous les détruisons ou les
              anonymisons selon nos pratiques internes.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            4. Fournisseurs et traitement
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Pour opérer notre site et nos communications, nous pouvons utiliser
              des fournisseurs technologiques (par exemple pour le domaine, la
              sécurité réseau ou l’envoi de courriels). Cela peut entraîner un
              traitement de renseignements (ex. journaux techniques, courriels)
              selon les services utilisés.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Namecheap</strong> (nom de domaine)</li>
              <li><strong>Cloudflare</strong> (sécurité et performance)</li>
              <li><strong>Resend</strong> (envoi de courriels)</li>
              <li><strong>GitHub</strong> (hébergement/déploiement du code)</li>
              <li><strong>Google</strong> (courriels si vous nous écrivez via Gmail)</li>
            </ul>
            <p>
              Quand c’est nécessaire, nous limitons l’information transmise au
              strict nécessaire et nous privilégions des réglages raisonnables
              de sécurité (accès, contrôle, etc.).
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            5. Mesures de protection
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Nous appliquons des mesures raisonnables et proportionnées à nos
              activités pour protéger les renseignements personnels.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>accès limité au strict nécessaire ;</li>
              <li>mesures techniques de base (ex. HTTPS, protections réseau) ;</li>
              <li>hygiène opérationnelle (mots de passe forts, accès contrôlés).</li>
            </ul>
            <p>
              Comme pour tout service Internet, le risque zéro n’existe pas.
              Nous restons toutefois vigilants et nous ajustons nos mesures au
              besoin.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            6. Processus de plainte et questions
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Si vous avez une question ou une plainte liée à la protection des
              renseignements personnels, écrivez-nous en décrivant :
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>ce qui vous préoccupe ;</li>
              <li>la page ou la situation concernée ;</li>
              <li>la meilleure façon de vous joindre.</li>
            </ul>
            <p>
              Nous traiterons votre demande avec sérieux et nous vous répondrons
              dès que possible.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            7. Mise à jour
          </h2>
          <p className="mt-2 text-slate-800">
            Nous révisons ces pratiques quand nos outils ou nos services
            évoluent. La version en vigueur est celle publiée sur cette page.
          </p>
        </div>
      </section>
    </main>
  )
}
