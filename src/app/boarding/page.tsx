"use client";
import Footer from "@/_components/footer/footer";
import Header from "@/_components/header/header";
import Intro from "./_components/intro";
import StepNavigator from "./_components/steps-navigator";
import LocationForm from "./tabs/location-form";
import ContactForm from "./tabs/contact-form";
import UploadCV from "./tabs/upload-cv";
import FilterJobs from "./tabs/filter-jobs";
import { useState } from "react";
import Finish from "./tabs/finish";

export default function Home() {
  const [employmentType, setEmploymentType] = useState("");
  const [collaborationType, setCollaborationType] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between p-4">
        <Intro />
        {/* <StepNavigator /> */}
        <Finish termsAgreed={termsAgreed} setTermsAgreed={setTermsAgreed} />
        <FilterJobs
          employmentType={employmentType}
          setEmploymentType={setEmploymentType}
          collaborationType={collaborationType}
          setCollaborationType={setCollaborationType}
        />
        <LocationForm />
        <UploadCV />
        <ContactForm />
      </main>
    </>
  );
}
