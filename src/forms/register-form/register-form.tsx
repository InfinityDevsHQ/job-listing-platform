import PageHeader from "@/_components/page-header";
import CompanyMail from "@/components/svgs/coompany-mail";
import DropDown from "@/_components/dropdown";
import CompanyLock from "@/components/svgs/company-lock";
import CompanyEye from "@/components/svgs/company-eye";
import CompanyIcon from "@/components/svgs/company-icon";
import CompanyProfileOne from "@/components/svgs/company-profile-one";
import CompanyCommunity from "@/components/svgs/company-community";
import CompanyGlobe from "@/components/svgs/company-globe";
import CompanyCity from "@/components/svgs/company-city";
import CompanyDictionary from "@/components/svgs/company-dictionary";
import AppInput from "@/components/ui/app-input";
import VectorText from "@/_components/vector-text";
import AppsAuth from "@/_components/apps-auth";
import TabNavigator from "@/_components/tab-navigator";
import Button from "@/components/ui/app-button";
import CompanyArrow from "@/components/svgs/company-arrow";
import LoginRegisterToggler from "@/_components/login-register-toggler";
import { registerFormDataSchema } from "@/types/schemas/registerformschema";
type RegisterFormProps = {
  employOptions: DropdownData[];
  countries: DropdownData[];
  languages: DropdownData[];
  opened: "Company" | "Candidate";
  setOpened: (value: "Company" | "Candidate") => void;
  handleChange: (event: unknown) => void;
  employs: number | string;
  setEmploys: (value: string | number) => void;
  country: string;
  setCountry: (value: string) => void;
  language: string;
  setLanguage: (value: string) => void;
  registerFormData: RegisterData;
};
export default function RegisterForm({
  opened,
  setOpened,
  handleChange,
  employOptions,
  employs,
  setEmploys,
  countries,
  country,
  setCountry,
  languages,
  language,
  setLanguage,
  registerFormData,
}: RegisterFormProps) {
  console.log(registerFormData);
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
  function handleSubmit(e) {
    e.preventDefault();
    const validationResult = registerFormDataSchema.safeParse(registerFormData);
    if (validationResult.success) {
      console.log("Form data is valid:", validationResult.data);
    } else {
      console.error("Form data is invalid:", validationResult.error.errors);
    }
  }
  return (
    <form className="flex flex-col gap-8 px-16" onSubmit={handleSubmit}>
      <PageHeader title="Create your Account" />
      <VectorText text="Select Method to Login" />
      <AppsAuth google linkedin github auth="register" />
      <VectorText text="or" />
      <TabNavigator tabs={Tabs} />
      {opened === "Company" ? (
        <>
          <AppInput
            variant={"primary"}
            placeholder="Company"
            name="company"
            type="text"
            leadingIcon={<CompanyIcon />}
            onChange={handleChange}
            value={registerFormData.company}
          />
          <AppInput
            variant={"primary"}
            placeholder="Contact Name"
            name="contactName"
            type="text"
            leadingIcon={<CompanyProfileOne />}
            onChange={handleChange}
            value={registerFormData.contactName}
          />
          <AppInput
            variant={"primary"}
            placeholder="Work Mail"
            name="workMail"
            type="text"
            leadingIcon={<CompanyMail width={14} height={11} />}
            onChange={handleChange}
            value={registerFormData.workMail}
          />
          <AppInput
            variant={"primary"}
            placeholder="Phone Number"
            name="phoneNumber"
            type="text"
            leadingIcon={<CompanyArrow width={15} height={15} />}
            onChange={handleChange}
            value={registerFormData.workMail}
          />

          <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
            <CompanyCommunity />
            <DropDown
              options={employOptions}
              select={employs}
              setSelect={setEmploys}
            />
          </div>
          <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
            <CompanyGlobe />
            <DropDown
              options={countries}
              select={country}
              setSelect={setCountry}
            />
          </div>
          <AppInput
            placeholder="City"
            type="text"
            name="city"
            leadingIcon={<CompanyCity />}
            onChange={handleChange}
            value={registerFormData.city}
          />
          <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
            <CompanyDictionary />
            <DropDown
              options={languages}
              select={language}
              setSelect={setLanguage}
            />
          </div>
        </>
      ) : (
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
      )}
      <Button
        text="Continue"
        variant={"primary"}
        className="!max-w-full justify-center"
        trailingIcon={
          <CompanyArrow width={16} height={16} fill="white" className="pt-1" />
        }
      />

      <LoginRegisterToggler currentPage="register" />
    </form>
  );
}
