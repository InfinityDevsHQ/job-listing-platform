import PageHeader from "@/_components/page-header";
import VectorText from "@/_components/vector-text";
import LoginRegisterToggler from "@/_components/login-register-toggler";
import LoginInputs from "./login-inputs";
import AppsAuth from "@/_components/apps-auth";
import Button from "@/components/ui/app-button";
import CompanyArrow from "@/components/svgs/company-arrow";
import TabNavigator from "@/_components/tab-navigator";
type LoginFormProps = {
  setOpen: (value: "EmailPassword" | "PasswordLess") => void;
  open: "EmailPassword" | "PasswordLess";
  loginData: LoginFormData;
  setLoginData: (data: unknown) => void;
};
export default function LoginForm({
  open,
  setOpen,
  loginData,
  setLoginData,
}: LoginFormProps) {
  const Tabs = [
    {
      tabText: "Email / Password",
      clickHandler: () => setOpen("EmailPassword"),
      active: open === "EmailPassword",
    },
    {
      tabText: "Password Less",
      clickHandler: () => setOpen("PasswordLess"),
      active: open === "PasswordLess",
    },
  ];
  return (
    <form className="flex flex-col gap-8 px-16">
      <PageHeader title="Login to your Account" />
      <VectorText text="Select Method to Login" />
      <AppsAuth google github linkedin auth="login" />
      <VectorText text="or" />
      <TabNavigator tabs={Tabs} />
      <LoginInputs
        loginData={loginData}
        setLoginData={setLoginData}
        openInputs={open}
      />
      <Button className="flex items-center gap-2.5 font-sans bg-white lg:bg-primary-900 lg:hover:bg-primary-700 border border-gray-200 px-4 py-2 text-base text-gray-900 lg:text-white font-medium">
        <span>Login</span>
        <CompanyArrow width={16} height={16} fill="white" className="pt-1" />
      </Button>
      <LoginRegisterToggler currentPage="login" />
    </form>
  );
}
