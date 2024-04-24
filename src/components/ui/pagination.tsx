import CompanyArrow from "../svgs/company-arrow";
import Button from "./button";
type PaginationProps = {
  skip?: boolean;
  previous?: boolean;
  next?: boolean;
  handleNext?: () => void;
  handleBack?: () => void;
  handleSkip?: () => void;
};
export default function Pagination({
  skip,
  previous = true,
  next = true,
  handleSkip,
  handleBack,
  handleNext,
}: PaginationProps) {
  return (
    <div className="flex items-center w-full">
      {previous && (
        <Button
          text="Previous"
          className="bg-white border border-gray-200 rounded-md hover:bg-gray-100 hover:text-black"
          leadingIcon={<CompanyArrow width={16} height={16} />}
          onClick={handleBack}
        />
      )}
      <div className="ml-auto flex gap-5 items-center">
        {skip && (
          <Button text="Skip" className="bg-white" onClick={handleSkip} />
        )}
        {next && (
          <Button
            text="Continue"
            trailingIcon={<CompanyArrow width={16} height={16} />}
            variant="primary"
            onClick={handleNext}
          />
        )}
      </div>
    </div>
  );
}
