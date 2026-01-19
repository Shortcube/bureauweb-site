// app/(legal)/confidentialite/page.js

export const metadata = {
  title: 'Politique de confidentialité | BureauWeb',
  description: 'Politique de confidentialité de BureauWeb.ca : comment nous collectons, utilisons et protégeons vos renseignements personnels.',
}

export default function ConfidentialitePage() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Politique de confidentialité
        </h1>

        <div className="mt-3 space-y-1 text-sm text-slate-600">
          <p>BureauWeb.ca</p>
          <p>
            <strong>Date d'entrée en vigueur :</strong> 14 janvier 2026
          </p>
          <p>
            <strong>Dernière mise à jour :</strong> 14 janvier 2026
          </p>
        </div>
      </header>

      <section className="space-y-4 text-slate-800">
        <p>
          Cette politique explique comment BureauWeb.ca collecte, utilise,
          communique, conserve et protège vos renseignements personnels lorsque
          vous utilisez notre site web ou que vous communiquez avec nous.
        </p>

        <p>
          Elle est rédigée en termes simples pour être facile à comprendre.
        </p>
      </section>

      <hr className="my-10 border-slate-200" />

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            1. Personne responsable
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Pour toute question liée à la confidentialité ou pour exercer vos
              droits, vous pouvez nous écrire :
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Entreprise :</strong> BureauWeb (NEQ : 2281685182)
              </li>
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
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            2. Comment nous recueillons vos renseignements
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Nous recueillons des renseignements personnels principalement par :
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Courriels :</strong> lorsque vous nous écrivez, nous
                recevons votre adresse courriel et le contenu du message.
              </li>
              <li>
                <strong>Formulaires :</strong> lorsque vous remplissez un
                formulaire sur le site, nous recevons les informations que vous
                y inscrivez.
              </li>
              <li>
                <strong>Journaux techniques :</strong> notre infrastructure peut
                générer des journaux nécessaires à la sécurité et au bon
                fonctionnement (adresse IP, date/heure, requêtes).
              </li>
              <li>
                <strong>Paiements :</strong> si vous procédez au paiement d’un
                abonnement, Stripe traite le paiement et nous transmet les
                informations nécessaires à la gestion du compte (par exemple :
                statut de l’abonnement, plan, montant, identifiants de
                transaction).
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            3. Quels renseignements nous recueillons
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>Selon votre interaction avec nous, nous pouvons recueillir :</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Coordonnées :</strong> nom, courriel, numéro de téléphone
                (si fourni).
              </li>
              <li>
                <strong>Renseignements liés à votre demande :</strong> secteur
                d'activité, région, détails sur vos besoins.
              </li>
              <li>
                <strong>Renseignements techniques :</strong> adresse IP, pages
                consultées, date et heure.
              </li>
              <li>
                <strong>Paiement :</strong> informations nécessaires à la
                facturation et à la gestion de l’abonnement. Les informations de
                carte (numéro complet) sont traitées par Stripe; BureauWeb.ca ne
                les reçoit pas et ne les conserve pas.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            4. Pourquoi nous les recueillons
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>Nous recueillons ces renseignements pour :</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Répondre à vos demandes (information, estimation, suivi)</li>
              <li>Offrir et opérer nos services</li>
              <li>Assurer la sécurité et prévenir la fraude</li>
              <li>Améliorer notre service</li>
              <li>Traiter les paiements et gérer l’abonnement</li>
            </ul>

            <p className="text-sm text-slate-600">
              Si vous choisissez de ne pas fournir certaines informations, il se
              peut qu'on ne puisse pas traiter votre demande.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            5. Témoins (cookies) et stockage local
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Nous n'utilisons pas de témoins publicitaires ni de technologies
              de profilage sur BureauWeb.ca.
            </p>
            <p>
              Certains éléments techniques peuvent être utilisés pour faire
              fonctionner le site et le sécuriser (par exemple, mémoriser un
              choix d'affichage).
            </p>
            <p className="text-sm text-slate-600">
              Si nous ajoutons des outils d'analyse ou de marketing, nous
              mettrons à jour cette politique.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            6. Qui a accès aux renseignements
          </h2>
          <p className="mt-2 text-slate-800">
            L'accès aux renseignements personnels est limité aux personnes qui
            en ont besoin pour traiter votre demande ou opérer le service.
            BureauWeb.ca est une petite entreprise et l'accès est généralement
            limité au responsable indiqué plus haut.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            7. Nos fournisseurs
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Nous ne vendons pas vos renseignements personnels. Nous pouvons
              communiquer certains renseignements à des fournisseurs qui nous
              aident à opérer le site et à traiter les demandes :
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li><strong>WHC.ca (Web Hosting Canada) :</strong> gestion du nom de domaine et hébergement</li>
              <li><strong>Cloudflare :</strong> sécurité et performance</li>
              <li><strong>Resend :</strong> envoi de courriels</li>
              <li><strong>GitHub :</strong> hébergement du code</li>
              <li><strong>Google :</strong> si vous nous écrivez via Gmail</li>
              <li><strong>Stripe :</strong> traitement des paiements et gestion des abonnements</li>
              <li>VoIP.ms : services de telephonie (appels et messages), gestion des communications clients</li>
              <li>Zoiper : application cliente de telephonie utilisee pour acceder au service VoIP</li>
            </ul>

            <p className="text-sm text-slate-600">
              Selon les services utilisés, certains traitements peuvent se faire
              à l'extérieur du Québec.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            8. Liens vers des sites externes
          </h2>
          <p className="mt-2 text-slate-800">
            Le site peut contenir des liens vers des sites externes. Ces sites
            sont gérés par des organisations indépendantes. Nous ne contrôlons
            pas leur contenu ni leurs pratiques. Consultez leur politique de
            confidentialité avant d'y transmettre des renseignements.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            9. Conservation
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Nous conservons les renseignements personnels uniquement pour le
              temps nécessaire aux fins décrites dans cette politique, puis nous
              les détruisons ou les anonymisons.
            </p>
            <p className="text-sm text-slate-600">
              Pour en savoir plus, consultez notre page{' '}
              <a className="underline" href="/gestion-renseignements">
                gestion des renseignements personnels
              </a>.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            10. Mesures de sécurité
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Nous appliquons des mesures raisonnables pour protéger les
              renseignements personnels (contrôle d'accès, mesures techniques).
            </p>
            <p>
              Aucun mode de transmission sur Internet n'est parfaitement
              sécuritaire. Il existe toujours un certain risque lorsque vous
              transmettez des renseignements en ligne.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            11. Vos droits
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Vous pouvez nous contacter pour demander l'accès à vos
              renseignements personnels, demander une rectification, ou déposer
              une plainte liée à la protection des renseignements personnels.
            </p>
            <p>
              Pour faire une demande, écrivez au contact indiqué à la section 1
              et décrivez votre requête de façon précise.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            12. Mise à jour de cette politique
          </h2>
          <p className="mt-2 text-slate-800">
            Nous pouvons modifier cette politique lorsque nos outils ou nos
            pratiques évoluent. La version en vigueur est celle publiée sur
            cette page, avec sa date de mise à jour.
          </p>
        </div>
      </section>
    </>
  )
}
