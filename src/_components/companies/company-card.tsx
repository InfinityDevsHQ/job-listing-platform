import Image from "next/image";

import CompanyArrow from "@/components/svgs/company-arrow";
import CompanyPhone from "@/components/svgs/company-phone";
import Button from "@/components/ui/button";

import { CompanyCardProps } from "@/types/types";

const CompanyCard = ({
	companyName,
	companyLogo,
	companyDescription,
}: CompanyCardProps) => {
	return (
		<div className="flex flex-col gap-4 lg:gap-8 p-4 lg:p-8 bg-white rounded-md border border-gray-200">
			<div className="flex items-center gap-5">
				<div className="flex items-center justify-center h-16 w-16 rounded-full bg-neutral-50">
					<Image
						src={companyLogo}
						alt={`${companyName} logo`}
						width={30}
						height={30}
						className="lg:hidden"
					/>
					<Image
						src={companyLogo}
						alt={`${companyName} logo`}
						width={44}
						height={44}
						className="hidden lg:block"
					/>
				</div>
				<h3 className="font-bold text-3xl lg:text-4xl text-neutral-950">
					{companyName}
				</h3>
			</div>
			<p className="text-sm lg:text-base text-neutral-500">
				{companyDescription}
			</p>
			<div className="flex justify-end">
				<Button
					text="Load More"
					variant="primary"
				/>
			</div>
		</div>
	);
};

export default CompanyCard;
