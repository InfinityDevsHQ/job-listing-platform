import { Button } from '@/components/ui/button-new';
import { ArrowLeft, ArrowRightIcon } from 'lucide-react';

type PaginationProps = {
  skip?: boolean;
  previous?: boolean;
  next?: boolean;
  isNextSubmit?: boolean;
  handleNext?: () => void;
  handleBack?: () => void;
  handleSkip?: () => void;
};

export default function Pagination({
  skip,
  previous = true,
  next = true,
  handleSkip,
  isNextSubmit,
  handleBack,
  handleNext,
}: PaginationProps) {
  return (
    <div className="flex w-full items-center">
      {previous && (
        <Button onClick={handleBack} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
      )}
      <div className="ml-auto flex items-center gap-5">
        {skip && (
          <Button className="bg-white" variant="outline" onClick={handleSkip}>
            Skip
          </Button>
        )}
        {next && (
          <Button onClick={handleNext} type={`${isNextSubmit ? 'submit' : 'button'}`}>
            Continue
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
