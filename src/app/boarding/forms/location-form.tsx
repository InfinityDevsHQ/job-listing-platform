import { Input } from "@/components/ui/input";
import CompanyMail from "@/components/svgs/coompany-mail";
export default function LocationForm() {
  // Replace Icons Later
  // Also add dropdowns later
  return (
    <form className="flex flex-col gap-4 bg-red-400 px-4 py-6">
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyMail width={14} height={11} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Country"
          name="country"
          type="text"
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyMail width={14} height={11} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Password"
          name="password"
          type="password"
        />
      </div>
    </form>
  );
}
