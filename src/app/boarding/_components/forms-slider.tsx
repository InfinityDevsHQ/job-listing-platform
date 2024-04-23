"use client";
import { useSearchParams } from "next/navigation";
import LocationPage from "../tabs/location-page";
import UploadCV from "../tabs/upload-cv";
import FilterJobs from "../tabs/filter-jobs";
import { Contact } from "lucide-react";
import Finish from "../tabs/finish";
export default function FormsSlider() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");
  switch (step) {
    case "location":
      return <LocationPage />;
    case "upload-cv":
      return <UploadCV />;
    case "filter-jobs":
      return <FilterJobs />;
    case "contact":
      return <Contact />;
    case "terms-and-conditions":
      return <Finish />;
    default:
      return <LocationPage />;
  }
}
