import { Input } from "@/components/ui/input";
import CompanyMail from "@/components/svgs/coompany-mail";
import DropDown from "@/_components/dropdown";
type EmployProps = {
  employees: DropdownData[];
  countries: DropdownData[];
  languages: DropdownData[];
};
export default function RegisterCompanyInputs({
  employees,
  selectEmploy,
  setSelectEmploy,
  countries,
  selectCountry,
  setSelectCountry,
  languages,
  selectLanguage,
  setSelectLanguage,
}) {
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
        <DropDown
          options={employees}
          select={selectEmploy}
          setSelect={setSelectEmploy}
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyMail width={14} height={11} />
        <DropDown
          options={countries}
          select={selectCountry}
          setSelect={setSelectCountry}
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyMail width={14} height={11} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="City"
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyMail width={14} height={11} />
        <DropDown
          options={languages}
          select={selectLanguage}
          setSelect={setSelectLanguage}
        />
      </div>
    </>
  );
}
