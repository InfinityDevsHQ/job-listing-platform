import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import React from "react";
export default function PostJobForm() {
  const INPUTS = [
    {
      label: "Job Title",
      type: "text",
      value: "",
      name: "jobTitle",
      placeholder: "Title",
      helpText: "",
    },
    {
      label: "City",
      type: "text",
      value: "",
      name: "city",
      placeholder: "City",
      helpText: "",
    },
    {
      label: "Employment",
      type: "text",
      value: "",
      name: "employment",
      placeholder: "Employment",
      helpText: "",
    },
    {
      label: "County",
      type: "text",
      value: "",
      name: "county",
      placeholder: "Germany",
      helpText: "",
    },
    {
      label: "Language",
      type: "text",
      value: "",
      name: "language",
      placeholder: "Language",
      helpText: "",
    },
    {
      label: "Remuneration Range",
      group: "remunerationRangeGroup",
      type: "text",
      value: "",
      name: "remunerationRageStart",
      placeholder: "From",
      helpText: "",
    },
    {
      type: "text",
      group: "remunerationRangeGroup",
      value: "",
      name: "remunerationRageEnd",
      placeholder: "To",
      helpText: "",
    },
    {
      label: "Currency",
      type: "text",
      value: "",
      name: "currency",
      placeholder: "EUR",
      helpText: "",
    },
    {
      label:
        "Describe, in your own words, the requirements, and responsibilities for the job role",
      type: "text",
      value: "",
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
                        <Input
                          type={type}
                          value={value}
                          placeholder={placeholder}
                          helpText={helpText}
                          className="max-w-full flex-1"
                          containerClassName="flex-1"
                        />
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
                    helpText={helpText}
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
