import PageHeader from "@/_components/page-header";
import VectorText from "@/_components/vector-text";
import AppsAuth from "@/_components/apps-auth";
import TabNavigator from "@/_components/tab-navigator";
import RegisterCandidateInputs from "./register-candidate-inputs";
import RegisterCompanyInputs from "./register-company-inputs";
import { Button } from "@/components/ui/button";
import CompanyArrow from "@/components/svgs/company-arrow";
import LoginRegisterToggler from "@/_components/login-register-toggler";
type RegisterFormProps = {
  opened: "Company" | "Candidate";
};
export default function RegisterForm({
  opened,
  setOpened,
  handleChange,
  employOptions,
  employs,
  setEmploys,
  countries,
  country,
  setCountry,
  languages,
  language,
  setLanguage,
  registerFormData,
}) {
  console.log(registerFormData);
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
  return (
    <form className="flex flex-col gap-8 px-16">
      <PageHeader title="Create your Account" />
      <VectorText text="Select Method to Login" />
      <AppsAuth google linkedin github auth="register" />
      <VectorText text="or" />
      <TabNavigator tabs={Tabs} />
      {opened === "Company" ? (
        <RegisterCompanyInputs
          handleChange={handleChange}
          employees={employOptions}
          selectEmploy={employs}
          setSelectEmploy={setEmploys}
          countries={countries}
          selectCountry={country}
          setSelectCountry={setCountry}
          languages={languages}
          selectLanguage={language}
          setSelectLanguage={setLanguage}
          registerFormData={registerFormData}
        />
      ) : (
        <RegisterCandidateInputs
          handleChange={handleChange}
          registerFormData={registerFormData}
        />
      )}
      <Button className="flex items-center gap-2.5 font-sans bg-white lg:bg-primary-900 lg:hover:bg-primary-700 border border-gray-200 px-4 py-2 text-base text-gray-900 lg:text-white font-medium">
        <span>Continue</span>
        <CompanyArrow width={16} height={16} fill="white" className="pt-1" />
      </Button>
      <LoginRegisterToggler currentPage="register" />
    </form>
  );
}
