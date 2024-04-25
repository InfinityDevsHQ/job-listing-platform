import Jobs from '@/_components/jobs/jobs-list';
import FireIcon from '@/components/svgs/fire';
import Badges from '@/components/ui/badges';
import Button from '@/components/ui/button';
import InfoBadge from '@/components/ui/info-badge';
import InfoSection from '@/components/ui/info-section';
import SectionHeader from '@/components/ui/section-header';
import { ArrowRight, ThumbsDown, ThumbsUp } from 'lucide-react';
import JobHeader from '../_components/job-header';
import JobRequirements from '../_components/job-requirements';
type JobDetailsSlug = {
  params: { jobId: number | string };
};
const JobDetails = ({ params }: JobDetailsSlug) => {
  console.log('Type of:', typeof params);
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

  const job = {
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
    badges: [
      { text: 'Python', color: '#ffffff', bgColor: '#000000' },
      { text: 'Django', color: '#000000', bgColor: '#ffffff' },
      { text: 'Sql' },
      { text: 'Git' },
    ],
  };

  return (
    <div className="flex flex-col gap-4 p-4 lg:gap-8 lg:p-8">
      <div className="flex flex-col gap-4 rounded-md border border-gray-200 bg-white p-4 lg:gap-8 lg:p-8">
        {/* Header */}
        <h1 className="text-7xl">{params.jobId}</h1>
        <JobHeader
          title={`${job.title}`}
          external_company_name={job.external_company_name}
          is_hot={job.is_hot}
        />
        <div className="flex h-full flex-col gap-4 lg:flex-row lg:gap-8">
          {/* Job Desc */}
          <div className="order-2 flex w-full flex-col gap-4 lg:order-1 lg:gap-8">
            <InfoSection heading="About">
              <p className="text-xs text-gray-500 lg:text-base">{job.description}</p>
            </InfoSection>
            <JobRequirements />
            <InfoSection heading="Responsibilities">
              <p className="text-xs text-gray-500 lg:text-base">
                We are seeking a highly skilled Senior Python Developer with expertise in Django and
                FastAPI to join our dynamic team. As a Senior Python Developer, you will be
                responsible for designing, developing, and maintaining high-quality software
                solutions. Your role will involve collaborating with cross-functional teams to
                understand project requirements, architecting efficient and scalable solutions, and
                writing clean, maintainable code. The ideal candidate should have a strong
                background in Python development, a deep understanding of Django and FastAPI
                frameworks, and a proven track record of delivering successful projects. You should
                be able to work independently, as well as part of a team, and possess excellent
                problem-solving skills. A Bachelor&apos;s degree in Computer Science or related
                field, along with several years of experience in Python development, is required. If
                you are a proactive and innovative Python Developer looking to take on new
                challenges and contribute to cutting-edge projects, we want to hear from you. Apply
                now to join our team and make a significant impact with your expertise.
              </p>
            </InfoSection>

            <InfoSection heading="Required skills">
              <Badges badges={job?.badges} />
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
              <InfoBadge heading="Job Type" desc="Part-Time" />
              <InfoBadge heading="Number of Applicants" desc="49 Applicants" />
              <InfoBadge heading="Experience" desc="1-2 Years" />
              <InfoBadge heading="Location" desc="NY, USA" />
              <InfoBadge heading="Post Date" desc="12 Mar, 2023" />
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
