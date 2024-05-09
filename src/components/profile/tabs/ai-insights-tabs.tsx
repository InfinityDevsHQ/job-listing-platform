import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { TabsContent } from '@/components/ui/tabs';

const AiInsightsTabs = () => {
  return (
    <TabsContent value="ai-insights" className="mt-4">
      <Accordion
        type="single"
        defaultValue="item-1"
        collapsible
        className="flex w-full flex-col gap-4"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Job Market Insights</AccordionTrigger>
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
          <AccordionTrigger>CV Optimization Suggestions</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab atque, similique iure quis
            corporis deleniti rerum accusantium in est iusto officiis dolore non nesciunt, odit
            recusandae impedit autem consectetur accusamus?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Skill Gap Analysis</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, magnam? Distinctio
            iste ipsam iure sequi, atque optio aliquam labore quidem neque est, Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Quas ducimus assumenda in ullam, excepturi
            corrupti unde nostrum magnam provident inventore deserunt temporibus pariatur aliquam,
            esse obcaecati alias possimus architecto libero!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Certification Suggestions</AccordionTrigger>
          <AccordionContent>
            Perspiciatis ipsam unde numquam suscipit debitis praesentium ullam ab maiores quam vitae
            exercitationem possimus natus atque odit illo.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Personal Branding</AccordionTrigger>
          <AccordionContent>
            Aspernatur reiciendis dolores inventore et in possimus unde officia sed ullam assumenda,
            facere excepturi necessitatibus perferendis voluptate minima veritatis asperiores
            dignissimos! Corporis.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Career Advice</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptas excepturi
            natus, quod tenetur molestiae laudantium, itaque illo nostrum possimus architecto harum
            est mollitia molestias totam consequuntur repudiandae, rem dolorum Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Distinctio odit ea ducimus dicta ipsum obcaecati,
            recusandae nisi aliquam nostrum minus harum totam laborum nesciunt quidem vel modi natus
            hic dignissimos.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </TabsContent>
  );
};
export default AiInsightsTabs;
