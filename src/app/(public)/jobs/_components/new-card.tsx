'use client';
import { useJobListingById } from '@/app/utils/rq/hooks/use-job-listing-by-id';
import JobCardHeader from '@/components/jobs/_components/job-card-header';
import JobInfoPanel from './job-info-panel';

export default function NewCard({ jobId }: { jobId: string }) {
  const { isLoading, error, data: job } = useJobListingById(jobId);
  if (job)
    return (
      <div className=" bg-white p-4">
        <JobCardHeader title={job.title || ''} company="Semrush" is_hot={job.is_hot || false} />
        <section className="flex">
          <div className="flex-1"></div>
          <div>
            <JobInfoPanel
              date={job.created || ''}
              applicants={job.applicants || 0}
              jobType={job.employment_type || ''}
              experience="1-2 Years"
              location={`${job.city},${job.country}`}
              salary={`${job.remuneration_from} - ${job.remuneration_to}`}
            />
          </div>
        </section>
      </div>
    );
}
