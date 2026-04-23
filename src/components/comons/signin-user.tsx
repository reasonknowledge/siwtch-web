import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Signin() {
  return (
    <div className="background-login flex min-h-screen items-center justify-center">
      <div className="w-xs space-y-6 rounded-lg border border-yellow-400 bg-yellow-400 p-4 sm:p-8 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold text-gray-900">SIWCH DIRECT</h1>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Entrez l'email"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Entrez votre nom complet"
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Button
              type="submit"
              className="w-full border-none bg-blue-600 text-white hover:bg-blue-700"
            >
              Se connecter
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
