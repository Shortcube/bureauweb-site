// app/app/confidentialite/page.js

export const metadata = {
  title: "Politique de confidentialité | BureauWeb",
  description:
    "Politique de confidentialité de BureauWeb.ca : collecte, utilisation, communication, conservation et protection des renseignements personnels.",
}

export default function ConfidentialitePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Politique de confidentialité
        </h1>

        <div className="mt-3 space-y-1 text-sm text-slate-600">
          <p>BureauWeb.ca</p>
          <p>
            <strong>Date d’entrée en vigueur :</strong> 14 janvier 2026
          </p>
          <p>
            <strong>Dernière mise à jour :</strong> 14 janvier 2026
          </p>
        </div>
      </header>

      <section className="space-y-4 text-slate-800">
        <p>
          Cette politique explique comment BureauWeb.ca collecte, utilise,
          communique, conserve et protège des renseignements personnels lorsque
          vous utilisez notre site Web ou que vous communiquez avec nous (par
          exemple par courriel ou via un formulaire).
        </p>

        <p>
          Elle est rédigée en termes simples et vise à être facile à comprendre.
        </p>
      </section>

      <hr className="my-10 border-slate-200" />

      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            1. Personne à contacter
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Pour toute question liée à la confidentialité ou pour exercer vos
              droits, vous pouvez nous écrire :
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Entreprise :</strong> BureauWeb (NEQ :
                2281685182)
              </li>
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
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            2. Comment nous recueillons des renseignements personnels
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Nous recueillons des renseignements personnels par des moyens
              technologiques, principalement :
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Courriels</strong> : lorsque vous nous écrivez, nous
                recevons votre adresse courriel et le contenu du message.
              </li>
              <li>
                <strong>Formulaires</strong> : lorsque vous remplissez un
                formulaire sur le site, nous recevons les informations que vous
                y inscrivez.
              </li>
              <li>
                <strong>Journaux techniques</strong> : notre infrastructure peut
                générer des journaux nécessaires à la sécurité et au bon
                fonctionnement (ex. adresse IP, date/heure, requêtes).
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            3. Quels renseignements personnels nous recueillons
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>Selon votre interaction avec nous, nous pouvons recueillir :</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Coordonnées</strong> : nom, courriel, numéro de téléphone
                (si fourni).
              </li>
              <li>
                <strong>Renseignements liés à votre demande</strong> : secteur
                d’activité, région, détails sur vos besoins, message, et toute
                information que vous choisissez de transmettre.
              </li>
              <li>
                <strong>Renseignements techniques</strong> : adresse IP, pages
                consultées, date et heure, actions de base nécessaires au
                fonctionnement et à la protection du site.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            4. Pourquoi nous les recueillons
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>Nous recueillons ces renseignements notamment pour :</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>répondre à vos demandes (information, estimation, suivi) ;</li>
              <li>offrir et opérer nos services ;</li>
              <li>
                assurer la sécurité, prévenir la fraude et maintenir la
                performance du site ;
              </li>
              <li>
                gérer nos communications et améliorer notre service de façon
                raisonnable.
              </li>
            </ul>

            <p className="text-sm text-slate-600">
              Si vous choisissez de ne pas fournir certaines informations, il se
              peut qu’on ne puisse pas traiter votre demande.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            5. Témoins (cookies) et stockage local
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              À notre connaissance, nous n’utilisons pas de témoins publicitaires
              ni de technologies de profilage sur BureauWeb.ca.
            </p>
            <p>
              Il se peut toutefois que certains éléments techniques soient
              utilisés pour faire fonctionner le site et le sécuriser (par
              exemple, mémoriser un choix d’affichage ou limiter l’abus).
            </p>
            <p className="text-sm text-slate-600">
              Si nous ajoutons un jour des outils d’analyse ou de marketing, nous
              mettrons à jour cette politique.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            6. Qui a accès aux renseignements
          </h2>
          <p className="mt-2 text-slate-800">
            L’accès aux renseignements personnels est limité aux personnes qui
            en ont besoin pour traiter votre demande ou opérer le service. Dans
            notre cas, BureauWeb.ca est une petite entreprise et l’accès est
            généralement limité au responsable indiqué plus haut.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            7. Nos fournisseurs (et communication de renseignements)
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Nous ne vendons pas vos renseignements personnels. Nous pouvons
              toutefois communiquer certains renseignements à des fournisseurs
              qui nous aident à opérer le site et à traiter les demandes, selon
              ce qui est nécessaire.
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Namecheap</strong> : gestion du nom de domaine.
              </li>
              <li>
                <strong>Cloudflare</strong> : sécurité, performance et protection
                contre l’abus (peut impliquer des journaux techniques).
              </li>
              <li>
                <strong>Resend</strong> : envoi de courriels (ex. : réponses ou
                suivis liés à une demande).
              </li>
              <li>
                <strong>GitHub</strong> : hébergement du code / déploiement (peut
                générer des journaux techniques).
              </li>
              <li>
                <strong>Google</strong> : si vous nous écrivez et que nos courriels
                sont gérés via Google (Gmail/Workspace).
              </li>
            </ul>

            <p className="text-sm text-slate-600">
              Selon les services utilisés, certains traitements peuvent se faire
              à l’extérieur du Québec (ex. : infrastructure infonuagique).
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
            pas leur contenu ni leurs pratiques. Nous vous invitons à consulter
            leur politique de confidentialité avant d’y transmettre des
            renseignements.
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
              les détruisons ou les anonymisons selon nos pratiques.
            </p>
            <p className="text-sm text-slate-600">
              Si vous voulez connaître notre approche de gouvernance, consultez{" "}
              <a className="underline" href="/gestion-renseignements">
                gestion des renseignements personnels
              </a>
              .
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
              renseignements personnels (contrôle d’accès, mesures techniques et
              bonnes pratiques opérationnelles).
            </p>
            <p>
              Malgré ces efforts, aucun mode de transmission sur Internet n’est
              parfaitement sécuritaire. Il existe toujours un certain risque
              lorsque vous transmettez des renseignements en ligne.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            11. Vos droits et questions
          </h2>
          <div className="mt-2 space-y-3 text-slate-800">
            <p>
              Vous pouvez nous contacter pour demander l’accès à des
              renseignements personnels que nous détenons à votre sujet, demander
              une rectification, ou déposer une plainte liée à la protection des
              renseignements personnels.
            </p>
            <p>
              Pour faire une demande, écrivez au contact indiqué à la section 1
              et décrivez votre requête de façon suffisamment précise pour que
              nous puissions y répondre.
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
    </main>
  )
}
