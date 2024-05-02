import ApplyJobForm from '@/components/forms/apply-job-form/apply-job-form';
import Jobs from '@/components/jobs/jobs-list';
import FireIcon from '@/components/svgs/fire';
import SectionHeader from '@/components/ui/section-header';
import { getJobById, getJobs } from '@/lib/jobs';
import { notFound } from 'next/navigation';
import SearchedJob from '../_components/searched-job';

type JobDetailsSlug = {
  params: { jobId: string };
};

const JobDetails = async ({ params }: JobDetailsSlug) => {
  const jobListingId = params.jobId;
  if (!jobListingId) {
    return notFound();
  }
  const job = await getJobById(jobListingId);
  const recommendedJobs = await getJobs({});
  if (!job.id) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4 p-4 lg:gap-8 lg:p-8">
      <SearchedJob searchedJob={job} />
      <div className="flex w-full flex-col gap-4 lg:w-9/12 lg:gap-8">
        <SectionHeader heading="Similar Job Offers" leadingIcon={<FireIcon />} />
        <Jobs jobs={recommendedJobs} />
      </div>
    </div>
  );
};

export default JobDetails;
