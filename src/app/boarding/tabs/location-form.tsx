import Image from "next/image";
import BoardingHeader from "../_components/boarding-header";
import LocationFormInputs from "./location-form/location-form-inputs";
type LocationFormProps = {
  onBoardingData: OnBoardingData;
  handleChange: () => void;
};
export default function LocationForm({
  onBoardingData,
  handleChange,
}: LocationFormProps) {
  // Replace Icons Later
  // Also add dropdowns later
  return (
    <div className="grid grid-cols-2 w-full">
      <div className="hidden lg:flex items-center justify-center col-span-2 lg:col-span-1">
        <Image
          src={"/assets/boarding/location_poster.png"}
          alt="Location Poster"
          width={580}
          height={580}
        />
      </div>
      <div className="flex justify-center flex-col gap-4 w-full col-span-2 lg:col-span-1">
        <BoardingHeader title="1. Location" />
        <LocationFormInputs
          onBoardingData={onBoardingData}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}
