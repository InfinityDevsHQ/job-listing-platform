import FilterJobsForm from '@/components/forms/on-boarding/filter-jobs-form';
import Image from 'next/image';
import BoardingHeader from '../_components/boarding-header';

export default function FilterJobs() {
  return (
    <div className="grid w-full grid-cols-2">
      <div className="col-span-2 hidden w-full items-center justify-center lg:col-span-1 lg:flex">
        <Image
          src={'/assets/boarding/filter-job_poster.png'}
          alt="Filter jobs Poster"
          width={580}
          height={580}
        />
      </div>
      <div className="col-span-2 flex w-full flex-col justify-center gap-4 lg:col-span-1 lg:gap-8">
        <BoardingHeader
          title="3. Filter Jobs"
          description="Set your preferences and we'll find the best jobs for you."
        />
        <FilterJobsForm />
      </div>
    </div>
  );
}
