import Image from "next/image";
import { JobProps } from "@/types/types";

import JobCardHeader from "@/_components/jobs/_components/job-card-header";
import JobCardDetails from "@/_components/jobs/_components/job-card-details";
import Badges from "@/components/ui/badges";

export default function JobCard({ job }: JobProps) {
	const badges = [
		{ text: "Python", color: "#ffffff", bgColor: "#000000" },
		{ text: "Django", color: "#000000", bgColor: "#ffffff" },
		{ text: "Sql" },
		{ text: "Git" },
	];
	return (
		<div className="flex flex-col gap-4 lg:gap-8 p-4 lg:p-8 bg-white rounded-md border border-gray-200">
			<JobCardHeader job={job} />
			<JobCardDetails job={job} />
			{job?.description && (
				<p className="text-xs lg:text-sm text-neutral-600">
					{job?.description}
				</p>
			)}
			<span className="border-b border-neutral-200" />
			<Badges badges={badges} />
		</div>
	);
}
