import { JobListProps } from '@/types/types';
import JobCard from './_components/job-card';

const JobsList = ({ jobs }: JobListProps) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {jobs?.map((job, index) => <JobCard key={index} job={job} />)}
    </div>
  );
};

export default JobsList;
