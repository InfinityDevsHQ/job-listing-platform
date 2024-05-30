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
    <ol>
      <JobInfoCard title="Salary" description={salary} />
      <JobInfoCard title="Job Type" description={jobType} />
      <JobInfoCard title="Applicants" description={`${applicants}`} />
      <JobInfoCard title="Experience" description={experience} />
      <JobInfoCard title="Location" description={location} />
      <JobInfoCard title="Post Date" description={date} />
    </ol>
  );
}
