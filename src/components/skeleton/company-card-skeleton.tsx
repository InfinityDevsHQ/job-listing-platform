import { Skeleton } from '../ui/skeleton';

export default function CompanyCardSkeleton() {
  return (
    <div className="flex min-w-full flex-col gap-4 border border-neutral-200 bg-white p-4 lg:w-auto">
      <div className="flex items-center gap-5">
        <Skeleton className="h-12 w-12 rounded-full bg-neutral-200" />
        <Skeleton className="h-10 w-48" />
      </div>
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-10 w-28 self-end" />
    </div>
  );
}
