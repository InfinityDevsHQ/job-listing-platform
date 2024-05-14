import { Skeleton } from '@/components/ui/skeleton';

const Loader = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {/* Show loading Skeleton here */}
      <Skeleton className="h-96 w-96" />
      <Skeleton className="h-96 w-96" />
      <Skeleton className="h-96 w-96" />
      <Skeleton className="w-200 h-96" />
    </div>
  );
};
export default Loader;
