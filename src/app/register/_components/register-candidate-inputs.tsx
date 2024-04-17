import CompanyMail from "@/components/svgs/coompany-mail";
import CompanyLock from "@/components/svgs/company-lock";
import CompanyEye from "@/components/svgs/company-eye";
import { Input } from "@/components/ui/input";
import CompanyProfileOne from "@/components/svgs/company-profile-one";
export default function RegisterCandidateInputs() {
  return (
    <>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyProfileOne />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Username"
          name="username"
          type="text"
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyMail width={14} height={11} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Email"
          name="email"
          type="email"
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border border-gray-300">
        <CompanyLock width={14} height={15} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Password"
          name="password"
          type="password"
        />
        <CompanyEye width={16} height={13} />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border border-gray-300">
        <CompanyLock width={14} height={15} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Password"
          name="password"
          type="password"
        />
        <CompanyEye width={16} height={13} />
      </div>
    </>
  );
}
