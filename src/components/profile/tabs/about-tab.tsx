import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import InfoList from '@/components/ui/info-list';
import { TabsContent } from '@/components/ui/tabs';

type AboutTabProps = {
  aiObjective?: string;
  aiCVSummary?: string;
  aiExpertise?: string[];
  aiSkillTags?: string[];
};

const AboutTab = ({ aiObjective, aiCVSummary, aiExpertise, aiSkillTags }: AboutTabProps) => {
  return (
    <TabsContent value="about" className="mt-4">
      {/* TODO: FIX it */}
      <Accordion type="single" defaultValue="profile" className="flex w-full flex-col gap-4">
        <AccordionItem value="profile">
          <AccordionTrigger>Profile</AccordionTrigger>
          <AccordionContent>{aiObjective}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="summary">
          <AccordionTrigger>Summary</AccordionTrigger>
          <AccordionContent>{aiCVSummary}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="expertise">
          <AccordionTrigger>Expertise</AccordionTrigger>
          <AccordionContent>
            <InfoList list={aiExpertise} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="skills">
          <AccordionTrigger>Skills</AccordionTrigger>
          <AccordionContent>{JSON.stringify(aiSkillTags)}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </TabsContent>
  );
};
export default AboutTab;
