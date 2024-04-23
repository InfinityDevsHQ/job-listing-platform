import { InfoListProps } from "@/types/types";

const InfoList = ({ list }: InfoListProps) => {
	return (
		<ul className="list list-disc list-inside">
			{list?.map((listItem, index) => (
				<li
					key={index}
					className="text-xs lg:text-base text-gray-500"
				>
					{listItem}
				</li>
			))}
		</ul>
	);
};

export default InfoList;
