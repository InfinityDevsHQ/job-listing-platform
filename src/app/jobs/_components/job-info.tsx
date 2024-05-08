import InfoBadge from '@/components/ui/info-badge';
import { formatNumber } from '@/lib/utils';
import { Job } from '@/types/types';
type JobInfoProps = {
  job: Job;
};
const JobInfo = ({ job }: JobInfoProps) => {
  return (
    <div className="flex w-full flex-wrap gap-4 lg:flex-col lg:gap-8">
      <InfoBadge
        heading="Salary"
        desc={`$${formatNumber(job?.remuneration_from)} - $${formatNumber(job?.remuneration_to)}`}
      />
      <InfoBadge heading="Job Type" desc={job.employment_type} />
      <InfoBadge heading="Number of Applicants" desc={`${job.applicants}`} />
      <InfoBadge heading="Applicants" desc={job.applicants} />
      <InfoBadge heading="Location" desc={`${job.city}, ${job.country}`} />
      <InfoBadge heading="Date Posted" desc={`${new Date(job.created).toDateString()}`} />
    </div>
  );
};
export default JobInfo;
