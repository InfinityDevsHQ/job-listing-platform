import { formatNumber } from '@/lib/utils';
import { JobProps } from '@/types/types';

export default function JobCardDetails({ job }: JobProps) {
  return (
    <>
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <div className="flex w-full flex-wrap items-center gap-3">
          {job.category && (
            <span className="text-sm font-semibold text-slate-500 lg:font-normal">
              {job?.category?.name}
            </span>
          )}
          {job.employment_type && (
            <>
              <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current text-slate-600">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <span className="text-sm font-semibold capitalize text-slate-500 lg:font-normal">
                {job.employment_type}
              </span>
            </>
          )}
          {job.work_location_type && (
            <>
              <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current text-slate-600">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <span className="text-sm font-semibold capitalize text-slate-500 lg:font-normal">
                {job.work_location_type}
              </span>
            </>
          )}
          {job.city && job.country && (
            <>
              <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current text-slate-600">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <span className="text-sm font-semibold text-slate-500 lg:font-normal">
                {job?.city == 'Worldwide' ? job?.city : `${[job?.city, job?.country].join(', ')}`}
              </span>
            </>
          )}
          {job.remuneration_from || job.remuneration_to ? (
            <>
              <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current text-slate-600">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <span className="text-sm font-semibold text-slate-500 lg:font-normal">
                {job.remuneration_currency} {formatNumber(job?.remuneration_from)} -{' '}
                {formatNumber(job?.remuneration_to)}
              </span>
            </>
          ) : (
            <></>
          )}
          <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current text-slate-600">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <span className="text-sm font-semibold text-slate-500 lg:font-normal">
            {job?.applicants || 0} Applicants
          </span>
          {job?.created && (
            <>
              <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current text-slate-600">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <span className="text-sm font-semibold text-slate-500 lg:font-normal">
                {job?.created ? new Date(job.created).toDateString() : ''}
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
}
