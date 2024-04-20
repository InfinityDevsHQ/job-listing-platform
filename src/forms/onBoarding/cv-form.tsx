"use client";
import UploadImage from "@/components/ui/upload-image";
import useCVFormData from "@/stores/register-candidate-store";
import { useState } from "react";

export default function CVForm() {
  const { cvFormData, setCVFormData } = useCVFormData();
  const [imgUrl, setImgUrl] = useState("");
  console.log(imgUrl);
  return (
    <form className="h-full">
      <UploadImage setImgUrl={setImgUrl} />
    </form>
  );
}
