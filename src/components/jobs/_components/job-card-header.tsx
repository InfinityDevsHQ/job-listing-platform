import { cn } from '@/lib/utils';
import { JobProps } from '@/types/types';

const JobCardHeader = ({ job, size }: JobProps) => {
  return (
    <div className="flex items-start justify-between">
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
    </div>
  );
};

export default JobCardHeader;
