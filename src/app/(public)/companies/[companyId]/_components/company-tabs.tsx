import JobsList from '@/components/jobs/jobs-list';
import { Button } from '@/components/ui/button-new';
import Input from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CompanyAbout from './company-about';
import CompanyLink from './company-link';
import SectionHeading from './section-heading';
const CompanyTabs = () => {
  return (
    <Tabs defaultValue="about" className="lg:hidden">
      <TabsList>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="contact">Contacts</TabsTrigger>
        <TabsTrigger value="job-openings">Job Openings</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <CompanyAbout />
      </TabsContent>
      <TabsContent value="contact">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-gray-700 lg:text-xl">Contacts</h5>
            <CompanyLink heading="Location" description="Berlin, Germany" />
            <CompanyLink heading="Website" description="123 Maple Street, Springfield, 62704 USA" />
            <CompanyLink heading="Email" description="company@company.com" />
          </div>
          <span className="border border-gray-200" />
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-gray-700 lg:text-xl">
              Did&apos;t choose from current offers?
            </h5>
            <p className="text-gray-500 lg:text-base">
              Leave us your email and we will keep you informed about new offers from Company.
              According to our rules.
            </p>
            <div className="flex items-center gap-2.5">
              <Input placeholder="Email" type="email" />
              <Button className="self-end">Subscribe</Button>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="job-openings">
        <div className="flex flex-col gap-4">
          <SectionHeading text="Job Opportunities" />
          <JobsList />
        </div>
      </TabsContent>
    </Tabs>
  );
};
export default CompanyTabs;
