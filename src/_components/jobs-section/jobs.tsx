import CompanyPlane from "@/components/svgs/company-plane";
import CompanyCard from "./_components/comapny-card";
import JobCard from "./_components/job-card";
import SearchJobs from "./search-job";

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
            <span>
              <svg
                width="22"
                height="27"
                viewBox="0 0 22 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.3457 8.79102C3.125 10.9395 2.34375 13.1367 2.34375 14.9434C2.34375 19.9727 6.10352 23.7812 10.9375 23.7812C15.6738 23.7812 19.5312 19.9727 19.5312 14.9434C19.5312 13.5273 18.9941 11.623 18.1152 9.76758C17.334 8.00977 16.3086 6.44727 15.332 5.42188C15.1367 5.66602 14.8926 6.00781 14.5996 6.34961C14.502 6.54492 14.3555 6.74023 14.209 6.93555C14.0137 7.22852 13.7695 7.57031 13.623 7.76562C13.4277 8.05859 13.0859 8.20508 12.6953 8.25391C12.3535 8.25391 12.0117 8.05859 11.7676 7.76562C11.6211 7.57031 11.4258 7.32617 11.2305 7.13086C10.3027 5.91016 9.22852 4.54297 8.30078 3.61523C6.98242 4.88477 5.51758 6.74023 4.3457 8.79102ZM9.7168 1.71094C10.6445 2.58984 11.7188 3.9082 12.6465 5.08008L12.6953 5.03125C13.0371 4.49414 13.4766 3.9082 13.8672 3.51758C14.6973 2.78516 15.918 2.78516 16.748 3.51758C18.0176 4.78711 19.2871 6.74023 20.2148 8.79102C21.1914 10.793 21.875 13.0391 21.875 14.9434C21.875 21.2422 16.9922 26.125 10.9375 26.125C4.78516 26.125 0 21.1934 0 14.9434C0 12.502 0.976562 9.91406 2.29492 7.61914C3.61328 5.32422 5.32227 3.17578 6.88477 1.71094C7.71484 0.978516 8.93555 0.978516 9.7168 1.71094ZM10.9863 21.4375C7.91016 21.4375 5.46875 19.4844 5.41992 16.1152C5.41992 14.6504 6.25 13.332 7.91016 11.2812C8.25195 10.8906 8.83789 10.8906 9.13086 11.2812C9.96094 12.3066 11.377 14.1621 12.207 15.1875C12.5 15.5781 13.0859 15.5781 13.3789 15.1875L14.6484 13.7715C14.9414 13.3809 15.5273 13.4297 15.7227 13.8691C16.9434 16.1152 16.4062 18.9961 14.3555 20.4121C13.3301 21.0957 12.2559 21.4375 10.9863 21.4375Z"
                  fill="#D10028"
                />
              </svg>
            </span>
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
