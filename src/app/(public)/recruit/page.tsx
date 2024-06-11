import UserHeader from '@/components/gernal/user-header';
import ClientResultsSection from '@/components/recruit/client-results-section';
import RecruitersHero from '@/components/recruit/recruiters-hero';
import TopBrandsSection from '@/components/recruit/top-brands-section';
import { Button } from '@/components/ui/button-new';
import InfoList from '@/components/ui/info-list';
import Image from 'next/image';
import FeatureCard from './_components/feature-card';

const Recruit = () => {
  return (
    <section className="bg-secondary-50 p-4 lg:gap-8 lg:p-8">
      <div className="relative flex w-full flex-col items-center gap-4 overflow-hidden rounded-md border border-neutral-200 bg-white p-4 lg:gap-8 lg:p-8">
        <RecruitersHero />
        <TopBrandsSection />
        <div className="flex w-full flex-col gap-8">
          <h2 className="col-span-2 text-center text-xl font-bold text-gray-700 lg:text-4xl">
            Features
          </h2>
          <FeatureCard
            heading="AI-powered job descriptions with ChatGPT integration"
            imageUrl="/assets/images/recruit/easy_and_powerful_recruitment_tool.png"
          >
            <p>
              To engage qualified candidates, a compelling job description is crucial. To help you
              save time, ClickJob has launched AI-powered job description.
            </p>
            <InfoList variant="secondary">
              <li className="text-base text-gray-500">
                Generate text with a single click inside ClickJob&apos;s job editor
              </li>
              <li className="text-base text-gray-500">
                Content is automatically split into specific fields
              </li>
              <li className="text-base text-gray-500">
                Make changes if necessary and enjoy the time savings
              </li>
            </InfoList>
          </FeatureCard>
          <FeatureCard
            heading="Save time with AI and automation"
            imageUrl="/assets/images/recruit/save_time_with_ai_and_automation.png"
            imageFirst={true}
          >
            <p>
              Say goodbye to tedious manual tasks, boost your team’s productivity and ensure
              positive candidate experience at every stage of the hiring journey.
            </p>
            <InfoList variant="secondary">
              <li className="text-base text-gray-500">
                Explore our Workflow Automation feature and create automated actions tailored to
                your needs
              </li>
              <li className="text-base text-gray-500">
                Automate communication, CV screening, GDPR management, job ad posting, candidate
                assessment, and much more
              </li>
              <li className="text-base text-gray-500">
                Discover advanced AI-powered tools in ClickJob
              </li>
            </InfoList>
          </FeatureCard>
          <FeatureCard
            heading="Maximize your sourcing strategy"
            imageUrl="/assets/images/recruit/maximize_your_sourcing_strategy.png"
          >
            <p>
              Build a strong talent pool and find your next hires easier and faster with advanced
              sourcing features.
            </p>
            <InfoList variant="secondary">
              <li className="text-base text-gray-500">
                Import candidates directly from LinkedIn with our browser extension
              </li>
              <li className="text-base text-gray-500">
                Find and pre-evaluate top candidates easily through AI recommendations
              </li>
              <li className="text-base text-gray-500">Advertise jobs across multiple job boards</li>
            </InfoList>
          </FeatureCard>
          <FeatureCard
            heading="CV screening made simple"
            imageUrl="/assets/images/recruit/cv_screening_made_simple.png"
            imageFirst={true}
          >
            <p>
              Let AI technology turn all new job applications into detailed candidate profiles
              within seconds.
            </p>
            <InfoList variant="secondary">
              <li className="text-base text-gray-500">
                Our AI-powered parsing tool scans even large volumes of CVs
              </li>
              <li className="text-base text-gray-500">
                All relevant details are automatically extracted from CVs
              </li>
              <li className="text-base text-gray-500">
                CV content is organized to categories like Personal Data, Skills, Job and Education
                History
              </li>
            </InfoList>
          </FeatureCard>
          <FeatureCard
            heading="AI-powered job descriptions with ChatGPT integration"
            imageUrl="/assets/images/recruit/job_descriptions_with_ChatGPT_integration.png"
          >
            <p>
              To engage qualified candidates, a compelling job description is crucial. To help you
              save time, ClickJob has launched AI-powered job description.
            </p>
            <InfoList variant="secondary">
              <li className="text-base text-gray-500">
                Generate text with a single click inside ClickJob’s job editor
              </li>
              <li className="text-base text-gray-500">
                Content is automatically split into specific fields
              </li>
              <li className="text-base text-gray-500">
                Make changes if necessary and enjoy the time savings
              </li>
            </InfoList>
          </FeatureCard>
        </div>
        <ClientResultsSection />
        <div className="flex w-full flex-col items-center gap-8">
          <h2 className="text-xl font-bold text-gray-700 lg:text-4xl">
            What our customers love about ClickJob
          </h2>
          <p className="text-gray-500">
            We are proud to be trusted by hundreds of companies from all over the world.We have
            asked some of them what they appreciate about ClickJob.
          </p>
          <div className="grid gap-4 lg:grid-cols-4">
            <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
              <Image
                src="/assets/companies/logos/company- (1).png"
                width={295}
                height={72}
                alt="company-1"
                className="mx-auto h-16 max-w-max lg:h-20"
              />
              <p className="text-center italic">
                “My team can reduce administration time by up to 40% through automations.”
              </p>
              <UserHeader
                online_status={'Offline'}
                user_name="John Doe"
                user_role="Software Engineer"
              />
            </div>
            <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
              <Image
                src="/assets/companies/logos/company- (2).png"
                width={295}
                height={72}
                alt="company-1"
                className="mx-auto h-16 max-w-max lg:h-20"
              />
              <p className="text-center italic">
                “My team can reduce administration time by up to 40% through automations.”
              </p>
              <UserHeader
                online_status={'Offline'}
                user_name="John Doe"
                user_role="Software Engineer"
              />
            </div>
            <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
              <Image
                src="/assets/companies/logos/company- (3).png"
                width={295}
                height={72}
                alt="company-1"
                className="mx-auto h-16 max-w-max lg:h-20"
              />
              <p className="text-center italic">
                “My team can reduce administration time by up to 40% through automations.”
              </p>
              <UserHeader
                online_status={'Offline'}
                user_name="John Doe"
                user_role="Software Engineer"
              />
            </div>
            <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
              <Image
                src="/assets/companies/logos/company- (4).png"
                width={295}
                height={72}
                alt="company-1"
                className="mx-auto h-16 max-w-max lg:h-20"
              />
              <p className="text-center italic">
                “My team can reduce administration time by up to 40% through automations.”
              </p>
              <UserHeader
                online_status={'Offline'}
                user_name="John Doe"
                user_role="Software Engineer"
              />
            </div>
            <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
              <Image
                src="/assets/companies/logos/company- (5).png"
                width={295}
                height={72}
                alt="company-1"
                className="mx-auto h-16 max-w-max lg:h-20"
              />
              <p className="text-center italic">
                “My team can reduce administration time by up to 40% through automations.”
              </p>
              <UserHeader
                online_status={'Offline'}
                user_name="John Doe"
                user_role="Software Engineer"
              />
            </div>
            <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
              <Image
                src="/assets/companies/logos/company- (6).png"
                width={295}
                height={72}
                alt="company-1"
                className="mx-auto h-16 max-w-max lg:h-20"
              />
              <p className="text-center italic">
                “My team can reduce administration time by up to 40% through automations.”
              </p>
              <UserHeader
                online_status={'Offline'}
                user_name="John Doe"
                user_role="Software Engineer"
              />
            </div>
            <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
              <Image
                src="/assets/companies/logos/company- (7).png"
                width={295}
                height={72}
                alt="company-1"
                className="mx-auto h-16 max-w-max lg:h-20"
              />
              <p className="text-center italic">
                “My team can reduce administration time by up to 40% through automations.”
              </p>
              <UserHeader
                online_status={'Offline'}
                user_name="John Doe"
                user_role="Software Engineer"
              />
            </div>
            <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
              <Image
                src="/assets/companies/logos/company- (8).png"
                width={295}
                height={72}
                alt="company-1"
                className="mx-auto h-16 max-w-max lg:h-20"
              />
              <p className="text-center italic">
                “My team can reduce administration time by up to 40% through automations.”
              </p>
              <UserHeader
                online_status={'Offline'}
                user_name="John Doe"
                user_role="Software Engineer"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-8 bg-secondary-gradient p-4 lg:p-8">
          <h2 className="text-xl font-bold text-gray-700 lg:text-4xl">
            Start your 14-day free trial
          </h2>
          <p className="text-center text-gray-500">
            Join 270+ companies already growing with ClickJob.
          </p>
          <InfoList className="text-center">
            <li className="text-base text-gray-500">Monthly contracts, cancel at any time</li>
            <li className="text-base text-gray-500">Book a Free Demo with our team</li>
            <li className="text-base text-gray-500">We’ll do the setup for you</li>
          </InfoList>
          <div className="flex w-full flex-col items-center justify-center gap-3 lg:flex-row">
            <Button variant="secondary" className="w-full lg:w-auto">
              Try it Free for 14 Days
            </Button>
            <Button variant="outline" className="w-full lg:w-auto">
              See it in Action
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruit;
