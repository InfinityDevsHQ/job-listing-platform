'use client';
import JobsList from '@/_components/jobs/jobs-list';
import useJobListingsData from '@/stores/job-listings-store';
import CompanyAbout from '../company-about';
import CompanyInfo from '../company-info';
import CompanyLanguages from '../company-languages';
import CompanyTeam from '../company-team';
import CompanyTechnologies from '../company-technologies';
import SectionHeading from '../section-heading';

export default function CompanyMainPanel() {
  const { allJobs } = useJobListingsData();
  return (
    <div className="flex flex-col gap-4 lg:col-span-2 lg:gap-8">
      <CompanyInfo />
      <span className="border border-gray-200" />
      <CompanyLanguages />
      {/* ABOUT */}
      <span className="border border-gray-200" />
      <CompanyAbout />
      {/* Technologies */}
      <CompanyTechnologies />
      {/* Team */}
      <CompanyTeam />
      {/* Jobs Opportunities */}
      <SectionHeading text="Job Opportunities" />
      <JobsList jobs={allJobs} />
    </div>
  );
}
