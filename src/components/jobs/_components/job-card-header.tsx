import FireIcon from '@/components/svgs/fire';
import { Button } from '@/components/ui/button-new';
import { cn } from '@/lib/utils';
import { Bookmark } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
type JobCardHeaderProps = {
  is_hot: boolean;
  title: string;
  company: string;
  size?: 'default' | 'lg';
};
export default function JobCardHeader({
  is_hot,
  title,
  company,
  size = 'default',
}: JobCardHeaderProps) {
  const [saved, setSaved] = useState(false);
  return (
    <header className="flex cursor-pointer items-center">
      <span
        className={cn(
          'mr-2 flex items-center justify-center rounded-full p-2.5 md:mr-5 lg:p-3',
          is_hot ? 'bg-orange-50' : ' bg-primary-500/30',
          size === 'lg' ? 'lg:h-24 lg:w-24' : ''
        )}
      >
        <FireIcon
          className={cn(
            'h-4 w-4',
            is_hot ? 'text-orange-500' : 'text-primary-500',
            size === 'lg' ? 'lg:h-10 lg:w-10' : ''
          )}
        />
      </span>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center lg:gap-4">
          <h3
            className={cn(
              'font-semibold',
              size === 'default' ? 'text-base' : '',
              size === 'lg' ? 'lg:text-4xl' : ''
            )}
          >
            {title}
          </h3>
          <span
            className={
              'hidden items-center justify-center rounded-md bg-green-500 px-2 py-1 text-xs font-semibold text-white shadow-md lg:flex'
            }
          >
            Urgent
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold text-gray-500">{company}</span>
          <span
            className={cn(
              'flex items-center justify-center rounded-md bg-green-500 px-2 py-1 text-xs font-semibold text-white shadow-md lg:hidden'
            )}
          >
            Urgent
          </span>
        </div>
      </div>
      <Button
        className="flex h-8 w-8 rounded-md"
        variant={saved ? 'primary' : 'outline'}
        size={'icon'}
        onClick={(e) => {
          e.stopPropagation();
          setSaved(!saved);
          if (!saved) toast.success('Job Saved.');
          if (saved) toast.info('Removed From Favorites');
        }}
      >
        <Bookmark
          className={cn('h-4 w-4', saved ? 'fill-white text-white' : 'fill-gray-200 text-gray-200')}
        />
      </Button>
    </header>
  );
}
