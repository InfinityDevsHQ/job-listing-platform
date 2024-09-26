import { Button } from '@/components/ui/button-new';
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';

type JobHeaderProps = {
  className?: string;
};
const JobFeedback = ({ className = '' }: JobHeaderProps) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 rounded-2xl border border-dark-greenDark px-4 py-2 xs:gap-4 sm:px-6 lg:max-w-lg lg:justify-between lg:px-8 ${className}`}
    >
      <span className="text-sm text-dark-name lg:text-base">Do you like this job offer?</span>
      <div className="flex items-center gap-2 xs:gap-4">
        <Button size="icon" className="rounded-full bg-dark-greenDark">
          <ThumbsUpIcon className="h-4 w-4 fill-dark-nameWhite text-dark-nameWhite" />
        </Button>
        <Button size="icon" className="rounded-full bg-dark-greenDark">
          <ThumbsDownIcon className="h-4 w-4 fill-dark-nameWhite text-dark-nameWhite" />
        </Button>
      </div>
    </div>
  );
};
export default JobFeedback;
