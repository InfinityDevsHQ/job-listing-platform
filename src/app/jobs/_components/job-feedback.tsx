import { Button } from '@/components/ui/button-new';
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';

type JobHeaderProps = {
  className?: string;
};
const JobFeedback = ({ className }: JobHeaderProps) => {
  return (
    <div
      className={`flex items-center justify-center gap-4 rounded-md border border-gray-200 px-5 py-2 lg:max-w-lg lg:justify-between lg:px-8 ${className}`}
    >
      <span className="text-gray-950">Do you like this job offer?</span>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon-xs">
          <ThumbsUpIcon className="h-4 w-4 text-gray-500" />
        </Button>
        <Button variant="outline" size="icon-xs">
          <ThumbsDownIcon className="h-4 w-4 text-gray-500" />
        </Button>
      </div>
    </div>
  );
};
export default JobFeedback;
