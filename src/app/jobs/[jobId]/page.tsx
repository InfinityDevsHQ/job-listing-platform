import { getQueryClient } from '@/app/utils/rq/react-query-client';
import { ReactQueryHydrate } from '@/app/utils/rq/react-query-hydrate';
import FireIcon from '@/components/svgs/fire';
import SectionHeader from '@/components/ui/section-header';
import { GET_SINGLE_JOB_LISTING_BY_ID_KEY } from '@/hooks/useJobListingById';
import { getJobById } from '@/lib/jobs';
import { dehydrate } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import JobDetails from '../_components/job-details';
type JobDetailsSlug = {
  params: { jobId: string };
};
const JobDetailsPage = async ({ params }: JobDetailsSlug) => {
  const jobListingId = params.jobId;
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [GET_SINGLE_JOB_LISTING_BY_ID_KEY],
    queryFn: () => getJobById(jobListingId),
  });
  if (!jobListingId) {
    return notFound();
  }
  return (
    <div className="flex flex-col gap-4 p-4 lg:gap-8 lg:p-8">
      <ReactQueryHydrate state={dehydrate(queryClient)}>
        <JobDetails jobId={jobListingId} />
      </ReactQueryHydrate>
      <div className="flex w-full flex-col gap-4 lg:w-9/12 lg:gap-8">
        <SectionHeader heading="Similar Job Offers" leadingIcon={<FireIcon />} />
        {/* <JobsList similarJobId={jobListingId} /> */}
      </div>
    </div>
  );
};

export default JobDetailsPage;
