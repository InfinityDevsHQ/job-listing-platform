import CompanyCommunity from '@/components/svgs/company-community';
import { Button } from '@/components/ui/button-new';
import { Company } from '@/types/types';
import { Crosshair, Mail, Plus } from 'lucide-react';
import Image from 'next/image';
type CompanyInfoProps = {
  companyInfo: Company;
};
export default function CompanyInfo({ companyInfo }: CompanyInfoProps) {
  return (
    <>
      <div className="flex items-center gap-4 pb-4 lg:gap-8 lg:pb-0">
        <div className="flex h-24 w-24 items-center justify-between rounded-full bg-gray-50  lg:hidden lg:h-48 lg:w-48 lg:justify-center">
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
            <h4 className="text-base font-bold text-dark-nameWhite lg:text-4xl">
              {companyInfo.name}
            </h4>
            <Button
              variant="outline"
              className="gap-2 border-dark-background3 bg-dark-primary text-dark-name hover:text-dark-nameHalfWhite"
            >
              <Plus className="size-4" />
              Follow
            </Button>
          </div>
          <p className="text-sm text-dark-name lg:hidden">{companyInfo.city}</p>
          <Button className="lg:hidden" variant={'primary'}>
            <Mail size={16} className="mr-2" />
            Get Emails About New Jobs
          </Button>
        </div>
        <Button className="hidden lg:flex" variant={'primary'}>
          <Mail size={16} className="mr-2" />
          Get Emails About New Jobs
        </Button>
      </div>
      {/* BIO */}
      <p className="hidden text-xl text-dark-name lg:block">{companyInfo.city}</p>
      <div className="flex w-full flex-col gap-4 border-gray-200 text-dark-nameWhite lg:flex-row lg:gap-0 lg:divide-x-2">
        <div className="flex flex-1 justify-between lg:pr-6">
          <div className="flex items-center gap-2">
            <p className="flex items-center gap-2 font-bold lg:text-xl">
              <Crosshair className="size-5" />
              Field of Company
            </p>
          </div>
          <p className="text-dark-name lg:text-xl">Education</p>
        </div>
        <div className="flex flex-1 justify-between lg:pl-6">
          <div className="flex items-center gap-2">
            <CompanyCommunity />
            <p className="font-bold lg:text-xl">Size of Company</p>
          </div>
          <p className="text-dark-name lg:text-xl">
            {' '}
            {companyInfo.employee_count || '0 - 10'} Employees
          </p>
        </div>
      </div>
    </>
  );
}
