import Image from "next/image";

import CompanyBookmark from "@/components/svgs/company-bookmark";
import CompanyFlame from "@/components/svgs/company-flame";

type JobCardHeaderProps = {
  jobTitle: string;
  company: string;
  urgent?: boolean;
  bookmarked?: boolean;
};

export default function JobCardHeader({
  jobTitle,
  company,
  urgent = false,
  bookmarked = false,
}: JobCardHeaderProps) {
  return (
    <>
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
              {jobTitle}
              {urgent && (
                <span className="hidden lg:block bg-green-500 font-bold px-2 py-1 text-white text-xxs rounded-md">
                  Urgent
                </span>
              )}
            </h3>
            <p className="text-gray-500 text-xs lg:text-sm font-semibold lg:font-normal">
              {company}
              {urgent && (
                <span className="block lg:hidden bg-green-500 font-bold px-2 py-1 text-white text-xxs rounded-md">
                  Urgent
                </span>
              )}
            </p>
          </div>
        </div>
        <button type="button">
          {bookmarked ? 
            <Image
              alt="bookmarked"
              src={"/assets/icons/bookmarked.svg"}
              width={30}
              height={30}
            /> 
            : 
            <Image
              alt="bookmark"
              src={"/assets/icons/bookmark.svg"}
              width={30}
              height={30}
            />
          }
        </button>
      </div>
    </>
  );
}
