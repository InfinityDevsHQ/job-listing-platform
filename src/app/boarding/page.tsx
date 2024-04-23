import Intro from "./_components/intro";
import LocationPage from "./tabs/location-page";
import ContactPage from "./tabs/contact-page";
import UploadCV from "./tabs/upload-cv";
import FilterJobs from "./tabs/filter-jobs";
import Finish from "./tabs/finish";
import LocationForm from "@/forms/onBoarding/location-form";
import CVForm from "@/forms/onBoarding/cv-form";
import FilterJobsForm from "@/forms/onBoarding/filter-jobs-form";
import ContactForm from "@/forms/onBoarding/contact-form";
import TermsAndConditionsForm from "@/forms/onBoarding/terms-and-conditions-form";
export default function Home() {
  const Tabs = [
    {
      title: "1. Location",
      page: <LocationForm />,
      posterLink: "/assets/boarding/location_poster.png",
      href: "?step=location",
    },
    {
      title: "2. Upload CV",
      page: <CVForm />,
      posterLink: "/assets/boarding/cv_poster.png",
      href: "?step=uploadcv",
    },
    {
      title: "3. Filter Jobs",
      page: <FilterJobsForm />,
      posterLink: "/assets/boarding/filter-job_poster.png",
      href: "?step=filterjobs",
    },
    {
      title: "4. Contact",
      page: <ContactForm />,
      posterLink: "/assets/boarding/contact_poster.png",
      href: "?step=contact",
    },
    {
      title: "5. Finish",
      page: (
        <>
          <p className="mt-4 lg:mt-8 font-sans font-bold text-sm lg:text-xl text-mute-3">
            Let&apos;s make some career magic happen!
          </p>
          <p className="mt-4 lg:mt-8 font-sans new-gray text-sm lg:text-base">
            Please take a moment to review our terms of use. Once you click
            &quot;Finish&quot;, you&apos;re all set for a new frontier of job
            opportunities.
          </p>
          <TermsAndConditionsForm />
        </>
      ),
      posterLink: "/assets/boarding/location_poster.png",
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
