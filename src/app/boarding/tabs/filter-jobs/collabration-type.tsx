import Pill from "../../../../components/ui/pill";
type CollaborationTypeProps = {
  collaborationType: string;
  setCollaborationType: (value: string) => void;
};
export default function CollaborationType({
  collaborationType,
  setCollaborationType,
}: CollaborationTypeProps) {
  const Types = [
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
    <>
      <h3 className="text-mute text-base lg:text-lg font-bold lg:font-semibold font-sans">
        Collaboration Type
      </h3>
      <div className="flex gap-4 lg:gap-8">
        {Types.map(({ text, active }, index) => (
          <Pill
            key={index}
            text={text}
            active={active}
            setValue={setCollaborationType}
          />
        ))}
      </div>
    </>
  );
}
