import PageHeader from "@/_components/page-header";
import VectorText from "@/_components/vector-text";
import AppsAuth from "@/_components/apps-auth";
import TabNavigator from "@/_components/tab-navigator";
import RegisterCandidateInputs from "./register-candidate-inputs";
import RegisterCompanyInputs from "./register-company-inputs";
import Button from "@/components/ui/app-button";
import CompanyArrow from "@/components/svgs/company-arrow";
import LoginRegisterToggler from "@/_components/login-register-toggler";
type RegisterFormProps = {
  employOptions: DropdownData[];
  countries: DropdownData[];
  languages: DropdownData[];
  opened: "Company" | "Candidate";
  setOpened: (value: "Company" | "Candidate") => void;
  handleChange: (event: unknown) => void;
  employs: number | string;
  setEmploys: (value: string | number) => void;
  country: string;
  setCountry: (value: string) => void;
  language: string;
  setLanguage: (value: string) => void;
  registerFormData: RegisterData;
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
}: RegisterFormProps) {
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
      <Button
        text="Continue"
        variant={"primary"}
        className="!max-w-full justify-center"
        trailingIcon={
          <CompanyArrow width={16} height={16} fill="white" className="pt-1" />
        }
      />

      <LoginRegisterToggler currentPage="register" />
    </form>
  );
}
