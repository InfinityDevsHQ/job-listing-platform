'use client';

import JobsList from '@/components/jobs/jobs-list';
import { Company } from '@/types/types';
import CompanyAbout from '../company-about';
import CompanyBenefits from '../company-bebefits';
import CompanyInfo from '../company-info';
import CompanyLanguages from '../company-languages';
import CompanyTabs from '../company-tabs';
import SectionHeading from '../section-heading';
type CompanyMainPanelProps = {
  companyInfo: Company;
};
export default function CompanyMainPanel({ companyInfo }: CompanyMainPanelProps) {
  return (
    <div className="flex flex-col gap-4 lg:col-span-2 lg:gap-8">
      <CompanyInfo companyInfo={companyInfo} />
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
