import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Home, Briefcase, Info, HelpCircle, Menu, X } from "lucide-react"
import { useState } from "react"

const menuItems = [
  { title: "Accueil", icon: Home, href: "/" },
  { title: "Services", icon: Briefcase, href: "/services" },
  { title: "À propos", icon: Info, href: "/about" },
  { title: "Assistance", icon: HelpCircle, href: "/assistance" },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 md:hidden">
      {/* Header mobile avec bouton menu */}
      <div className="flex w-full items-center justify-between border-b border-gray-300 bg-white p-3">
        <div>
          <h1 className="flex rounded-xl bg-green-700 px-2 py-1 text-center text-sm font-bold text-yellow-400">
            Siwtch Direct
          </h1>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Button
              variant="outline"
              size="icon"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72 bg-white p-0">
            <SheetHeader className="border-b border-gray-300 p-4">
              <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Menu de navigation
              </SheetDescription>
            </SheetHeader>

            {/* Navigation links */}
            <nav className="flex flex-col gap-1 p-4">
              <p className="mb-2 text-xs font-medium text-gray-500">
                Navigation
              </p>
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-black"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </a>
              ))}
            </nav>

            {/* Footer buttons */}
            <div className="mt-auto flex flex-col gap-2 border-t border-gray-300 p-4">
              <Button variant="outline" className="w-full justify-center">
                Connexion
              </Button>
              <Button className="w-full justify-center border border-gray-300 bg-blue-400 hover:bg-blue-500">
                S'inscrire
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
