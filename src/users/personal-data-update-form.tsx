import { useState } from "react"

interface FormField {
  label: string
  name: string
  defaultValue: string
}

interface PersonalDataUpdateFormProps {
  onSubmit?: (data: Record<string, string>) => void
}

const fields: FormField[] = [
  { label: "Adresse actuelle", name: "adresse_actuelle", defaultValue: "" },
  { label: "Nouvelle adresse", name: "nouvelle_adresse", defaultValue: "" },
  { label: "Quartier actuel", name: "quartier_actuel", defaultValue: "" },
  { label: "Nouveau quartier", name: "nouveau_quartier", defaultValue: "" },
  { label: "Nom actuel", name: "nom_actuel", defaultValue: "" },
  { label: "Nouveau nom", name: "nouveau_nom", defaultValue: "" },
]

export function PersonalDataUpdateForm({
  onSubmit,
}: PersonalDataUpdateFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {}
    fields.forEach((field) => {
      initial[field.name] = field.defaultValue
    })
    return initial
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-3 space-y-2">
      {fields.map((field) => (
        <div
          key={field.name}
          className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3"
        >
          <label
            htmlFor={field.name}
            className="text-xs font-medium text-white sm:w-1/3"
          >
            {field.label}
          </label>
          <input
            type="text"
            id={field.name}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="rounded-md border border-blue-300 bg-white px-2 py-1 text-xs text-gray-800 placeholder:text-gray-400 focus:border-yellow-400 focus:outline-none sm:w-2/3"
            placeholder={`Entrez ${field.label.toLowerCase()}`}
          />
        </div>
      ))}
      <div className="pt-2">
        <button
          type="submit"
          className="rounded-full bg-yellow-400 px-4 py-1.5 text-xs font-medium text-black transition-colors hover:bg-yellow-300"
        >
          Soumettre la demande
        </button>
      </div>
    </form>
  )
}
