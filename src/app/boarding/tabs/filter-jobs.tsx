import Image from "next/image";
import BoardingHeader from "../_components/boarding-header";
import FilterJobsForm from "@/forms/onBoarding/filter-jobs-form";

export default function FilterJobs() {
  return (
    <div className="grid grid-cols-2 w-full">
      <div className="hidden lg:flex items-center justify-center col-span-2 lg:col-span-1 w-full">
        <Image
          src={"/assets/boarding/cv_poster.png"}
          alt="Location Poster"
          width={580}
          height={580}
        />
      </div>
      <div className="flex justify-center flex-col gap-4 w-full col-span-2 lg:col-span-1">
        <BoardingHeader
          title="3. Filter Jobs"
          description="Set your preferences and we'll find the best jobs for you."
        />
        <FilterJobsForm />
      </div>
    </div>
  );
}
