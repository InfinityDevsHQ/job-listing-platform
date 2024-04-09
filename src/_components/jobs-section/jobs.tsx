import CompanyCard from "./_components/comapny-card";
import JobCard from "./_components/job-card";
import SearchJobs from "./search-job";

export default function Jobs() {
  return (
    <section>
      <SearchJobs />
      <JobCard />
      <CompanyCard
        imgUrl="/assets/webglobe.png"
        companyName="Webglobe"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit odit expedita quam neque quis, autem qui, non perspiciatis assumenda, quos enim corrupti? Ea eius et modi rem minima reprehenderit atque?"
      />
    </section>
  );
}
