import PageHeader from "@/_components/page-header";
import VectorText from "@/_components/vector-text";
import LoginRegisterToggler from "@/_components/login-register-toggler";
import LoginInputsToggler from "./login-inputs-toggler";
import LoginInputs from "./login-inputs";
import AppsAuth from "@/_components/apps-auth";
import { Button } from "@/components/ui/button";
import CompanyArrow from "@/components/svgs/company-arrow";
import { LoginData } from "@/types/types";
type LoginFormProps = {
  setOpen: (value: "EmailPassword" | "PasswordLess") => void;
  open: "EmailPassword" | "PasswordLess";
  loginData: LoginData;
  openInputs: "EmailPassword" | "PasswordLess";
  setLoginData: SetLoginDataState;
};
export default function LoginForm({
  open,
  setOpen,
  loginData,
  setLoginData,
}: LoginFormProps) {
  console.log("FormData is here:", loginData);
  return (
    <form className="flex flex-col gap-8 px-16">
      <PageHeader title="Login to your Account" />
      <VectorText text="Select Method to Login" />
      <AppsAuth google github linkedin auth="login" />
      <VectorText text="or" />
      <LoginInputsToggler open={open} loginSetOpen={setOpen} />
      <LoginInputs
        loginData={loginData}
        setLoginData={setLoginData}
        openInputs={open}
      />
      <Button className="flex items-center gap-2.5 font-sans bg-primary-900 px-4 py-2 text-base leading-6 text-white font-medium">
        <span>Login</span>
        <CompanyArrow width={16} height={16} fill="white" className="pt-1" />
      </Button>
      <LoginRegisterToggler currentPage="login" />
    </form>
  );
}
