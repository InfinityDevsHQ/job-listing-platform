type PillProps = {
  text: string;
};
export default function Pill({ text }: PillProps) {
  return (
    <div
      role="button"
      className="flex gap-0.5 lg:gap-1 bg-white p-1 lg:p-2 rounded-full shadow-sm w-max"
    >
      <span></span>
      <span className="text-xxs lg:text-base font-sans text-mute-1">
        {text}
      </span>
    </div>
  );
}
