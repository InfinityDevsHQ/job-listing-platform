import { ThumbsDown, ThumbsUp } from 'lucide-react';

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
        <button
          aria-label="Like"
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 lg:h-6 lg:w-6"
        >
          <ThumbsUp className="h-5 w-5 text-gray-500 lg:h-4 lg:w-4" />
        </button>
        <button
          aria-label="Unlike"
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 lg:h-6 lg:w-6"
        >
          <ThumbsDown className="h-5 w-5 text-gray-500 lg:h-4 lg:w-4" />
        </button>
      </div>
    </div>
  );
};
export default JobFeedback;
