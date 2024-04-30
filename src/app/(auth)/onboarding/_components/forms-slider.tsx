import ContactPage from '../tabs/contact-page';
import FilterJobs from '../tabs/filter-jobs';
import Finish from '../tabs/finish';
import LocationPage from '../tabs/location-page';
import UploadCV from '../tabs/upload-cv';
type FormsSliderProps = {
  step?: string;
};
export default function FormsSlider({ step }: FormsSliderProps) {
  const stepComponents: Record<string, JSX.Element> = {
    location: <LocationPage />,
    'upload-cv': <UploadCV />,
    'filter-jobs': <FilterJobs />,
    contact: <ContactPage />,
    'terms-and-conditions': <Finish />,
  };

  const renderStep = (step: string | undefined) => {
    if (!step) {
      return <LocationPage />;
    }
    return stepComponents[step] || <LocationPage />; // Default to LocationPage
  };

  // Usage
  return renderStep(step);
}
