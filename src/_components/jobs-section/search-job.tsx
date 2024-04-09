import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
export default function SearchJobs() {
  return (
    <div className="flex flex-col gap-5  bg-secondary p-5 lg:p-[30px] rounded-20">
      <h2 className="text-xl lg:text-3xl font-bold font-roboto text-white">
        Find your dream job here
      </h2>
      <p className="text-xs lg:text-xl font-light font-roboto text-white">
        Explore the latest job openings and apply for the best job opportunities
        available today!
      </p>
      <div className="w-full flex items-center  bg-white p-1 rounded-10 group">
        <Search className="text-gray-dark ml-2" />
        <Input
          className=" focus:outline-none  focus-visible:ring-0 focus-visible:ring-offset-0 group-focus:outline-black border-none lg:text-xl  placeholder:text-base lg:placeholder:text-xl placeholder:font-normal placeholder:text-gray"
          placeholder="Search"
        />
        <Button className="bg-secondary  px-2.5 lg:px-5 py-0 text-sm font-roboto font-bold">
          For Companies
        </Button>
      </div>
    </div>
  );
}
