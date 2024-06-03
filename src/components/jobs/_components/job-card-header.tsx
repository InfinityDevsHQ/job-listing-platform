import { Button } from '@/components/ui/button-new';
import { Bookmark, Flame } from 'lucide-react';
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
        className={`mr-5 flex items-center justify-center rounded-full p-2.5 lg:p-3 ${is_hot ? 'bg-accent-3' : ' bg-primary-500/30'} ${size === 'lg' ? 'lg:h-24 lg:w-24' : ''} `}
      >
        <Flame
          className={`h-4 w-4 ${is_hot ? 'text-accent-2' : 'text-primary-500'} ${size === 'lg' ? 'lg:h-10 lg:w-10' : ''} `}
        />
      </span>
      <div className="flex flex-1 flex-col">
        <div className="flex items-center lg:gap-4">
          <h3
            className={`font-semibold ${size === 'default' ? 'text-base' : ''} ${size === 'lg' ? 'lg:text-4xl' : ''} `}
          >
            {title}
          </h3>
          <span
            className={`hidden items-center justify-center rounded-md bg-accent-1 px-2 py-1 text-xxs font-semibold text-white shadow-md lg:flex ${size == 'lg' ? 'lg:text-sm' : ''}`}
          >
            Urgent
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span
            className={`text-xs font-semibold text-gray-500 ${size === 'lg' ? 'lg:text-xl' : ''}`}
          >
            {company}
          </span>
          <span
            className={`flex items-center justify-center rounded-md bg-accent-1 px-2 py-1 text-xxs font-semibold text-white shadow-md lg:hidden ${size == 'lg' ? 'lg:text-sm' : ''}`}
          >
            Urgent
          </span>
        </div>
      </div>
      <Button
        className="flex h-7 w-7 rounded-md px-3 py-0"
        variant={saved ? 'primary' : 'outline'}
        onClick={() => {
          setSaved(!saved);
          if (!saved) toast.success('Job Saved.');
          if (saved) toast.info('Removed From Favorites');
        }}
      >
        <Bookmark
          className={`${saved ? 'fill-white text-white' : 'fill-gray-200 text-gray-200'}`}
        />
      </Button>
    </header>
  );
}
