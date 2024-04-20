import Image from "next/image";
import BoardingHeader from "../_components/boarding-header";
import UploadImage from "@/components/ui/upload-image";
import CVForm from "@/forms/onBoarding/cv-form";
export default function UploadCV() {
  // Also add dropdowns later
  return (
    <div className="grid grid-cols-2 w-full">
      <div className="hidden lg:flex items-center justify-center col-span-2 lg:col-span-1 w-full">
        <Image
          src={"/assets/boarding/cv_poster.png"}
          alt="Location Poster"
          width={580}
          height={580}
        />
      </div>
      <div className="flex justify-center flex-col gap-4 w-full col-span-2 lg:col-span-1">
        <BoardingHeader
          title="2. Upload CV"
          description="Drop your CV here and kick back. Our AI scans, analyzes, and fills out your profile for you. Welcome to next level."
        />
        <CVForm />
      </div>
    </div>
  );
}
