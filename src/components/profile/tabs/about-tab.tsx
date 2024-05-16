import Badges from '@/components/ui/badges';
import InfoList from '@/components/ui/info-list';
import InfoSection from '@/components/ui/info-section';
import { TabsContent } from '@/components/ui/tabs';

type AboutTabProps = {
  aiObjective?: string;
  aiCVSummary?: string;
  aiExpertise?: string[];
  aiSkillTags?: string[];
};

const AboutTab = ({ aiObjective, aiCVSummary, aiExpertise, aiSkillTags }: AboutTabProps) => {
  return (
    <TabsContent value="about" className="flex flex-col gap-5">
      {/* TODO: FIX it */}
      <InfoSection heading="Objective">
        <p className="text-gray-500">{aiObjective}</p>
      </InfoSection>
      <InfoSection heading="Summary">
        <p className="text-gray-500">{aiCVSummary}</p>
      </InfoSection>
      <InfoSection heading="Expertise">
        <InfoList list={aiExpertise} />
      </InfoSection>
      <InfoSection heading="Skills">
        <Badges badges={aiSkillTags?.map((item) => ({ text: item }))} />
      </InfoSection>
    </TabsContent>
  );
};
export default AboutTab;
