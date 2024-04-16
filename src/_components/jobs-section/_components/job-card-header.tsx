import CompanyBookmark from "@/components/svgs/company-bookmark";
import CompanyFlame from "@/components/svgs/company-flame";
import { Button } from "@/components/ui/button";
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
          <span className="flex-center p-3 rounded-full bg-third">
            <CompanyFlame fill="#FF652E" />
          </span>
          <div>
            <h3 className="flex items-center gap-3.9 text-base lg:text-xl lg:leading-8 tracking-weak font-semibold text-neutral-900">
              {jobTitle}
              {urgent && (
                <span className="hidden lg:block  bg-greenish font-medium  px-2 py-1 text-white text-10 leading-3 rounded-md font-sans">
                  Urgent
                </span>
              )}
            </h3>
            <p className="text-neutral-500 text-mid lg:text-sm leading-3.5 lg:leading-5 font-medium">
              {company}
              {urgent && (
                <span className="lg:hidden ml-3.9 bg-greenish font-normal px-1.3  py-1 text-white text-mid leading-3.5 rounded-md">
                  Urgent
                </span>
              )}
            </p>
          </div>
        </div>
        <Button
          type="button"
          aria-label="Save Job"
          className="flex-center bg-transparent hover:bg-transparent w-30 h-30 border border-neutral-300"
        >
          <span className="px-2.8">
            <CompanyBookmark />
          </span>
        </Button>
      </div>
    </>
  );
}
