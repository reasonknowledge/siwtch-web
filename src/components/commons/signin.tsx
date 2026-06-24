import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Signin() {
  return (
    <div className="background-login flex min-h-screen items-center justify-center">
      <div className="w-xs sm:w-sm space-y-6 rounded-lg border border-yellow-400 bg-yellow-400 p-4 sm:p-8">
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
              className="w-full border-none bg-blue-600 text-white hover:bg-yellow-800"
            >
              Se connecter
            </Button>
          </div>
        </form>

        <div className="text-xs text-center text-gray-700">
          <span>Vous n'avez pas de compte ? </span>
          <a href="/signup" className="font-semibold text-yellow-800 hover:underline">
             Créez un compte
          </a>
        </div>
      </div>
    </div>
  )
}