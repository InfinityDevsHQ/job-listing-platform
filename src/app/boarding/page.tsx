"use client";
import Header from "@/_components/header/header";
import Intro from "./_components/intro";
import LocationPage from "./tabs/location-page";
import ContactPage from "./tabs/contact-page";
import UploadCV from "./tabs/upload-cv";
import FilterJobs from "./tabs/filter-jobs";
import { useState } from "react";
import Finish from "./tabs/finish";
export default function Home() {
  const [termsAgreed, setTermsAgreed] = useState(false);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between p-4">
        <Intro />
        {/* <StepNavigator /> */}
        <LocationPage />
        <Finish termsAgreed={termsAgreed} setTermsAgreed={setTermsAgreed} />
        <FilterJobs />
        <UploadCV />
        <ContactPage />
      </main>
    </>
  );
}
