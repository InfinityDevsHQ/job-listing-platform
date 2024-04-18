import Image from "next/image";

import CompanyApplied from "@/components/svgs/company-applied";
import CompanyCalender from "@/components/svgs/company-calender";
import CompanyClock from "@/components/svgs/company-clock";
import CompanyDollar from "@/components/svgs/company-dollar";
import CompanyExperience from "@/components/svgs/company-experience";
import CompanyLocation from "@/components/svgs/company-location";

type JobCardDetailsProps = {
  jobType: string;
  experienceRequired: string;
  location: string;
  salary: string;
  applications: number;
  date: string;
};

export default function JobCardDetails({
  jobType,
  experienceRequired,
  location,
  salary,
  applications,
  date,
}: JobCardDetailsProps) {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex items-center justify-between flex-wrap">
          <span className="flex items-center gap-2.5">
            <Image
              alt="timer"
              src={"/assets/icons/timer.svg"}
              width={14}
              height={12}
            />
            <span className="text-xxs lg:text-sm font-semibold lg:font-normal text-gray-950">{jobType}</span>
          </span>
          <span className="flex items-center gap-2.5">
            <Image
              alt="briefcase"
              src={"/assets/icons/briefcase.svg"}
              width={14}
              height={12}
            />
            <span className="text-xxs lg:text-sm font-semibold lg:font-normal text-gray-950">{experienceRequired}</span>
          </span>
          <span className="flex items-center gap-2.5">
            <Image
              alt="map-marker-alt"
              src={"/assets/icons/map-marker-alt.svg"}
              width={11}
              height={12}
            />
            <span className="text-xxs lg:text-sm font-semibold lg:font-normal text-gray-950">{location}</span>
          </span>
          <span className="flex items-center gap-2.5">
            <Image
              alt="circle-dollar"
              src={"/assets/icons/circle-dollar.svg"}
              width={14}
              height={12}
            />
            <span className="text-xxs lg:text-sm font-semibold lg:font-normal text-gray-950">{salary}</span>
          </span>
          <span className="flex items-center gap-2.5">
            <Image
              alt="users"
              src={"/assets/icons/users.svg"}
              width={18}
              height={12}
            />
            <span className="text-xxs lg:text-sm font-semibold lg:font-normal text-gray-950">{salary}</span>
          </span>
          <span className="flex items-center gap-2.5">
            <Image
              alt="calendar-alt"
              src={"/assets/icons/calendar-alt.svg"}
              width={13}
              height={12}
            />
            <span className="text-xxs lg:text-sm font-semibold lg:font-normal text-gray-950">{salary}</span>
          </span>
        </div>
        {/* <div className="flex items-center justify-between flex-1">
          <span className="flex items-center gap-2.5 font-sans text-10 lg:text-sm lg:leading-5 font-semibold leading-3">
            <CompanyDollar width={14} height={12} />
            <span className="text-10 lg:text-sm lg:leading-5">{salary}</span>
          </span>
          <span className="flex items-center gap-2.5 font-sans text-10 lg:text-sm lg:leading-5 font-semibold leading-3">
            <CompanyApplied width={18} height={12} />
            <span className="text-10 lg:text-sm lg:leading-5">
              {applications} Applied
            </span>
          </span>
          <span className="flex items-center gap-2.5 font-sans text-10 lg:text-sm lg:leading-5 font-semibold leading-3">
            <CompanyCalender width={13} height={12} />
            <span className="text-10">{date}</span>
          </span>
        </div> */}
      </div>
    </>
  );
}
