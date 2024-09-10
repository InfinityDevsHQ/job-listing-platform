import { Dot } from 'lucide-react';
import InfoList from '../ui/info-list';
import FeatureCard from './feature-card';
export default function RecruitFeaturesSection() {
  const FeaturesListObe = [
    `Generate text with a single click inside ClickJob's job editor`,
    'Content is automatically split into specific fields',
    'Make changes if necessary and enjoy the time savings',
  ];
  const FeaturesListTwo = [
    'Explore our Workflow Automation feature and create automated actions tailored to your needs',
    'Automate communication, CV screening, GDPR management, job ad posting, candidate assessment, and much more',
    'Discover advanced AI-powered tools in ClickJob',
  ];
  const FeaturesListThree = [
    'Import candidates directly from LinkedIn with our browser extension',
    'Find and pre-evaluate top candidates easily through AI recommendations',
    'Advertise jobs across multiple job boards',
  ];
  const FeaturesListFour = [
    'Our AI-powered parsing tool scans even large volumes of CVs',
    'All relevant details are automatically extracted from CVs',
    'CV content is organized to categories like Personal Data, Skills, Job and EducationHistory',
  ];
  const FeaturesListFive = [
    'Generate text with a single click inside ClickJob’s job editor',
    'Content is automatically split into specific fields',
    'Make changes if necessary and enjoy the time savings',
  ];
  return (
    <section className="flex w-full flex-col gap-4 text-dark-name lg:gap-16">
      <h2 className="col-span-2 text-center text-2xl font-bold text-dark-nameWhite lg:text-5xl">
        Features
      </h2>
      <FeatureCard
        heading="AI-powered job descriptions with ChatGPT integration"
        imageUrl="/assets/images/recruit/easy_and_powerful_recruitment_tool.png"
      >
        <p>
          To engage qualified candidates, a compelling job description is crucial. To help you save
          time, ClickJob has launched AI-powered job description.
        </p>
        <InfoList variant="secondary" icon={<Dot />} list={FeaturesListObe} />
      </FeatureCard>
      <FeatureCard
        heading="Save time with AI and automation"
        imageUrl="/assets/images/recruit/save_time_with_ai_and_automation.png"
        imageFirst={true}
      >
        <p>
          Say goodbye to tedious manual tasks, boost your team’s productivity and ensure positive
          candidate experience at every stage of the hiring journey.
        </p>
        <InfoList variant="secondary" icon={<Dot />} list={FeaturesListTwo} />
      </FeatureCard>
      <FeatureCard
        heading="Maximize your sourcing strategy"
        imageUrl="/assets/images/recruit/maximize_your_sourcing_strategy.png"
      >
        <p>
          Build a strong talent pool and find your next hires easier and faster with advanced
          sourcing features.
        </p>
        <InfoList variant="secondary" icon={<Dot />} list={FeaturesListThree} />
      </FeatureCard>
      <FeatureCard
        heading="CV screening made simple"
        imageUrl="/assets/images/recruit/cv_screening_made_simple.png"
        imageFirst={true}
      >
        <p>
          Let AI technology turn all new job applications into detailed candidate profiles within
          seconds.
        </p>
        <InfoList variant="secondary" icon={<Dot />} list={FeaturesListFour} />
      </FeatureCard>
      <FeatureCard
        heading="AI-powered job descriptions with ChatGPT integration"
        imageUrl="/assets/images/recruit/job_descriptions_with_ChatGPT_integration.png"
      >
        <p>
          To engage qualified candidates, a compelling job description is crucial. To help you save
          time, ClickJob has launched AI-powered job description.
        </p>
        <InfoList variant="secondary" icon={<Dot />} list={FeaturesListFive} />
      </FeatureCard>
    </section>
  );
}
