import CompanyEye from "@/components/svgs/company-eye";
import CompanyLock from "@/components/svgs/company-lock";
import CompanyMail from "@/components/svgs/coompany-mail";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";

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
      <div className="flex items-center gap-1.3">
        <Checkbox className="bg-white" id="reminder" />
        <label
          htmlFor="reminder"
          className="font-sans px-4 py-2 font-medium text-16 leading-6 !text-gray-200"
        >
          Remember Me
        </label>
        <Link
          href={"#"}
          className="self-end px-4 py-2 font-sans text-gray-200 text-16 leading-6 font-medium"
        >
          Forgot Password?
        </Link>
      </div>
    </>
  );
}
