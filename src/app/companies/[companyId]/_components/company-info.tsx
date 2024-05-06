import CompanyCommunity from '@/components/svgs/company-community';
import { Button } from '@/components/ui/button-new';
import Image from 'next/image';
export default function CompanyInfo() {
  return (
    <>
      <div className="mt-14 flex items-center gap-4 lg:gap-8">
        <Image
          src={'/assets/company/profile.png'}
          alt="profile"
          width={102}
          height={102}
          className="rounded-full lg:hidden "
        />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 lg:gap-4">
            <h4 className="text-base font-bold text-black lg:text-4xl">Company Name</h4>
            <Button variant="outline">Follow</Button>
          </div>
          <p className="text-sm text-gray-500 lg:hidden">Silicon Valley</p>
          <Button className="lg:hidden">Get Emails About New Jobs</Button>
        </div>
        <Button className="hidden lg:flex">Get Emails About New Jobs</Button>
      </div>
      {/* BIO */}
      <p className="hidden text-xl text-gray-500 lg:block">Silicon Valley</p>
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
            <p className="font-bold lg:text-xl">Size f Company</p>
          </div>
          <p className="lg:text-xl">0-100 Employees</p>
        </div>
      </div>
    </>
  );
}
