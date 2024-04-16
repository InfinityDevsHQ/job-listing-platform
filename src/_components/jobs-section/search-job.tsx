import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
export default function SearchJobs() {
  return (
    <div className="flex w-full flex-col gap-5 bg-primary p-5 lg:p-hight rounded-20">
      <h2 className="text-xl lg:text-3xl font-bold text-white">
        Find your dream job here
      </h2>
      <p className="text-xs lg:text-xl font-light text-white">
        Explore the latest job openings and apply for the best job opportunities
        available today!
      </p>
      <Input
        className="lg:hidden focus:outline-none  focus-visible:ring-0 focus-visible:ring-offset-0 group-focus:outline-black border-none lg:text-xl  placeholder:text-base lg:placeholder:text-xl placeholder:font-normal placeholder:text-gray"
        placeholder="Search"
      />
      <Button className="lg:hidden bg-white text-gray-800  px-2.5 lg:px-5 py-0 text-sm font-bold">
        For Companies
      </Button>
      <div className="w-full hidden lg:flex items-center  bg-white p-1 rounded-10 group">
        <Search className="text-gray-dark ml-2" />
        <Input
          className="focus:outline-none  focus-visible:ring-0 focus-visible:ring-offset-0 group-focus:outline-black border-none lg:text-xl  placeholder:text-base lg:placeholder:text-xl placeholder:font-normal placeholder:text-gray"
          placeholder="Search"
        />
        <Button className="bg-secondary  px-2.5 lg:px-5 py-0 text-sm font-bold">
          For Companies
        </Button>
      </div>
    </div>
  );
}
