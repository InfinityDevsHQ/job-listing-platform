import Intro from "./_components/intro";
import LocationPage from "./tabs/location-page";
import ContactPage from "./tabs/contact-page";
import UploadCV from "./tabs/upload-cv";
import FilterJobs from "./tabs/filter-jobs";
import Finish from "./tabs/finish";
export default function Home() {
  const Tabs = [
    {
      page: <LocationPage />,
      href: "?step=location",
    },
    {
      page: <UploadCV />,
      href: "?step=uploadcv",
    },
    {
      page: <FilterJobs />,
      href: "?step=filterjobs",
    },
    {
      page: <ContactPage />,
      href: "?step=contact",
    },
    {
      page: <Finish />,
      href: "?step=terms",
    },
  ];
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
