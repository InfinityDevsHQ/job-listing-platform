'use client';
import UserInfoPanel from '@/components/profile/user-info-panel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button-new';
import InfoList from '@/components/ui/info-list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TextArea from '@/components/ui/text-area';
import UserHeader from '@/components/user-header';
import useAuthStore from '@/stores/authStore/store';
import {
  ClipboardIcon,
  ClockIcon,
  ExternalLinkIcon,
  FileIcon,
  LinkIcon,
  MailIcon,
  MapPinIcon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Profile = () => {
  const [editProfile, setEditProfile] = useState<boolean>(false);
  const [profileVal, setProfileVal] = useState(
    `I am looking to enhance my skills in advanced web development and contribute to innovative projects. Seeking opportunities to excel in UI design and collaborative environments. Passionate about creating efficient and user-friendly web systems.`
  );

  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  return (
    <div className="grid gap-4 p-4 lg:grid-cols-4 lg:gap-8 lg:p-8">
      <UserInfoPanel online_status={user.online_status} />
      <Accordion type="single" collapsible className="flex w-full flex-col gap-4 lg:hidden">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <UserHeader
              online_status={user.online_status}
              user_name="Saad Gulzar"
              user_role="Software Engineer"
            />
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4 rounded-md bg-white">
              <div className="flex flex-col gap-4">
                <h4 className="text-base font-bold text-gray-700 lg:text-xl">Contact</h4>
                {/* TODO: create info-list component  */}
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
                      <MapPinIcon className="h-5 w-5 text-primary-900" />
                    </span>
                    <p className="flex h-full flex-col justify-between">
                      <span className="font-bold text-gray-700 lg:text-base">Location</span>
                      <span className="text-gray-700 lg:text-base">Berlin, Germany</span>
                    </p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
                      <ClockIcon className="h-5 w-5 text-primary-900" />
                    </span>
                    <p className="flex h-full flex-col justify-between">
                      <span className="font-bold text-gray-700 lg:text-base">Timezone</span>
                      <span className="text-gray-700 lg:text-base">(GMT +05:00) Islamabad</span>
                    </p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
                      <MailIcon className="h-5 w-5 text-primary-900" />
                    </span>
                    <p className="flex h-full flex-col justify-between">
                      <span className="font-bold text-gray-700 lg:text-base">Email</span>
                      <span className="text-gray-700 lg:text-base">hello@test.com</span>
                    </p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
                      <LinkIcon className="h-5 w-5 text-primary-900" />
                    </span>
                    <p className="flex h-full flex-col justify-between">
                      <span className="flex items-center gap-2 font-bold text-gray-700 lg:text-base">
                        Public Profile
                        <Button size="icon-xs">
                          <ClipboardIcon className="h-4 w-4" />
                        </Button>
                      </span>
                      <span className="text-gray-700 lg:text-base">clickjob.ai/john-doe</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-base font-bold text-gray-700 lg:text-xl">Resume</h4>
                {/* TODO: create info-list component  */}
                <ul className="flex flex-col gap-8">
                  <li className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
                      <FileIcon className="h-5 w-5 text-primary-900" />
                    </span>
                    <p className="flex h-full flex-col justify-between">
                      <span className="flex items-center gap-2 font-bold text-gray-700 lg:text-base">
                        Saad Gulzar Resume
                        <Button size="icon-xs">
                          <ExternalLinkIcon className="h-4 w-4" />
                        </Button>
                      </span>
                      <span className="text-gray-700 lg:text-base">Created 4 Hours Ago</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 lg:col-span-3 lg:p-8">
        <Tabs orientation="vertical" defaultValue="about" className="flex flex-col lg:gap-4">
          <div className="flex items-center justify-between gap-4">
            <TabsList className="mx-0 w-full overflow-x-auto bg-primary-50">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="ai-insights">Ai Insights</TabsTrigger>
              <TabsTrigger value="recruiter">Recruiter Eye</TabsTrigger>
            </TabsList>
            <Button variant="outline" onClick={() => setEditProfile(!editProfile)}>
              {editProfile ? 'Save' : 'Edit'}
            </Button>
          </div>
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
                      I am looking to enhance my skills in advanced web development and contribute
                      to innovative projects. Seeking opportunities to excel in UI design and
                      collaborative environments. Passionate about creating efficient and
                      user-friendly web systems.
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="summary">
                <AccordionTrigger>Summary</AccordionTrigger>
                <AccordionContent>
                  Testing, and debugging. Proficient in HTML, CSS, Tailwind CSS, JavaScript, Vue.js,
                  React.js, Node.js, Express.js, and MongoDB. Experienced in autonomous project
                  management and collaborative teamwork. Successfully developed interactive web
                  applications with modern frameworks. Specialized in frontend architecture and
                  improving website performance. Completed 100+ projects with high ratings on Fiverr
                  and Upwork. Strong expertise in HTML, CSS, JavaScript, Tailwind CSS, Vue.js,
                  React.js, and Node.js projects.
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
                  Perspiciatis ipsam unde numquam suscipit debitis praesentium ullam ab maiores quam
                  vitae exercitationem possimus natus atque odit illo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
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
                  front-end development and user experience design. Your skills in HTML, CSS,
                  JavaScript, and various libraries and frameworks, such as Vue.js, React.js, and
                  Node.js, are evident in your work. Your ability to excel in both autonomous and
                  collaborative environments, combined with your successful history in remote and
                  on-site roles, shows your adaptability and dedication.In terms of the current job
                  market, there is a high demand for software engineers with your skill set.
                  Particularly, proficiency in JavaScript and its associated frameworks such as
                  Vue.js and React.js is highly sought after. Moreover, your experience with MongoDB
                  positions you well in the growing field of database management.The tech industry
                  is highly competitive, with many skilled professionals competing for the same
                  roles. However, your diverse experience, including remote work for a US-based
                  startup and on-site roles in Dubai and Pakistan, gives you a unique global
                  perspective that can set you apart.Potential opportunities for career progression
                  could include roles as a Senior Software Engineer or Solutions Architect, where
                  your broad technical skills and project management abilities would be highly
                  valued. Your experience with UX design also opens up the possibility of
                  specializing in that area, as there is a growing demand for professionals who can
                  bridge the gap between technical development and user-centric design.The trend in
                  the software engineering field is leaning towards full-stack development. While
                  your CV shows deep expertise in front-end development, expanding your skills in
                  back-end technologies could increase your marketability. Additionally, the trend
                  of remote work is likely here to stay, meaning your proven ability to deliver in
                  remote roles could be a significant advantage.Overall, your skills and experience
                  place you in a strong position within the job market. By continuing to adapt and
                  learn, you can stay ahead of the competition and seize the most exciting
                  opportunities in the field.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>CV Optimization Suggestions</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab atque, similique iure
                  quis corporis deleniti rerum accusantium in est iusto officiis dolore non
                  nesciunt, odit recusandae impedit autem consectetur accusamus?
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Skill Gap Analysis</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, magnam?
                  Distinctio iste ipsam iure sequi, atque optio aliquam labore quidem neque est,
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ducimus assumenda
                  in ullam, excepturi corrupti unde nostrum magnam provident inventore deserunt
                  temporibus pariatur aliquam, esse obcaecati alias possimus architecto libero!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Certification Suggestions</AccordionTrigger>
                <AccordionContent>
                  Perspiciatis ipsam unde numquam suscipit debitis praesentium ullam ab maiores quam
                  vitae exercitationem possimus natus atque odit illo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Personal Branding</AccordionTrigger>
                <AccordionContent>
                  Aspernatur reiciendis dolores inventore et in possimus unde officia sed ullam
                  assumenda, facere excepturi necessitatibus perferendis voluptate minima veritatis
                  asperiores dignissimos! Corporis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Career Advice</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptas
                  excepturi natus, quod tenetur molestiae laudantium, itaque illo nostrum possimus
                  architecto harum est mollitia molestias totam consequuntur repudiandae, rem
                  dolorum Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit
                  ea ducimus dicta ipsum obcaecati, recusandae nisi aliquam nostrum minus harum
                  totam laborum nesciunt quidem vel modi natus hic dignissimos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
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
                  front-end development and user experience design. Your skills in HTML, CSS,
                  JavaScript, and various libraries and frameworks, such as Vue.js, React.js, and
                  Node.js, are evident in your work. Your ability to excel in both autonomous and
                  collaborative environments, combined with your successful history in remote and
                  on-site roles, shows your adaptability and dedication.In terms of the current job
                  market, there is a high demand for software engineers with your skill set.
                  Particularly, proficiency in JavaScript and its associated frameworks such as
                  Vue.js and React.js is highly sought after. Moreover, your experience with MongoDB
                  positions you well in the growing field of database management.The tech industry
                  is highly competitive, with many skilled professionals competing for the same
                  roles. However, your diverse experience, including remote work for a US-based
                  startup and on-site roles in Dubai and Pakistan, gives you a unique global
                  perspective that can set you apart.Potential opportunities for career progression
                  could include roles as a Senior Software Engineer or Solutions Architect, where
                  your broad technical skills and project management abilities would be highly
                  valued. Your experience with UX design also opens up the possibility of
                  specializing in that area, as there is a growing demand for professionals who can
                  bridge the gap between technical development and user-centric design.The trend in
                  the software engineering field is leaning towards full-stack development. While
                  your CV shows deep expertise in front-end development, expanding your skills in
                  back-end technologies could increase your marketability. Additionally, the trend
                  of remote work is likely here to stay, meaning your proven ability to deliver in
                  remote roles could be a significant advantage.Overall, your skills and experience
                  place you in a strong position within the job market. By continuing to adapt and
                  learn, you can stay ahead of the competition and seize the most exciting
                  opportunities in the field.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Career Achievements</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other components&apos;
                  aesthetic.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default Profile;
