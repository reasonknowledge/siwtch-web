import { Link, useLocation } from "react-router-dom"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const routeLabels: Record<string, string> = {
  "": "Accueil",
  services: "Services",
  about: "À propos",
  support: "Assistance",
}

const serviceLabels: Record<string, string> = {
  "etat-civil": "Service d'état civil",
  "securite-sociale": "Sécurité sociale et santé",
  fiscalite: "Fiscalité",
  "permis-conduire": "Permis de conduire",
  education: "Éducation",
}

export function DynamicBreadcrumb() {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter((x) => x)

  if (pathnames.length === 0) return null

  const breadcrumbs = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`
    const isLast = index === pathnames.length - 1

    const label = routeLabels[value] || serviceLabels[value] || value

    return { to, label, isLast }
  })

  return (
    <Breadcrumb>
      <BreadcrumbList className="px-4 py-2 text-xs">
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link to="/" />}>Accueil</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {breadcrumbs.map((crumb) => (
          <BreadcrumbItem key={crumb.to}>
            {crumb.isLast ? (
              <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
            ) : (
              <>
                <BreadcrumbLink render={<Link to={crumb.to} />}>
                  {crumb.label}
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
