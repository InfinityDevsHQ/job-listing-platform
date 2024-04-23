import CompanyArrow from "../svgs/company-arrow";
import Button from "./button";

export default function Pagination() {
  return (
    <div>
      <div>
        <Button
          text="Previous"
          className="bg-white border border-gray-200 rounded-md hover:bg-gray-100"
          leadingIcon={<CompanyArrow width={16} height={16} />}
        />
      </div>
    </div>
  );
}
