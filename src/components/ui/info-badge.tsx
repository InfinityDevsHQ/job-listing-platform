import { InfoBadgeProps } from "@/types/types";

const InfoBadge = ({ heading, desc }: InfoBadgeProps) => {
	return (
		<div className="max-w-max flex-shrink-0 flex flex-col items-center justify-center gap-2 lg:gap-4 rounded-md p-2 lg:p-4 border border-gray-200 bg-gray-50">
			<span className="text-xxs lg:text-base text-gray-500">{heading}</span>
			<span className="text-xs lg:text-xl font-bold text-gray-700">{desc}</span>
		</div>
	);
};

export default InfoBadge;
