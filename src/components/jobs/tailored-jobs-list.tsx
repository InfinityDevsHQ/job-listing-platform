'use client';
import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import { useTailoredUsersJobs } from '@/hooks/useTailoredUsersJobs';
import JobCard from '../jobs/_components/job-card';
import { JobCardSkeleton } from '../skeleton/job-card-skeleton';
const TailoredJobs = () => {
  const { data: userProfile } = useUserProfile();
  const {
    mutate: server__getTailoredJobs,
    isPending: tailoredJobsLoading,
    data: jobs,
  } = useTailoredUsersJobs();

  if (tailoredJobsLoading) {
    return <JobCardSkeleton />;
  }

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {jobs?.map((job, index) => <JobCard key={index} job={job} />)}
      {!jobs && (
        <h3 className="mt-2 text-center text-sm font-semibold text-gray-900">No Jobs found</h3>
      )}
    </div>
  );
};
export default TailoredJobs;
