import { X, Download, FileText, Calendar, Clock, CheckCircle, AlertCircle } from "lucide-react"
import type { Certificate } from "@/data/data-users"
import { certificateLabels } from "@/data/data-users"
import { Button } from "../ui/button"

interface DownloadModalProps {
  certificate: Certificate | null
  isOpen: boolean
  onClose: () => void
  onConfirm: (cert: Certificate) => void
}

export function DownloadModal({ certificate, isOpen, onClose, onConfirm }: DownloadModalProps) {
  if (!isOpen || !certificate) return null

  const getStatusColor = (statut: Certificate["statut"]) => {
    switch (statut) {
      case "valide":
        return "text-green-400"
      case "expire":
        return "text-yellow-400"
      case "revoque":
        return "text-red-400"
      default:
        return "text-white/60"
    }
  }

  const getStatusIcon = (statut: Certificate["statut"]) => {
    switch (statut) {
      case "valide":
        return <CheckCircle size={16} className="text-green-400" />
      case "expire":
      case "revoque":
        return <AlertCircle size={16} className="text-yellow-400" />
      default:
        return null
    }
  }

  const getStatusLabel = (statut: Certificate["statut"]) => {
    switch (statut) {
      case "valide":
        return "Valide"
      case "expire":
        return "Expiré"
      case "revoque":
        return "Révoqué"
      default:
        return statut
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-xl bg-blue-500 text-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <div className="flex items-center gap-2">
            <FileText size={20} className="text-yellow-400" />
            <h2 className="text-lg font-semibold">Télécharger le document</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1 transition-colors hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 p-4">
          {/* Document Type */}
          <div className="rounded-lg bg-white/10 p-3">
            <span className="text-xs text-white/60">Type de document</span>
            <p className="text-sm font-medium">{certificateLabels[certificate.type]}</p>
          </div>

          {/* Document Info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-white/10 p-3">
              <div className="flex items-center gap-1 text-xs text-white/60">
                <Calendar size={12} />
                <span>Date de demande</span>
              </div>
              <p className="text-sm font-medium">{certificate.demandeDate}</p>
              <p className="text-xs text-white/60">{certificate.demandeHeure}</p>
            </div>
            <div className="rounded-lg bg-white/10 p-3">
              <div className="flex items-center gap-1 text-xs text-white/60">
                <Clock size={12} />
                <span>Date d'émission</span>
              </div>
              <p className="text-sm font-medium">{certificate.dateEmission}</p>
              <p className="text-xs text-white/60">{certificate.heureEmission}</p>
            </div>
          </div>

          {/* Number and Status */}
          <div className="flex items-center justify-between rounded-lg bg-white/10 p-3">
            <div>
              <span className="text-xs text-white/60">Numéro</span>
              <p className="text-sm font-medium">{certificate.numero}</p>
            </div>
            <div className="flex items-center gap-1">
              {getStatusIcon(certificate.statut)}
              <span className={`text-sm font-medium ${getStatusColor(certificate.statut)}`}>
                {getStatusLabel(certificate.statut)}
              </span>
            </div>
          </div>

          {/* Warning if not latest */}
          {!certificate.estDernier && (
            <div className="flex items-start gap-2 rounded-lg bg-yellow-400/20 p-3 text-yellow-200">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <p className="text-xs">
                Ce n'est pas la dernière version de ce document. Une version plus récente existe.
              </p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 border-t border-white/10 p-4">
          <Button
            onClick={onClose}
            className="flex-1 rounded-full bg-white/20 text-sm font-medium transition-colors hover:bg-white/30"
          >
            Annuler
          </Button>
          <Button
            onClick={() => onConfirm(certificate)}
            className="flex flex-1 border-none items-center justify-center gap-2 rounded-full bg-yellow-400 text-sm font-medium text-black transition-colors hover:bg-yellow-300"
          >
            <Download size={16} />
            Télécharger PDF
          </Button>
        </div>
      </div>
    </div>
  )
}
