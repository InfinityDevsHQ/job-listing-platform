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
import AppInput from "@/components/ui/app-input";
type EmployProps = {
  employees: DropdownData[];
  countries: DropdownData[];
  languages: DropdownData[];
  selectEmploy: string | number;
  setSelectEmploy: (value: string | number) => void;
  selectCountry: string;
  setSelectCountry: (value: string) => void;
  selectLanguage: string;
  setSelectLanguage: (value: string) => void;
  handleChange: (value: unknown) => void;
  registerFormData: RegisterData;
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
  handleChange,
  registerFormData,
}: EmployProps) {
  return (
    <>
      <AppInput
        variant={"primary"}
        placeholder="Company"
        name="company"
        type="text"
        leadingIcon={<CompanyIcon />}
        onChange={handleChange}
        value={registerFormData.company}
      />
      <AppInput
        variant={"primary"}
        placeholder="Contact Name"
        name="contactName"
        type="text"
        leadingIcon={<CompanyProfileOne />}
        onChange={handleChange}
        value={registerFormData.contactName}
      />
      <AppInput
        variant={"primary"}
        placeholder="Work Mail"
        name="workMail"
        type="text"
        leadingIcon={<CompanyMail width={14} height={11} />}
        onChange={handleChange}
        value={registerFormData.workMail}
      />
      <AppInput
        variant={"primary"}
        placeholder="Phone Number"
        name="phoneNumber"
        type="text"
        leadingIcon={<CompanyArrow width={15} height={15} />}
        onChange={handleChange}
        value={registerFormData.workMail}
      />

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
      <AppInput
        placeholder="City"
        type="text"
        name="city"
        leadingIcon={<CompanyCity />}
        onChange={handleChange}
        value={registerFormData.city}
      />
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
