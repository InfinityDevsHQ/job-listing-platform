import CompanyCommunity from '@/components/svgs/company-community';
import { Button } from '@/components/ui/button-new';
import { Company } from '@/types/types';
import { Mail } from 'lucide-react';
import Image from 'next/image';
type CompanyInfoProps = {
  companyInfo: Company;
};
export default function CompanyInfo({ companyInfo }: CompanyInfoProps) {
  return (
    <>
      <div className="flex items-center gap-4 lg:mt-14 lg:gap-8">
        <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gray-50 lg:hidden">
          <Image
            src={companyInfo.logo_url}
            alt="profile"
            width={102}
            height={102}
            className="h-auto w-auto"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 lg:gap-4">
            <h4 className="text-base font-bold text-black lg:text-4xl">{companyInfo.name}</h4>
            <Button variant="outline">Follow</Button>
          </div>
          <p className="text-sm text-gray-500 lg:hidden">{companyInfo.city}</p>
          <Button className="lg:hidden" variant={'primary'}>
            <Mail size={16} className="mr-2" />
            Get Emails About New Jobs
          </Button>
        </div>
        <Button className="hidden lg:flex">
          <Mail size={16} className="mr-2" />
          Get Emails About New Jobs
        </Button>
      </div>
      {/* BIO */}
      <p className="hidden text-xl text-gray-500 lg:block">{companyInfo.city}</p>
      <div className="flex w-full flex-col gap-4 border-gray-200 text-gray-500 lg:flex-row lg:gap-0 lg:divide-x-2">
        <div className="flex flex-1 justify-between lg:pr-6">
          <div className="flex items-center gap-2">
            <p className="font-bold lg:text-xl">Field of Company</p>
          </div>
          <p className="lg:text-xl">Education</p>
        </div>
        <div className="flex flex-1 justify-between lg:pl-6">
          <div className="flex items-center gap-2">
            <CompanyCommunity />
            <p className="font-bold lg:text-xl">Size of Company</p>
          </div>
          <p className="lg:text-xl"> {companyInfo.employee_count || '0 - 10'} Employees</p>
        </div>
      </div>
    </>
  );
}
