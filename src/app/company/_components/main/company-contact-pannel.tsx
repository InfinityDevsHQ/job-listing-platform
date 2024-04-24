import CompanyContacts from '../company-contact';
import CompanySubscribe from '../company-subscribe';
export default function CompanyContactPanel() {
  return (
    <div className="hidden flex-col gap-8 lg:flex">
      <CompanyContacts />
      <CompanySubscribe />
    </div>
  );
}
