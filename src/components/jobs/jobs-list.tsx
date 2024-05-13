'use client';
import { useAllJobs } from '@/hooks/useAllJobs';
import { useSimilarJobs } from '@/hooks/useSimilarJobs';
import { JobListProps } from '@/types/types';
import JobCard from './_components/job-card';

const JobsList = ({ homepage, similarJobId }: JobListProps) => {
  const { isLoading: hotLoading, error: hotError, data: hotJobs } = useAllJobs({ isHot: true });
  const {
    isLoading: similarJobsLoading,
    error: similarJobsError,
    data: similarJobsData,
  } = useSimilarJobs({ jobId: similarJobId as string });
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {homepage && hotJobs?.map((job, index) => <JobCard key={index} job={job} />)}
      {similarJobId && similarJobsData?.map((job, index) => <JobCard key={index} job={job} />)}
    </div>
  );
};

export default JobsList;
