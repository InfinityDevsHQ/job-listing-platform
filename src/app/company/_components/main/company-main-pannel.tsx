'use client';
import JobsList from '@/_components/jobs/jobs-list';
import TabsNavigator from '@/_components/tabs-navigator';
import useJobListingsData from '@/stores/job-listings-store';
import { TabsNavigatorData } from '@/types/tabs-navigator-data';
import { useState } from 'react';
import CompanyAbout from '../company-about';
import CompanyInfo from '../company-info';
import CompanyLanguages from '../company-languages';
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
      <CompanyLanguages />
      <span className="border border-gray-200" />
      <TabsNavigator data={Tabs} className="self-center bg-primary-50" />
      <CompanyAbout className="hidden lg:flex" />
      {page === 'about' && <CompanyAbout />}
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
