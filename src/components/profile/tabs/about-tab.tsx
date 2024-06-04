import Badges from '@/components/ui/badges';
import InfoList from '@/components/ui/info-list';
import InfoSection from '@/components/ui/info-section';
import { TabsContent } from '@/components/ui/tabs';
import { UserProfile } from '@/types/types';

const AboutTab = ({ user }: { user: UserProfile }) => {
  return (
    <TabsContent value="about" className="flex flex-col gap-5">
      {/* TODO: FIX it */}
      <InfoSection heading="Objective">
        <p className="text-gray-500">{user.candidate_data.ai_objective}</p>
      </InfoSection>
      <InfoSection heading="Summary">
        <p className="text-gray-500">{user.candidate_data.ai_cv_summary}</p>
      </InfoSection>
      <InfoSection heading="Expertise">
        <InfoList list={user.candidate_data.ai_expertise} />
      </InfoSection>
      <InfoSection heading="Skills">
        <Badges badges={user.candidate_data.skill_tags?.map((item) => ({ text: item }))} />
      </InfoSection>
    </TabsContent>
  );
};
export default AboutTab;
