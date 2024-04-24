import CompanyLink from './company-link';
export default function CompanyContacts() {
  return (
    <div className="flex flex-col gap-8 rounded-md border border-gray-200 p-8">
      <h6 className="font-bold text-gray-700 lg:text-xl">Job Openings</h6>
      <p className="font-bold text-gray-700 lg:text-4xl">200+</p>
      <h5 className="font-bold text-gray-700 lg:text-xl">Contacts</h5>
      <CompanyLink className="hidden lg:flex" heading="Location" description="Berlin, Germany" />
      <CompanyLink
        className="hidden lg:flex"
        heading="Website"
        description="123 Maple Street, Springfield, 62704 USA"
      />
      <CompanyLink className="hidden lg:flex" heading="Email" description="company@company.com" />
      <h5 className="font-bold text-gray-700 lg:text-xl">News from the company</h5>
      <h5 className="font-bold text-gray-700 lg:text-xl">What does it look like for us?</h5>
      <div className="flex"></div>
    </div>
  );
}
