'use client';
import JobCard from '@/_components/jobs/_components/job-card';
import CompanyCommunity from '@/components/svgs/company-community';
import CompanyDictionary from '@/components/svgs/company-dictionary';
import CompanyInsta from '@/components/svgs/company-insta';
import CompanyLinkedin from '@/components/svgs/company-linedin';
import CompanyLocation from '@/components/svgs/company-location';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
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
          className="absolute left-8 top-96 hidden rounded-full lg:inline-block"
        />
      </header>
      <div className="grid lg:grid-cols-3 lg:gap-8">
        <div className="flex flex-col gap-4 lg:col-span-2 lg:gap-8">
          {/* NAMES */}
          <div className="mt-14 flex items-center gap-4 lg:gap-8">
            <Image
              src={'/assets/company/profile.png'}
              alt="profile"
              width={102}
              height={102}
              className="rounded-full lg:hidden "
            />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 lg:gap-4">
                <h4 className="text-base font-bold text-black lg:text-4xl">Company Name</h4>
                <Button text="Follow" />
              </div>
              <p className="text-sm text-gray-500 lg:hidden">Silicon Valley</p>
              <Button text="Get Emails About New Jobs" variant={'primary'} className="lg:hidden" />
            </div>
            <Button
              text="Get Emails About New Jobs"
              variant={'primary'}
              className="hidden lg:flex"
            />
          </div>
          {/* BIO */}
          <p className="hidden text-xl text-gray-500 lg:block">Silicon Valley</p>
          {/* Fields of company */}
          <div className="flex w-full flex-col gap-4 border-gray-200 text-gray-500 lg:flex-row lg:gap-0 lg:divide-x-2">
            <div className="flex flex-1 justify-between lg:pr-6">
              <div className="flex items-center gap-2">
                <p className="font-bold lg:text-xl">Field of Company</p>
              </div>
              <p className="lg:text-xl">Education</p>
            </div>
            <div className="flex flex-1 justify-between lg:pl-6">
              <div className="flex items-center gap-2">
                <CompanyCommunity />
                <p className="font-bold lg:text-xl">Size f Company</p>
              </div>
              <p className="lg:text-xl">0-100 Employees</p>
            </div>
          </div>
          <span className="border border-gray-200" />
          {/* Language */}
          <div className="flex items-center gap-2">
            <CompanyDictionary width={18} height={14} />
            <SectionHeading text="Languages" />
          </div>
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
          <span className="border border-gray-200" />
          {/* ABOUT */}
          <>
            <SectionHeading text="About" />
            <p className="text-base text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat in totam nisi!
              Tempore reprehenderit quibusdam quasi voluptas. Laboriosam nesciunt libero quod
              commodi facilis rerum recusandae veritatis. Placeat, quos dolorum?
            </p>
            <p className="text-base text-gray-500">
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
            <p className="text-xs text-gray-500">CEO</p>
            <div className="flex items-center gap-2.5">
              <CompanyLinkedin black width={11} height={12} />
              <CompanyInsta width={11} height={12} />
            </div>
          </div>
          {/* Jobs Opportunities */}
          <SectionHeading text="Job Opportunities" />
          {allJobs?.map((job, index) => <JobCard key={index} job={job} />)}
        </div>

        <div className="hidden flex-col gap-8 lg:flex">
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
          <div className="flex flex-col gap-8 rounded-md border border-gray-200 p-8">
            <h5 className="font-bold text-gray-700 lg:text-xl">
              Did&apos;t choose from current offers?
            </h5>
            <p className="text-gray-500 lg:text-base">
              Leave us your email and we will keep you informed about new offers from Company.
              According to our rules.
            </p>
            <Input placeholder="Email" type="email" />
            <Button text="Subscribe" variant="primary" className="self-end" />
          </div>
        </div>
      </div>
    </div>
  );
}
