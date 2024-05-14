import { cn } from '@/lib/utils';
import { JobProps } from '@/types/types';
import { BriefcaseBusinessIcon } from 'lucide-react';
import JobCardDetails from './job-card-details';

const JobCardHeader = ({ job, size, handleClick }: JobProps) => {
  return (
    <div
      onClick={handleClick}
      className={cn('flex cursor-default select-none items-center gap-4', {
        'cursor-pointer': handleClick,
      })}
    >
      <div
        className={cn(
          'hidden h-14 w-14 items-center justify-center rounded-full bg-blue-100 md:flex',
          {
            'bg-red-100': job?.is_hot,
            'h-20 w-20': size == 'lg',
          }
        )}
      >
        {/* {job?.external_company_logo ? (
            <Image
              src={job.external_company_logo}
              width={100}
              height={100}
              alt="company logo"
              className="ml-auto h-96 w-96 rounded-2xl"
            />
          ) : (
          )} */}
        <BriefcaseBusinessIcon
          className={cn('text-blue-500', {
            'text-red-500': job?.is_hot,
            'h-8 w-8': size == 'lg',
          })}
        />
      </div>
      <div className="flex cursor-pointer select-none flex-col gap-2">
        <h3
          className={cn(
            'flex items-center gap-4 pr-5 text-lg font-semibold text-neutral-900 md:pr-0',
            {
              'text-4xl font-bold': size == 'lg',
            }
          )}
        >
          {job?.title}
        </h3>
        <JobCardDetails job={job} size={size} />
      </div>
    </div>
  );
};

export default JobCardHeader;
