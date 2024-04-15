import JobCardHeader from "./job-card-header";
import JobCardDetails from "./job-card-details";
import Tags from "./tags";
type JobCardProps = {
  jobTitle: string;
  company: string;
  description?: string;
  urgent: boolean;
  jobType: string;
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
      {description && (
        <p className="text-xs lg:text-sm text-neutral-600 leading-4 lg:leading-5 font-normal font-sans">
          {description}
        </p>
      )}
      <span className="border-b border-neutral-200" />
      <Tags python django sql git />
    </div>
  );
}
