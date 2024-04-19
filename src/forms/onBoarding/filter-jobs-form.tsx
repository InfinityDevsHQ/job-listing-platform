"use client";
import Pill from "@/components/ui/pill";
import useFilterJobsDataStore from "@/stores/filter-jobs-form-data-store";
export default function FilterJobsForm() {
  const { filterJobsData, setFilterJobsData } = useFilterJobsDataStore();
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
  return (
    <form>
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
              setValue={() =>
                setFilterJobsData({
                  ...filterJobsData,
                  employmentType: text,
                })
              }
            />
          ))}
        </div>
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
              setValue={() =>
                setFilterJobsData({
                  ...filterJobsData,
                  collaborationType: text,
                })
              }
            />
          ))}
        </div>
      </>
    </form>
  );
}
