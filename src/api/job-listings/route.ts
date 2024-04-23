export async function GET() {
  const res = await fetch(
    "http://devel.clickjob.ai:8001/api/v1/pgsql/job-listings/all?skip=0&limit=10&allow_for_translated_jobs=false"
  );
  const data = await res.json();
  return Response.json({ data });
}
