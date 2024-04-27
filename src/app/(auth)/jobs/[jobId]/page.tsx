'use client';
import Jobs from '@/components/jobs/jobs-list';
import FireIcon from '@/components/svgs/fire';
import SectionHeader from '@/components/ui/section-header';
import useJobListingsById, {
  fetchDataAndUpdateStore,
} from '@/stores/job-listing-pass-slug-data-store';
import { useEffect } from 'react';
import SearchedJob from '../_components/searched-job';
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
      <SearchedJob searchedJob={searchedJob} />
      <div className="flex w-full flex-col gap-4 lg:w-9/12 lg:gap-8">
        <SectionHeader heading="Similar Job Offers" leadingIcon={<FireIcon />} />
        <Jobs jobs={jobs} />
      </div>
    </div>
  );
};

export default JobDetails;
