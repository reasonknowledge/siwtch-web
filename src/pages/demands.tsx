import Demand from "@/components/commons/demand"
import { Datademands } from "../data/data-demands"

export default function Demands() {
  return (
    <div className="min-h-screen bg-green-900 p-4 sm:p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
          Mes demandes
        </h1>

        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-yellow-400 text-black">
                <th className="px-2 py-2 text-left text-xs font-semibold sm:px-4 sm:py-3 sm:text-sm">
                  Services
                </th>
                <th className="px-2 py-2 text-left text-xs font-semibold sm:px-4 sm:py-3 sm:text-sm">
                  Date de Soumission
                </th>
                <th className="px-2 py-2 text-left text-xs font-semibold sm:px-4 sm:py-3 sm:text-sm">
                  Montant
                </th>
                <th className="px-2 py-2 text-left text-xs font-semibold sm:px-4 sm:py-3 sm:text-sm">
                  Statut
                </th>
              </tr>
            </thead>
            <tbody>
              {Datademands.map((demande, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-green-50"}
                >
                  <Demand {...demande} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
