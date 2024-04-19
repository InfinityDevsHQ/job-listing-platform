"use client";
import DropDown from "@/_components/dropdown";
import CompanyArrow from "@/components/svgs/company-arrow";
import CompanyCity from "@/components/svgs/company-city";
import CompanyCommunity from "@/components/svgs/company-community";
import CompanyDictionary from "@/components/svgs/company-dictionary";
import CompanyGlobe from "@/components/svgs/company-globe";
import CompanyIcon from "@/components/svgs/company-icon";
import CompanyProfileOne from "@/components/svgs/company-profile-one";
import CompanyMail from "@/components/svgs/coompany-mail";
import AppInput from "@/components/ui/app-input";
import useRegisterCompanyStore from "@/stores/register-company-stor";
import { useState } from "react";
const EmployOptions = [
  {
    value: 200,
    text: "200",
  },
  {
    value: 500,
    text: "500",
  },
];
const Countries = [
  { value: "Pakistan", text: "Pakistan" },
  { value: "Australia", text: "Australia" },
];
const Languages = [
  {
    value: "en",
    text: "English",
  },
  {
    value: "ur",
    text: "Urdu",
  },
];
export default function RegisterCompanyForm() {
  const [employs, setEmploys] = useState<number | string>(
    EmployOptions[0].value
  );
  const [country, setCountry] = useState(Countries[0].value);
  const [language, setLanguage] = useState<string>(Languages[0].value);

  const { registerCompanyData, setRegisterCompanyData } =
    useRegisterCompanyStore();
  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterCompanyData({ ...registerCompanyData, [name]: value });
  }
  return (
    <form className="flex flex-col gap-8">
      <AppInput
        variant={"primary"}
        placeholder="Company"
        name="company"
        type="text"
        leadingIcon={<CompanyIcon />}
        onChange={handleChange}
        value={registerCompanyData.company}
      />
      <AppInput
        variant={"primary"}
        placeholder="Contact Name"
        name="contactName"
        type="text"
        leadingIcon={<CompanyProfileOne />}
        onChange={handleChange}
        value={registerCompanyData.contactName}
      />
      <AppInput
        variant={"primary"}
        placeholder="Work Mail"
        name="workMail"
        type="text"
        leadingIcon={<CompanyMail width={14} height={11} />}
        onChange={handleChange}
        value={registerCompanyData.workMail}
      />
      <AppInput
        variant={"primary"}
        placeholder="Phone Number"
        name="phoneNumber"
        type="text"
        leadingIcon={<CompanyArrow width={15} height={15} />}
        onChange={handleChange}
        value={registerCompanyData.workMail}
      />

      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyCommunity />
        <DropDown
          options={EmployOptions}
          select={employs}
          setSelect={setEmploys}
        />
      </div>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyGlobe />
        <DropDown options={Countries} select={country} setSelect={setCountry} />
      </div>
      <AppInput
        placeholder="City"
        type="text"
        name="city"
        leadingIcon={<CompanyCity />}
        onChange={handleChange}
        value={registerCompanyData.city}
      />
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyDictionary />
        <DropDown
          options={Languages}
          select={language}
          setSelect={setLanguage}
        />
      </div>
    </form>
  );
}
