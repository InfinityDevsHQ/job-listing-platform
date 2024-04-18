import Link from "next/link";
import CompanyEye from "@/components/svgs/company-eye";
import CompanyLock from "@/components/svgs/company-lock";
import CompanyMail from "@/components/svgs/coompany-mail";
import { Checkbox } from "@/components/ui/checkbox";
import AppInput from "@/components/ui/app-input";
import { ChangeEvent, FormEvent } from "react";

type LoginInputsProps = {
  loginData: LoginFormData;
  setLoginData: (data: unknown) => void;
  openInputs: "EmailPassword" | "PasswordLess";
};
export default function LoginInputs({
  loginData,
  setLoginData,
  openInputs,
}: LoginInputsProps) {
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

      {openInputs === "EmailPassword" && (
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
  );
}
