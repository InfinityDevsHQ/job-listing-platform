'use client';
import Jobs from '@/_components/jobs/jobs-list';
import FireIcon from '@/components/svgs/fire';
import Badges from '@/components/ui/badges';
import Button from '@/components/ui/button';
import InfoBadge from '@/components/ui/info-badge';
import InfoSection from '@/components/ui/info-section';
import SectionHeader from '@/components/ui/section-header';
import useJobListingsById, {
  fetchDataAndUpdateStore,
} from '@/stores/job-listing-pass-slug-data-store';
import { ArrowRight, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useEffect } from 'react';
import JobHeader from '../_components/job-header';
import JobRequirements from '../_components/job-requirements';
type JobDetailsSlug = {
  params: { jobId: number };
};
const JobDetails = ({ params }: JobDetailsSlug) => {
  const jobListingId = params.jobId;
  useEffect(() => {
    fetchDataAndUpdateStore(jobListingId);
  }, [jobListingId]);
  const { searchedJob } = useJobListingsById();
  console.log('Data:', searchedJob);
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      external_company_name: 'Semrush',
      is_hot: true,
      employment_type: 'Full time',
      experienceRequired: '1-2 Year',
      location: 'NY, USA',
      salary: '$30k-60k/Month',
      applications: 567,
      datePosted: '23 Mar 2023',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorum quae, magnam reprehenderit voluptatem quos accusantium necessitatibus, quia nemo, minima illo ipsa laboriosam voluptatum magni eveniet excepturi? Minus, vel consequuntur!',
    },
    {
      id: 2,
      title: 'Software Engineer',
      external_company_name: 'Google',
      is_hot: false,
      employment_type: 'Full time',
      experienceRequired: '3-5 Years',
      location: 'Mountain View, CA, USA',
      salary: '$100k-150k/Year',
      applications: 5067,
      datePosted: '23 Mar 2023',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorum quae, magnam reprehenderit voluptatem quos accusantium necessitatibus, quia nemo, minima illo ipsa laboriosam voluptatum magni eveniet excepturi? Minus, vel consequuntur!',
    },
    {
      id: 3,
      title: 'Data Scientist',
      external_company_name: 'Microsoft',
      is_hot: true,
      employment_type: 'Contract',
      experienceRequired: '2-4 Years',
      location: 'Seattle, WA, USA',
      salary: '$80k-120k/Year',
      applications: 1567,
      datePosted: '23 Mar 2023',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorum quae, magnam reprehenderit voluptatem quos accusantium necessitatibus, quia nemo, minima illo ipsa laboriosam voluptatum magni eveniet excepturi? Minus, vel consequuntur!',
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      external_company_name: 'Apple',
      is_hot: false,
      employment_type: 'Part time',
      experienceRequired: '1-3 Years',
      location: 'Cupertino, CA, USA',
      salary: '$60k-90k/Year',
      applications: 5670,
      datePosted: '23 Mar 2023',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorum quae, magnam reprehenderit voluptatem quos accusantium necessitatibus, quia nemo, minima illo ipsa laboriosam voluptatum magni eveniet excepturi? Minus, vel consequuntur!',
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4 lg:gap-8 lg:p-8">
      <div className="flex flex-col gap-4 rounded-md border border-gray-200 bg-white p-4 lg:gap-8 lg:p-8">
        <JobHeader
          title={`${searchedJob.title ? searchedJob.title : ''}`}
          external_company_name={searchedJob.external_company_name}
          is_hot={searchedJob.is_hot}
        />
        <div className="flex h-full flex-col gap-4 lg:flex-row lg:gap-8">
          {/* Job Desc */}
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
            <Button
              text="Apply"
              trailingIcon={<ArrowRight className="h-5 w-5" />}
              variant="primary"
              size="full"
            />
            <div className="flex items-center justify-center gap-4 rounded-md border border-gray-200 px-5 py-2 lg:hidden lg:max-w-lg lg:justify-between lg:px-8">
              <span>Do you like this job offer?</span>
              <div className="flex items-center gap-4 ">
                <button
                  aria-label="Like"
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200"
                >
                  <ThumbsUp className="h-5 w-5 text-gray-500" />
                </button>
                <button
                  aria-label="Unlike"
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200"
                >
                  <ThumbsDown className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
          {/* Job Highlights */}
          <div className="order-1 flex min-h-full max-w-max flex-shrink-0 flex-col justify-between gap-4 lg:order-2 lg:gap-8">
            <div className="flex w-full flex-wrap gap-4 lg:flex-col lg:gap-8">
              <InfoBadge heading="Salary" desc="$30k-60k /Month" />
              <InfoBadge heading="Job Type" desc={searchedJob.employment_type} />
              <InfoBadge heading="Number of Applicants" desc={`${searchedJob.applicants}`} />
              <InfoBadge heading="Experience" desc="1-2 Years" />
              <InfoBadge heading="Location" desc={`${searchedJob.city}, ${searchedJob.country}`} />
              <InfoBadge heading="Post Date" desc={searchedJob.created} />
            </div>
            <div className="hidden items-center justify-center gap-4 rounded-md border border-gray-200 px-5 py-2 lg:flex lg:max-w-lg lg:justify-between lg:px-8">
              <span className="text-gray-950">Do you like this job offer?</span>
              <div className="flex items-center gap-4">
                <button
                  aria-label="Like"
                  type="button"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200"
                >
                  <ThumbsUp className="h-4 w-4 text-gray-500" />
                </button>
                <button
                  aria-label="Unlike"
                  type="button"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200"
                >
                  <ThumbsDown className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 lg:w-9/12 lg:gap-8">
        <SectionHeader heading="Similar Job Offers" leadingIcon={<FireIcon />} />
        <Jobs jobs={jobs} />
      </div>
    </div>
  );
};

export default JobDetails;
