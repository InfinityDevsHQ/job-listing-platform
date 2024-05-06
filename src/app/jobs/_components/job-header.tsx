import { Button } from '@/components/ui/button-new';
import { BookmarkIcon } from 'lucide-react';
import Image from 'next/image';
type JobHeaderProps = {
  title: string;
  is_hot: boolean;
  external_company_name: string | null;
};
export default function JobHeader({ title, is_hot, external_company_name }: JobHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 lg:h-24 lg:w-24">
          <Image
            alt="logo"
            src={'/assets/icons/fire.svg'}
            width={35}
            height={40}
            className="hidden lg:block"
          />
          <Image
            alt="logo"
            src={'/assets/icons/fire.svg'}
            width={16}
            height={18}
            className="block lg:hidden"
          />
        </span>
        <div>
          <h3 className="flex items-center gap-4 text-base font-bold capitalize text-gray-700 lg:text-4xl">
            {title && title}
            {is_hot && (
              <span className="hidden max-w-max rounded-md bg-green-500 px-2 py-1 text-xxs font-bold text-white lg:block">
                Urgent
              </span>
            )}
          </h3>
          <p className="flex items-center gap-4 text-xs font-semibold text-gray-500 lg:text-lg lg:font-normal">
            {external_company_name && external_company_name}
            {is_hot && (
              <span className="block max-w-max rounded-md bg-green-500 px-2 py-1 text-xxs font-bold text-white lg:hidden">
                Urgent
              </span>
            )}
          </p>
        </div>
      </div>
      <Button className="border-none" size="icon">
        <BookmarkIcon />
        {/* <BookmarkCheckIcon /> */}
      </Button>
    </div>
  );
}
