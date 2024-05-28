import { Button } from '@/components/ui/button-new';
import { ArrowLeft, ArrowRightIcon, Loader2 } from 'lucide-react';

type PaginationProps = {
  skip?: boolean;
  previous?: boolean;
  next?: boolean;
  isNextSubmit?: boolean;
  handleNext?: () => void;
  handleBack?: () => void;
  handleSkip?: () => void;
  nextLoading?: boolean;
};

export default function Pagination({
  skip,
  previous = true,
  next = true,
  handleSkip,
  isNextSubmit,
  handleBack,
  handleNext,
  nextLoading,
}: PaginationProps) {
  console.log('Inside Pagination,', nextLoading);
  return (
    <div className="flex w-full items-center">
      {previous && (
        <Button onClick={handleBack} variant="outline" type="button">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
      )}
      <div className="ml-auto flex items-center gap-5">
        {skip && (
          <Button className="bg-white" variant="outline" onClick={handleSkip} type="button">
            Skip
          </Button>
        )}
        {next && (
          <Button onClick={handleNext} type={`${isNextSubmit ? 'submit' : 'button'}`}>
            Continue
            {!nextLoading ? (
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            ) : (
              <Loader2 className="ml-2 h-4 w-4 animate-spin" />
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
