import AppInput from "@/components/ui/app-input";
import { Search } from "lucide-react";
export default function SearchJobs() {
  return (
    <div className="flex w-full flex-col gap-5 bg-primary p-5 lg:p-hight rounded-20">
      <h2 className="text-xl lg:text-3xl font-bold font-roboto text-white">
        Find your dream job here
      </h2>
      <p className="text-xs lg:text-xl font-light font-roboto text-white">
        Explore the latest job openings and apply for the best job opportunities
        available today!
      </p>
      <AppInput
        placeholder="Search"
        containerClassName="lg:hidden"
        className="focus:outline-none  focus-visible:ring-0 focus-visible:ring-offset-0 group-focus:outline-black border-none lg:text-xl  placeholder:text-base lg:placeholder:text-xl placeholder:font-normal placeholder:text-gray"
      />
      {/* Replace with button */}
      <div className="lg:hidden bg-white text-gray-800  px-2.5 lg:px-5 py-0 text-sm font-roboto font-bold">
        For Companies
      </div>

      <div className="w-full hidden lg:flex items-center  bg-white p-1 rounded-10 group">
        <AppInput
          placeholder="Search"
          leadingIcon={<Search size={12} className="text-gray-dark ml-2" />}
          className="focus:outline-none  focus-visible:ring-0 focus-visible:ring-offset-0 group-focus:outline-black border-none lg:text-xl  placeholder:text-base lg:placeholder:text-xl placeholder:font-normal placeholder:text-gray"
        />
        {/* Replace with button */}
        <div className="bg-secondary  px-2.5 lg:px-5 py-0 text-sm font-roboto font-bold">
          For Companies
        </div>
      </div>
    </div>
  );
}
