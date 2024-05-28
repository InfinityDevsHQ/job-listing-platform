import {
  BookOpenText,
  Building,
  Building2,
  ClockIcon,
  Coffee,
  CreditCard,
  DollarSign,
  Focus,
  Footprints,
  Handshake,
  Home,
  Laptop,
  LucideWorkflow,
  PenTool,
  PersonStanding,
  Phone,
  Scale,
  Smartphone,
  Stars,
  Thermometer,
} from 'lucide-react';
import SectionHeading from './section-heading';
const CompanyBenefits = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <SectionHeading text="Benefits" leadingIcon={<Stars height={18} width={24} />} />
      <div className="flex flex-wrap items-center gap-2.5 text-gray-400 lg:gap-4">
        <Building2 size={28} />
        <BookOpenText size={28} />
        <DollarSign size={28} />
        <ClockIcon size={28} />
        <PersonStanding size={28} />
        <Home size={28} />
        <PenTool size={28} />
        <Coffee size={28} />
        <Handshake size={28} />
        <Phone size={28} />
        <Smartphone size={28} />
        <CreditCard size={28} />
        <Laptop size={28} />
        <Footprints size={28} />
        <Focus size={28} />
        <Thermometer size={28} />
        <Building size={28} />
        <LucideWorkflow size={28} />
        <Scale size={28} />
      </div>
    </div>
  );
};
export default CompanyBenefits;
