// app/(legal)/conditions/page.js

export const metadata = {
  title: "Conditions d'utilisation | BureauWeb",
  description: "Conditions d'utilisation du site BureauWeb.ca : règles d'usage, sécurité, propriété intellectuelle, responsabilités.",
}

export default function ConditionsPage() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Conditions d'utilisation
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          BureauWeb.ca · En vigueur depuis le 14 janvier 2026
        </p>
      </header>

      <section className="space-y-4">
        <p className="text-slate-800">
          Ces conditions encadrent votre accès au site BureauWeb.ca et son
          utilisation. En naviguant sur le site, vous acceptez de respecter ces
          conditions.
        </p>

        <p className="text-slate-800">
          Ces conditions sont distinctes de notre{' '}
          <a className="underline" href="/confidentialite">
            politique de confidentialité
          </a>{' '}
          et de notre page{' '}
          <a className="underline" href="/gestion-renseignements">
            gestion des renseignements personnels
          </a>.
        </p>
      </section>

      <hr className="my-10 border-slate-200" />

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            1. Utilisation permise
          </h2>
          <p className="mt-2 text-slate-800">
            Vous pouvez utiliser le site à des fins légitimes d'information et
            pour nous contacter. Vous vous engagez à ne pas utiliser le site
            d'une manière qui pourrait nuire à son fonctionnement, à sa sécurité
            ou à son intégrité.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            2. Utilisations interdites
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-slate-800">
            <li>
              Tenter de contourner ou de compromettre la sécurité du site
            </li>
            <li>
              Perturber le service (surcharge, automatisation abusive, tentative
              d'attaque)
            </li>
            <li>
              Introduire un code malveillant ou tenter d'exploiter une
              vulnérabilité
            </li>
            <li>
              Copier, extraire ou réutiliser le contenu du site à des fins
              commerciales sans autorisation écrite
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            3. Propriété intellectuelle
          </h2>
          <p className="mt-2 text-slate-800">
            Sauf indication contraire, le contenu du site (textes, visuels,
            marque, logos, structure) est protégé. Vous pouvez consulter et
            partager un lien vers une page, mais vous ne pouvez pas reproduire
            ou exploiter le contenu à des fins commerciales sans permission.
          </p>
          <p className="text-slate-800">
            Sauf stipulation contraire par écrit, BureauWeb demeure titulaire
            des droits de propriété intellectuelle sur les gabarits, modèles,
            code, structure, composants et éléments techniques que nous
            concevons ou mettons à disposition, y compris lorsqu’ils sont utilisés
            pour réaliser un site pour un client. Le client conserve ses droits
            sur les contenus qu’il fournit (textes, logos, images) et obtient un
            droit d’utilisation non exclusif, non transférable et révocable des
            éléments fournis par BureauWeb, limité à la durée de l’abonnement
            actif et aux besoins opérationnels du site. Il est interdit de copier,
            extraire (scraper), reproduire, republier, revendre, ou réutiliser
            tout ou partie de ces éléments pour recréer un site (ou un site
            substantiellement similaire) en dehors de la relation d’affaires.
            Toute utilisation non autorisée peut entraîner la suspension de
            l’accès et des recours civils, dans la mesure permise par la loi.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            4. Liens vers des sites externes
          </h2>
          <p className="mt-2 text-slate-800">
            Le site peut contenir des liens vers des sites externes. Ces sites
            sont gérés par des organisations indépendantes. Nous ne contrôlons
            pas leur contenu ni leurs pratiques. Consultez leur politique de
            confidentialité avant de transmettre des renseignements.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            5. Disponibilité, sécurité et risques
          </h2>
          <p className="mt-2 text-slate-800">
            Nous faisons des efforts raisonnables pour maintenir le site en bon
            état. Aucun service web n'est à l'abri d'une interruption, d'un
            problème technique, ou d'un incident de sécurité. Vous utilisez le
            site à vos risques, notamment quand vous téléchargez du contenu ou
            suivez un lien externe.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            6. Limitation de responsabilité
          </h2>
          <p className="mt-2 text-slate-800">
            Dans la mesure permise par la loi, BureauWeb.ca ne peut être tenu
            responsable des dommages résultant directement ou indirectement de
            l'utilisation du site, d'une interruption, d'un problème technique,
            ou d'un contenu accessible via des liens externes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            7. Modifications
          </h2>
          <p className="mt-2 text-slate-800">
            Nous pouvons modifier ces conditions au besoin. La version en
            vigueur est celle publiée sur cette page, avec sa date.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            8. Droit applicable
          </h2>
          <p className="mt-2 text-slate-800">
            Ces conditions sont régies par les lois applicables au Québec et au
            Canada.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            9. Nous joindre
          </h2>
          <p className="mt-2 text-slate-800">
            Pour toute question à propos du site ou de ces conditions, écrivez à{' '}
            <a className="underline" href="mailto:info@bureauweb.ca">
              info@bureauweb.ca
            </a>.
          </p>
        </div>
      </section>
    </>
  )
}
