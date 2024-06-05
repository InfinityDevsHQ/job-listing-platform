import { Company } from '@/types/types';
import CompanyContacts from '../company-contact';
import CompanySubscribe from '../company-subscribe';

export default function CompanyContactPanel({ company }: { company: Company }) {
  return (
    <div className="hidden flex-col gap-8 lg:flex">
      <CompanyContacts company={company} />
      <CompanySubscribe />
    </div>
  );
}
