import CompanyCard from "@/_components/companies/company-card";

import { CompaniesListProps } from "@/types/types";

const CompaniesList = ({ companies }: CompaniesListProps) => {
	return (
		<div className="flex lg:flex-col gap-4 lg:gap-8">
			{companies?.map((company, index) => (
				<CompanyCard
					key={index}
					companyLogo={company.companyLogo}
					companyName={company.companyName}
					companyDescription={company.companyDescription}
				/>
			))}
		</div>
	);
};

export default CompaniesList;
