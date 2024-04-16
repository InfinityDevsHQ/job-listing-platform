import { Input } from "@/components/ui/input";
import CompanyMail from "@/components/svgs/coompany-mail";
export default function RegisterInputs() {
  return (
    <>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyMail width={14} height={11} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Email"
        />
      </div>
    </>
  );
}
