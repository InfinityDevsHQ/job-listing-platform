import { Company } from '@/types/types';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import CompanyLink from './company-link';
import CompanyNews from './company-news';

const CompanyContact = ({ company }: { company: Company }) => {
  return (
    <div className="flex flex-col gap-8 rounded-md border border-dark-background3 p-8">
      <h6 className="font-bold text-dark-nameWhite lg:text-xl">Job Openings</h6>
      <p className="font-bold text-dark-nameWhite lg:text-4xl">200+</p>
      <h5 className="font-bold text-dark-nameWhite lg:text-xl">Contacts</h5>
      <CompanyLink
        className="hidden lg:flex"
        heading="Location"
        description={`${company.city} , ${company.country}`}
      />
      <CompanyLink
        className="hidden lg:flex"
        heading="Website"
        description={company.website || ''}
      />
      <CompanyLink
        className="hidden lg:flex"
        heading="Email"
        description={company.email || 'comany@fakemail.com'}
      />
      <CompanyNews />
      <h5 className="font-bold text-dark-nameWhite lg:text-xl">What does it look like for us?</h5>
      <div className="grid grid-cols-3 justify-items-stretch gap-4">
        <Image
          width={199}
          height={100}
          alt="Team"
          src={'/assets/company/team-1.png'}
          className="h-auto w-auto"
        />
        <Image
          width={199}
          height={100}
          alt="Team"
          src={'/assets/company/team-2.png'}
          className="h-auto w-auto"
        />
        <Image
          width={199}
          height={100}
          alt="Team"
          src={'/assets/company/team-3.png'}
          className="h-auto w-auto"
        />
        {/* <Image
          width={338}
          height={100}
          alt="Team"
          src={'/assets/company/add-vector.png'}
          className="col-span-3  mt-1 h-auto w-full"
        /> */}
        <span className="col-span-3">
          <div className="flex flex-col items-center justify-center lg:gap-2">
            <span className="flex h-[80px] w-full cursor-pointer items-center justify-center rounded-md border border-dark-background3 bg-dark-primary">
              <Plus />
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};
export default CompanyContact;
