import { JobListProps } from '@/types/types';
import JobCard from './_components/job-card';

const JobsList = ({ jobs }: JobListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {jobs?.map((job, index) => <JobCard key={index} job={job} />)}
      {!jobs && <p>There are not jobs to showcase.</p>}
    </div>
  );
};

export default JobsList;
