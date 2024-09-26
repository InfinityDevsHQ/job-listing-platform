import CompanyLinkedin from '@/components/svgs/company-linedin';
import InstagramIcon from '@/components/svgs/instagram';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import SectionHeading from './section-heading';

const teamMembers = [
  {
    img: '/assets/company/team.png',
  },
  {
    img: '/assets/company/team1.png',
  },
  {
    img: '/assets/company/team2.png',
  },
  {
    icon: <Plus size={40} />,
  },
];

export default function CompanyTeam() {
  return (
    <>
      <SectionHeading text="Our Team" />
      <div className="hidden gap-4 lg:flex lg:gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="justify-cente flex max-w-max flex-col items-center lg:gap-2">
            {member.img ? (
              <>
                <Image
                  className="rounded-md"
                  src={member.img}
                  alt="team picture"
                  width={150}
                  height={150}
                />
                <h5 className="font-semibold text-dark-nameWhite lg:text-base">John Doe</h5>
                <p className="text-xs text-dark-name ">CEO</p>
                <div className="flex items-center gap-2.5 text-dark-name">
                  <CompanyLinkedin />
                  <InstagramIcon />
                </div>
              </>
            ) : (
              <span className="flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-md border border-dark-background3 bg-dark-primary">
                {member.icon}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="flex max-w-max flex-col items-center justify-center lg:hidden lg:gap-2">
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
