import Button from '@/components/ui/button';
import { CarouselItem } from '@/components/ui/carousel';
import InfoList from '@/components/ui/info-list';
import Image from 'next/image';
import AutoPlayCarousel from './_components/autoplay-carousel';
import FeatureCard from './_components/feature-card';

const Recruit = () => {
  return (
    <section className="bg-secondary-50 p-4 lg:gap-8 lg:p-8">
      <div className="relative flex w-full flex-col items-center gap-4 rounded-md border border-neutral-200 bg-white p-4 lg:gap-8 lg:p-8">
        <div className="relative flex w-full items-center justify-between">
          <div className="flex flex-col gap-5 lg:gap-8">
            <h1 className="text-5xl font-bold text-gray-700">Rethink! The Way You Are</h1>
            <p className="max-w-2xl text-lg text-gray-500">
              ClickJob is the all-in-one hiring solution that makes every step of your selection
              process easier and lets you focus on what matters the most – your candidates.
            </p>
            <div className="flex items-center gap-3">
              <Button variant="secondary" text="Try it Free for 14 Days" />
              <Button text="See it in Action" />
            </div>
          </div>
          <Image
            src="/assets/images/recruit/clickjob_ai_recruit_hero_section.png"
            width={306}
            height={400}
            alt="party"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold text-gray-700">Top brands trust ClickJob</h2>
          <p className="text-gray-500">
            We help over 270 recruitment agencies and companies across every industry to make their
            selection process more efficient
          </p>
          <div className="max-h-40 max-w-4xl overflow-hidden">
            <AutoPlayCarousel showNavControls={false}>
              <CarouselItem className="m-3 rounded-md border border-neutral-200 bg-white p-4 md:basis-1/2 lg:basis-1/4">
                <Image
                  src="/assets/companies/logos/company- (1).png"
                  width={200}
                  height={300}
                  alt="company-1"
                />
              </CarouselItem>
              <CarouselItem className="m-3 rounded-md border border-neutral-200 bg-white p-4 md:basis-1/2 lg:basis-1/4">
                <Image
                  src="/assets/companies/logos/company- (2).png"
                  width={200}
                  height={300}
                  alt="company-2"
                />
              </CarouselItem>
              <CarouselItem className="m-3 rounded-md border border-neutral-200 bg-white p-4 md:basis-1/2 lg:basis-1/4">
                <Image
                  src="/assets/companies/logos/company- (3).png"
                  width={200}
                  height={300}
                  alt="company-3"
                />
              </CarouselItem>
              <CarouselItem className="m-3 rounded-md border border-neutral-200 bg-white p-4 md:basis-1/2 lg:basis-1/4">
                <Image
                  src="/assets/companies/logos/company- (4).png"
                  width={200}
                  height={300}
                  alt="company-4"
                />
              </CarouselItem>
              <CarouselItem className="m-3 rounded-md border border-neutral-200 bg-white p-4 md:basis-1/2 lg:basis-1/4">
                <Image
                  src="/assets/companies/logos/company- (5).png"
                  width={200}
                  height={300}
                  alt="company-5"
                />
              </CarouselItem>
              <CarouselItem className="m-3 rounded-md border border-neutral-200 bg-white p-4 md:basis-1/2 lg:basis-1/4">
                <Image
                  src="/assets/companies/logos/company- (6).png"
                  width={200}
                  height={300}
                  alt="company-6"
                />
              </CarouselItem>
              <CarouselItem className="m-3 rounded-md border border-neutral-200 bg-white p-4 md:basis-1/2 lg:basis-1/4">
                <Image
                  src="/assets/companies/logos/company- (7).png"
                  width={200}
                  height={300}
                  alt="company-7"
                />
              </CarouselItem>
              <CarouselItem className="m-3 rounded-md border border-neutral-200 bg-white p-4 md:basis-1/2 lg:basis-1/4">
                <Image
                  src="/assets/companies/logos/company- (8).png"
                  width={200}
                  height={300}
                  alt="company-8"
                />
              </CarouselItem>
              <CarouselItem className="m-3 rounded-md border border-neutral-200 bg-white p-4 md:basis-1/2 lg:basis-1/4">
                <Image
                  src="/assets/companies/logos/company- (9).png"
                  width={200}
                  height={300}
                  alt="company-9"
                />
              </CarouselItem>
              <CarouselItem className="m-3 rounded-md border border-neutral-200 bg-white p-4 md:basis-1/2 lg:basis-1/4">
                <Image
                  src="/assets/companies/logos/company- (10).png"
                  width={200}
                  height={300}
                  alt="company-10"
                />
              </CarouselItem>
            </AutoPlayCarousel>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="col-span-2 text-center text-4xl font-bold text-gray-700">Features</h2>
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
            imageUrl="/assets/images/recruit/job_descriptions _with_ChatGPT_integration.png"
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
      </div>
    </section>
  );
};

export default Recruit;
