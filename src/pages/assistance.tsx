import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  HelpCircle,
  FileQuestion,
  Shield,
} from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Comment créer un compte ?",
    answer:
      "Pour créer un compte, cliquez sur 'S'inscrire' en haut à droite de la page. Remplissez le formulaire avec vos informations personnelles et validez votre email.",
  },
  {
    id: 2,
    question: "Comment effectuer un paiement ?",
    answer:
      "Sélectionnez votre service, choisissez votre mode de paiement (carte bancaire, mobile money ou espèces), et suivez les instructions affichées à l'écran.",
  },
  {
    id: 3,
    question: "Quels sont les délais de traitement ?",
    answer:
      "Les délais varient selon le service demandé. La plupart des actes sont disponibles sous 24 à 72 heures ouvrables après validation du paiement.",
  },
  {
    id: 4,
    question: "Comment récupérer mes documents ?",
    answer:
      "Une fois votre demande traitée, vous recevrez une notification. Vous pouvez télécharger vos documents depuis votre espace personnel ou les retirer au guichet.",
  },
  {
    id: 5,
    question: "Puis-je modifier une demande en cours ?",
    answer:
      "Oui, tant que la demande n'a pas été validée par l'administration. Rendez-vous dans votre espace 'Mes demandes' pour effectuer les modifications.",
  },
]

const contactMethods = [
  {
    id: 1,
    icon: Phone,
    title: "Téléphone",
    value: "+225 27 20 30 40 50",
    description: "Du lundi au vendredi, 8h - 17h",
  },
  {
    id: 2,
    icon: Mail,
    title: "Email",
    value: "support@siwtch.ci",
    description: "Réponse sous 24 heures",
  },
  {
    id: 3,
    icon: MessageCircle,
    title: "Chat en ligne",
    value: "Démarrer une conversation",
    description: "Disponible 7j/7, 8h - 20h",
  },
]

export default function Assistance() {
  const [openFaq, setOpenFaq] = useState<number | null>(1)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-yellow-400">
      {/* Header */}
      <section className="px-4 pt-12 pb-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Centre d'Assistance
          </h1>
          <p className="mt-4 text-gray-700">
            Comment pouvons-nous vous aider aujourd'hui ?
          </p>

          {/* Search */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Rechercher une question..."
                className="w-full bg-white pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-green-600 text-white hover:bg-green-700">
              Rechercher
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-4 py-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <FileQuestion className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Guide utilisateur</h3>
                <p className="text-xs text-gray-500">Tutoriels et guides</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <HelpCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">FAQ</h3>
                <p className="text-xs text-gray-500">Questions fréquentes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                <Shield className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Sécurité</h3>
                <p className="text-xs text-gray-500">Protection des données</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="rounded-xl bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === faq.id ? null : faq.id)
                  }
                  className="flex w-full items-center justify-between p-4 text-left"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform ${
                      openFaq === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === faq.id && (
                  <div className="border-t border-gray-100 px-4 pb-4 pt-2">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {filteredFaqs.length === 0 && (
            <p className="mt-4 text-center text-gray-600">
              Aucune question ne correspond à votre recherche.
            </p>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
            Nous contacter
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <div
                  key={method.id}
                  className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900">
                    {method.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-green-600">
                    {method.value}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {method.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="px-4 pb-12 pt-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm text-gray-700">
            Vous ne trouvez pas la réponse à votre question ?{" "}
            <Button
              variant="link"
              className="h-auto p-0 font-semibold text-green-700 underline"
            >
              Envoyez-nous un message
            </Button>
          </p>
        </div>
      </section>
    </div>
  )
}
