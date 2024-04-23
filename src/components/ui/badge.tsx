import { BadgeProps } from "@/types/types";

const Badge = ({ text, color, bgColor }: BadgeProps) => {
	return (
		<span className="rounded-md text-sm font-bold text-neutral-500 border border-neutral-200 bg-gray-100 py-1 px-2">
			{text}
		</span>
	);
};

export default Badge;
