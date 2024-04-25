'use client';
import JobsList from '@/_components/jobs/jobs-list';
import TabsNavigator from '@/_components/tabs-navigator';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import useJobListingsData from '@/stores/job-listings-store';
import { TabsNavigatorData } from '@/types/tabs-navigator-data';
import { useState } from 'react';
import CompanyAbout from '../company-about';
import CompanyBenefits from '../company-bebefits';
import CompanyInfo from '../company-info';
import CompanyLanguages from '../company-languages';
import CompanyLink from '../company-link';
import SectionHeading from '../section-heading';

export default function CompanyMainPanel() {
  const { allJobs } = useJobListingsData();
  const [page, setPage] = useState('about');
  const Tabs: TabsNavigatorData[] = [
    {
      value: page,
      tabName: 'About',
      active: page === 'about',
      handleClick: () => setPage('about'),
    },
    {
      value: page,
      tabName: 'Contact',
      active: page === 'contact',
      handleClick: () => setPage('contact'),
    },
    {
      value: page,
      tabName: 'Job Openings',
      active: page === 'job-openings',
      handleClick: () => setPage('job-openings'),
    },
  ];
  return (
    <div className="flex flex-col gap-4 lg:col-span-2 lg:gap-8">
      <CompanyInfo />
      <span className="border border-gray-200" />
      <CompanyBenefits />
      <span className="border border-gray-200" />
      <CompanyLanguages />
      <span className="border border-gray-200" />
      <TabsNavigator data={Tabs} className="self-center bg-primary-50 lg:hidden" />
      <CompanyAbout className="hidden lg:flex" />
      {page === 'about' && (
        <div className="lg:hidden">
          <CompanyAbout />
        </div>
      )}
      {page === 'contact' && (
        <div className="flex flex-col gap-4 lg:hidden">
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
              <Button text="Subscribe" variant="primary" className="self-end" />
            </div>
          </div>
        </div>
      )}
      <div className="hidden flex-col gap-7 lg:flex">
        <SectionHeading text="Job Opportunities" />
        <JobsList jobs={allJobs} />
      </div>
      {page == 'job-openings' && (
        <div className="flex flex-col gap-4">
          <SectionHeading text="Job Opportunities" />
          <JobsList jobs={allJobs} />
        </div>
      )}
    </div>
  );
}
