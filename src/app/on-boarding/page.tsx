import Intro from './_components/intro';
import ContactPage from './tabs/contact-page';
import FilterJobs from './tabs/filter-jobs';
import Finish from './tabs/finish';
import LocationPage from './tabs/location-page';
import UploadCV from './tabs/upload-cv';
export default function Home({ searchParams }: { searchParams?: { step?: string } }) {
  const step = searchParams?.step;
  let currentForm;
  switch (step) {
    case 'location':
      currentForm = <LocationPage />;
      break;
    case 'upload-cv':
      currentForm = <UploadCV />;
      break;
    case 'filter-jobs':
      currentForm = <FilterJobs />;
      break;
    case 'contact':
      currentForm = <ContactPage />;
      break;
    case 'terms-and-conditions':
      currentForm = <Finish />;
      break;
    default:
      currentForm = <LocationPage />;
      break;
  }
  return (
    <>
      <div className="flex flex-col items-center justify-between p-4">
        <Intro />
        {/* <StepNavigator /> */}
        {currentForm}
      </div>
    </>
  );
}
