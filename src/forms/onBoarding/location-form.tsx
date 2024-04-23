"use client";
import Input from "@/components/ui/input";
import { useQueryParams } from "@/hooks/useQueryParams";
import CompanyGlobe from "@/components/svgs/company-globe";
import CompanyEye from "@/components/svgs/company-eye";
import DropDown from "@/_components/dropdown";
import CompanyDictionary from "@/components/svgs/company-dictionary";
import { useState } from "react";
import { locationFormSchema } from "@/types/schemas/location-form-schema";
import CompanyCity from "@/components/svgs/company-city";
import useLocationFormData from "@/stores/location-form-store";
import CompanyClock from "@/components/svgs/company-clock";
import { ZodIssue } from "zod";
import Pagination from "@/components/ui/pagination";
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
const TimeZones = [{ value: "au", text: "Australia" }];
const Cities = [{ value: "sidney", text: "Sidney, Australia" }];
export default function LocationForm() {
  const [preferLanguage, setPreferLanguage] = useState(Languages[0].value);
  const [timeZone, setTimeZone] = useState(TimeZones[0].value);
  const [errors, setErrors] = useState({
    country: "",
    password: "",
  });
  const [city, setCity] = useState(Cities[0].value);
  const { locationFormData, setLocationFormData } = useLocationFormData();
  const addQueryParams = useQueryParams();
  function handleChange(e) {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: "" });
    setLocationFormData({
      ...locationFormData,
      [name]: value,
      preferLanguage,
      timeZone,
      city,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const validate = locationFormSchema.safeParse(locationFormData);
    if (validate.success) {
      console.log("DatA Validated", validate.data);
      addQueryParams("step", "upload-cv");
    } else {
      console.warn("Invalid data type", validate.error.errors);
      const validationErrors = validate.error.errors;
      const formattedErrors: { [key: string]: string } = {};
      validationErrors.forEach((error: ZodIssue) => {
        if (error.path.length > 0) {
          formattedErrors[error.path[0]] = error.message;
        }
      });
      setErrors({ ...errors, ...formattedErrors });
      console.log(formattedErrors);
    }
  }
  return (
    <form className="flex flex-col gap-4 lg:gap-8" onSubmit={handleSubmit}>
      <DropDown
        options={Languages}
        select={preferLanguage}
        setSelect={setPreferLanguage}
        leadingIcon={<CompanyDictionary />}
      />
      <DropDown
        options={TimeZones}
        select={timeZone}
        setSelect={setTimeZone}
        leadingIcon={<CompanyClock width={16} height={16} />}
      />
      <Input
        variant={"primary"}
        name="country"
        value={locationFormData.country}
        helpText={errors.country}
        onChange={handleChange}
        type="text"
        placeholder="Country"
        leadingIcon={<CompanyGlobe />}
      />
      <DropDown
        options={Cities}
        select={city}
        setSelect={setCity}
        leadingIcon={<CompanyCity />}
      />
      <Input
        variant={"primary"}
        name="password"
        type="password"
        value={locationFormData.password}
        helpText={errors.password}
        onChange={handleChange}
        placeholder="Password"
        leadingIcon={<CompanyEye width={16} height={16} />}
      />
      <Pagination previous={false} handleNext={handleSubmit} />
    </form>
  );
}
