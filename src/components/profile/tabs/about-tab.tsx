import Badges from '@/components/ui/badges';
import InfoList from '@/components/ui/info-list';
import InfoSection from '@/components/ui/info-section';
import { TabsContent } from '@/components/ui/tabs';
import { UserProfile } from '@/types/types';

const AboutTab = ({ user }: { user: UserProfile }) => {
  return (
    <TabsContent value="about" className="mt-0 flex flex-col gap-5 lg:gap-8">
      <InfoSection heading="Objective">
        <p className="text-dark-name">{user.candidate_data.ai_objective}</p>
      </InfoSection>
      <InfoSection heading="Summary">
        <p className="text-dark-name">{user.candidate_data.ai_cv_summary}</p>
      </InfoSection>
      <InfoSection heading="Expertise">
        <InfoList
          list={user.candidate_data.ai_expertise}
          icon={<span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-dark-name"></span>}
        />
      </InfoSection>
      <InfoSection heading="Skills">
        <Badges
          multiColor
          badges={user.candidate_data.skill_tags?.map((item) => ({ text: item }))}
        />
      </InfoSection>
    </TabsContent>
  );
};
export default AboutTab;
