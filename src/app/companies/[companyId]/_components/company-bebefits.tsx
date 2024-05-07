import { Stars } from 'lucide-react';
import SectionHeading from './section-heading';
const CompanyBenefits = () => {
  return (
    <div>
      <SectionHeading text="Benefits" leadingIcon={<Stars height={18} width={24} />} />
      <div className="flex items-center gap-4"></div>
    </div>
  );
};
export default CompanyBenefits;
