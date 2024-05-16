import JobFeedback from './job-feedback';
import JobInfo from './job-info';
type JobHighlightsPanel = {};
const JobHighlightsPanel = () => {
  const searchedJob = {
    city: 'Test',
    country: '',
    created: new Date().toString(),
    applicants: 2,
    employment_type: 'Remote',
  };
  return (
    <div className="order-1 flex min-h-full max-w-max flex-shrink-0 flex-col justify-between gap-4 lg:order-2 lg:gap-8">
      <JobInfo
        remuneration_from={30}
        remuneration_to={40}
        city={searchedJob.city}
        country={searchedJob.country}
        created={searchedJob.created}
        applicants={searchedJob.applicants}
        employment_type={searchedJob.employment_type}
      />
      <JobFeedback className="hidden lg:flex" />
    </div>
  );
};
export default JobHighlightsPanel;
