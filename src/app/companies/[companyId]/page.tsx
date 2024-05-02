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
  try {
    const companyData = await getCompanyById(companyId);
    return (
      <div className="mt-8 flex flex-col gap-4 bg-white p-4 lg:gap-8 lg:p-8">
        {/* COVER AND PROFILE */}
        <h1 className="text-4xl">{JSON.stringify(companyData)}</h1>
        <CompanyHeader />
        <div className="grid lg:grid-cols-3 lg:gap-8">
          <CompanyMainPanel />
          <CompanyContactPanel />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error:', error);
    return notFound();
  }
};
export default Company;
