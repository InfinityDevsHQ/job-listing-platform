import { ArrowLeft, ArrowRight } from 'lucide-react';
import Button from './button';
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
          text="Previous"
          className="rounded-md border border-gray-200 bg-white hover:bg-gray-100 hover:text-black"
          leadingIcon={<ArrowLeft size={16} />}
          onClick={handleBack}
        />
      )}
      <div className="ml-auto flex items-center gap-5">
        {skip && <Button text="Skip" className="bg-white" onClick={handleSkip} />}
        {next && (
          <Button
            text="Continue"
            trailingIcon={<ArrowRight size={16} />}
            variant="primary"
            onClick={handleNext}
            type={`${isNextSubmit ? 'submit' : 'button'}`}
          />
        )}
      </div>
    </div>
  );
}
