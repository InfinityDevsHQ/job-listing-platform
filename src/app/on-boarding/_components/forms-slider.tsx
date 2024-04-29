import ContactPage from '../tabs/contact-page';
import FilterJobs from '../tabs/filter-jobs';
import Finish from '../tabs/finish';
import LocationPage from '../tabs/location-page';
import UploadCV from '../tabs/upload-cv';
type FormsSliderProps = {
  step?: string;
};
export default function FormsSlider({ step }: FormsSliderProps) {
  switch (step) {
    case 'location':
      return <LocationPage />;
    case 'upload-cv':
      return <UploadCV />;
    case 'filter-jobs':
      return <FilterJobs />;
    case 'contact':
      return <ContactPage />;
    case 'terms-and-conditions':
      return <Finish />;
    default:
      return <LocationPage />;
  }
}
