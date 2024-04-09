import JobCardHeader from "./job-card-header";
import JobCardDetails from "./job-card-details";
type JobCardProps = {
  jobTitle: string;
  company: string;
  description: string;
  urgent: boolean;
  jobType: "Full Time" | "Part Time";
  experienceRequired: string;
  location: string;
  salary: string;
  applications: number;
  date: string;
};

export default function JobCard({
  jobTitle,
  company,
  description,
  urgent,
  jobType,
  experienceRequired,
  location,
  salary,
  applications,
  date,
}: JobCardProps) {
  return (
    <div className="flex flex-col gap-8 p-8 border border-neutral-200">
      <JobCardHeader jobTitle={jobTitle} company={company} urgent={true} />
      <JobCardDetails
        jobType={jobType}
        experienceRequired={experienceRequired}
        location={location}
        salary={salary}
        applications={applications}
        date={date}
      />
      <p className="text-xs text-neutral-600 leading-[16px] font-normal font-geist">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
        blanditiis reiciendis sapiente dolore dicta accusamus odio voluptate
        ullam quibusdam, itaque at nobis ea doloribus illum dolorum distinctio
        explicabo, adipisci cupiditate.
      </p>
      <span className="border-b border-neutral-200" />
    </div>
  );
}
