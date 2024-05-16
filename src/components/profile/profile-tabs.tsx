import { CandidateData } from '@/types/types';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import AboutTab from './tabs/about-tab';
import AiInsightsTabs from './tabs/ai-insights-tabs';
import RecruiterTab from './tabs/recruiter-tab';
type ProfileTabsProps = {
  candidate: CandidateData;
};
const ProfileTabs = async ({ candidate }: ProfileTabsProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 lg:col-span-3 lg:p-8">
      <Tabs orientation="vertical" defaultValue="about" className="flex flex-col lg:gap-4">
        <div className="flex items-center justify-between gap-4">
          <TabsList className="mx-0 w-full overflow-x-auto bg-primary-50">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="ai-insights">Ai Insights</TabsTrigger>
            <TabsTrigger value="recruiter">Recruiter Eye</TabsTrigger>
          </TabsList>
          {/* <Button variant="outline" onClick={() => setEditProfile(!editProfile)}>
            {editProfile ? 'Save' : 'Edit'}
          </Button> */}
        </div>
        <AboutTab
          aiObjective={candidate.ai_objective}
          aiCVSummary={candidate.ai_cv_summary}
          aiExpertise={candidate.ai_expertise}
          aiSkillTags={candidate.ai_skill_tags}
        />
        <AiInsightsTabs candidateId={Number(candidate?.id)} />
        <RecruiterTab />
      </Tabs>
    </div>
  );
};
export default ProfileTabs;
