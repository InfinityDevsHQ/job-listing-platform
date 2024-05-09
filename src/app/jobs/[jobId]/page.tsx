'use client';
import FireIcon from '@/components/svgs/fire';
import SectionHeader from '@/components/ui/section-header';
import { useJobListingById } from '@/hooks/useJobListingById';
import { useSimilarJobs } from '@/hooks/useSimilarJobs';
import { Job } from '@/types/types';
import { notFound } from 'next/navigation';
import { toast } from 'sonner';
import SearchedJob from '../_components/searched-job';
type JobDetailsSlug = {
  params: { jobId: string };
};

const JobDetails = ({ params }: JobDetailsSlug) => {
  const jobListingId = params.jobId;
  const {
    isLoading: searchedJobLoading,
    error: searchedJobError,
    data: job,
  } = useJobListingById({ jobId: jobListingId });
  const { isLoading, error, data } = useSimilarJobs({ jobId: jobListingId });
  if (searchedJobError) toast.error(searchedJobError.message);
  if (searchedJobLoading) return <p>Loading....</p>;
  if (job) {
    return (
      <div className="flex flex-col gap-4 p-4 lg:gap-8 lg:p-8">
        <SearchedJob searchedJob={job as Job} />
        <div className="flex w-full flex-col gap-4 lg:w-9/12 lg:gap-8">
          <SectionHeader heading="Similar Job Offers" leadingIcon={<FireIcon />} />
          {/* <Jobs jobs={recommendedJobs} /> */}
        </div>
      </div>
    );
  } else {
    return notFound();
  }
};

export default JobDetails;
