import Pill from "../../../../components/ui/pill";
type EmploymentTypeProps = {
  employmentType: string;
  setEmploymentType: (value: string) => void;
};
export default function EmploymentType({
  employmentType,
  setEmploymentType,
}: EmploymentTypeProps) {
  const Types = [
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
  return (
    <>
      <h3 className="text-mute text-base lg:text-lg font-bold lg:font-semibold font-sans">
        Employment Type
      </h3>
      <div className="flex gap-4 lg:gap-8">
        {Types.map(({ text, active }, index) => (
          <Pill
            key={index}
            text={text}
            active={active}
            setValue={setEmploymentType}
          />
        ))}
      </div>
    </>
  );
}
