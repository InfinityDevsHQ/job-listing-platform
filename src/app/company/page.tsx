'use client';
import JobCard from '@/_components/jobs/_components/job-card';
import CompanyInsta from '@/components/svgs/company-insta';
import CompanyLinkedin from '@/components/svgs/company-linedin';
import Button from '@/components/ui/button';
import useJobListingsData from '@/stores/job-listings-store';
import Image from 'next/image';
import SectionHeading from './section-heading';
export default function Company() {
  const { allJobs } = useJobListingsData();
  return (
    <div className="mt-8 flex flex-col gap-4 bg-white p-4 lg:gap-8 lg:p-8">
      {/* COVER AND PROFILE */}
      <header className="relative lg:mb-16">
        <div className="flex items-center justify-center">
          <Image src={'/assets/company/cover.png'} alt="cover photo" width={1600} height={456} />
        </div>
        <Image
          src={'/assets/company/profile.png'}
          alt="profile"
          width={150}
          height={150}
          className="absolute left-8 top-96 rounded-full"
        />
      </header>
      <div className="grid grid-cols-3">
        <div className="col-span-2 flex flex-col gap-4 lg:gap-8">
          {/* NAMES */}
          <div className="mt-14 flex lg:gap-8">
            <h4 className="font-sans font-bold text-black lg:text-4xl">Company Name</h4>
            <Button text="Follow" />
            <Button text="Get Emails About New Jobs" variant={'primary'} />
          </div>
          {/* BIO */}
          <p className="font-sans text-gray-500 lg:text-xl">Silicon Valley</p>
          <span className="border border-gray-200" />
          {/* ABOUT */}
          <>
            <SectionHeading text="About" />
            <p className="font-sans text-base text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat in totam nisi!
              Tempore reprehenderit quibusdam quasi voluptas. Laboriosam nesciunt libero quod
              commodi facilis rerum recusandae veritatis. Placeat, quos dolorum?
            </p>
            <p className="font-sans text-base text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat in totam nisi!
              Tempore reprehenderit quibusdam quasi voluptas. Laboriosam nesciunt libero quod
              commodi facilis rerum recusandae veritatis. Placeat, quos dolorum? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Commodi minima incidunt inventore quod quaerat
              provident numquam voluptatibus maxime velit atque quis, impedit tempore autem dolores?
              Officiis qui quos distinctio sequi!
            </p>
          </>
          {/* Technologies */}
          <SectionHeading text="What Technologies We Use" />
          {/* Team */}
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
            <p className="font-sans text-xs text-gray-500">CEO</p>
            <div className="flex items-center gap-2.5">
              <CompanyLinkedin black width={11} height={12} />
              <CompanyInsta width={11} height={12} />
            </div>
          </div>
          {/* Jobs Opportunities */}
          <SectionHeading text="Job Opportunities" />
          {allJobs?.map((job, index) => <JobCard key={index} job={job} />)}
        </div>
        <div></div>
      </div>
    </div>
  );
}
