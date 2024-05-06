import Image from 'next/image';

import { Button } from '@/components/ui/button-new';
import { JobProps } from '@/types/types';
import { BookmarkIcon } from 'lucide-react';

const JobCardHeader = ({ job }: JobProps) => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
          <Image alt="logo" src={'/assets/icons/fire.svg'} width={16} height={18} />
        </span>
        <div>
          <h3 className="flex items-center gap-4 text-base font-semibold text-neutral-900">
            {job?.title}
            {job?.work_location_type && (
              <span className="hidden max-w-max rounded-md bg-green-500 px-2 py-1 text-xxs font-bold uppercase text-white lg:block">
                {job?.work_location_type}
              </span>
            )}
          </h3>
          <p className="flex items-center gap-4 text-xs font-semibold text-gray-500 lg:text-sm lg:font-normal">
            {job?.external_company_name}
            {job?.work_location_type && (
              <span className="block max-w-max rounded-md bg-green-500 px-2 py-1 text-xxs font-bold uppercase text-white lg:hidden">
                {job?.work_location_type}
              </span>
            )}
          </p>
        </div>
      </div>
      <Button variant="outline" size="icon-xs">
        <BookmarkIcon className="h-4 w-4" />
        {/* <BookmarkCheckIcon className="h-4 w-4" /> */}
      </Button>
    </div>
  );
};

export default JobCardHeader;
