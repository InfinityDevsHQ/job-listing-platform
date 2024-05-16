'use client';
import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import { useTailoredUsersJobs } from '@/hooks/useTailoredUsersJobs';
import JobCard from '../jobs/_components/job-card';
const TailoredJobs = () => {
  const { data: userProfile } = useUserProfile();
  const {
    mutate: getTailoredJobs,
    isPending: tailoredJobsLoading,
    error: tailoredJobsError,
    data: jobs,
  } = useTailoredUsersJobs();
  getTailoredJobs(userProfile?.user_data.id as number);
  console.log(jobs);
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {jobs?.map((job, index) => <JobCard key={index} job={job} />)}
    </div>
  );
};
export default TailoredJobs;
