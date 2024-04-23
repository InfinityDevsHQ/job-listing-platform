export async function GET() {
  const res = await fetch(
    "http://devel.clickjob.ai:8002/api/v1/pgsql/job-listings/all"
  );
  const data = await res.json();
  return Response.json({ data });
}
