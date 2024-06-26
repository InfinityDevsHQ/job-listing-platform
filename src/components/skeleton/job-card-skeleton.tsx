import { Skeleton } from '@/components/ui/skeleton';

export const JobCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <div className="relative flex transform flex-col gap-4 rounded-2xl bg-gray-100 p-4 shadow">
        <div className="flex items-center gap-4">
          <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-gray-200 md:flex"></div>
          <div className="flex flex-col gap-2">
            <h3 className="flex items-center gap-4 pr-5 text-lg md:pr-0">
              <Skeleton className="h-5 w-20 bg-gray-200" />
            </h3>
            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <div className="p grid w-full grid-cols-3 items-center gap-3 lg:grid-cols-6">
                <Skeleton className="h-4 w-24 bg-gray-200" />
                <Skeleton className="h-4 w-14 bg-gray-200" />
                <Skeleton className="h-4 w-20 bg-gray-200" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-20 bg-gray-200" />
                <Skeleton className="h-4 w-20 bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
