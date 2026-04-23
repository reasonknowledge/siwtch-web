import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AdminLogin() {
  return (
    <div className="flex background-login-user min-h-screen items-center justify-center">
      <div className="w-xs bg-blue-400 space-y-6 rounded-lg border border-blue-400 p-4 sm:p-8 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            ESPACE ADMINISTRATEUR
          </h1>
        </div>

        <form className="space-y-4 ">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Entrez l'email"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Entrez votre mot de passe"
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Button
              type="submit"
              className="w-full bg-yellow-400 text-white border-none hover:bg-yellow-500"
            >
              Se connecter
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
