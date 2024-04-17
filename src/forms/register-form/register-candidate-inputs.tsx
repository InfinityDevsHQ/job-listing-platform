import CompanyMail from "@/components/svgs/coompany-mail";
import CompanyLock from "@/components/svgs/company-lock";
import CompanyEye from "@/components/svgs/company-eye";
import { Input } from "@/components/ui/input";
import CompanyProfileOne from "@/components/svgs/company-profile-one";
type RegisterCandidateInputsProps = {
  handleChange: (event: any) => void;
};
export default function RegisterCandidateInputs({
  handleChange,
}: RegisterCandidateInputsProps) {
  return (
    <>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyProfileOne />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyMail width={14} height={11} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          type="email"
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border border-gray-300">
        <CompanyLock width={14} height={15} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Password"
          name="passwordOne"
          onChange={handleChange}
          type="password"
        />
        <CompanyEye width={16} height={13} />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border border-gray-300">
        <CompanyLock width={14} height={15} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Password"
          name="passwordTwo"
          onChange={handleChange}
          type="password"
        />
        <CompanyEye width={16} height={13} />
      </div>
    </>
  );
}
