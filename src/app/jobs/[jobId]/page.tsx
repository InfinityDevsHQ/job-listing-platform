import Jobs from '@/components/jobs/jobs-list';
import FireIcon from '@/components/svgs/fire';
import SectionHeader from '@/components/ui/section-header';
import { getJobs } from '@/lib/jobs';
import { Job } from '@/types/types';
import SearchedJob from '../_components/searched-job';

type JobDetailsSlug = {
  params: { jobId: string };
};

const JobDetails = async ({ params }: JobDetailsSlug) => {
  // const jobListingId = params.jobId;
  // if (!jobListingId) {
  //   return notFound();
  // }
  // const job = await getJobById(jobListingId);
  const recommendedJobs = await getJobs({});
  // if (!job.id) {
  //   return notFound();
  // }

  const job: Job = {
    language: 'english',
    title: 'Product Design Manager',
    slug: 'design-manager/7930/product-design-manager',
    external_company_name: 'FloQast',
    external_company_logo:
      'https://lever-client-logos.s3.us-west-2.amazonaws.com/f9a03fff-7856-44e6-8a0c-685d5060f9fe-1692718770637.png',
    external_company_website: null,
    external_company_industry: null,
    external_company_size: null,
    city: 'Worldwide',
    country: 'Worldwide',
    employment_type: 'full-time',
    work_location_type: 'remote',
    remuneration_from: 175000,
    remuneration_to: 200000,
    remuneration_currency: 'usd',
    short_description:
      'Seeking a Product Design Manager to lead a team in creating B2B SaaS web applications for accounting. Responsibilities include managing UX, collaborating with stakeholders, and mentoring designers. Desired skills include design system knowledge, SaaS product experience, and a user-centered design approach. Base pay range $175,000 - $200,000 with competitive benefits package.',
    job_requirements:
      '• Minimum 3 years of experience as a Product Design Manager, preferably in a B2B SaaS environment.\n• Proven experience in managing medium to large design teams, demonstrating leadership skills and the ability to mentor other designers effectively.\n• Strong understanding of design systems, principles, and accessibility standards to ensure the delivery of user-centered products.\n• Proficiency in conducting user research, user testing, and utilizing analytics to inform design decisions for product enhancements.\n• Ability to collaborate effectively with cross-functional teams, including Product, Engineering, and customers, to iterate on designs and align with company priorities.\n• Experience in maintaining and evolving design language and style guides to ensure consistency across multiple products and platforms.',
    welcomed_skills:
      '- Proficiency in design systems, principles, and accessibility.\n- Experience managing medium to large design teams.\n- Strong understanding of typography, color, and UI concepts.\n- Ability to conduct user research, testing, and analyze data for design decisions.\n- Skilled in mentoring other designers and collaborating effectively with cross-functional teams.',
    skill_tags: ['UX Design', 'Frontend Developer'],
    description:
      'We are seeking a dynamic Product Design Manager to lead a team of talented designers in crafting cutting-edge B2B SaaS web applications for the future of accounting. As a key member of our team, you will collaborate closely with designers, product managers, engineers, and customers to drive the design process forward. Responsibilities include managing the user experience of multiple products, engaging in user research and testing, and maintaining design language and style guides. The ideal candidate will have at least 3 years of experience in a similar role, a strong background in managing design teams, expertise in design systems and accessibility, and a passion for user-centered product design. You should be adept at collaborating with cross-functional teams, possess a keen eye for design principles, and be comfortable giving and receiving feedback. This role offers a base pay range of $175,000 - $200,000, along with a comprehensive benefits package. If you are a motivated design leader looking to make an impact in a fast-paced environment, we encourage you to apply.',
    is_hot: false,
    is_external: true,
    external_link: 'https://jobs.lever.co/floqast/d80817af-7afc-46fc-9291-017184b4a71b',
    id: 7,
    category: { id: 5, name: 'Design Manager' },
    created: '2024-05-06T13:18:52.313569',
    updated: '2024-05-06T13:18:52.313569',
    viewed: 0,
    applicants: 0,
  };

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
