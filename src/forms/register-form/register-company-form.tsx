"use client";
import DropDown from "@/_components/dropdown";
import Button from "@/components/ui/button";
import CompanyArrow from "@/components/svgs/company-arrow";
import CompanyCity from "@/components/svgs/company-city";
import CompanyCommunity from "@/components/svgs/company-community";
import CompanyDictionary from "@/components/svgs/company-dictionary";
import CompanyGlobe from "@/components/svgs/company-globe";
import CompanyIcon from "@/components/svgs/company-icon";
import CompanyProfileOne from "@/components/svgs/company-profile-one";
import CompanyMail from "@/components/svgs/coompany-mail";
import Input from "@/components/ui/input";
import useRegisterCompanyStore from "@/stores/register-company-stor";
import { registerCompanyFormSchema } from "@/types/schemas/register-company-form-schema";
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
  function handleSubmit(e) {
    e.preventDefault();
    const validate = registerCompanyFormSchema.safeParse(registerCompanyData);
    if (validate.success) {
      console.log("Form Validated:", validate.data);
    } else {
      console.warn("Form Validation Failed:", validate.error.errors);
    }
  }
  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <Input
        variant={"primary"}
        placeholder="Company"
        name="company"
        type="text"
        leadingIcon={<CompanyIcon />}
        onChange={handleChange}
        value={registerCompanyData.company}
      />
      <Input
        variant={"primary"}
        placeholder="Contact Name"
        name="contactName"
        type="text"
        leadingIcon={<CompanyProfileOne />}
        onChange={handleChange}
        value={registerCompanyData.contactName}
      />
      <Input
        variant={"primary"}
        placeholder="Work Mail"
        name="workMail"
        type="text"
        leadingIcon={<CompanyMail width={14} height={11} />}
        onChange={handleChange}
        value={registerCompanyData.workMail}
      />
      <Input
        variant={"primary"}
        placeholder="Phone Number"
        name="phoneNumber"
        type="text"
        leadingIcon={<CompanyArrow width={15} height={15} />}
        onChange={handleChange}
        value={registerCompanyData.workMail}
      />
      <DropDown
        options={EmployOptions}
        select={employs}
        setSelect={setEmploys}
        leadingIcon={<CompanyCommunity />}
      />
      <DropDown
        options={Countries}
        select={country}
        setSelect={setCountry}
        leadingIcon={<CompanyGlobe />}
      />
      <Input
        placeholder="City"
        type="text"
        name="city"
        leadingIcon={<CompanyCity />}
        onChange={handleChange}
        value={registerCompanyData.city}
      />
      <DropDown
        leadingIcon={<CompanyDictionary />}
        options={Languages}
        select={language}
        setSelect={setLanguage}
      />
      <Button
        text="Continue"
        variant={"primary"}
        className="!max-w-full justify-center"
        trailingIcon={
          <CompanyArrow width={16} height={16} fill="white" className="pt-1" />
        }
      />
    </form>
  );
}
