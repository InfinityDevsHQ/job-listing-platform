import JobInfoCard from './job-info-card';
type JobInfoPanelProps = {
  salary: string;
  jobType: string;
  applicants: number;
  experience: string;
  location: string;
  date: string;
};
export default function JobInfoPanel({
  salary,
  jobType,
  applicants,
  experience,
  location,
  date,
}: JobInfoPanelProps) {
  return (
    <ol className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-8">
      <JobInfoCard title="Salary" description={salary} />
      <JobInfoCard title="Job Type" description={jobType} />
      <JobInfoCard title="Applicants" description={`${applicants} Applicants`} />
      <JobInfoCard title="Experience" description={experience} />
      <JobInfoCard title="Location" description={location} />
      <JobInfoCard title="Post Date" description={date} />
    </ol>
  );
}
