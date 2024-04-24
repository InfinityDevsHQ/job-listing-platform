import Image from 'next/image';

import { JobProps } from '@/types/types';

export default function JobCardDetails({ job }: JobProps) {
  return (
    <>
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <div className="flex w-full flex-wrap items-center gap-3 divide-x-2 divide-gray-200 lg:justify-between lg:gap-4">
          <span className="flex items-center gap-2.5">
            <Image alt="timer" src={'/assets/icons/timer.svg'} width={14} height={12} />
            <span className="text-xxs font-semibold capitalize text-gray-950 lg:text-sm lg:font-normal">
              {job.employment_type}
            </span>
          </span>
          {(job?.city || job?.country) && (
            <span className="flex items-center gap-2.5 pl-4">
              <Image
                alt="map-marker-alt"
                src={'/assets/icons/map-marker-alt.svg'}
                width={11}
                height={12}
              />
              <span className="text-xxs font-semibold text-gray-950 lg:text-sm lg:font-normal">
                {job?.city == 'Worldwide' ? job?.city : `${[job?.city, job?.country].join(', ')}`}
              </span>
            </span>
          )}
          <span className="flex items-center gap-2.5 lg:pl-7">
            <Image
              alt="circle-dollar"
              src={'/assets/icons/circle-dollar.svg'}
              width={14}
              height={12}
            />
            <span className="text-xxs font-semibold text-gray-950 lg:text-sm lg:font-normal">
              ${job?.remuneration_from}-${job?.remuneration_to}/Month
            </span>
          </span>
          <span className="flex items-center gap-2.5 lg:pl-7">
            <Image alt="users" src={'/assets/icons/users.svg'} width={18} height={12} />
            <span className="text-xxs font-semibold text-gray-950 lg:text-sm lg:font-normal">
              {job?.applicants} Applied
            </span>
          </span>
          <span className="flex items-center gap-2.5 lg:pl-7">
            <Image
              alt="calendar-alt"
              src={'/assets/icons/calendar-alt.svg'}
              width={13}
              height={12}
            />
            <span className="text-xxs font-semibold text-gray-950 lg:text-sm lg:font-normal">
              {job?.created ? new Date(job.created).toDateString() : ''}
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
