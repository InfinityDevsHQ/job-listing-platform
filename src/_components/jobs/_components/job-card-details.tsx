import Image from "next/image";

import { JobProps } from "@/types/types";

export default function JobCardDetails({ job }: JobProps) {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="w-full flex items-center gap-3 lg:gap-0 justify-between flex-wrap">
          <span className="flex items-center gap-2.5">
            <Image
              alt="timer"
              src={"/assets/icons/timer.svg"}
              width={14}
              height={12}
            />
            <span className="capitalize text-xxs lg:text-sm font-semibold lg:font-normal text-gray-950">
              {job.employment_type}
            </span>
          </span>
          <span className="flex items-center gap-2.5">
            <Image
              alt="briefcase"
              src={"/assets/icons/briefcase.svg"}
              width={14}
              height={12}
            />
            <span className="text-xxs lg:text-sm font-semibold lg:font-normal text-gray-950">
              1-2 Year
            </span>
          </span>
          <span className="flex items-center gap-2.5">
            <Image
              alt="map-marker-alt"
              src={"/assets/icons/map-marker-alt.svg"}
              width={11}
              height={12}
            />
            <span className="text-xxs lg:text-sm font-semibold lg:font-normal text-gray-950">
              NY, USA
            </span>
          </span>
          <span className="flex items-center gap-2.5">
            <Image
              alt="circle-dollar"
              src={"/assets/icons/circle-dollar.svg"}
              width={14}
              height={12}
            />
            <span className="text-xxs lg:text-sm font-semibold lg:font-normal text-gray-950">
              $30k-60k /Month
            </span>
          </span>
          <span className="flex items-center gap-2.5">
            <Image
              alt="users"
              src={"/assets/icons/users.svg"}
              width={18}
              height={12}
            />
            <span className="text-xxs lg:text-sm font-semibold lg:font-normal text-gray-950">
              49 Applied
            </span>
          </span>
          <span className="flex items-center gap-2.5">
            <Image
              alt="calendar-alt"
              src={"/assets/icons/calendar-alt.svg"}
              width={13}
              height={12}
            />
            <span className="text-xxs lg:text-sm font-semibold lg:font-normal text-gray-950">
              23 Mar 2023
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
