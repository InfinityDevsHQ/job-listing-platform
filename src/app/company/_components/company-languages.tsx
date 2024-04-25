import CompanyDictionary from '@/components/svgs/company-dictionary';
import SectionHeading from './section-heading';

export default function CompanyLanguages() {
  return (
    <>
      <SectionHeading text="Languages" leadingIcon={<CompanyDictionary width={18} height={14} />} />
      <div className="flex w-full flex-col gap-4 border-gray-200 text-gray-500 lg:flex-row lg:gap-0 lg:divide-x-2">
        <div className="flex flex-1 justify-between lg:pr-6">
          <div className="flex items-center gap-2">
            <p className="lg:text-xl">English</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary-900" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary-900" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary-900" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-gray-200" />
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:pl-6">
          <div className="flex items-center gap-2">
            <p className="lg:text-xl">Czech</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary-900" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary-900" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary-900" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    </>
  );
}
