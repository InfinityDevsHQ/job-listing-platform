"use client";
import CompanyEye from "@/components/svgs/company-eye";
import CompanyLock from "@/components/svgs/company-lock";
import CompanyProfileOne from "@/components/svgs/company-profile-one";
import CompanyMail from "@/components/svgs/coompany-mail";
import AppInput from "@/components/ui/app-input";
import useRegisterCandidateStore from "@/stores/register-candidate-store";
import { registerCandidateFormSchema } from "@/types/schemas/register-candidate-form-schema";
export default function RegisterCandidateForm() {
  const { registerCandidateData, setRegisterCandidateData } =
    useRegisterCandidateStore();
  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterCandidateData({ ...registerCandidateData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const validate = registerCandidateFormSchema.safeParse(
      registerCandidateData
    );
    if (validate.success) {
      console.log("Validated data:", validate.data);
    } else {
      console.warn("Validated data:", validate.error.errors);
    }
  }
  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <AppInput
        variant={"primary"}
        type="text"
        name="username"
        value={registerCandidateData.username}
        onChange={handleChange}
        placeholder="Username"
        leadingIcon={<CompanyProfileOne />}
      />
      <AppInput
        variant={"primary"}
        type="email"
        name="email"
        value={registerCandidateData.email}
        onChange={handleChange}
        placeholder="Email"
        leadingIcon={<CompanyMail width={14} height={11} />}
      />
      <AppInput
        variant={"primary"}
        name="passwordOne"
        type="password"
        value={registerCandidateData.passwordOne}
        onChange={handleChange}
        placeholder="Password"
        leadingIcon={<CompanyLock width={14} height={15} />}
        trailingIcon={<CompanyEye width={16} height={13} />}
      />
      <AppInput
        variant={"primary"}
        name="passwordTwo"
        type="password"
        value={registerCandidateData.passwordTwo}
        onChange={handleChange}
        placeholder="Password"
        leadingIcon={<CompanyLock width={14} height={15} />}
        trailingIcon={<CompanyEye width={16} height={13} />}
      />
    </form>
  );
}
