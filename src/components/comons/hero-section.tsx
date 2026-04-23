import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HeroSection() {
  return (
    <section className="bg-yellow-400 px-4 pt-16 pb-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
          Simplifiez vos démarches administratives
        </h1>
        <p className="mt-4 text-sm text-gray-700">
          Gérez vos démarches en ligne facilement
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Input
            placeholder="Recherchez un service..."
            className="w-full max-w-sm bg-white"
          />
          <Button className="bg-blue-500 text-white hover:bg-blue-600">
            Rechercher
          </Button>
        </div>
      </div>
    </section>
  )
}
