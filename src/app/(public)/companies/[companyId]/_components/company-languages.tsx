import { Languages } from 'lucide-react';
import SectionHeading from './section-heading';
export default function CompanyLanguages() {
  return (
    <>
      <SectionHeading text="Languages" leadingIcon={<Languages height={18} width={24} />} />
      <div className="flex w-full flex-col gap-4 border-dark-background3 lg:flex-row lg:gap-0 lg:divide-x-2">
        <div className="flex flex-1 justify-between lg:pr-6">
          <div className="flex items-center gap-2">
            <p className="text-dark-name lg:text-xl">English</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-dark-greenLight" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-dark-greenLight" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-dark-greenLight" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-gray-200" />
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:pl-6">
          <div className="flex items-center gap-2">
            <p className="text-dark-name lg:text-xl">Czech</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-dark-greenLight" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-dark-greenLight" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-dark-greenLight" />
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    </>
  );
}
