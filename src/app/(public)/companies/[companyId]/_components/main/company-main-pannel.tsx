'use client';

import JobsList from '@/components/jobs/jobs-list';
import CompanyAbout from '../company-about';
import CompanyBenefits from '../company-bebefits';
import CompanyInfo from '../company-info';
import CompanyLanguages from '../company-languages';
import CompanyTabs from '../company-tabs';
import SectionHeading from '../section-heading';

export default function CompanyMainPanel() {
  return (
    <div className="flex flex-col gap-4 lg:col-span-2 lg:gap-8">
      <CompanyInfo />
      <span className="border border-gray-200" />
      <CompanyBenefits />
      <span className="border border-gray-200" />
      <CompanyLanguages />
      <span className="border border-gray-200" />
      <CompanyAbout className="hidden lg:flex" />
      <CompanyTabs />
      <div className="hidden flex-col gap-7 lg:flex">
        <SectionHeading text="Job Opportunities" />
        <JobsList />
      </div>
    </div>
  );
}
