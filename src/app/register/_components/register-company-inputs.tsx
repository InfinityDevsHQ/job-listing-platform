import { Input } from "@/components/ui/input";
import CompanyMail from "@/components/svgs/coompany-mail";
import DropDown from "@/_components/dropdown";
import CompanyIcon from "@/components/svgs/company-icon";
import CompanyProfileOne from "@/components/svgs/company-profile-one";
import CompanyArrow from "@/components/svgs/company-phone";
import CompanyCommunity from "@/components/svgs/company-community";
import CompanyGlobe from "@/components/svgs/company-globe";
import CompanyCity from "@/components/svgs/company-city";
import CompanyDictionary from "@/components/svgs/company-dictionary";
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
        <CompanyIcon />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Company"
        />
      </div>

      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyProfileOne />
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
        <CompanyArrow fill="black" width={15} height={15} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Phone Number"
        />
      </div>

      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyCommunity />
        <DropDown
          options={employees}
          select={selectEmploy}
          setSelect={setSelectEmploy}
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyGlobe />
        <DropDown
          options={countries}
          select={selectCountry}
          setSelect={setSelectCountry}
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyCity />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="City"
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyDictionary />
        <DropDown
          options={languages}
          select={selectLanguage}
          setSelect={setSelectLanguage}
        />
      </div>
    </>
  );
}
