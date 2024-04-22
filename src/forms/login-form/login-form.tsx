import PageHeader from "@/_components/page-header";
import Button from "@/components/ui/button";
import VectorText from "@/_components/vector-text";
import LoginRegisterToggler from "@/_components/login-register-toggler";
import Input from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import CompanyEye from "@/components/svgs/company-eye";
import CompanyLock from "@/components/svgs/company-lock";
import AppsAuth from "@/_components/apps-auth";
import CompanyMail from "@/components/svgs/coompany-mail";
import CompanyArrow from "@/components/svgs/company-arrow";
import TabNavigator from "@/_components/tab-navigator";
import { loginFormSchema } from "@/types/schemas/loginformschema";
import { ZodIssue } from "zod";
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
  // for tracking and displaying zod validation error
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
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
      setErrors({ ...errors, [name]: "" });
      setLoginData({ ...loginData, [name]: newValue });
    }
  };
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationResult = loginFormSchema.safeParse(loginData);
    if (validationResult.success) {
    } else {
      const validationErrors = validationResult.error.errors;
      const formattedErrors: { [key: string]: string } = {};
      validationErrors.forEach((error: ZodIssue) => {
        if (error.path.length > 0) {
          formattedErrors[error.path[0]] = error.message;
        }
      });
      const updatedErrors =
        open === "EmailPassword"
          ? { ...errors, ...formattedErrors }
          : { ...errors, email: formattedErrors.email || "" };
      setErrors(updatedErrors);
    }
    if (!errors.password && errors.email) {
      // Form Submission logic
    }
    console.log(errors);
  }

  return (
    <form className="flex flex-col gap-8 px-16" onSubmit={handleSubmit}>
      <PageHeader title="Login to your Account" />
      <VectorText text="Select Method to Login" />
      <AppsAuth google github linkedin auth="login" />
      <VectorText text="or" />
      <TabNavigator tabs={Tabs} />
      <>
        <Input
          variant={"primary"}
          placeholder="Email"
          name="email"
          type="email"
          value={loginData.email}
          helpText={errors.email && errors.email}
          onChange={(e) => handleChange(e)}
          leadingIcon={<CompanyMail width={16} height={16} />}
        />

        {open === "EmailPassword" && (
          <>
            <Input
              variant={"primary"}
              placeholder="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              onTrailingClick={() => setShowPassword(!showPassword)}
              value={loginData.password}
              helpText={errors.password && errors.password}
              min={8}
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
        type="submit"
        trailingIcon={
          <CompanyArrow width={16} height={16} fill="white" className="pt-1" />
        }
        className="!max-w-full justify-center"
      />
      <LoginRegisterToggler currentPage="login" />
    </form>
  );
}
