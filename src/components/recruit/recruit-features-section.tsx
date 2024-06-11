import InfoList from '../ui/info-list';
import FeatureCard from './feature-card';
export default function RecruitFeaturesSection() {
  return (
    <div className="flex w-full flex-col gap-8">
      <h2 className="col-span-2 text-center text-xl font-bold text-gray-700 lg:text-4xl">
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
          Say goodbye to tedious manual tasks, boost your team’s productivity and ensure positive
          candidate experience at every stage of the hiring journey.
        </p>
        <InfoList variant="secondary">
          <li className="text-base text-gray-500">
            Explore our Workflow Automation feature and create automated actions tailored to your
            needs
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
          Let AI technology turn all new job applications into detailed candidate profiles within
          seconds.
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
          To engage qualified candidates, a compelling job description is crucial. To help you save
          time, ClickJob has launched AI-powered job description.
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
  );
}
