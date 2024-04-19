import Pill from "@/components/ui/pill";
export default function FilterJobsForm({
  employmentType,
  setEmploymentType,
  setCollaborationType,
}: FilterJobsProps) {
  const EmploymentTypes = [
    {
      text: "Full time",
      active: employmentType === "Full time",
    },
    {
      text: "Part-Time",
      active: employmentType === "Part-Time",
    },
    {
      text: "Freelance",
      active: employmentType === "Freelance",
    },
    {
      text: "Volunteer",
      active: employmentType === "Volunteer",
    },
  ];
  const CollaborationTypes = [
    {
      text: "On Site",
      active: collaborationType === "On Site",
    },
    {
      text: "Remote",
      active: collaborationType === "Remote",
    },
    {
      text: "Hybrid",
      active: collaborationType === "Hybrid",
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
              setValue={setEmploymentType}
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
              setValue={setCollaborationType}
            />
          ))}
        </div>
      </>
    </form>
  );
}
