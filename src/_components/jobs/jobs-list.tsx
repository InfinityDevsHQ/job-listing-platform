import JobCard from "./_components/job-card";
import { JobListProps } from "@/types/types";

export default function Jobs({jobs}: JobListProps) {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {jobs?.map((job, index) => (
        <JobCard
          key={index}
          job={job}
        />
      ))}
    </div>
  );
}
