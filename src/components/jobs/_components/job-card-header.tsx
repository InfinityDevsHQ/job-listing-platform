import { JobProps } from '@/types/types';

const JobCardHeader = ({ job }: JobProps) => {
  return (
    <div className="flex items-start justify-between">
      <h3 className="flex items-center gap-4 pr-5 text-lg font-semibold text-neutral-900 md:pr-0">
        {job?.title}
      </h3>
      {/* <Button variant="outline" size="icon-xs">
        <BookmarkIcon className="h-4 w-4" />
        <BookmarkCheckIcon className="h-4 w-4" />
      </Button> */}
    </div>
  );
};

export default JobCardHeader;
