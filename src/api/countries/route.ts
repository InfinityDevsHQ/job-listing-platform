export async function GET() {
  const res = await fetch('http://devel.clickjob.ai:8000/api/v1/platform/country', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await res.json();
  return Response.json({ data });
}
