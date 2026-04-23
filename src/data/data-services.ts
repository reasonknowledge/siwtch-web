import {
  Landmark,
  HeartPulse,
  Wallet,
  IdCard,
  BookOpen,
  FileText,
  Info,
  Calendar,
} from "lucide-react"

export const serviceData: Record<
  string,
  {
    title: string
    icon: React.ElementType
    sections: {
      title: string
      icon: React.ElementType
      items?: string[]
      type?: string
      buttons?: { label: string; primary?: boolean }[]
    }[]
  }
> = {
  "etat-civil": {
    title: "Service d'état civil",
    icon: Landmark,
    sections: [
      {
        title: "Demande et délivrance de documents officiels",
        icon: FileText,
        items: [
          "Certificats disponibles :",
          "  - Certificat de naissance",
          "  - Certificat de mariage",
          "  - Certificat de décès",
          "  - Certificat de divorce",
          "Autres actes :",
          "  - Acte de naissance",
          "  - Copie d'acte",
          "  - Acte de reconnaissance",
          "  - Autorisation parentale",
          "  - Acte d'adoption",
          "Documents d'identité :",
          "  - Passeport",
          "  - CNI (Carte Nationale d'Identité)",
          "  - Changement de nom",
        ],
        buttons: [
          { label: "Faire une demande", primary: true },
          { label: "Vérifier un document" },
          { label: "Télécharger" },
        ],
      },
      {
        title: "Mise à jour des données personnelles",
        icon: Info,
        type: "personal-data-form",
      },
      {
        title: "Plateformes de rendez-vous",
        icon: Calendar,
        items: [],
      },
    ],
  },
  "securite-sociale": {
    title: "Sécurité sociale et santé",
    icon: HeartPulse,
    sections: [],
  },
  fiscalite: {
    title: "Fiscalité",
    icon: Wallet,
    sections: [],
  },
  "permis-conduire": {
    title: "Permis de conduire",
    icon: IdCard,
    sections: [],
  },
  education: {
    title: "Éducation",
    icon: BookOpen,
    sections: [],
  },
}
