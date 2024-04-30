import { JobListProps } from '@/types/types';
import Button from '../ui/button';
import JobCard from './_components/job-card';

const JobsList = async ({ jobs }: JobListProps) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {jobs?.map((job, index) => <JobCard key={index} job={job} />)}
      <Button text="Load More" variant="primary" className="self-end" />
    </div>
  );
};

export default JobsList;
