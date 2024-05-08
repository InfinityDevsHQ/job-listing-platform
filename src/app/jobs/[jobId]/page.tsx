import Jobs from '@/components/jobs/jobs-list';
import FireIcon from '@/components/svgs/fire';
import SectionHeader from '@/components/ui/section-header';
import { getJobs } from '@/lib/jobs';
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

  const job = {
    user_id: 1,
    language: 'english',
    title: 'Product Design Manager',
    non_translated_title: 'Product Design Manager',
    slug: 'design-manager/7930/product-design-manager',
    external_job_id: null,
    external_company_id: null,
    external_company_name: 'FloQast',
    external_company_logo:
      'https://lever-client-logos.s3.us-west-2.amazonaws.com/f9a03fff-7856-44e6-8a0c-685d5060f9fe-1692718770637.png',
    external_feed_id: 'c2fab60993b5560a44b46b1fdbe2d083c869f97f5a652cc4650d5edbe3badbe3',
    external_source: 'careervault.io',
    external_extra_1:
      'https://www.careervault.io/remote/floqast-7706/design/product-design-manager-remote-5079086',
    external_extra_2: null,
    external_extra_3: null,
    external_company_website: null,
    external_company_industry: null,
    external_company_established: null,
    external_company_size: null,
    ai_candidates_matched: 0,
    ai_candidates_matching_started_at: null,
    ai_candidates_matching_finish_reason: null,
    ai_candidates_matching_iterations: 0,
    ai_candidates_matching_tries: 0,
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
    skill_tags: [
      'UX Design',
      'Design System',
      'SaaS Experience',
      'Stakeholder Collaboration',
      'User-Centered Design',
    ],
    skill_analysis:
      "The job description for the Product Design Manager role emphasizes several key skills and qualifications. Let's analyze them in detail:\n\n1. **UX Design**:\n   - **Context**: Managing the user experience of B2B SaaS web applications for accounting, collaborating with stakeholders, and driving the design process forward.\n   - **Relevance**: Essential for creating user-centered products and ensuring a seamless user experience.\n\n2. **Design System**:\n   - **Context**: Mentioned multiple times as a desired skill and a welcomed skill, indicating the importance of understanding and implementing design systems.\n   - **Relevance**: Crucial for maintaining consistency across products and platforms and streamlining the design process.\n\n3. **SaaS Experience**:\n   - **Context**: Required for developing B2B SaaS web applications for accounting.\n   - **Relevance**: Important for understanding the unique challenges and requirements of SaaS products.\n\n4. **Stakeholder Collaboration**:\n   - **Context**: Collaborating with stakeholders, product managers, engineers, and customers to align designs with company priorities.\n   - **Relevance**: Vital for ensuring alignment with business goals and gathering valuable input for product design.\n\n5. **User-Centered Design**:\n   - **Context**: Emphasized throughout the description as a key approach for product design.\n   - **Relevance**: Fundamental for creating products that meet user needs and preferences.\n\n6. **Leadership Skills**:\n   - **Context**: Managing medium to large design teams, mentoring designers, and demonstrating leadership in design.\n   - **Relevance**: Essential for guiding and motivating the design team towards successful project outcomes.\n\n7. **User Research and Testing**:\n   - **Context**: Proficiency in conducting user research, testing, and using analytics to inform design decisions.\n   - **Relevance**: Critical for gathering insights, validating design choices, and improving product usability.\n\n8. **Cross-Functional Collaboration**:\n   - **Context**: Collaborating effectively with Product, Engineering, and customers to iterate on designs.\n   - **Relevance**: Necessary for aligning design decisions with technical feasibility and business requirements.\n\n9. **Design Language and Style Guides**:\n   - **Context**: Maintaining and evolving design language and style guides for consistency.\n   - **Relevance**: Important for ensuring a unified visual identity across products.\n\n10. **Typography, Color, and UI Concepts**:\n    - **Context**: Understanding of typography, color, and UI concepts mentioned as a welcomed skill.\n    - **Relevance**: Enhances the candidate's ability to create visually appealing and user-friendly designs.\n",
    comprehensive_skill_tags:
      'UX Design, Design System, SaaS Experience, Stakeholder Collaboration, User-Centered Design, Leadership Skills, User Research, Testing, Cross-Functional Collaboration, Design Language, Style Guides, Typography, Color, UI Concepts',
    description:
      'We are seeking a dynamic Product Design Manager to lead a team of talented designers in crafting cutting-edge B2B SaaS web applications for the future of accounting. As a key member of our team, you will collaborate closely with designers, product managers, engineers, and customers to drive the design process forward. Responsibilities include managing the user experience of multiple products, engaging in user research and testing, and maintaining design language and style guides. The ideal candidate will have at least 3 years of experience in a similar role, a strong background in managing design teams, expertise in design systems and accessibility, and a passion for user-centered product design. You should be adept at collaborating with cross-functional teams, possess a keen eye for design principles, and be comfortable giving and receiving feedback. This role offers a base pay range of $175,000 - $200,000, along with a comprehensive benefits package. If you are a motivated design leader looking to make an impact in a fast-paced environment, we encourage you to apply.',
    is_hot: false,
    is_external: true,
    external_link: 'https://jobs.lever.co/floqast/d80817af-7afc-46fc-9291-017184b4a71b',
    id_parent_job_translation: null,
    parent_language: null,
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
