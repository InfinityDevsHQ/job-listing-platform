"use client";
import UploadImage from "@/components/ui/upload-image";
import { useState } from "react";
import useCVFormData from "@/stores/cv-form-data-store";
// import { uploadCVDataSchema } from "@/types/zodTypes";
import { ZodIssue } from "zod";
import Pagination from "@/components/ui/pagination";
import { useQueryParams } from "@/hooks/useQueryParams";
export default function CVForm() {
  const { cvFormData, setCVFormData } = useCVFormData();
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState({ imgUrl: "" });
  const addQueryParams = useQueryParams();
  console.log(imgUrl);
  function handleSubmit(e) {
    e.preventDefault();
    const validate = uploadCVDataSchema.safeParse(cvFormData);
    if (validate.success) {
    } else {
      const validationErrors = validate.error.errors;
      const formattedErrors: { [key: string]: string } = {};
      validationErrors.forEach((error: ZodIssue) => {
        if (error.path.length > 0) {
          formattedErrors[error.path[0]] = error.message;
        }
      });
      setErrors({ ...errors, ...formattedErrors });
    }
  }
  return (
    <form className="h-full py-8 flex flex-col gap-4 lg:gap-8">
      <UploadImage setImgUrl={setImgUrl} />
      <Pagination
        handleBack={() => addQueryParams("step", "location")}
        handleNext={() => addQueryParams("step", "filter-jobs")}
      />
    </form>
  );
}
