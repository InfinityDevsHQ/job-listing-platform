import CompanyBookmark from "@/components/svgs/company-bookmark";
import { Plane } from "lucide-react";
type JobCardHeaderProps = {
  jobTitle: string;
  company: string;
  urgent?: boolean;
};
export default function JobCardHeader({
  jobTitle,
  company,
  urgent = false,
}: JobCardHeaderProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="p-3 rounded-full bg-third">
            <Plane />
          </span>
          <div>
            <h3 className="flex items-center gap-[15px] text-base lg:text-xl lg:leading-[32px] tracking-[-0.001em] font-semibold text-neutral-900">
              {jobTitle}
              {urgent && (
                <span className="hidden lg:block  bg-greenish font-medium  px-2 py-1 text-white text-10 leading-[12px] rounded-5 font-geist">
                  Urgent
                </span>
              )}
            </h3>
            <p className="text-neutral-500 text-[11px] lg:text-sm leading-[15px] lg:leading-[20px] font-medium">
              {company}
              {urgent && (
                <span className="lg:hidden ml-[15px] bg-greenish font-normal px-[5px] py-1 text-white text-11 leading-[15px] rounded-5">
                  Urgent
                </span>
              )}
            </p>
          </div>
        </div>
        <button
          type="button"
          aria-label="Save Job"
          className="flex items-center justify-center w-30 h-30 border border-neutral-300"
        >
          <span className="px-[11.21px]">
            <CompanyBookmark />
          </span>
        </button>
      </div>
    </>
  );
}
