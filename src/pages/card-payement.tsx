import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export interface PayementCardProps {
  logo: string
  bg?: string
}

export default function PayementCard({
  logo,
  bg = "bg-red-500",
}: PayementCardProps) {
  return (
    <div
      className={`flex w-xs flex-col items-center space-y-3 rounded-lg border p-2 sm:w-md sm:rounded-xl sm:p-4 ${bg}`}
    >
      <div className="flex justify-center">
        <img src={logo} className="h-24 w-24" />
      </div>
      <form className="flex w-full flex-col gap-3">
        <Input placeholder="Enter your phone number" />
        <Button className="w-full border-none bg-yellow-500">Payez</Button>
      </form>
    </div>
  )
}
