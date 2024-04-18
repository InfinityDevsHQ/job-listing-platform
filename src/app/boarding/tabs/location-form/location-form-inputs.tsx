import AppInput from "@/components/ui/app-input";
import CompanyGlobe from "@/components/svgs/company-globe";
import CompanyEye from "@/components/svgs/company-eye";
type LocationFormInputsProps = {
  onBoardingData: OnBoardingData;
  handleChange: () => void;
};
export default function LocationFormInputs({
  onBoardingData,
  handleChange,
}: LocationFormInputsProps) {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <AppInput
        variant={"primary"}
        name="country"
        value={onBoardingData.country}
        onChange={handleChange}
        type="text"
        placeholder="Country"
        leadingIcon={<CompanyGlobe />}
      />
      <AppInput
        variant={"primary"}
        name="password"
        type="password"
        value={onBoardingData.password}
        onChange={handleChange}
        placeholder="Password"
        leadingIcon={<CompanyEye width={16} height={16} />}
      />
    </div>
  );
}
