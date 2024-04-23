"use client";
import HelpText from "@/components/ui/help-text";
import Pagination from "@/components/ui/pagination";
import Pill from "@/components/ui/pill";
import { useQueryParams } from "@/hooks/useQueryParams";
import useFilterJobsDataStore from "@/stores/filter-jobs-form-data-store";
import { filterJobsFormSchema } from "@/types/schemas/filter-job-form-schema";
import { useState } from "react";
import { ZodIssue } from "zod";
export default function FilterJobsForm() {
  const { filterJobsData, setFilterJobsData } = useFilterJobsDataStore();
  const addQueryParams = useQueryParams();
  const [errors, setErrors] = useState({
    employmentType: "",
    collaborationType: "",
  });
  const EmploymentTypes = [
    {
      text: "Full time",
      active: filterJobsData.employmentType === "Full time",
    },
    {
      text: "Part-Time",
      active: filterJobsData.employmentType === "Part-Time",
    },
    {
      text: "Freelance",
      active: filterJobsData.employmentType === "Freelance",
    },
    {
      text: "Volunteer",
      active: filterJobsData.employmentType === "Volunteer",
    },
  ];
  const CollaborationTypes = [
    {
      text: "On Site",
      active: filterJobsData.collaborationType === "On Site",
    },
    {
      text: "Remote",
      active: filterJobsData.collaborationType === "Remote",
    },
    {
      text: "Hybrid",
      active: filterJobsData.collaborationType === "Hybrid",
    },
  ];
  function handleSubmit(e) {
    e.preventDefault();
    const validate = filterJobsFormSchema.safeParse(filterJobsData);
    if (validate.success) {
      addQueryParams("step", "contact");
    } else {
      console.warn("Validation Failed", validate.error.errors);
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-8">
      <>
        <h3 className="text-mute text-base lg:text-lg font-bold lg:font-semibold font-sans">
          Employment Type
        </h3>
        <div className="flex gap-4 lg:gap-8">
          {EmploymentTypes.map(({ text, active }, index) => (
            <Pill
              key={index}
              text={text}
              active={active}
              setValue={() => {
                setErrors({ ...errors, employmentType: "" });
                setFilterJobsData({
                  ...filterJobsData,
                  employmentType: text,
                });
              }}
            />
          ))}
        </div>
        {errors.employmentType && <HelpText text={errors.employmentType} />}
      </>
      <>
        <h3 className="text-mute text-base lg:text-lg font-bold lg:font-semibold font-sans">
          Collaboration Type
        </h3>
        <div className="flex gap-4 lg:gap-8">
          {CollaborationTypes.map(({ text, active }, index) => (
            <Pill
              key={index}
              text={text}
              active={active}
              setValue={() => {
                setErrors({ ...errors, collaborationType: "" });
                setFilterJobsData({
                  ...filterJobsData,
                  collaborationType: text,
                });
              }}
            />
          ))}
        </div>
        {errors.collaborationType && (
          <HelpText text={errors.collaborationType} />
        )}
      </>
      <Pagination
        skip
        handleNext={handleSubmit}
        handleBack={() => addQueryParams("step", "location")}
      />
    </form>
  );
}
