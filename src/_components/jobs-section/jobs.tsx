import CompanyPlane from "@/components/svgs/company-plane";
import CompanyCard from "./_components/comapny-card";
import JobCard from "./_components/job-card";
import SearchJobs from "./search-job";
import CompanyFlame from "@/components/svgs/company-flame";

export default function Jobs() {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      company: "Semrush",
      urgent: true,
      jobType: "Full time",
      experienceRequired: "1-2 Year",
      location: "NY, USA",
      salary: "$30k-60k/Month",
      applications: 567,
      datePosted: "23 Mar 2023",
    },
    {
      title: "Software Engineer",
      company: "Google",
      urgent: false,
      jobType: "Full time",
      experienceRequired: "3-5 Years",
      location: "Mountain View, CA, USA",
      salary: "$100k-150k/Year",
      applications: 5067,
      datePosted: "23 Mar 2023",
    },
    {
      title: "Data Scientist",
      company: "Microsoft",
      urgent: true,
      jobType: "Contract",
      experienceRequired: "2-4 Years",
      location: "Seattle, WA, USA",
      salary: "$80k-120k/Year",
      applications: 1567,
      datePosted: "23 Mar 2023",
    },
    {
      title: "UX/UI Designer",
      company: "Apple",
      urgent: false,
      jobType: "Part time",
      experienceRequired: "1-3 Years",
      location: "Cupertino, CA, USA",
      salary: "$60k-90k/Year",
      applications: 5670,
      datePosted: "23 Mar 2023",
    },
  ];
  const companies = [
    {
      imgUrl: "/assets/webglobe.png",
      company: "Webglobe",
      description: `  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, odio quaerat labore deleniti sapiente iste! Consequuntur sunt tempore expedita quidem unde. Corporis ipsum ducimus voluptas asperiores fugit maxime, adipisci minus.
    `,
    },
  ];
  return (
    <section className="grid grid-cols-3 gap-8 px-10 pt-10 bg-neutral-200">
      <div className="col-span-2 flex flex-col gap-5">
        <SearchJobs />
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <CompanyFlame width={27} height={27} />

            <h4 className="text-2xl font-bold text-gray-medium">
              Latest Hot Offers
            </h4>
          </div>
          <p className="text-base font-bold  font-roboto text-gray-third">
            12,054 JOBS
          </p>
        </div>

        {jobs.map((job, index) => (
          <JobCard
            key={index}
            company={job.company}
            jobTitle={job.title}
            jobType={job.jobType}
            experienceRequired={job.experienceRequired}
            salary={job.salary}
            location={job.location}
            applications={job.applications}
            date={job.datePosted}
            urgent={job.urgent}
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
            omnis cumque veniam soluta enim excepturi. Doloremque quo distinctio
            reiciendis obcaecati vero magnam perferendis ipsum, dolorum, ipsam
            temporibus reprehenderit illo. Mollitia?"
          />
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <CompanyPlane />
            <h4 className="text-26 font-bold text-gray-medium">
              Companies That Will Frow You Forword
            </h4>
          </div>
        </div>
        {companies.map((company, index) => (
          <CompanyCard
            key={index}
            companyName={company.company}
            description={company.description}
            imgUrl={company.imgUrl}
          />
        ))}
      </div>
    </section>
  );
}
