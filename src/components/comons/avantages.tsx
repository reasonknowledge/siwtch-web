import hand from "@/assets/hand.png"

const avantages = [
  { id: 1, label: "Rapide", rotation: "-12deg" },
  { id: 2, label: "Sécurisé", rotation: "12deg" },
  { id: 3, label: "Accessible", rotation: "-8deg" },
]

export default function Avantages() {
  return (
    <section className="bg-yellow-400 py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-gray-900">
          Avantages
        </h2>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-center">
          {/* Left Badge */}
          <div
            className="rounded-lg bg-green-600 px-6 py-2 shadow-lg"
            style={{ transform: `rotate(${avantages[0].rotation})` }}
          >
            <span className="font-bold text-white">{avantages[0].label}</span>
          </div>
          {/* Center - Thumb Image */}
          <div className="relative">
            <img
              src={hand}
              alt="Pouce levé"
              className="h-48 w-48 rounded-full object-cover"
            />
          </div>
          {/* Right Badge */}
          <div
            className="rounded-lg bg-green-600 px-6 py-2 shadow-lg"
            style={{ transform: `rotate(${avantages[1].rotation})` }}
          >
            <span className="font-bold text-white">{avantages[1].label}</span>
          </div>
        </div>
        {/* Bottom Badge */}
        <div className="mt-8 flex justify-center">
          <div
            className="rounded-lg bg-green-600 px-6 py-2 shadow-lg"
            style={{ transform: `rotate(${avantages[2].rotation})` }}
          >
            <span className="font-bold text-white">{avantages[2].label}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
