import { BadgeProps } from "@/types/types";
import { cn } from "@/lib/utils";

const Badge = ({ text, color, bgColor }: BadgeProps) => {
	return (
		<span
			className={cn(
				"rounded-md text-sm font-bold py-1 px-2 border border-neutral-200 bg-gray-100 text-neutral-500",
				{
					"border-transparent": bgColor,
				}
			)}
		>
			{text}
		</span>
	);
};

export default Badge;
