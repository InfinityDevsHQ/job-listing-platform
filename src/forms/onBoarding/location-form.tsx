'use client'
import AppInput from "@/components/ui/app-input";
import CompanyGlobe from "@/components/svgs/company-globe";
import CompanyEye from "@/components/svgs/company-eye";
import DropDown from "@/_components/dropdown";
import CompanyDictionary from "@/components/svgs/company-dictionary";
import { useState } from "react";
import CompanyCheck from "@/components/svgs/company-check";
import CompanyCity from "@/components/svgs/company-city";
const Languages=[{
  value: 'en',text:'English'
},{
  value: 'ur',text:'Urdu'
}]
const TimeZones=[{value: 'au',text:'Australia'}]
const Cities=[{value: 'sidney',text: 'Sidney, Australia'}]
export default function LocationForm() {
  const [language,setLanguage]=useState(Languages[0].value);
const [timeZone,setTimeZone]=useState(TimeZones[0].value);
const [city,setCity]=useState(Cities[0].value)
  return (
    <form className="flex flex-col gap-4 lg:gap-8">
      <DropDown options={Languages} select={language} setSelect={setLanguage}  leadingIcon={<CompanyDictionary/>}  />
      <DropDown options={TimeZones} select={timeZone} setSelect={setTimeZone} leadingIcon={<CompanyCheck/>}/>
      <AppInput
        variant={"primary"}
        name="country"
        value={onBoardingData.country}
        onChange={handleChange}
        type="text"
        placeholder="Country"
        leadingIcon={<CompanyGlobe />}
      />
      <DropDown options={Cities} select={city} setSelect={setCity} leadingIcon={<CompanyCity/>} />
      <AppInput
        variant={"primary"}
        name="password"
        type="password"
        value={onBoardingData.password}
        onChange={handleChange}
        placeholder="Password"
        leadingIcon={<CompanyEye width={16} height={16} />}
      />
    </fo>
  );
}
