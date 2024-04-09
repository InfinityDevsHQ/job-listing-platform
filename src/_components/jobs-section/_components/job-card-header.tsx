import { Plane } from "lucide-react";
type JobCardHeaderProps = {
  jobTitle: string;
  company: string;
  urgent?: boolean;
};
export default function JobCardHeader({
  jobTitle,
  company,
  urgent = false,
}: JobCardHeaderProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="p-3 rounded-full bg-third">
          <Plane />
        </span>
        <div>
          <h3 className="text-base font-semibold text-neutral-900">
            {jobTitle}
          </h3>
          <p className="text-neutral-500 text-[11px] leading-[15px] font-medium">
            {company}
            {urgent && (
              <span className="ml-[15px] bg-greenish font-normal px-[5px] py-1 text-white text-11 leading-[15px] rounded-5">
                Urgent
              </span>
            )}
          </p>
        </div>
        <button
          type="button"
          aria-label="Save Job"
          className="flex items-center justify-center w-30 h-30 border border-neutral-300"
        >
          <span className="px-[11.21px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-neutral-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}
