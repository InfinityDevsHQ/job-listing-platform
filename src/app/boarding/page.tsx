import Header from "@/_components/header/header";
import Intro from "./_components/intro";
import LocationPage from "./tabs/location-page";
import ContactPage from "./tabs/contact-page";
import UploadCV from "./tabs/upload-cv";
import FilterJobs from "./tabs/filter-jobs";
import Finish from "./tabs/finish";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-between p-4">
        <Intro />
        {/* <StepNavigator /> */}
        <LocationPage />
        <Finish />
        <FilterJobs />
        <UploadCV />
        <ContactPage />
      </div>
    </>
  );
}
