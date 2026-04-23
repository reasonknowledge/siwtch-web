import { useState } from "react"
import { CreditCard, Smartphone, Banknote, ArrowLeft, Check } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const paymentMethods = [
  {
    id: "card",
    name: "Carte bancaire",
    description: "Visa, Mastercard, etc.",
    icon: CreditCard,
  },
  {
    id: "mobile",
    name: "Paiement mobile",
    description: "Airtel Money,Mobicash,Moov Money",
    icon: Smartphone,
  },
  {
    id: "cash",
    name: "Paiement comptant",
    description: "En espèces au guichet",
    icon: Banknote,
  },
]

export default function ChoicePayement() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleContinue = () => {
    if (selectedMethod === "mobile") {
      navigate("/mobile-payement")
    } else if (selectedMethod === "card") {
      navigate("/card-payement")
    }
    // TODO: Add navigation for "cash" when available
  }

  return (
    <div className="flex min-h-[calc(100vh-60px)] flex-col items-center justify-center bg-yellow-400 p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <Link
            to="/"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-105"
          >
            <ArrowLeft size={20} className="text-green-700" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-green-900">
              Mode de paiement
            </h1>
            <p className="text-sm text-green-800">
              Choisissez votre méthode de paiement
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-3">
          {paymentMethods.map((method) => {
            const Icon = method.icon
            const isSelected = selectedMethod === method.id

            return (
              <button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`flex w-full items-center gap-4 rounded-xl border-2 bg-white p-2 sm:p-4 transition-all ${
                  isSelected
                    ? "border-green-600 shadow-lg"
                    : "border-transparent shadow-md hover:border-green-300"
                }`}
              >
                <div
                  className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full ${
                    isSelected ? "bg-green-600" : "bg-green-100"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 sm:w-6 sm:h-6 ${
                      isSelected ? "text-white" : "text-green-600"
                    }`}
                  />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-900">{method.name}</h3>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>
                <div
                  className={`flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border-2 ${
                    isSelected
                      ? "border-green-600 bg-green-600"
                      : "border-gray-300"
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />}
                </div>
              </button>
            )
          })}
        </div>

        {/* Action Button */}
        <button
          disabled={!selectedMethod}
          onClick={handleContinue}
          className={`mt-8 w-full rounded-full py-3 font-semibold transition-all ${
            selectedMethod
              ? "bg-green-700 text-white shadow-lg hover:bg-green-800"
              : "cursor-not-allowed bg-gray-300 text-gray-500"
          }`}
        >
          Continuer
        </button>
      </div>
    </div>
  )
}
