import CompanyEye from "@/components/svgs/company-eye";
import CompanyLock from "@/components/svgs/company-lock";
import CompanyMail from "@/components/svgs/coompany-mail";
import { Input } from "@/components/ui/input";

export default function LoginInputs() {
  return (
    <>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full">
        <CompanyMail width={14} height={11} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Email"
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full">
        <CompanyLock width={14} height={15} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Password"
        />
        <CompanyEye width={16} height={13} />
      </div>
    </>
  );
}
