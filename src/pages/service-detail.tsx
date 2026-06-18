import { useState } from "react"
import { useParams } from "react-router-dom"
import { Info } from "lucide-react"
import { PersonalDataUpdateForm } from "@/users/personal-data-update-form"
import { serviceData } from "@/data/data-services"
import { getCurrentUser, type Certificate } from "@/data/data-users"
import { CertificateCollapse } from "@/components/ui/certificate-collapse"
import { DownloadModal } from "@/components/commons/download-modal"
import { certificateLabels } from "@/data/data-users"

export default function ServiceDetail() {
  const { serviceName } = useParams<{ serviceName: string }>()
  const service = serviceName ? serviceData[serviceName] : null
  const user = getCurrentUser()

  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDownloadClick = (cert: Certificate) => {
    setSelectedCert(cert)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedCert(null)
  }

  const handleConfirmDownload = (cert: Certificate) => {
    console.log("Téléchargement du certificat:", cert)
    // Simuler le téléchargement
    alert(
      `Téléchargement du ${certificateLabels[cert.type]} - N° ${cert.numero}`
    )
    setIsModalOpen(false)
    setSelectedCert(null)
  }

  if (!service) {
    return (
      <div className="flex min-h-[calc(100vh-60px)] items-center justify-center">
        <p>Service non trouvé</p>
      </div>
    )
  }

  // Types de certificats à afficher pour le service état civil
  const certificatTypes: Certificate["type"][] = [
    "naissance",
    "mariage",
    "deces",
    "divorce",
    "acte_naissance",
    "copie_acte",
    "reconnaissance",
    "autorisation_parentale",
    "passeport",
    "cni",
    "changement_nom",
    "adoption",
  ]

  return (
    <div className="flex min-h-[calc(100vh-60px)] flex-col bg-yellow-400 p-4">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-3 md:grid-cols-3">
        {service.sections.map((section, idx) => {
          const SectionIcon = section.icon
          const isDocumentsSection = section.title.includes(
            "documents officiels"
          )

          return (
            <div key={idx} className="rounded-xl bg-blue-500 p-4 text-white">
              <div className="mb-3 flex items-center gap-2">
                <SectionIcon size={16} />
                <h2 className="text-sm font-medium">{section.title}</h2>
                {section.items &&
                  section.items.length > 0 &&
                  !isDocumentsSection && <Info size={14} className="ml-auto" />}
                {isDocumentsSection && (
                  <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-[10px]">
                    {user.certificats.length} documents
                  </span>
                )}
              </div>

              {/* Section Documents Officiels - Liste verticale dans la card */}
              {isDocumentsSection && (
                <div className="mb-3 space-y-2">
                  {certificatTypes.map((type) => (
                    <CertificateCollapse
                      key={type}
                      certificates={user.certificats}
                      type={type}
                      onDownload={handleDownloadClick}
                    />
                  ))}
                </div>
              )}

              {/* Section standard avec items */}
              {section.items &&
                section.items.length > 0 &&
                !isDocumentsSection && (
                  <ul className="mb-3 space-y-1 text-xs opacity-90">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

              {/* Formulaire de mise à jour des données */}
              {section.type === "personal-data-form" && (
                <PersonalDataUpdateForm
                  onSubmit={(data) => console.log("Form submitted:", data)}
                />
              )}

              {/* Boutons standard */}
              {section.buttons && !isDocumentsSection && (
                <div className="flex flex-wrap gap-2">
                  {section.buttons.map((btn, i) => (
                    <button
                      key={i}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        btn.primary
                          ? "bg-yellow-400 text-black"
                          : "bg-white text-black"
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Modal de téléchargement */}
      <DownloadModal
        certificate={selectedCert}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDownload}
      />
    </div>
  )
}
