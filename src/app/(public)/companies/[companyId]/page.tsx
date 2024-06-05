import { getCompanyById } from '@/lib/companies';
import { notFound } from 'next/navigation';
import CompanyHeader from './_components/company-header';
import CompanyContactPanel from './_components/main/company-contact-pannel';
import CompanyMainPanel from './_components/main/company-main-pannel';
type CompanySlug = {
  params: { companyId: number };
};
const Company = async ({ params }: CompanySlug) => {
  const companyId = params.companyId;
  if (!companyId) {
    return notFound();
  }
  const companyData = await getCompanyById(companyId);

  return (
    <div className="mt-8 flex flex-col gap-4 bg-white p-4 lg:gap-8 lg:p-8">
      {companyData && <pre>{JSON.stringify(companyData, null, 2)}</pre>}

      {/* COVER AND PROFILE */}
      <CompanyHeader
        profilePhotoUrl={companyData.logo_url}
        coverPhotoUrl="/assets/company/cover.png"
      />
      <div className="grid lg:grid-cols-3 lg:gap-8">
        <CompanyMainPanel />
        <CompanyContactPanel />
      </div>
    </div>
  );
};
export default Company;
