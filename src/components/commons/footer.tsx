import { Link } from "react-router-dom"
import { CiFacebook } from "react-icons/ci"
import { FiYoutube } from "react-icons/fi"
import { BsTwitterX } from "react-icons/bs"
import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = [
  { title: "Accueil", href: "/" },
  { title: "Services", href: "/services" },
  { title: "À propos", href: "/about" },
  { title: "Assistance", href: "/assistance" },
]

const socialLinks = [
  { icon: CiFacebook, href: "https://facebook.com", label: "Facebook", size: 18 },
  { icon: FiYoutube, href: "https://youtube.com", label: "YouTube", size: 18 },
  { icon: BsTwitterX, href: "https://twitter.com", label: "X (Twitter)", size: 16 },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-yellow-400">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white transition-colors hover:text-yellow-400"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-yellow-400">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white">
                <Phone size={14} className="shrink-0 text-yellow-400" />
                <a href="tel:+0622387312" className="hover:text-yellow-400 transition-colors">
                  +062 23 87 33 12
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white">
                <Mail size={14} className="shrink-0 text-yellow-400" />
                <a href="mailto:siwtch@gmail.com" className="hover:text-yellow-400 transition-colors">
                  siwtch@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white">
                <MapPin size={14} className="mt-0.5 shrink-0 text-yellow-400" />
                <span>Libreville, Gabon</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-yellow-400">
              Suivez-nous
            </h3>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label, size }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-green-800 text-white transition-all hover:bg-yellow-400 hover:text-green-900"
                >
                  <Icon size={size} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-white">
            &copy; {new Date().getFullYear()} Siwtch Direct. Tous droits réservés.
          </p>
          <div className="flex gap-4 text-xs text-white">
            <Link to="/terms" className="transition-colors hover:text-yellow-400">
              Termes et conditions
            </Link>
            <span className="text-green-700">|</span>
            <Link to="/privacy" className="transition-colors hover:text-yellow-400">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}