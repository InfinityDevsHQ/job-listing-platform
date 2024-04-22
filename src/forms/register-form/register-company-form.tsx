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
import { ZodIssue } from "zod";
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
  const [errors, setErrors] = useState({
    passwordTwo: "",
    company: "",
    contactName: "",
    workMail: "",
    phoneNumber: "",
    city: "",
  });
  const { registerCompanyData, setRegisterCompanyData } =
    useRegisterCompanyStore();
  function handleChange(e) {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: "" });
    setRegisterCompanyData({ ...registerCompanyData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const validate = registerCompanyFormSchema.safeParse(registerCompanyData);
    if (validate.success) {
    } else {
      const validationErrors = validate.error.errors;
      const formattedErrors: { [key: string]: string } = {};
      validationErrors.forEach((error: ZodIssue) => {
        if (error.path.length > 0) {
          formattedErrors[error.path[0]] = error.message;
        }
      });
      setErrors({ ...errors, ...formattedErrors });
    }
  }
  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <Input
        variant={"primary"}
        placeholder="Company"
        name="company"
        helpText={errors.company}
        type="text"
        leadingIcon={<CompanyIcon />}
        onChange={handleChange}
        value={registerCompanyData.company}
      />
      <Input
        variant={"primary"}
        placeholder="Contact Name"
        helpText={errors.contactName}
        name="contactName"
        type="text"
        leadingIcon={<CompanyProfileOne />}
        onChange={handleChange}
        value={registerCompanyData.contactName}
      />
      <Input
        variant={"primary"}
        placeholder="Work Mail"
        helpText={errors.workMail}
        name="workMail"
        type="text"
        leadingIcon={<CompanyMail width={14} height={11} />}
        onChange={handleChange}
        value={registerCompanyData.workMail}
      />
      <Input
        variant={"primary"}
        placeholder="Phone Number"
        helpText={errors.phoneNumber}
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
        helpText={errors.city}
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
        type="submit"
        trailingIcon={
          <CompanyArrow width={16} height={16} fill="white" className="pt-1" />
        }
      />
    </form>
  );
}
