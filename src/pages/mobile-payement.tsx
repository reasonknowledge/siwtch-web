import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

import airtelLogo from "@/assets/airtel.png"
import moovLogo from "@/assets/bigup.png"
import mobicashLogo from "@/assets/mobicash.png"

const paymentMethods = [
  {
    id: "airtel",
    name: "Airtel Money",
    logo: airtelLogo,
    bg: "bg-red-600",
    textColor: "text-white",
  },
  {
    id: "moov",
    name: "Moov Money",
    logo: moovLogo,
    bg: "bg-orange-600",
    textColor: "text-white",
  },
  {
    id: "mobicash",
    name: "Mobicash",
    logo: mobicashLogo,
    bg: "bg-yellow-500",
    textColor: "text-gray-900",
  },
]

export default function MobilePayement() {
  return (
    <div className="flex min-h-[calc(100vh-60px)] flex-col items-center justify-center bg-yellow-400 p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <Link
            to="/choice-payement"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-105"
          >
            <ArrowLeft size={20} className="text-green-700" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-green-900">
              Paiement Mobile
            </h1>
            <p className="text-sm text-green-800">
              Choisissez votre opérateur
            </p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="airtel" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white p-1">
            {paymentMethods.map((method) => (
              <TabsTrigger
                key={method.id}
                value={method.id}
                className="flex items-center gap-1 py-2 text-xs data-[active=true]:bg-green-100 data-[active=true]:text-green-900"
              >
                <img
                  src={method.logo}
                  alt={method.name}
                  className="h-4 w-4 object-contain"
                />
                <span className="hidden sm:inline">{method.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {paymentMethods.map((method) => (
            <TabsContent key={method.id} value={method.id} className="mt-4">
              <div
                className={`flex flex-col items-center space-y-4 rounded-xl border-noe p-4 ${method.bg}`}
              >
                <div className="flex justify-center">
                  <img
                    src={method.logo}
                    alt={method.name}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h2 className={`text-lg font-bold ${method.textColor}`}>
                  {method.name}
                </h2>
                <form className="flex w-full flex-col gap-3">
                  <Input
                    placeholder="Entrez votre numéro de téléphone"
                    className="bg-white"
                    type="tel"
                  />
                  <Button className="w-full border-none bg-blue-500 font-semibold text-gray-900 hover:bg-yellow-400">
                    Payer avec {method.name}
                  </Button>
                </form>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
