import bigup from "@/assets/bigup.png"

export default function About() {
  return (
    <div className="min-h-screen bg-green-300 p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold text-green-900">
            Notre vision
          </h2>
          <p className="mx-auto max-w-2xl text-gray-700">
            Simplifier l'accès aux services administratifs pour tous les
            citoyens grâce à une plateforme numérique innovante et accessible.
          </p>
        </div>

        <div className="relative flex flex-col items-center">
          <img
            src={bigup}
            alt="Bigup illustration"
            className="h-1/3 w-full max-w-xl"
          />

          <div className="mt-6 flex w-full flex-col gap-4 md:hidden">
            <div className="rounded-lg bg-green-100/90 p-4 shadow-md">
              <h3 className="mb-2 text-sm font-bold text-green-900">
                Accompagner la transition digitale
              </h3>
              <p className="text-xs text-gray-700">
                Offrir un accompagnement sur mesure aux entreprises locales pour
                moderniser leurs processus.
              </p>
            </div>

            <div className="rounded-lg bg-green-100/90 p-4 shadow-md">
              <h3 className="mb-2 text-sm font-bold text-green-900">
                Gouvernance et expertise
              </h3>
              <p className="text-xs text-gray-700">
                Développer des programmes de formation sur les meilleures
                pratiques et les standards internationaux.
              </p>
            </div>

            <div className="rounded-lg bg-green-100/90 p-4 shadow-md">
              <h3 className="mb-2 text-sm font-bold text-green-900">
                Portes et soutien
              </h3>
              <p className="text-xs text-gray-700">
                Encourager les initiatives locales de production et faciliter
                l'accès aux meilleures technologies.
              </p>
            </div>

            <div className="rounded-lg bg-green-100/90 p-4 shadow-md">
              <h3 className="mb-2 text-sm font-bold text-green-900">
                Stimuler la production
              </h3>
              <p className="text-xs text-gray-700">
                Mettre en œuvre des politiques favorables pour encourager la
                production locale et les systèmes inclusifs.
              </p>
            </div>
          </div>

          <div className="absolute top-20 left-0 hidden w-1/3 rounded-lg bg-green-100/90 p-4 shadow-md md:block">
            <h3 className="mb-2 text-sm font-bold text-green-900">
              Accompagner la transition digitale
            </h3>
            <p className="text-xs text-gray-700">
              Offrir un accompagnement sur mesure aux entreprises locales pour
              moderniser leurs processus.
            </p>
          </div>

          <div className="absolute top-1/3 right-0 hidden w-1/3 rounded-lg bg-green-100/90 p-4 shadow-md md:block">
            <h3 className="mb-2 text-sm font-bold text-green-900">
              Gouvernance et expertise
            </h3>
            <p className="text-xs text-gray-700">
              Développer des programmes de formation sur les meilleures
              pratiques et les standards internationaux.
            </p>
          </div>

          <div className="absolute bottom-20 left-0 hidden w-1/3 rounded-lg bg-green-100/90 p-4 shadow-md md:block">
            <h3 className="mb-2 text-sm font-bold text-green-900">
              Portes et soutien
            </h3>
            <p className="text-xs text-gray-700">
              Encourager les initiatives locales de production et faciliter
              l'accès aux meilleures technologies.
            </p>
          </div>

          <div className="absolute right-0 bottom-10 hidden w-1/3 rounded-lg bg-green-100/90 p-4 shadow-md md:block">
            <h3 className="mb-2 text-sm font-bold text-green-900">
              Stimuler la production
            </h3>
            <p className="text-xs text-gray-700">
              Mettre en œuvre des politiques favorables pour encourager la
              production locale et les systèmes inclusifs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
