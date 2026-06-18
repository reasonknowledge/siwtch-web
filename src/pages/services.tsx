import { Link } from "react-router-dom"
import { Landmark, HeartPulse, Wallet, IdCard, BookOpen } from "lucide-react"

const services = [
  { id: "etat-civil", name: "Service d'état civil", icon: Landmark },
  {
    id: "securite-sociale",
    name: "Sécurité sociale et santé",
    icon: HeartPulse,
  },
  { id: "fiscalite", name: "Fiscalité", icon: Wallet },
  { id: "permis-conduire", name: "Permis de conduire", icon: IdCard },
  { id: "education", name: "Éducation", icon: BookOpen },
]

export default function Services() {
  return (
    <div className="flex min-h-[calc(100vh-60px)] flex-col items-center justify-center bg-yellow-400 pt-4">
      <div className="flex w-full flex-col items-center gap-1.5 sm:p-3">
        <h1 className="text-center text-xl sm:text-3xl">Services</h1>
        <div className="m-auto flex w-xs flex-col space-y-1 rounded-lg sm:w-md sm:space-y-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="flex items-center gap-3 rounded-lg border-2 border-green-700 bg-white p-1.5 transition-colors hover:bg-green-50 sm:p-3"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700">
                  <Icon size={16} className="text-yellow-500" />
                </div>
                <span>{service.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
