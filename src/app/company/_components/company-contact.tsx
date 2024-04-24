import CompanyLocation from '@/components/svgs/company-location';

export default function CompanyContacts() {
  return (
    <div className="flex flex-col gap-8 rounded-md border border-gray-200 p-8">
      <h6 className="font-bold text-gray-700 lg:text-xl">Job Openings</h6>
      <p className="font-bold text-gray-700 lg:text-4xl">200+</p>
      <h5 className="font-bold text-gray-700 lg:text-xl">Contacts</h5>
      <div className="hidden items-center gap-2 lg:flex">
        <span className="flex items-center justify-center rounded-full bg-primary-900 p-2.5 text-white">
          <CompanyLocation width={11} height={12} />
        </span>
        <div className="flex flex-col">
          <p className="font-bold text-gray-700 lg:text-base">Location</p>
          <p className="text-base text-gray-500">Berlin, Germany</p>
        </div>
      </div>
      <div className="hidden items-center gap-2 lg:flex">
        <span className="flex items-center justify-center rounded-full bg-primary-900 p-2.5 text-white">
          <CompanyLocation width={11} height={12} />
        </span>
        <div className="flex flex-col">
          <p className="font-bold text-gray-700 lg:text-base">Website</p>
          <p className="text-base text-gray-500">123 Maple Street, Springfield, 62704 USA</p>
        </div>
      </div>
      <div className="hidden items-center gap-2 lg:flex">
        <span className="flex items-center justify-center rounded-full bg-primary-900 p-2.5 text-white">
          <CompanyLocation width={11} height={12} />
        </span>
        <div className="flex flex-col">
          <p className="font-bold text-gray-700 lg:text-base">Email</p>
          <p className="text-base text-gray-500">company@company.com</p>
        </div>
      </div>
      <h5 className="font-bold text-gray-700 lg:text-xl">News from the company</h5>
      <h5 className="font-bold text-gray-700 lg:text-xl">What does it look like for us?</h5>
      <div className="flex"></div>
    </div>
  );
}
