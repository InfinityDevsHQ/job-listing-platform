import { getRecruiters } from '@/lib/recruiters';

export default async function RecruitersData() {
  const recruiters = await getRecruiters({});

  return (
    <div>
      <h3>All Recruiters</h3>
      {recruiters && <pre>{JSON.stringify(recruiters, null, 2)}</pre>}
    </div>
  );
}
