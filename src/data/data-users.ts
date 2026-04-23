export interface Certificate {
  id: string
  type: "naissance" | "mariage" | "deces" | "divorce" | "acte_naissance" | "copie_acte" | "reconnaissance" | "autorisation_parentale" | "passeport" | "cni" | "changement_nom" | "adoption"
  numero: string
  dateEmission: string
  heureEmission: string
  statut: "valide" | "expire" | "revoque"
  estDernier: boolean
  telechargementUrl: string
  demandeDate: string
  demandeHeure: string
}

export interface UserData {
  id: string
  nom: string
  prenom: string
  email: string
  telephone: string
  villeActuelle: string
  quartier: string
  adresse: string
  dateNaissance: string
  certificats: Certificate[]
}

export const usersData: Record<string, UserData> = {
  "user-001": {
    id: "user-001",
    nom: "Kouassi",
    prenom: "Marie",
    email: "marie.kouassi@email.ci",
    telephone: "+225 01 23 45 67 89",
    villeActuelle: "Abidjan",
    quartier: "Cocody",
    adresse: "Rue des Jardins, Cocody",
    dateNaissance: "1990-05-15",
    certificats: [
      {
        id: "cert-001",
        type: "naissance",
        numero: "2024-001234",
        dateEmission: "2024-01-15",
        heureEmission: "10:30",
        statut: "valide",
        estDernier: false,
        telechargementUrl: "/api/docs/cert-001.pdf",
        demandeDate: "2024-01-10",
        demandeHeure: "14:22",
      },
      {
        id: "cert-002",
        type: "naissance",
        numero: "2024-001567",
        dateEmission: "2024-06-20",
        heureEmission: "14:15",
        statut: "valide",
        estDernier: true,
        telechargementUrl: "/api/docs/cert-002.pdf",
        demandeDate: "2024-06-15",
        demandeHeure: "09:45",
      },
      {
        id: "cert-003",
        type: "cni",
        numero: "CNI-2024-789",
        dateEmission: "2024-03-10",
        heureEmission: "11:00",
        statut: "valide",
        estDernier: true,
        telechargementUrl: "/api/docs/cert-003.pdf",
        demandeDate: "2024-03-05",
        demandeHeure: "16:30",
      },
      {
        id: "cert-004",
        type: "mariage",
        numero: "MRG-2023-456",
        dateEmission: "2023-12-01",
        heureEmission: "09:00",
        statut: "valide",
        estDernier: false,
        telechargementUrl: "/api/docs/cert-004.pdf",
        demandeDate: "2023-11-25",
        demandeHeure: "10:15",
      },
      {
        id: "cert-005",
        type: "mariage",
        numero: "MRG-2024-789",
        dateEmission: "2024-08-15",
        heureEmission: "13:30",
        statut: "valide",
        estDernier: true,
        telechargementUrl: "/api/docs/cert-005.pdf",
        demandeDate: "2024-08-10",
        demandeHeure: "11:20",
      },
      {
        id: "cert-008",
        type: "divorce",
        numero: "DIV-2024-001",
        dateEmission: "2024-09-20",
        heureEmission: "10:00",
        statut: "valide",
        estDernier: true,
        telechargementUrl: "/api/docs/cert-008.pdf",
        demandeDate: "2024-09-10",
        demandeHeure: "15:30",
      },
      {
        id: "cert-009",
        type: "deces",
        numero: "DEC-2024-567",
        dateEmission: "2024-11-05",
        heureEmission: "14:00",
        statut: "valide",
        estDernier: true,
        telechargementUrl: "/api/docs/cert-009.pdf",
        demandeDate: "2024-11-01",
        demandeHeure: "10:45",
      },
      {
        id: "cert-010",
        type: "changement_nom",
        numero: "CHG-2024-789",
        dateEmission: "2024-07-12",
        heureEmission: "16:15",
        statut: "valide",
        estDernier: true,
        telechargementUrl: "/api/docs/cert-010.pdf",
        demandeDate: "2024-07-05",
        demandeHeure: "11:00",
      },
      {
        id: "cert-011",
        type: "adoption",
        numero: "ADP-2024-321",
        dateEmission: "2024-05-20",
        heureEmission: "09:45",
        statut: "valide",
        estDernier: true,
        telechargementUrl: "/api/docs/cert-011.pdf",
        demandeDate: "2024-05-10",
        demandeHeure: "14:20",
      },
    ],
  },
  "user-002": {
    id: "user-002",
    nom: "Diallo",
    prenom: "Amadou",
    email: "amadou.diallo@email.ci",
    telephone: "+225 07 89 12 34 56",
    villeActuelle: "Bouaké",
    quartier: "Kennedy",
    adresse: "Avenue de la Paix, Kennedy",
    dateNaissance: "1985-11-22",
    certificats: [
      {
        id: "cert-006",
        type: "passeport",
        numero: "PSP-2024-123",
        dateEmission: "2024-02-28",
        heureEmission: "15:45",
        statut: "valide",
        estDernier: true,
        telechargementUrl: "/api/docs/cert-006.pdf",
        demandeDate: "2024-02-20",
        demandeHeure: "08:30",
      },
      {
        id: "cert-007",
        type: "acte_naissance",
        numero: "ACT-2024-567",
        dateEmission: "2024-04-10",
        heureEmission: "10:00",
        statut: "valide",
        estDernier: true,
        telechargementUrl: "/api/docs/cert-007.pdf",
        demandeDate: "2024-04-05",
        demandeHeure: "14:00",
      },
    ],
  },
}

export const certificateLabels: Record<Certificate["type"], string> = {
  naissance: "Certificat de naissance",
  mariage: "Certificat de mariage",
  deces: "Certificat de décès",
  divorce: "Certificat de divorce",
  acte_naissance: "Acte de naissance",
  copie_acte: "Copie d'acte",
  reconnaissance: "Acte de reconnaissance",
  autorisation_parentale: "Autorisation parentale",
  passeport: "Passeport",
  cni: "CNI (Carte Nationale d'Identité)",
  changement_nom: "Changement de nom",
  adoption: "Acte d'adoption",
}

export const getCurrentUser = (): UserData => {
  // Simule l'utilisateur connecté (user-001)
  return usersData["user-001"]
}
