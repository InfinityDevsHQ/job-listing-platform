import AppInput from "@/components/ui/app-input";
import CompanyGlobe from "@/components/svgs/company-globe";
import CompanyEye from "@/components/svgs/company-eye";
export default function LocationFormInputs() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <AppInput
        variant={"primary"}
        name="country"
        type="text"
        placeholder="Country"
        leadingIcon={<CompanyGlobe />}
      />
      <AppInput
        variant={"primary"}
        name="password"
        type="password"
        placeholder="Password"
        leadingIcon={<CompanyEye width={16} height={16} />}
      />
    </div>
  );
}
