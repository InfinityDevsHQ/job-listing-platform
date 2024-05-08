import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import InfoList from '@/components/ui/info-list';
import { TabsContent } from '@/components/ui/tabs';
import TextArea from '@/components/ui/text-area';

const AboutTab = ({ editProfile, profileVal }: { editProfile: boolean; profileVal: string }) => {
  return (
    <TabsContent value="about" className="mt-4">
      {/* TODO: FIX it */}
      <Accordion
        type={editProfile ? 'multiple' : 'single'}
        defaultValue={editProfile ? ['profile', 'summary', 'expertise', 'skills'] : 'profile'}
        collapsible={editProfile ? false : true}
        className="flex w-full flex-col gap-4"
      >
        <AccordionItem value="profile">
          <AccordionTrigger>Profile</AccordionTrigger>
          <AccordionContent>
            {editProfile ? (
              <TextArea
                defaultValue={profileVal}
                placeholder="Edit profile"
                className="h-auto"
                rows={4}
              />
            ) : (
              <>
                I am looking to enhance my skills in advanced web development and contribute to
                innovative projects. Seeking opportunities to excel in UI design and collaborative
                environments. Passionate about creating efficient and user-friendly web systems.
              </>
            )}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="summary">
          <AccordionTrigger>Summary</AccordionTrigger>
          <AccordionContent>
            Testing, and debugging. Proficient in HTML, CSS, Tailwind CSS, JavaScript, Vue.js,
            React.js, Node.js, Express.js, and MongoDB. Experienced in autonomous project management
            and collaborative teamwork. Successfully developed interactive web applications with
            modern frameworks. Specialized in frontend architecture and improving website
            performance. Completed 100+ projects with high ratings on Fiverr and Upwork. Strong
            expertise in HTML, CSS, JavaScript, Tailwind CSS, Vue.js, React.js, and Node.js
            projects.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="expertise">
          <AccordionTrigger>Expertise</AccordionTrigger>
          <AccordionContent>
            <InfoList
              list={[
                'Advanced web development',
                'UI design',
                'Testing methodologies',
                'Debugging',
                'Project management',
                'Collaborative teamwork',
                'Frontend architecture',
              ]}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="skills">
          <AccordionTrigger>Skills</AccordionTrigger>
          <AccordionContent>
            Perspiciatis ipsam unde numquam suscipit debitis praesentium ullam ab maiores quam vitae
            exercitationem possimus natus atque odit illo.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </TabsContent>
  );
};
export default AboutTab;
