import Image from "next/image";

import JobCardDetails from "./job-card-details";
import Tags from "../../tags";

import { JobProps } from "@/types/types";

export default function JobCard({ job }: JobProps) {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 p-4 lg:p-8 bg-white rounded-md border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="flex-center h-10 w-10 rounded-full bg-orange-100">
            <Image
              alt="logo"
              src={"/assets/icons/fire.svg"}
              width={16}
              height={18}
            />
          </span>
          <div>
            <h3 className="flex items-center gap-4 text-base font-semibold text-neutral-900">
              {job?.title}
              {job?.is_hot && (
                <span className="hidden lg:block bg-green-500 font-bold px-2 py-1 text-white text-xxs rounded-md max-w-max">
                  Urgent
                </span>
              )}
            </h3>
            <p className="text-gray-500 text-xs lg:text-sm font-semibold lg:font-normal">
              {job?.external_company_name}
              {job?.is_hot && (
                <span className="block lg:hidden bg-green-500 font-bold px-2 py-1 text-white text-xxs rounded-md max-w-max">
                  Urgent
                </span>
              )}
            </p>
          </div>
        </div>
        <button type="button">
          {/* <Image
            alt="bookmarked"
            src={"/assets/icons/bookmarked.svg"}
            width={30}
            height={30}
          />  */}
          <Image
            alt="bookmark"
            src={"/assets/icons/bookmark.svg"}
            width={30}
            height={30}
          />
        </button>
      </div>
      <JobCardDetails job={job} />
      {job?.description && (
        <p className="text-xs lg:text-sm text-neutral-600">
          {job?.description}
        </p>
      )}
      <span className="border-b border-neutral-200" />
      <Tags python django sql git />
    </div>
  );
}
