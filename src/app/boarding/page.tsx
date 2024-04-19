"use client";
import Footer from "@/_components/footer/footer";
import Header from "@/_components/header/header";
import Intro from "./_components/intro";
import StepNavigator from "./_components/steps-navigator";
import LocationPage from "./tabs/location-page";
import ContactForm from "./tabs/contact-form";
import UploadCV from "./tabs/upload-cv";
import FilterJobs from "./tabs/filter-jobs";
import { useState } from "react";
import Finish from "./tabs/finish";
import useOnBoardingStore from "@/stores/onbording-store";
export default function Home() {
  const { onBoardingData, setOnBoardingData } = useOnBoardingStore();
  console.log(onBoardingData);
  const [employmentType, setEmploymentType] = useState("");
  const [collaborationType, setCollaborationType] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    setOnBoardingData({ ...onBoardingData, [name]: value });
  }
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
        <ContactForm />
      </main>
    </>
  );
}
