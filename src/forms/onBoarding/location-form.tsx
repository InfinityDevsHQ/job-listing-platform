import AppInput from "@/components/ui/app-input";
import CompanyGlobe from "@/components/svgs/company-globe";
import CompanyEye from "@/components/svgs/company-eye";
import DropDown from "@/_components/dropdown";
import CompanyDictionary from "@/components/svgs/company-dictionary";
import { useState } from "react";
import { locationFormSchema } from "@/types/schemas/location-form-schema";
import CompanyCity from "@/components/svgs/company-city";
import useLocationFormData from "@/stores/location-form-store";
import CompanyClock from "@/components/svgs/company-clock";
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
  const [language, setLanguage] = useState(Languages[0].value);
  const [timeZone, setTimeZone] = useState(TimeZones[0].value);
  const [city, setCity] = useState(Cities[0].value);
  const { locationFormData, setLocationFormData } = useLocationFormData();
  function handleChange(e) {
    const { name, value } = e.target;
    setLocationFormData({ ...locationFormData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const validate = locationFormSchema.safeParse(locationFormData);
    if (validate.success) {
      console.log("DatA Validated", validate.data);
    } else {
      console.warn("Invalid data type", validate.error.errors);
    }
  }
  return (
    <form className="flex flex-col gap-4 lg:gap-8" onSubmit={handleSubmit}>
      <DropDown
        options={Languages}
        select={language}
        setSelect={setLanguage}
        leadingIcon={<CompanyDictionary />}
      />
      <DropDown
        options={TimeZones}
        select={timeZone}
        setSelect={setTimeZone}
        leadingIcon={<CompanyClock width={16} height={16} />}
      />
      <AppInput
        variant={"primary"}
        name="country"
        value={locationFormData.country}
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
      <AppInput
        variant={"primary"}
        name="password"
        type="password"
        value={locationFormData.password}
        onChange={handleChange}
        placeholder="Password"
        leadingIcon={<CompanyEye width={16} height={16} />}
      />
    </form>
  );
}
