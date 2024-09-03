import { Button } from '@/components/ui/button-new';
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';

type JobHeaderProps = {
  className?: string;
};
const JobFeedback = ({ className }: JobHeaderProps) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 rounded-md border border-gray-200 px-4 py-2 xs:gap-4 sm:px-6 lg:max-w-lg lg:justify-between lg:px-8 ${className}`}
    >
      <span className="text-sm text-gray-950 lg:text-base">Do you like this job offer?</span>
      <div className="flex items-center gap-2 xs:gap-4">
        <Button variant="outline" size="icon" className="rounded-full bg-gray-200">
          <ThumbsUpIcon className="h-4 w-4 fill-gray-600 text-gray-500" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full bg-gray-200">
          <ThumbsDownIcon className="h-4 w-4 fill-gray-500 text-gray-500" />
        </Button>
      </div>
    </div>
  );
};
export default JobFeedback;
