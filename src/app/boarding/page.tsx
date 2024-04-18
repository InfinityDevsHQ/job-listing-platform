import Footer from "@/_components/footer/footer";
import Header from "@/_components/header/header";
import Intro from "./_components/intro";
import StepNavigator from "./_components/steps-navigator";
import LocationForm from "./tabs/location-form";
import ContactForm from "./tabs/contact-form";
import UploadCV from "./tabs/upload-cv";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between p-4">
        <Intro />
        {/* <StepNavigator /> */}
        <LocationForm />
        <UploadCV />
        <ContactForm />
      </main>
    </>
  );
}
