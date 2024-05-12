import JobCardDetails from '@/components/jobs/_components/job-card-details';
import JobCardHeader from '@/components/jobs/_components/job-card-header';
import Badges from '@/components/ui/badges';
import InfoSection from '@/components/ui/info-section';
import { JobProps } from '@/types/types';
import ApplyJobModal from './apply-job-modal';
import JobFeedback from './job-feedback';
import JobInfo from './job-info';
import JobRequirements from './job-requirements';

const SearchedJob = ({ job }: JobProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border border-gray-200 bg-white p-4 lg:gap-8 lg:p-8">
      <div className="flex cursor-pointer select-none flex-col gap-2">
        <JobCardHeader job={job} size="lg" />
        <JobCardDetails job={job} size="lg" />
      </div>
      <div className="flex h-full flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="order-2 flex w-full flex-col gap-4 lg:order-1 lg:gap-8">
          <InfoSection heading="About">
            <p className="text-xs text-gray-500 lg:text-base">{job.short_description}</p>
          </InfoSection>
          <JobRequirements />
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
          <ApplyJobModal />
          <JobFeedback className="lg:hidden" />
        </div>
        <div className="order-1 flex min-h-full max-w-72 flex-shrink-0 flex-col justify-between gap-4 lg:order-2 lg:gap-8">
          <JobInfo
            remuneration_from={30}
            remuneration_to={40}
            city={job.city as string}
            country={job.country as string}
            created={job.created as string}
            applicants={job.applicants as number}
            employment_type={job.employment_type as string}
          />
          <JobFeedback className="hidden lg:flex" />
        </div>
      </div>
    </div>
  );
};

export default SearchedJob;
