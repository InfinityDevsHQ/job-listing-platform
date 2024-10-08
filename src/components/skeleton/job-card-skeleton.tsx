import { Skeleton } from '@/components/ui/skeleton';

export const JobCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {Array(3)
        .fill(null)
        .map((_, index: number) => (
          <div
            key={index}
            className="relative flex transform flex-col gap-5 rounded-md border-dark-background3 bg-dark-primary p-2.5 shadow sm:p-4 lg:p-8"
          >
            <div className="flex items-center gap-5">
              <div className="h-11 w-11 items-center justify-center self-start rounded-full bg-dark-name lg:h-12 lg:w-12"></div>
              <div className="flex flex-1 flex-col gap-2">
                <div className="pr- text-lg md:pr-0">
                  <div className="mb-2 flex w-full items-center gap-4">
                    <Skeleton className="h-4 w-44 bg-dark-name sm:w-52 lg:h-5" />
                    <Skeleton className="hidden h-5 w-24 lg:block" />
                    <Skeleton className="ml-auto h-6 w-6 pr-2 lg:h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-3 w-20 lg:h-4 lg:w-36" />
                    <Skeleton className="h-3 w-20 lg:hidden lg:h-4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <div className="grid w-full grid-cols-3 items-center justify-between gap-3 lg:grid-cols-6">
                <Skeleton className="h-3 w-16 bg-dark-name sm:w-20" />
                <Skeleton className="h-3 w-16 bg-dark-name sm:w-20" />
                <Skeleton className="h-3 w-16 bg-dark-name sm:w-20" />
                <Skeleton className="h-3 w-16 bg-dark-name sm:w-20" />
                <Skeleton className="h-3 w-16 bg-dark-name sm:w-20" />
                <Skeleton className="h-3 w-16 bg-dark-name sm:w-20" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
