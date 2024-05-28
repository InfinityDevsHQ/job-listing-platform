'use client';
import { useJobListingById } from '@/app/utils/rq/hooks/use-job-listing-by-id';
import JobCardHeader from '@/components/jobs/_components/job-card-header';
import Badges from '@/components/ui/badges';
import InfoList from '@/components/ui/info-list';
import InfoSection from '@/components/ui/info-section';
import ApplyJobModal from './apply-job-modal';
import JobFeedback from './job-feedback';

const JobDetails = ({ jobId }: { jobId: string }) => {
  const { isLoading, error, data: job } = useJobListingById(jobId);
  if (job) {
    return (
      <div className="flex flex-col gap-4 rounded-2xl bg-stone-100 p-4 shadow ring-1 ring-gray-200/50 lg:gap-8 lg:p-8 ">
        <JobCardHeader job={job} size="lg" />
        <div className="flex h-full flex-col gap-4 lg:flex-row lg:gap-8">
          <div className="order-2 flex w-full flex-col gap-4 lg:order-1 lg:gap-8">
            <InfoSection heading="About">
              <p className="text-xs text-gray-500 lg:text-base">{job.short_description}</p>
            </InfoSection>
            <InfoSection heading="Job requirements">
              <InfoList
                className="text-neutral-900"
                list={job.job_requirements?.split('\n').map((item) => item.replace('• ', ''))}
              />
            </InfoSection>
            <InfoSection heading="Responsibilities">
              <p className="text-xs text-gray-500 lg:text-base">{job.description}</p>
            </InfoSection>
            <InfoSection heading="Required skills">
              <Badges
                badges={job?.skill_tags?.map((tag) => ({
                  text: tag,
                }))}
              />
            </InfoSection>
            <ApplyJobModal jobId={jobId} />
            <JobFeedback className="lg:hidden" />
          </div>
        </div>
      </div>
    );
  }
};

export default JobDetails;
