"use client";
import Poster from "@/_components/poster";
import PageHeader from "@/_components/page-header";
import VectorText from "@/_components/vector-text";
import AppsAuth from "@/_components/apps-auth";
import { Button } from "@/components/ui/button";
import RegisterCompanyInputs from "./_components/register-company-inputs";
import { useState } from "react";
import useRegisterStore from "@/stores/register-store";
import RegisterCandidateInputs from "./_components/register-candidate-inputs";
import CompanyArrow from "@/components/svgs/company-arrow";
import LoginRegisterToggler from "@/_components/login-register-toggler";
import FormsHeader from "@/_components/forms-header";
import TabNavigator from "@/_components/tab-navigator";
// For testing, update Later with api
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
export default function Register() {
  const [opened, setOpened] = useState("Candidate");
  const [employs, setEmploys] = useState(EmployOptions[0].value);
  const [country, setCountry] = useState(Countries[0].value);
  const [language, setLanguage] = useState(Languages[0].value);
  const Tabs = [
    {
      tabText: "Company",
      clickHandler: () => setOpened("Company"),
      active: opened === "Company",
    },
    {
      tabText: "Candidate",
      clickHandler: () => setOpened("Candidate"),
      active: opened === "Candidate",
    },
  ];
  const { registerData, setRegisterData } = useRegisterStore();
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <div className="col-span-2 lg:col-span-1 flex-center lg:block flex-col px-3.9 lg:px-0 bg-primary-900 lg:bg-primary-100">
        <FormsHeader />
        <form className="flex flex-col gap-8 px-16">
          <PageHeader title="Create your Account" />
          <VectorText text="Select Method to Login" />
          <AppsAuth google linkedin github auth="register" />
          <VectorText text="or" />
          <TabNavigator tabs={Tabs} />
          {opened === "Company" ? (
            <RegisterCompanyInputs
              employees={EmployOptions}
              selectEmploy={employs}
              setSelectEmploy={setEmploys}
              countries={Countries}
              selectCountry={country}
              setSelectCountry={setCountry}
              languages={Languages}
              selectLanguage={language}
              setSelectLanguage={setLanguage}
            />
          ) : (
            <RegisterCandidateInputs />
          )}
          <Button className="flex items-center gap-2.5 font-sans bg-white lg:bg-primary-900 lg:hover:bg-primary-700 border border-gray-200 px-4 py-2 text-base text-gray-900 lg:text-white font-medium">
            <span>Continue</span>
            <CompanyArrow
              width={16}
              height={16}
              fill="white"
              className="pt-1"
            />
          </Button>
          <LoginRegisterToggler currentPage="register" />
        </form>
      </div>
      <Poster
        imgUrl="/assets/login_poster.png"
        heading="Clickjob.ai"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            officia hic ducimus voluptatibus libero asperiores veritatis magni
            aliquam. Rem vitae cupiditate velit tenetur veritatis repellat,
            delectus placeat minima saepe architecto?"
      />
    </main>
  );
}
