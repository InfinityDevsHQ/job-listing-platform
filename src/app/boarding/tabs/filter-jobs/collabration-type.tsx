import Pill from "./pill";

export default function CollaborationType() {
  const Types = ["On Site", "Remote", "Hybrid"];

  return (
    <>
      <h3 className="text-mute text-base lg:text-lg font-bold lg:font-semibold font-sans">
        Collaboration Type
      </h3>
      <div className="flex gap-4 lg:gap-8">
        {Types.map((type, index) => (
          <Pill key={index} text={type} />
        ))}
      </div>
    </>
  );
}
