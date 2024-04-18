import Pill from "./pill";

export default function EmploymentType() {
  const Types = ["Full time", "Part-Time", "Freelance", "Volunteer"];

  return (
    <>
      <h3 className="text-mute text-base lg:text-lg font-bold lg:font-semibold font-sans">
        Employment Type
      </h3>
      <div className="flex">
        {Types.map((type, index) => (
          <Pill key={index} text={type} />
        ))}
      </div>
    </>
  );
}
