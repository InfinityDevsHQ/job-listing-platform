import JobFeedback from './job-feedback';
import JobInfo from './job-info';
type JobHighlightsPanel = {};
const JobHighlightsPanel = () => {
  return (
    <div className="order-1 flex min-h-full max-w-max flex-shrink-0 flex-col justify-between gap-4 lg:order-2 lg:gap-8">
      <JobInfo
        salary="30k-40k"
        experience="1-4 years"
        city={searchedJob.city}
        country={searchedJob.country}
        created={searchedJob.created}
        applicants={searchedJob.applicants}
      />
      <JobFeedback className="hidden lg:flex" />
    </div>
  );
};
export default JobHighlightsPanel;
