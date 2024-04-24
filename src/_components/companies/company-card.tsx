import Image from 'next/image';

import Button from '@/components/ui/button';

import { CompanyCardProps } from '@/types/types';

const CompanyCard = ({ companyName, companyLogo, companyDescription }: CompanyCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border border-gray-200 bg-white p-4 lg:gap-8 lg:p-8">
      <div className="flex items-center gap-2.5 lg:gap-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 lg:h-16 lg:w-16">
          <Image
            src={companyLogo}
            alt={`${companyName} logo`}
            width={30}
            height={30}
            className="lg:hidden"
          />
          <Image
            src={companyLogo}
            alt={`${companyName} logo`}
            width={44}
            height={44}
            className="hidden lg:block"
          />
        </div>
        <h3 className="text-3xl font-bold text-neutral-950 lg:text-4xl">{companyName}</h3>
      </div>
      <p className="lg:min-w-none min-w-72 text-sm text-neutral-500 lg:text-base">
        {companyDescription}
      </p>
      <div className="flex justify-end">
        <Button text="Load More" variant="primary" />
      </div>
    </div>
  );
};

export default CompanyCard;
