"use client";
import CompanyEye from "@/components/svgs/company-eye";
import CompanyLock from "@/components/svgs/company-lock";
import CompanyProfileOne from "@/components/svgs/company-profile-one";
import CompanyMail from "@/components/svgs/coompany-mail";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import CompanyArrow from "@/components/svgs/company-arrow";
import useRegisterCandidateStore from "@/stores/register-candidate-store";
import { registerCandidateFormSchema } from "@/types/schemas/register-candidate-form-schema";
import { useState } from "react";
import { ZodIssue } from "zod";
export default function RegisterCandidateForm() {
  const { registerCandidateData, setRegisterCandidateData } =
    useRegisterCandidateStore();
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    confirm: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: "", confirm: "" });
    setRegisterCandidateData({ ...registerCandidateData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const validate = registerCandidateFormSchema.safeParse(
      registerCandidateData
    );
    if (validate.success) {
    } else {
      const validationErrors = validate.error.errors;
      const formattedErrors: { [key: string]: string } = {};
      validationErrors.forEach((error: ZodIssue) => {
        if (error.path.length > 0) {
          formattedErrors[error.path[0]] = error.message;
        }
      });
      console.log("I am here", formattedErrors);
      setErrors({ ...errors, ...formattedErrors });
    }
  }
  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <Input
        variant={"primary"}
        type="text"
        name="username"
        value={registerCandidateData.username}
        onChange={handleChange}
        placeholder="Username"
        helpText={errors.username && errors.username}
        leadingIcon={<CompanyProfileOne />}
      />
      <Input
        variant={"primary"}
        type="email"
        name="email"
        value={registerCandidateData.email}
        helpText={errors.email && errors.email}
        onChange={handleChange}
        placeholder="Email"
        leadingIcon={<CompanyMail width={14} height={11} />}
      />
      <Input
        variant={"primary"}
        name="password"
        type="password"
        value={registerCandidateData.password}
        helpText={errors.password && errors.password}
        onChange={handleChange}
        placeholder="Password"
        leadingIcon={<CompanyLock width={14} height={15} />}
        trailingIcon={<CompanyEye width={16} height={13} />}
      />
      <Input
        variant={"primary"}
        name="confirmPassword"
        type="password"
        value={registerCandidateData.confirmPassword}
        helpText={
          (errors.confirmPassword && errors.confirmPassword) ||
          (errors.confirm && errors.confirm)
        }
        onChange={handleChange}
        placeholder="Password"
        leadingIcon={<CompanyLock width={14} height={15} />}
        trailingIcon={<CompanyEye width={16} height={13} />}
      />
      <Button
        text="Continue"
        variant={"primary"}
        className="!max-w-full justify-center"
        type="submit"
        trailingIcon={
          <CompanyArrow width={16} height={16} fill="white" className="pt-1" />
        }
      />
    </form>
  );
}
