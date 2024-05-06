import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './button-new';
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
        <Button
          onClick={handleBack}
          className="rounded-md border border-gray-200 bg-white hover:bg-gray-100 hover:text-black"
        >
          <ArrowLeft size={16} className="mr-2" />
          Previous
        </Button>
      )}
      <div className="ml-auto flex items-center gap-5">
        {skip && (
          <Button className="bg-white" variant={'outline'} onClick={handleSkip}>
            Skip
          </Button>
        )}
        {next && (
          <Button onClick={handleNext} type={`${isNextSubmit ? 'submit' : 'button'}`}>
            Continue
            <ArrowRight size={16} className="ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
