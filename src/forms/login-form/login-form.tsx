import PageHeader from "@/_components/page-header";
import Button from "@/components/ui/app-button";
import VectorText from "@/_components/vector-text";
import LoginRegisterToggler from "@/_components/login-register-toggler";
import AppInput from "@/components/ui/app-input";
import { Checkbox } from "@/components/ui/checkbox";
import { ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import LoginInputs from "./login-inputs";
import CompanyLock from "@/components/svgs/company-lock";
import CompanyEye from "@/components/svgs/company-eye";
import AppsAuth from "@/_components/apps-auth";
import CompanyMail from "@/components/svgs/coompany-mail";
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
  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | FormEvent<HTMLFormElement>
  ) => {
    if (event.target) {
      const target = event.target as HTMLInputElement;
      const { name, value, checked, type } = target;
      const newValue = type === "checkbox" ? checked : value;
      setLoginData({ ...loginData, [name]: newValue });
    }
  };
  return (
    <form className="flex flex-col gap-8 px-16">
      <PageHeader title="Login to your Account" />
      <VectorText text="Select Method to Login" />
      <AppsAuth google github linkedin auth="login" />
      <VectorText text="or" />
      <TabNavigator tabs={Tabs} />
      <>
        <AppInput
          variant={"primary"}
          placeholder="Email"
          name="email"
          type="email"
          value={loginData.email}
          onChange={(e) => handleChange(e)}
          leadingIcon={<CompanyMail width={16} height={16} />}
        />

        {open === "EmailPassword" && (
          <>
            <AppInput
              variant={"primary"}
              placeholder="Email"
              name="password"
              type="password"
              value={loginData.password}
              onChange={(e) => handleChange(e)}
              leadingIcon={<CompanyLock width={14} height={15} />}
              trailingIcon={<CompanyEye width={16} height={13} />}
            />
            <div className="flex items-center gap-2">
              <Checkbox
                className="bg-white data-[state=checked]:bg-white"
                id="reminder"
                name="remember"
                checked={loginData.remember}
                value={`${loginData.remember}`}
                onChange={(e) => handleChange(e)}
              />
              <label
                htmlFor="reminder"
                className="font-sans font-medium text-base leading-6 text-neutral-50 lg:text-black"
              >
                Remember Me
              </label>
              <Link
                href={"#"}
                className="ml-auto px-4 py-2 font-sans text-neutral-50 lg:text-gray-800 text-16 leading-6 font-medium"
              >
                Forgot Password?
              </Link>
            </div>
          </>
        )}
      </>

      <Button
        variant={"primary"}
        text="Login"
        trailingIcon={
          <CompanyArrow width={16} height={16} fill="white" className="pt-1" />
        }
        className="!max-w-full justify-center"
      />
      <LoginRegisterToggler currentPage="login" />
    </form>
  );
}
