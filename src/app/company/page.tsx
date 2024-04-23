import Button from "@/components/ui/button";
import Image from "next/image";
import SectionHeading from "./section-heading";
import CompanyInsta from "@/components/svgs/company-insta";
import CompanyLinkedin from "@/components/svgs/company-linedin";
import JobCard from "@/_components/jobs/_components/job-card";
export default function Company() {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      external_company_name: "Semrush",
      is_hot: true,
      employment_type: "Full time",
      experienceRequired: "1-2 Year",
      location: "NY, USA",
      salary: "$30k-60k/Month",
      applications: 567,
      datePosted: "23 Mar 2023",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorum quae, magnam reprehenderit voluptatem quos accusantium necessitatibus, quia nemo, minima illo ipsa laboriosam voluptatum magni eveniet excepturi? Minus, vel consequuntur!",
    },
    {
      id: 2,
      title: "Software Engineer",
      external_company_name: "Google",
      is_hot: false,
      employment_type: "Full time",
      experienceRequired: "3-5 Years",
      location: "Mountain View, CA, USA",
      salary: "$100k-150k/Year",
      applications: 5067,
      datePosted: "23 Mar 2023",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorum quae, magnam reprehenderit voluptatem quos accusantium necessitatibus, quia nemo, minima illo ipsa laboriosam voluptatum magni eveniet excepturi? Minus, vel consequuntur!",
    },
    {
      id: 3,
      title: "Data Scientist",
      external_company_name: "Microsoft",
      is_hot: true,
      employment_type: "Contract",
      experienceRequired: "2-4 Years",
      location: "Seattle, WA, USA",
      salary: "$80k-120k/Year",
      applications: 1567,
      datePosted: "23 Mar 2023",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorum quae, magnam reprehenderit voluptatem quos accusantium necessitatibus, quia nemo, minima illo ipsa laboriosam voluptatum magni eveniet excepturi? Minus, vel consequuntur!",
    },
    {
      id: 4,
      title: "UX/UI Designer",
      external_company_name: "Apple",
      is_hot: false,
      employment_type: "Part time",
      experienceRequired: "1-3 Years",
      location: "Cupertino, CA, USA",
      salary: "$60k-90k/Year",
      applications: 5670,
      datePosted: "23 Mar 2023",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorum quae, magnam reprehenderit voluptatem quos accusantium necessitatibus, quia nemo, minima illo ipsa laboriosam voluptatum magni eveniet excepturi? Minus, vel consequuntur!",
    },
  ];
  return (
    <div className="mt-8 flex flex-col gap-4 lg:gap-8 p-4 lg:p-8 bg-white">
      {/* COVER AND PROFILE */}
      <header className="relative lg:mb-16">
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/company/cover.png"}
            alt="cover photo"
            width={1600}
            height={456}
          />
        </div>
        <Image
          src={"/assets/company/profile.png"}
          alt="profile"
          width={150}
          height={150}
          className="absolute top-96 left-8 rounded-full"
        />
      </header>
      {/* NAMES */}
      <div className="flex lg:gap-8 mt-14">
        <h4 className="text-black font-sans lg:text-4xl font-bold">
          Company Name
        </h4>
        <Button text="Follow" />
        <Button text="Get Emails About New Jobs" value={"primary"} />
      </div>
      {/* BIO */}
      <p className="font-sans lg:text-xl text-gray-500">Silicon Valley</p>
      <span className="border border-gray-200" />
      {/* ABOUT */}
      <>
        <SectionHeading text="About" />
        <p className="font-sans text-base text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          fugiat in totam nisi! Tempore reprehenderit quibusdam quasi voluptas.
          Laboriosam nesciunt libero quod commodi facilis rerum recusandae
          veritatis. Placeat, quos dolorum?
        </p>
        <p className="font-sans text-base text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          fugiat in totam nisi! Tempore reprehenderit quibusdam quasi voluptas.
          Laboriosam nesciunt libero quod commodi facilis rerum recusandae
          veritatis. Placeat, quos dolorum? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Commodi minima incidunt inventore quod
          quaerat provident numquam voluptatibus maxime velit atque quis,
          impedit tempore autem dolores? Officiis qui quos distinctio sequi!
        </p>
      </>
      {/* Technologies */}
      <SectionHeading text="What Technologies We Use" />
      {/* Team */}
      <SectionHeading text="Our Team" />
      <div className="flex flex-col justify-center items-center lg:gap-2 max-w-max">
        <Image
          className="rounded-md"
          src={"/assets/company/team.png"}
          alt="This"
          width={150}
          height={150}
        />
        <h5 className="text-gray-500 lg:text-base font-semibold">John Doe</h5>
        <p className="text-xs text-gray-500 font-sans">CEO</p>
        <div className="flex items-center gap-2.5">
          <CompanyLinkedin black width={11} height={12} />
          <CompanyInsta width={11} height={12} />
        </div>
      </div>
      {/* Jobs Opportunities */}
      <SectionHeading text="Job Opportunities" />
      {jobs?.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}
