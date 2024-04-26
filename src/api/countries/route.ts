export async function GET() {
  const res = await fetch('http://devel.clickjob.ai:8001//api/v1/platform/country');
  const data = await res.json();
  return Response.json({ data });
}
