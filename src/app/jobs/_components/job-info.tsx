import InfoBadge from '@/components/ui/info-badge';
import { formatNumber } from '@/lib/utils';
type JobInfoProps = {
  remuneration_from: number;
  remuneration_to: number;
  employment_type: string;
  applicants: number;
  city: string;
  country: string;
  created: string;
};
const JobInfo = ({
  remuneration_from,
  remuneration_to,
  employment_type,
  applicants,
  city,
  country,
  created,
}: JobInfoProps) => {
  return (
    <div className="flex w-full flex-wrap gap-4 lg:flex-col lg:gap-8">
      <InfoBadge
        heading="Salary"
        desc={`$${formatNumber(remuneration_from)}k - $${formatNumber(remuneration_to)}l`}
      />
      <InfoBadge heading="Job Type" desc={employment_type} />
      <InfoBadge heading="Number of Applicants" desc={`${applicants}`} />
      <InfoBadge heading="Applicants" desc={applicants} />
      <InfoBadge heading="Location" desc={`${city}, ${country}`} />
      <InfoBadge heading="Date Posted" desc={`${new Date(created as string).toDateString()}`} />
    </div>
  );
};
export default JobInfo;
