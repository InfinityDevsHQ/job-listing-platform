'use client';
import { useJobListingById } from '@/app/utils/rq/hooks/use-job-listing-by-id';

export default function NewCard({ jobId }: { jobId: string }) {
  const { isLoading, error, data: job } = useJobListingById(jobId);
  if (job) return <div className="bg-white p-4"></div>;
}
