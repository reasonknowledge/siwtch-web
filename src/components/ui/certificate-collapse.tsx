import { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Download,
  Clock,
  Calendar,
} from "lucide-react"
import type { Certificate } from "@/data/data-users"
import { certificateLabels } from "@/data/data-users"

interface CertificateCollapseProps {
  certificates: Certificate[]
  type: Certificate["type"]
  onDownload: (cert: Certificate) => void
}

export function CertificateCollapse({
  certificates,
  type,
  onDownload,
}: CertificateCollapseProps) {
  const [isOpen, setIsOpen] = useState(false)

  const typeCertificates = certificates.filter((c) => c.type === type)
  const latestCert = typeCertificates.find((c) => c.estDernier)
  const olderCerts = typeCertificates.filter((c) => !c.estDernier)
  const hasMultiple = typeCertificates.length > 1

  if (typeCertificates.length === 0) return null

  const label = certificateLabels[type]

  return (
    <div className="overflow-hidden rounded-lg bg-white/10">
      {/* Header - Always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-3 text-left transition-colors hover:bg-white/5"
      >
        <div className="flex items-center gap-2">
          <FileText size={16} className="text-yellow-400" />
          <span className="text-sm font-medium">{label}</span>
          {latestCert?.estDernier && (
            <span className="rounded-full border border-white/40 px-2 py-0.5 text-[10px] font-medium">
              Dernier
            </span>
          )}
          <span className="text-[10px] text-white/60">
            ({typeCertificates.length})
          </span>
        </div>
        <div className="flex items-center gap-2">
          {hasMultiple &&
            (isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
        </div>
      </button>

      {/* Latest Certificate - Quick action */}
      <div className="border-t border-white/10 px-3 py-2">
        {/* Demande sur une ligne */}
        <div className="mb-1 flex items-center gap-2 text-xs text-white/80">
          <Calendar size={12} />
          <span className="truncate">
            Demande du {latestCert?.demandeDate} à {latestCert?.demandeHeure}
          </span>
        </div>
        {/* Émis le + bouton sur la même ligne */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] text-white/60">
            <Clock size={10} />
            <span>
              Émis le {latestCert?.dateEmission} à {latestCert?.heureEmission}
            </span>
          </div>
          <button
            onClick={() => latestCert && onDownload(latestCert)}
            className="flex items-center gap-1 rounded-full bg-yellow-400 px-2 py-0.5 text-[10px] font-medium text-black transition-colors hover:bg-yellow-300"
          >
            <Download size={10} />
            Télécharger
          </button>
        </div>
      </div>

      {/* Collapsed Content - Older certificates */}
      {isOpen && olderCerts.length > 0 && (
        <div className="border-t border-white/10">
          <div className="bg-black/20 px-3 py-2 text-[10px] tracking-wider text-white/60 uppercase">
            Historique
          </div>
          {olderCerts.map((cert) => (
            <div
              key={cert.id}
              className="border-t border-white/5 px-3 py-3 transition-colors hover:bg-white/5"
            >
              {/* Demande sur une ligne */}
              <div className="mb-1 flex items-center gap-2 text-xs text-white/80">
                <Calendar size={12} />
                <span className="truncate">
                  Demande du {cert.demandeDate} à {cert.demandeHeure}
                </span>
              </div>
              {/* Émis le + bouton + numéro sur la même ligne */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] text-white/60">
                  <Clock size={10} />
                  <span>
                    Émis le {cert.dateEmission} à {cert.heureEmission}
                  </span>
                  <span className="text-white/40">| N° {cert.numero}</span>
                </div>
                <button
                  onClick={() => onDownload(cert)}
                  className="flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium text-white transition-colors hover:bg-white/30"
                >
                  <Download size={10} />
                  Télécharger
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
