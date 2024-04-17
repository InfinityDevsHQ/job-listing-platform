import { Input } from "@/components/ui/input";
import CompanyMail from "@/components/svgs/coompany-mail";
import DropDown from "@/_components/dropdown";
export default function RegisterCompanyInputs({
  options,
  select,
  setSelect,
}: DropdownProps) {
  return (
    <>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyMail width={14} height={11} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Company"
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyMail width={14} height={11} />
        <DropDown options={options} select={select} setSelect={setSelect} />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyMail width={14} height={11} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Contact Name"
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyMail width={14} height={11} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Work Mail"
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyMail width={14} height={11} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Phone Number"
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyMail width={14} height={11} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="City"
        />
      </div>
    </>
  );
}
