interface DemandProps {
  services: string
  dateSoumission: string
  montant: string
  statut: "Soumis" | "En cours" | "Incomplet" | "Terminé"
}

export default function Demand({
  services,
  dateSoumission,
  montant,
  statut,
}: DemandProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Soumis":
        return "bg-yellow-200"
      case "En cours":
        return "bg-blue-200"
      case "Incomplet":
        return "bg-red-200"
      case "Terminé":
        return "bg-green-200"
      default:
        return "bg-gray-200"
    }
  }

  return (
    <>
      <td className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm">
        {services}
      </td>
      <td className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm">
        {dateSoumission}
      </td>
      <td className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm">
        {montant}
      </td>
      <td className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm">
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium sm:px-3 sm:text-sm ${getStatusColor(statut)}`}
        >
          {statut}
        </span>
      </td>
    </>
  )
}
