import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LibertispayementCard() {
  return (
    <div className="flex p-2 bg-red-500 sm:p-4 w-xs rounded-lg sm:rounded-xl sm:w-md items-center border flex-col space-y-3">
      <div className="flex justify-center">
        <img src="src/assets/airtel.png" className="h-24 w-24" />
      </div>
      <form className="flex w-full flex-col gap-3">
        <Input placeholder="Enter your phone number" />
        <Button className="w-full bg-yellow-500 border-none">Payez</Button>
      </form>
    </div>
  )
}