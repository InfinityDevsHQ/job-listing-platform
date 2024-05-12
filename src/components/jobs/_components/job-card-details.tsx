import { cn, formatNumber } from '@/lib/utils';
import { JobProps } from '@/types/types';

export default function JobCardDetails({ job, size }: JobProps) {
  return (
    <>
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <div className="flex w-full flex-wrap items-center gap-3">
          {job.category && (
            <span
              className={cn('text-sm font-semibold text-slate-500 lg:text-base lg:font-normal', {
                'lg:text-lg': size == 'lg',
              })}
            >
              {job?.category?.name}
            </span>
          )}
          {job.employment_type && (
            <>
              <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current text-slate-600">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <span
                className={cn(
                  'text-sm font-semibold capitalize text-slate-500 lg:text-base lg:font-normal',
                  {
                    'lg:text-lg': size == 'lg',
                  }
                )}
              >
                {job.employment_type}
              </span>
            </>
          )}
          {job.work_location_type && (
            <>
              <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current text-slate-600">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <span
                className={cn(
                  'text-sm font-semibold capitalize text-slate-500 lg:text-base lg:font-normal',
                  {
                    'lg:text-lg': size == 'lg',
                  }
                )}
              >
                {job.work_location_type}
              </span>
            </>
          )}
          {job.city && job.country && (
            <>
              <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current text-slate-600">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <span
                className={cn('text-sm font-semibold text-slate-500 lg:text-base lg:font-normal', {
                  'lg:text-lg': size == 'lg',
                })}
              >
                {job?.city == 'Worldwide' ? job?.city : `${[job?.city, job?.country].join(', ')}`}
              </span>
            </>
          )}
          {job.remuneration_from || job.remuneration_to ? (
            <>
              <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current text-slate-600">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <span
                className={cn('text-sm font-semibold text-slate-500 lg:text-base lg:font-normal', {
                  'lg:text-lg': size == 'lg',
                })}
              >
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
          <span
            className={cn('text-sm font-semibold text-slate-500 lg:text-base lg:font-normal', {
              'lg:text-lg': size == 'lg',
            })}
          >
            {job?.applicants || 0} Applicants
          </span>
          {job?.created && (
            <>
              <svg viewBox="0 0 2 2" className="h-1 w-1 fill-current text-slate-600">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <span
                className={cn('text-sm font-semibold text-slate-500 lg:text-base lg:font-normal', {
                  'lg:text-lg': size == 'lg',
                })}
              >
                {job?.created ? new Date(job.created).toDateString() : ''}
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
}
