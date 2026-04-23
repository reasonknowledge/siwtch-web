import { Star } from "lucide-react"

interface TestimonyCardProps {
  name: string
  rating: number
  text: string
  avatar?: string
}

export default function TestimonyCard({
  name,
  rating,
  text,
  avatar,
}: TestimonyCardProps) {
  return (
    <div className="flex gap-3">
      <img
        src={avatar || "https://i.pravatar.cc/150?img=1"}
        alt={name}
        className="h-10 w-10 shrink-0 rounded-full object-cover"
      />
      <div>
        <h4 className="font-semibold text-white">{name}</h4>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
              }`}
            />
          ))}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-gray-200">{text}</p>
      </div>
    </div>
  )
}
