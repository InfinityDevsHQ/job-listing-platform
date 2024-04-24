'use client';
import CompaniesList from '@/_components/companies/companies-list';
import JobsList from '@/_components/jobs/jobs-list';
import FireIcon from '@/components/svgs/fire';
import Hero from '@/components/ui/hero';
import SectionHeader from '@/components/ui/section-header';
import useJobListingsById from '@/stores/job-listing-pass-slug-data-store';
import useJobListingsData from '@/stores/job-listings-store';
export default function Home() {
  const companies = [
    {
      companyLogo: '/assets/images/companies/company_web_globe.png',
      companyName: 'Webglobe',
      companyDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, odio quaerat labore deleniti sapiente iste! Consequuntur sunt tempore expedita quidem unde. Corporis ipsum ducimus voluptas asperiores fugit maxime, adipisci minus.
    `,
    },
    {
      companyLogo: '/assets/images/companies/company_web_globe.png',
      companyName: 'Webglobe 2',
      companyDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, odio quaerat labore deleniti sapiente iste! Consequuntur sunt tempore expedita quidem unde. Corporis ipsum ducimus voluptas asperiores fugit maxime, adipisci minus.
    `,
    },
  ];
  const { allJobs } = useJobListingsData();
  const { searchedJob } = useJobListingsById();
  return (
    <div className="grid grid-cols-3 gap-8 p-4 lg:p-16">
      <div className="col-span-3 flex flex-col gap-4 lg:col-span-2 lg:gap-8">
        <Hero />
        <SectionHeader
          leadingIcon={<FireIcon className="h-5 w-4 text-red-900 lg:h-7 lg:w-6" />}
          heading="Latest Hot Offers"
          helpText={`${allJobs?.length} JOBS`}
        />
        <JobsList jobs={allJobs} />
      </div>
      <div className="col-span-3 flex flex-col gap-5 lg:col-span-1">
        <SectionHeader
          leadingIcon={<FireIcon className="h-5 w-4 text-black lg:h-7 lg:w-6" />}
          heading="Companies That Will Grow You Forward"
        />
        <div className="overflow-x-auto">
          <CompaniesList companies={companies} />
        </div>
      </div>
    </div>
  );
}
