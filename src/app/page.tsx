import { getPromotedCompanies } from '@/lib/companies';
import { getJobs } from '@/lib/jobs';

export default async function Home() {
  const jobs = await getJobs({});
  const companies = await getPromotedCompanies();
  let skip = 10;
  let limit = 25;
  console.log('Jobs', jobs.length);
  const loadMore = async () => {
    skip = skip + 25;
    limit = limit + 25;
    const newJobs = await getJobs({ skip, limit });
    jobs.push(...newJobs);
  };
  return (
    <div>
      <h2 className="text-4xl font-bold">Jobs data</h2>
      <pre className="max-w-10">{JSON.stringify(jobs, null, 2)}</pre>
      <h2 className="text-4xl font-bold">Companies data</h2>
      <pre className="max-w-10">{JSON.stringify(companies, null, 2)}</pre>
    </div>
  );
}
