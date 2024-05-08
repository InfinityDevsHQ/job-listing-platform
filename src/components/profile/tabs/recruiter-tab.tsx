import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { TabsContent } from '@/components/ui/tabs';

const RecruiterTab = () => {
  return (
    <TabsContent value="recruiter" className="mt-4">
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="flex w-full flex-col gap-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Overall Assessment</AccordionTrigger>
          <AccordionContent>
            Your experience as a Software Engineer is impressive, with a strong emphasis on
            front-end development and user experience design. Your skills in HTML, CSS, JavaScript,
            and various libraries and frameworks, such as Vue.js, React.js, and Node.js, are evident
            in your work. Your ability to excel in both autonomous and collaborative environments,
            combined with your successful history in remote and on-site roles, shows your
            adaptability and dedication.In terms of the current job market, there is a high demand
            for software engineers with your skill set. Particularly, proficiency in JavaScript and
            its associated frameworks such as Vue.js and React.js is highly sought after. Moreover,
            your experience with MongoDB positions you well in the growing field of database
            management.The tech industry is highly competitive, with many skilled professionals
            competing for the same roles. However, your diverse experience, including remote work
            for a US-based startup and on-site roles in Dubai and Pakistan, gives you a unique
            global perspective that can set you apart.Potential opportunities for career progression
            could include roles as a Senior Software Engineer or Solutions Architect, where your
            broad technical skills and project management abilities would be highly valued. Your
            experience with UX design also opens up the possibility of specializing in that area, as
            there is a growing demand for professionals who can bridge the gap between technical
            development and user-centric design.The trend in the software engineering field is
            leaning towards full-stack development. While your CV shows deep expertise in front-end
            development, expanding your skills in back-end technologies could increase your
            marketability. Additionally, the trend of remote work is likely here to stay, meaning
            your proven ability to deliver in remote roles could be a significant advantage.Overall,
            your skills and experience place you in a strong position within the job market. By
            continuing to adapt and learn, you can stay ahead of the competition and seize the most
            exciting opportunities in the field.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Career Achievements</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </TabsContent>
  );
};
export default RecruiterTab;
