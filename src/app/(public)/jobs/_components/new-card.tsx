'use client';
import { useJobListingById } from '@/app/utils/rq/hooks/use-job-listing-by-id';
import JobCardHeader from '@/components/jobs/_components/job-card-header';
import InfoList from '@/components/ui/info-list';
import InfoSection from '@/components/ui/info-section';
import { SendHorizonal } from 'lucide-react';
import JobInfoPanel from './job-info-panel';
export default function NewCard({ jobId }: { jobId: string }) {
  const { isLoading, error, data: job } = useJobListingById(jobId);
  const WelcomedSkills = [
    `Proficient in Python programming language with a strong understanding of Django and
    FastAPI frameworks.`,
    `Experience in developing and maintaining scalable web applications using Python.`,
    `Ability to mentor and provide technical guidance to junior developers in Python and
    related frameworks.`,
    `Strong problem-solving skills and the ability to troubleshoot and debug complex issues in
    Python applications.`,
    `Familiarity with software development best practices, including code reviews, testing, and
    documentation.`,
    `Excellent communication skills and the ability to collaborate effectively with
    cross-functional teams.`,
  ];
  if (job)
    return (
      <div className="flex flex-col gap-4 bg-white p-4 lg:gap-8">
        <JobCardHeader title={job.title || ''} company="Semrush" is_hot={job.is_hot || false} />
        <section className="flex flex-col gap-5 lg:flex-row lg:gap-8">
          <div className="order-2 flex flex-1 flex-col gap-4 lg:order-1 lg:gap-8">
            <InfoSection heading="About">
              <p className="text-xs text-gray-500 lg:text-base">{job.short_description}</p>
            </InfoSection>
            <InfoSection heading="Job requirements">
              <InfoList
                className="text-neutral-900"
                icon={<SendHorizonal className="h-6 w-3 text-primary-500 lg:mr-4 lg:w-4" />}
                list={job.job_requirements?.split('\n').map((item) => item.replace('• ', ''))}
              />
            </InfoSection>
            <InfoSection heading="Responsibilities">
              <p className="text-xs text-gray-500 lg:text-base">{job.description}</p>
            </InfoSection>
            <InfoSection heading="Welcomed Skills">
              <InfoList
                list={WelcomedSkills}
                icon={<SendHorizonal className="h-6 w-3 text-primary-500 lg:mr-4 lg:w-4" />}
              />
            </InfoSection>
          </div>
          <div className="order-1 lg:order-2">
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
