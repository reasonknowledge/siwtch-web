import { FileText, CheckCircle, Baby, Heart, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import home from "../../assets/home.png"

const services = [
  { id: 1, name: "Délivrance des actes", icon: FileText },
  { id: 2, name: "Délivrance des attestations", icon: CheckCircle },
  { id: 3, name: "Fiscalité", icon: Baby },
  { id: 4, name: "Social", icon: Heart },
  { id: 5, name: "Education", icon: GraduationCap },
]

export default function NosServices() {
  return (
    <section className="bg-yellow-400 px-4 pt-4 pb-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-2 text-center text-2xl font-bold text-gray-900">
          Nos Services
        </h2>
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-4 md:flex-row md:items-center md:justify-center md:gap-6">
          {/* Image */}
          <div className="shrink-0">
            <img
              src={home}
              alt="Femme souriante pointant vers les services"
              className="h-auto w-64 rounded-lg object-cover"
            />
          </div>
          {/* Services List */}
          <div className="flex w-full max-w-xs flex-col gap-2 md:max-w-none md:gap-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Button
                  key={service.id}
                  variant="ghost"
                  className="flex w-full items-center border border-green-500 justify-start gap-2 rounded-xl bg-green-50 p-4 hover:bg-green-100 md:gap-3 md:py-6 md:px-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 md:h-8 md:w-8">
                    <Icon className="h-3 w-3 text-white md:h-4 md:w-4" />
                  </div>
                  <span className="flex-1 text-left text-sm font-medium text-gray-900 md:text-base">
                    {service.name}
                  </span>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
