import { Input } from "@/components/ui/input";
import CompanyMail from "@/components/svgs/coompany-mail";
import PageHeader from "@/_components/page-header";
import CompanyClock from "@/components/svgs/company-clock";
import CompanyGlobe from "@/components/svgs/company-globe";
import CompanyLock from "@/components/svgs/company-lock";
import CompanyEye from "@/components/svgs/company-eye";
import Image from "next/image";
export default function LocationForm() {
  // Replace Icons Later
  // Also add dropdowns later
  return (
    <div className="grid grid-cols-2">
      <div className="hidden lg:flex items-center justify-center col-span-2 lg:col-span-1">
        <Image
          src={"/assets/location_poster.png"}
          alt="Location Poster"
          width={580}
          height={580}
        />
      </div>
      <div className="flex flex-col gap-4 w-full col-span-2 lg:col-span-1">
        <PageHeader
          title="1. Location"
          boXClassName="!py-0"
          textClassName="!text-left !text-2xl lg:!text-4xl !text-gray-950 !font-sans"
        />
        <div className="flex flex-col">
          <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
            <CompanyGlobe />
            <Input
              className="w-full border-none placeholder:text-gray-400 !text-black"
              placeholder="Country"
              name="country"
              type="text"
            />
          </div>
          <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
            <CompanyEye width={16} height={16} />
            <Input
              className="w-full border-none placeholder:text-gray-400 !text-black"
              placeholder="Password"
              name="password"
              type="password"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
