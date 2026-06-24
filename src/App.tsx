import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom"
import Home from "./pages/home"
import Services from "./pages/services"
import ServiceDetail from "./pages/service-detail"
import About from "./pages/about"
import Support from "./pages/support"
import ChoicePayement from "./pages/choice-payement"
import MobilePayement from "./pages/mobile-payement"
import Assistance from "./pages/assistance"
import MobileNav from "./components/commons/mobile-nav"
import Navbar from "./components/commons/nav-bar"
import { DynamicBreadcrumb } from "./components/commons/dynamic-breadcrumb"
import Footer from "./components/commons/footer"
import Signin from "./components/commons/signin-user"
import Signup from "./components/commons/signup"

const authRoutes = ["/signin", "/signup"]

function AppLayout() {
  const { pathname } = useLocation()
  const isAuthPage = authRoutes.includes(pathname.toLowerCase())

  return (
    <div className="flex min-h-screen flex-col">
      {!isAuthPage && (
        <>
          <MobileNav />
          <Navbar />
          <DynamicBreadcrumb />
        </>
      )}
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
          <Route path="/Signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
