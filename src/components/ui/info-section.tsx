import { InfoSectionProps } from "@/types/types";

const InfoSection = ({ heading, children }: InfoSectionProps) => {
	return (
		<section className="flex flex-col gap-4 lg:gap-8 w-full">
			<h2 className="text-sm lg:text-xl font-bold text-gray-700">{heading}</h2>
			{children}
		</section>
	);
};

export default InfoSection;
