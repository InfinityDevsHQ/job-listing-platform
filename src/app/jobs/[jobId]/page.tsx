import JobsList from '@/components/jobs/jobs-list';
import FireIcon from '@/components/svgs/fire';
import SectionHeader from '@/components/ui/section-header';
import { getJobById, getSimilarJobs } from '@/lib/jobs';
import { notFound } from 'next/navigation';
import JobDetails from '../_components/job-details';

type JobDetailsSlug = {
  params: { jobId: string };
};

const JobDetailsPage = async ({ params }: JobDetailsSlug) => {
  const jobListingId = params.jobId;

  if (!jobListingId) {
    return notFound();
  }

  const job = await getJobById(jobListingId);
  const similarJobsData = await getSimilarJobs(jobListingId);
  if (!job.id) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4 p-4 lg:gap-8 lg:p-8">
      <JobDetails job={job} />
      <div className="flex w-full flex-col gap-4 lg:w-9/12 lg:gap-8">
        <SectionHeader heading="Similar Job Offers" leadingIcon={<FireIcon />} />
        <JobsList similarJobId={jobListingId} />
      </div>
    </div>
  );
};

export default JobDetailsPage;
