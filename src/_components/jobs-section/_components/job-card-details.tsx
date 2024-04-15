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
        <div className="flex items-center justify-between  flex-1">
          <span className="flex items-center gap-2.5 font-geist text-10 font-semibold leading-[12px]">
            <CompanyClock width={14} height={12} />
            <span className="text-10 lg:text-sm lg:leading-[20px]">
              {jobType}
            </span>
          </span>
          <span className="flex items-center gap-2.5 font-geist text-10 lg:text-sm lg:leading-[20px] font-semibold leading-[12px]">
            <CompanyExperience width={14} height={12} />
            <span className="text-10 lg:text-sm lg:leading-[20px]">
              {experienceRequired}
            </span>
          </span>
          <span className="flex items-center gap-2.5 font-geist text-10 lg:text-sm lg:leading-[20px] font-semibold leading-[12px]">
            <CompanyLocation width={11} height={12} />
            <span className="text-10 lg:text-sm lg:leading-[20px]">
              {location}
            </span>
          </span>
        </div>

        <div className="flex items-center justify-between flex-1">
          <span className="flex items-center gap-2.5 font-geist text-10 lg:text-sm lg:leading-[20px] font-semibold leading-[12px]">
            <CompanyDollar width={14} height={12} />
            <span className="text-10 lg:text-sm lg:leading-[20px]">
              {salary}
            </span>
          </span>
          <span className="flex items-center gap-2.5 font-geist text-10 lg:text-sm lg:leading-[20px] font-semibold leading-[12px]">
            <CompanyApplied width={18} height={12} />
            <span className="text-10 lg:text-sm lg:leading-[20px]">
              {applications} Applied
            </span>
          </span>
          <span className="flex items-center gap-2.5 font-geist text-10 lg:text-sm lg:leading-[20px] font-semibold leading-[12px]">
            <CompanyCalender width={13} height={12} />
            <span className="text-10">{date}</span>
          </span>
        </div>
      </div>
    </>
  );
}
