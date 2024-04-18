import CompanyMail from "@/components/svgs/coompany-mail";
import CompanyLock from "@/components/svgs/company-lock";
import CompanyEye from "@/components/svgs/company-eye";
import CompanyProfileOne from "@/components/svgs/company-profile-one";
import AppInput from "@/components/ui/app-input";
type RegisterCandidateInputsProps = {
  handleChange: (event: any) => void;
  registerFormData: RegisterData;
};
export default function RegisterCandidateInputs({
  handleChange,
  registerFormData,
}: RegisterCandidateInputsProps) {
  return (
    <>
      <AppInput
        variant={"primary"}
        type="text"
        name="username"
        value={registerFormData.username}
        onChange={handleChange}
        placeholder="Username"
        leadingIcon={<CompanyProfileOne />}
      />
      <AppInput
        variant={"primary"}
        type="email"
        name="email"
        value={registerFormData.email}
        onChange={handleChange}
        placeholder="Email"
        leadingIcon={<CompanyMail width={14} height={11} />}
      />
      <AppInput
        variant={"primary"}
        name="passwordOne"
        type="password"
        value={registerFormData.passwordOne}
        onChange={handleChange}
        placeholder="Password"
        leadingIcon={<CompanyLock width={14} height={15} />}
        trailingIcon={<CompanyEye width={16} height={13} />}
      />
      <AppInput
        variant={"primary"}
        name="passwordTwo"
        type="password"
        value={registerFormData.passwordTwo}
        onChange={handleChange}
        placeholder="Password"
        leadingIcon={<CompanyLock width={14} height={15} />}
        trailingIcon={<CompanyEye width={16} height={13} />}
      />
    </>
  );
}
