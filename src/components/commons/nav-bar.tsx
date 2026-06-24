import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const menuItems = [
  { title: "Accueil", href: "/" },
  { title: "Services", href: "/services" },
  { title: "À propos", href: "/about" },
  { title: "Assistance", href: "/assistance" },
]

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 hidden w-full items-center justify-between border-b border-gray-300 bg-white p-3 md:flex">
      <div>
        <Link
          to="/"
          className="flex rounded-xl bg-green-700 px-2 py-1 text-center font-semibold text-yellow-400 transition-colors hover:bg-green-800"
        >
          Siwtch Direct
        </Link>
      </div>
      <ul className="flex items-center space-x-3">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="text-black transition-colors hover:text-blue-400"
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/Signin">
            <Button className="border-green-300 bg-white text-black hover:bg-green-50">
              Connexion
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <Button className="bg-blue-400 text-white hover:bg-blue-500">
              S'inscrire
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  )
}
