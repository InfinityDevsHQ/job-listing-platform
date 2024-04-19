import Image from "next/image";
import BoardingHeader from "../_components/boarding-header";
import TermsAndConditionsForm from "@/forms/onBoarding/terms-and-conditions-form";

export default function Finish() {
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
        <BoardingHeader title="5. Finish" />
        <p className="mt-4 lg:mt-8 font-sans font-bold text-sm lg:text-xl text-mute-3">
          Let&apos;s make some career magic happen!
        </p>
        <p className="mt-4 lg:mt-8 font-sans new-gray text-sm lg:text-base">
          Please take a moment to review our terms of use. Once you click
          &quot;Finish&quot;, you&apos;re all set for a new frontier of job
          opportunities.
        </p>
        <TermsAndConditionsForm />
      </div>
    </div>
  );
}
