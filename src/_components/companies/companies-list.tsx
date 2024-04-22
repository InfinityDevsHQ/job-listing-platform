import CompanyCard from '@/_components/companies/company-card'

import { CompaniesListProps } from '@/types/types'

const CompaniesList = ({companies}: CompaniesListProps) => {
  return (
    <div className="flex flex-col">
      {companies?.map((company, index) => (
            <CompanyCard
              key={index}
              companyName={company?.name}
              companyLogo={company.logo_url}
              companyDescription={company.description}
            />
          ))}
    </div>
  );
}

export default CompaniesList