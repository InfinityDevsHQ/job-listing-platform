import ApplyJobForm from '@/components/forms/apply-job-form/apply-job-form';
import Badges from '@/components/ui/badges';
import Button from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import InfoSection from '@/components/ui/info-section';
import { Job } from '@/types/types';
import { ArrowRight } from 'lucide-react';
import JobFeedback from './job-feedback';
import JobHeader from './job-header';
import JobInfo from './job-info';
import JobRequirements from './job-requirements';
type SearchedJobProps = {
  searchedJob: Job;
};
const SearchedJob = ({ searchedJob }: SearchedJobProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border border-gray-200 bg-white p-4 lg:gap-8 lg:p-8">
      <JobHeader
        title={`${searchedJob.title ? searchedJob.title : ''}`}
        external_company_name={searchedJob.external_company_name || ''}
        is_hot={!!searchedJob.is_hot}
      />
      <div className="flex h-full flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="order-2 flex w-full flex-col gap-4 lg:order-1 lg:gap-8">
          <InfoSection heading="About">
            <p className="text-xs text-gray-500 lg:text-base">{searchedJob.short_description}</p>
          </InfoSection>
          <JobRequirements />
          <InfoSection heading="Responsibilities">
            <p className="text-xs text-gray-500 lg:text-base">{searchedJob.description}</p>
          </InfoSection>

          <InfoSection heading="Required skills">
            <Badges
              badges={searchedJob?.skill_tags?.map((tag) => ({
                text: tag,
              }))}
            />
          </InfoSection>
          <Dialog>
            <DialogTrigger>
              <Button
                text="Apply"
                trailingIcon={<ArrowRight className="h-5 w-5" />}
                variant="primary"
                size="full"
              />
            </DialogTrigger>
            <DialogContent className="xl:min-w-4xl  bg-white  lg:max-w-4xl">
              <DialogHeader>
                <DialogTitle>Apply For this role.</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <ApplyJobForm />
            </DialogContent>
          </Dialog>
          <JobFeedback className="lg:hidden" />
        </div>
        <div className="order-1 flex min-h-full max-w-max flex-shrink-0 flex-col justify-between gap-4 lg:order-2 lg:gap-8">
          <JobInfo
            salary="30k-40k"
            experience="1-4 years"
            city={searchedJob.city}
            country={searchedJob.country}
            created={searchedJob.created}
            applicants={searchedJob.applicants}
          />
          <JobFeedback className="hidden lg:flex" />
        </div>
      </div>
    </div>
  );
};
export default SearchedJob;
