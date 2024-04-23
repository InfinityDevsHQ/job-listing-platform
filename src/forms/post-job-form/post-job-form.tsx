"use client";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import React from "react";
import usePostJobDataStore from "@/stores/job-post-form-data-store";
import TextArea from "@/components/ui/text-area";
export default function PostJobForm() {
  const { postJobData, setPostJobData } = usePostJobDataStore();
  function handleChange(e) {
    console.log("hello ");
    const { name, value } = e.target;
    setPostJobData({ ...postJobData, [name]: value });
    console.log(postJobData);
  }
  const INPUTS = [
    {
      label: "Job Title",
      type: "text",
      value: postJobData.jobTitle,
      name: "jobTitle",
      placeholder: "Title",
      helpText: "",
    },
    {
      label: "City",
      type: "text",
      value: postJobData.city,
      name: "city",
      placeholder: "City",
      helpText: "",
    },
    {
      label: "Employment",
      type: "text",
      value: postJobData.employment,
      name: "employment",
      placeholder: "Employment",
      helpText: "",
    },
    {
      label: "County",
      type: "text",
      value: postJobData.country,
      name: "county",
      placeholder: "Germany",
      helpText: "",
    },
    {
      label: "Language",
      type: "text",
      value: postJobData.language,
      name: "language",
      placeholder: "Language",
      helpText: "",
    },
    {
      label: "Remuneration Range",
      group: "remunerationRangeGroup",
      type: "text",
      value: postJobData.remunerationRageStart,
      name: "remunerationRageStart",
      placeholder: "From",
      helpText: "",
    },
    {
      type: "text",
      group: "remunerationRangeGroup",
      value: postJobData.remunerationRageEnd,
      name: "remunerationRageEnd",
      placeholder: "To",
      helpText: "",
    },
    {
      label: "Currency",
      type: "text",
      value: postJobData.currency,
      name: "currency",
      placeholder: "EUR",
      helpText: "",
    },
    {
      label:
        "Describe, in your own words, the requirements, and responsibilities for the job role",
      type: "text",
      value: postJobData.description,
      name: "description",
      placeholder: "Description",
      helpText: "",
    },
  ];
  const renderedGroups = new Set();

  return (
    <form className="flex flex-col gap-4 lg:gap-8 p-4 lg:p-8 bg-gray-50 border border-gray-200 rounded-md">
      <div className="flex flex-col gap-4 lg:gap-8 rounded-custom-20">
        <h3 className="font-sans font-bold text-base text-gray-700">
          Post a job listing
        </h3>
        {INPUTS.map(
          (
            { name, label, value, type, placeholder, helpText, group },
            index
          ) => {
            if (group && !renderedGroups.has(group)) {
              // Mark the group as rendered
              renderedGroups.add(group);
              const groupInputs = INPUTS.filter(
                (input) => input.group === group
              );
              return (
                <div
                  key={group}
                  className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8"
                >
                  {groupInputs.map(
                    ({ name, label, placeholder, value, type }, index) => (
                      <React.Fragment key={index}>
                        {label && (
                          <label
                            htmlFor={name}
                            className="font-sans font-bold text-sm text-gray-700 lg:w-80"
                          >
                            {label}
                          </label>
                        )}
                        {placeholder === "Description" ? (
                          <TextArea
                            type={type}
                            value={value}
                            placeholder={placeholder}
                            helpText={helpText}
                            name={name}
                            className="max-w-full flex-1"
                            containerClassName="flex-1"
                            onChange={handleChange}
                          />
                        ) : (
                          <Input
                            type={type}
                            name={name}
                            value={value}
                            placeholder={placeholder}
                            helpText={helpText}
                            className="max-w-full flex-1"
                            containerClassName="flex-1"
                            onChange={handleChange}
                          />
                        )}
                      </React.Fragment>
                    )
                  )}
                </div>
              );
            } else if (!group) {
              return (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row gap-2 lg:gap-8"
                >
                  {label && (
                    <label
                      htmlFor={name}
                      className="font-sans font-bold text-sm text-gray-700 lg:w-80"
                    >
                      {label}
                    </label>
                  )}
                  <Input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    name={name}
                    helpText={helpText}
                    onChange={(e) => handleChange(e)}
                    className="max-w-full flex-1"
                    containerClassName="flex-1"
                  />
                </div>
              );
            }
          }
        )}
        <div className="flex items-center justify-between">
          <p className="font-sans text-sm text-gray-500">
            We will use this information to develop a detailed job description,
            requirements list, and set of necessary skills.
          </p>
          <Button type="submit" text="Analyze" className="hidden lg:flex" />
        </div>
      </div>
      <Button type="submit" text="Analyze" className="lg:hidden" />
    </form>
  );
}
