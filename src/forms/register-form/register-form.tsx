import PageHeader from "@/_components/page-header";
import VectorText from "@/_components/vector-text";
import AppsAuth from "@/_components/apps-auth";
import TabNavigator from "@/_components/tab-navigator";
import Button from "@/components/ui/button";
import CompanyArrow from "@/components/svgs/company-arrow";
import LoginRegisterToggler from "@/_components/login-register-toggler";
import RegisterCompanyForm from "./register-company-form";
import RegisterCandidateForm from "./register-candidate-form";
type RegisterFormProps = {
  opened: "Company" | "Candidate";
  setOpened: (value: "Company" | "Candidate") => void;
};
export default function RegisterForm({ opened, setOpened }: RegisterFormProps) {
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
    <div className="flex flex-col gap-8 px-16">
      <PageHeader title="Create your Account" />
      <VectorText text="Select Method to Login" />
      <AppsAuth google linkedin github auth="register" />
      <VectorText text="or" />
      <TabNavigator tabs={Tabs} />
      {opened === "Company" ? (
        <RegisterCompanyForm />
      ) : (
        <RegisterCandidateForm />
      )}

      <LoginRegisterToggler currentPage="register" />
    </div>
  );
}
