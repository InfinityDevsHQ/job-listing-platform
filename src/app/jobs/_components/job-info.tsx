import InfoBadge from '@/components/ui/info-badge';
type JobInfoProps = {
  salary?: string;
  applicants?: number;
  employment_type?: string;
  experience?: string;
  city?: string;
  country?: string;
  created?: string;
};
const JobInfo = ({
  salary,
  applicants,
  employment_type,
  experience,
  city,
  country,
  created,
}: JobInfoProps) => {
  return (
    <div className="flex w-full flex-wrap gap-4 lg:flex-col lg:gap-8">
      <InfoBadge heading="Salary" desc={`$${salary}`} />
      <InfoBadge heading="Job Type" desc={employment_type} />
      <InfoBadge heading="Number of Applicants" desc={`${applicants}`} />
      <InfoBadge heading="Experience" desc={experience} />
      <InfoBadge heading="Location" desc={`${city}, ${country}`} />
      <InfoBadge heading="Post Date" desc={created} />
    </div>
  );
};
export default JobInfo;
