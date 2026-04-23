import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/home"
import Services from "./pages/services"
import ServiceDetail from "./pages/service-detail"
import About from "./pages/about"
import Support from "./pages/support"
import ChoicePayement from "./pages/choice-payement"
import MobilePayement from "./pages/mobile-payement"
import Assistance from "./pages/assistance"
import MobileNav from "@/components/comons/mobile-nav"
import Navbar from "@/components/comons/nav-bar"
import { DynamicBreadcrumb } from "@/components/comons/dynamic-breadcrumb"

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <MobileNav />
        <Navbar />
        <DynamicBreadcrumb />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceName" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />
            <Route path="/paiement" element={<ChoicePayement />} />
            <Route path="/choice-payement" element={<ChoicePayement />} />
            <Route path="/mobile-payement" element={<MobilePayement />} />
            <Route path="/assistance" element={<Assistance />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
