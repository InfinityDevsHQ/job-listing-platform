import CompanyLinkedin from '@/components/svgs/company-linedin';
import InstagramIcon from '@/components/svgs/instagram';
import Image from 'next/image';
import SectionHeading from './section-heading';
export default function CompanyTeam() {
  return (
    <>
      <SectionHeading text="Our Team" />
      <div className="flex max-w-max flex-col items-center justify-center lg:gap-2">
        <Image
          className="rounded-md"
          src={'/assets/company/team.png'}
          alt="This"
          width={150}
          height={150}
        />
        <h5 className="font-semibold text-gray-500 lg:text-base">John Doe</h5>
        <p className="text-xs text-gray-500">CEO</p>
        <div className="flex items-center gap-2.5">
          <CompanyLinkedin black />
          <InstagramIcon />
        </div>
      </div>
    </>
  );
}
