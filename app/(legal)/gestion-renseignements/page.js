// app/(legal)/gestion-renseignements/page.js

export const metadata = {
  title: 'Gestion des renseignements personnels | BureauWeb',
  description: 'Comment BureauWeb gère les renseignements personnels : rôles, accès, conservation, destruction et processus de plainte.',
}

export default function GestionRenseignementsPage() {
  return (
    <>
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
          Cette page résume comment BureauWeb.ca organise la gestion des
          renseignements personnels dans ses activités. Elle complète notre{' '}
          <a className="underline" href="/confidentialite">
            politique de confidentialité
          </a>.
        </p>
        <p>
          L'objectif est d'être clair sur notre façon de gérer les
          renseignements personnels, de leur collecte jusqu'à leur destruction,
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
                <strong>Courriel :</strong>{' '}
                <a className="underline" href="mailto:info@bureauweb.ca">
                  info@bureauweb.ca
                </a>
              </li>
            </ul>
            <p>
              Le rôle du responsable est d'assurer la cohérence des pratiques,
              de répondre aux demandes, et de traiter les plaintes.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            2. Accès aux renseignements
          </h2>
          <p className="mt-2 text-slate-800">
            L'accès aux renseignements personnels est limité au strict nécessaire
            pour traiter une demande, fournir un service, ou assurer le bon
            fonctionnement du site. Cet accès est généralement limité au
            responsable.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            3. Conservation et destruction
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Nous conservons les renseignements personnels seulement pour le
              temps nécessaire aux fins pour lesquelles ils ont été recueillis.
            </p>
            <p>
              Lorsqu'ils ne sont plus requis, nous les détruisons ou les
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
              Pour opérer notre site et nos communications, nous utilisons des
              fournisseurs technologiques. Cela peut entraîner un traitement de
              renseignements selon les services utilisés.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>WHC.ca (Web Hosting Canada)</strong> (nom de domaine et hébergement)</li>
              <li><strong>Cloudflare</strong> (sécurité et performance)</li>
              <li><strong>Resend</strong> (envoi de courriels)</li>
              <li><strong>GitHub</strong> (hébergement du code)</li>
              <li><strong>Google</strong> (réception et envoi de courriels)</li>
              <li><strong>Stripe</strong> (paiements et abonnements)</li>
              <li>VoIP.ms : services de telephonie (appels et messages), gestion des communications clients</li>
              <li>Zoiper : application cliente de telephonie utilisee pour acceder au service VoIP</li>
            </ul>
            <p>
              Nous limitons l'information transmise au strict nécessaire et nous
              privilégions des réglages raisonnables de sécurité.
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
              activités pour protéger les renseignements personnels :
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Accès limité au strict nécessaire</li>
              <li>Mesures techniques de base (HTTPS, protections réseau)</li>
              <li>Hygiène opérationnelle (mots de passe forts, accès contrôlés)</li>
            </ul>
            <p>
              Le risque zéro n'existe pas, mais nous restons vigilants et
              ajustons nos mesures au besoin.
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
              <li>Ce qui vous préoccupe</li>
              <li>La page ou la situation concernée</li>
              <li>La meilleure façon de vous joindre</li>
            </ul>
            <p>
              Nous traiterons votre demande avec sérieux et vous répondrons dès
              que possible.
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
    </>
  )
}
