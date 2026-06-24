import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function Signup() {
  const [genre, setGenre] = useState("")
  const [termes, setTermes] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="background-login flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl space-y-6 rounded-lg border border-yellow-400 bg-yellow-400 p-4 sm:p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold text-gray-900">SIWCH DIRECT</h1>
          <p className="text-sm text-gray-700">Créer un compte</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Input placeholder="Nom de famille" className="w-full" />
            <Input placeholder="Prénom" className="w-full" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Input
              placeholder="N° identité nationale (GAB-XXXXXXXX-XX)"
              className="w-full"
            />
            <Input type="date" className="w-full" />
          </div>

          <Select
            value={genre}
            onValueChange={(value) => setGenre(value ?? "")}
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Sélectionner votre genre..." />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              <SelectItem value="homme">Homme</SelectItem>
              <SelectItem value="femme">Femme</SelectItem>
              <SelectItem value="autre">Autre</SelectItem>
            </SelectContent>
          </Select>

          {/* Email / Téléphone */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Input
              type="email"
              placeholder="Adresse e-mail"
              className="w-full"
            />
            <Input
              type="tel"
              placeholder="Téléphone (+241 06 00 00 00)"
              className="w-full"
            />
          </div>

          {/* Mot de passe / Confirmation */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Input
              type="password"
              placeholder="Mot de passe"
              className="w-full"
            />
            <Input
              type="password"
              placeholder="Confirmer le mot de passe"
              className="w-full"
            />
          </div>

          {/* Termes */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="termes"
              checked={termes}
              onCheckedChange={(checked) => setTermes(checked === true)}
            />
            <label
              htmlFor="termes"
              className="cursor-pointer text-sm text-gray-700"
            >
              J'accepte les{" "}
              <Link
                to="/termes"
                className="font-semibold text-yellow-800 hover:underline"
              >
                Termes & Conditions
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full border-none bg-blue-600 text-white hover:bg-yellow-800"
          >
            S'inscrire
          </Button>
        </form>

        <div className="text-center text-xs text-gray-700">
          <span>Vous avez déjà un compte ? </span>
          <Link
            to="/signin"
            className="font-semibold text-yellow-800 hover:underline"
          >
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  )
}
