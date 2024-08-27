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
    <div className="mx-auto mt-8 flex max-w-screen-2xl flex-col gap-4 bg-white p-4 lg:gap-8 lg:p-8">
      {/* COVER AND PROFILE */}
      <CompanyHeader
        profilePhotoUrl={companyData.logo_url}
        coverPhotoUrl="/assets/company/cover.png"
      />
      <div className="grid lg:grid-cols-4 lg:gap-8">
        <CompanyMainPanel companyInfo={companyData} />
        <CompanyContactPanel company={companyData} />
      </div>
    </div>
  );
};
export default Company;
