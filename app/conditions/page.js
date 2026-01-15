// app/app/conditions/page.js

export const metadata = {
  title: "Conditions d’utilisation | BureauWeb",
  description:
    "Conditions d’utilisation du site BureauWeb.ca : règles d’usage, sécurité, propriété intellectuelle, responsabilités.",
}

export default function ConditionsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">
          Conditions d’utilisation
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          BureauWeb.ca · En vigueur depuis le 14 janvier 2026
        </p>
      </header>

      <section className="space-y-4">
        <p className="text-slate-800">
          Les présentes conditions d’utilisation (les « conditions ») encadrent
          votre accès au site BureauWeb.ca (le « site ») et son utilisation.
          En naviguant sur le site, vous acceptez de respecter ces conditions.
        </p>

        <p className="text-slate-800">
          Ces conditions sont distinctes de notre{" "}
          <a className="underline" href="/confidentialite">
            politique de confidentialité
          </a>{" "}
          et de notre page{" "}
          <a className="underline" href="/gestion-renseignements">
            gestion des renseignements personnels
          </a>
          . Elles peuvent y référer, mais elles ne sont pas fusionnées avec ces
          documents.
        </p>
      </section>

      <hr className="my-10 border-slate-200" />

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            1. Utilisation permise
          </h2>
          <p className="mt-2 text-slate-800">
            Vous pouvez utiliser le site à des fins légitimes d’information et
            pour nous contacter. Vous vous engagez à ne pas utiliser le site
            d’une manière qui pourrait nuire à son fonctionnement, à sa sécurité
            ou à son intégrité.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            2. Utilisations interdites
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-slate-800">
            <li>
              tenter de contourner ou de compromettre la sécurité du site (par
              exemple accéder à des zones non autorisées) ;
            </li>
            <li>
              perturber le service (ex. surcharge, automatisation abusive,
              tentative d’attaque) ;
            </li>
            <li>
              introduire un code malveillant ou tenter d’exploiter une
              vulnérabilité ;
            </li>
            <li>
              copier, extraire ou réutiliser le contenu du site à des fins
              commerciales sans autorisation écrite.
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
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            4. Liens vers des sites externes
          </h2>
          <p className="mt-2 text-slate-800">
            Le site peut contenir des liens vers des sites externes. Ces sites
            sont gérés par des organisations indépendantes. Nous ne contrôlons
            pas leur contenu ni leurs pratiques. Avant de transmettre des
            renseignements à un site tiers, nous vous recommandons de consulter
            sa politique de confidentialité.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            5. Disponibilité, sécurité et risques Internet
          </h2>
          <p className="mt-2 text-slate-800">
            Nous faisons des efforts raisonnables pour maintenir le site en bon
            état. Cela dit, aucun service Web n’est à l’abri d’une interruption,
            d’un problème technique, ou d’un incident de sécurité. Vous utilisez
            le site à vos risques, notamment quand vous téléchargez du contenu
            ou suivez un lien externe.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            6. Limitation de responsabilité
          </h2>
          <p className="mt-2 text-slate-800">
            Dans la mesure permise par la loi, BureauWeb.ca ne peut être tenu
            responsable des dommages résultant directement ou indirectement de
            l’utilisation du site, d’une interruption, d’un problème technique,
            ou d’un contenu accessible via des liens externes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            7. Modifications
          </h2>
          <p className="mt-2 text-slate-800">
            Nous pouvons modifier ces conditions au besoin (par exemple si le
            site évolue). La version en vigueur est celle publiée sur cette
            page, avec sa date.
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
            Pour toute question à propos du site ou de ces conditions, écrivez à{" "}
            <a className="underline" href="mailto:info@bureauweb.ca">
              info@bureauweb.ca
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
