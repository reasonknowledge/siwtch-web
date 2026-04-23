import { Button } from "@/components/ui/button"
import TestimonyCard from "./testimony-card"

const testimonies = [
  {
    id: 1,
    name: "Aminata Diallo",
    rating: 4,
    text: "Working with Switchers has been amazing for our organization. Their switch to our cloud-based platform has significantly improved the efficiency and productivity of our entire team. We have been able to streamline our workflow and automate many tasks, which has allowed us to focus on more strategic initiatives.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 2,
    name: "Koffi Mensah",
    rating: 5,
    text: "Working with Switchers has been amazing for our organization. Their switch to our cloud-based platform has significantly improved the efficiency and productivity of our entire team.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 3,
    name: "Grace Kouassi",
    rating: 5,
    text: "Working with Switchers has been amazing for our organization. Their switch to our cloud-based platform has significantly improved the efficiency and productivity of our entire team. We have been able to streamline our workflow.",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 4,
    name: "Yves Koffi",
    rating: 4,
    text: "Working with Switchers has been amazing for our organization. Their switch to our cloud-based platform has significantly improved the efficiency and productivity of our entire team. We have been able to streamline our workflow and automate many tasks, which has allowed us to focus on more strategic initiatives.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 5,
    name: "Marie-Therese Yao",
    rating: 5,
    text: "Working with Switchers has been amazing for our organization. Their switch to our cloud-based platform has significantly improved the efficiency and productivity of our entire team.",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 6,
    name: "Eric N'Guessan",
    rating: 4,
    text: "Working with Switchers has been amazing for our organization. Their switch to our cloud-based platform has significantly improved the efficiency and productivity of our entire team. We have been able to streamline our workflow.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 7,
    name: "Fatou Bamba",
    rating: 5,
    text: "Working with Switchers has been amazing for our organization. Their switch to our cloud-based platform has significantly improved the efficiency and productivity of our entire team.",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
]

export default function Testimonies() {
  const limitedTestimonies = testimonies.slice(0, 6)
  const leftColumn = limitedTestimonies.filter((_, i) => i % 2 === 0)
  const rightColumn = limitedTestimonies.filter((_, i) => i % 2 === 1)

  return (
    <section className="bg-blue-500 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-white">
          Témoignages
        </h2>
        <div className="flex flex-col gap-8 md:flex-row md:gap-0">
          {/* Left Column */}
          <div className="flex flex-1 flex-col gap-6 pr-0 md:pr-8">
            {leftColumn.map((testimony) => (
              <TestimonyCard
                key={testimony.id}
                name={testimony.name}
                rating={testimony.rating}
                text={testimony.text}
                avatar={testimony.avatar}
              />
            ))}
          </div>
          {/* Vertical Divider */}
          <div className="hidden md:block md:w-px md:bg-white/50" />
          {/* Right Column */}
          <div className="flex flex-1 flex-col gap-6 pl-0 md:pl-8">
            {rightColumn.map((testimony) => (
              <TestimonyCard
                key={testimony.id}
                name={testimony.name}
                rating={testimony.rating}
                text={testimony.text}
                avatar={testimony.avatar}
              />
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            className="rounded-full border-white bg-white text-blue-500 hover:bg-white/90"
          >
            Plus
          </Button>
        </div>
      </div>
    </section>
  )
}
