import CompanyEye from "@/components/svgs/company-eye";
import CompanyLock from "@/components/svgs/company-lock";
import CompanyMail from "@/components/svgs/coompany-mail";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
type LoginInputsProps = {
  loginData: LoginFormData;
  setLoginData: SetLoginDataState;
  openInputs: "EmailPassword" | "PasswordLess";
};
export default function LoginInputs({
  loginData,
  setLoginData,
  openInputs,
}: LoginInputsProps) {
  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    const newValue = event.target.type === "checkbox" ? checked : value;
    setLoginData({ ...loginData, [name]: newValue });
  };
  return (
    <>
      <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
        <CompanyMail width={14} height={11} />
        <Input
          className="w-full border-none placeholder:text-gray-400 !text-black"
          placeholder="Email"
          name="email"
          type="email"
          value={loginData.email}
          onChange={(e) => handleChange(e)}
        />
      </div>

      {openInputs === "EmailPassword" && (
        <>
          <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border border-gray-300">
            <CompanyLock width={14} height={15} />
            <Input
              className="w-full border-none placeholder:text-gray-400 !text-black"
              placeholder="Password"
              name="password"
              type="password"
              value={loginData.password}
              onChange={(e) => handleChange(e)}
            />
            <CompanyEye width={16} height={13} />
          </div>
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
