import CompanyHeader from './_components/company-header';
import CompanyContactPanel from './_components/main/company-contact-pannel';
import CompanyMainPanel from './_components/main/company-main-pannel';
const Company = () => {
  return (
    <div className="mt-8 flex flex-col gap-4 bg-white p-4 lg:gap-8 lg:p-8">
      {/* COVER AND PROFILE */}
      <CompanyHeader />
      <div className="grid lg:grid-cols-3 lg:gap-8">
        <CompanyMainPanel />
        <CompanyContactPanel />
      </div>
    </div>
  );
};
export default Company;
