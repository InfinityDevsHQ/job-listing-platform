import CompanyCheck from "@/components/svgs/company-check";

type PillProps = {
  text: string;
  active?: boolean;
};
export default function Pill({ text, active }: PillProps) {
  return (
    <div
      role="button"
      className={`flex items-center gap-0.5 lg:gap-1 p-1 lg:p-2 rounded-full shadow-sm w-max ${
        active ? "bg-primary-900" : "bg-white"
      } `}
    >
      <span
        className={`flex items-center justify-center h-3 lg:h-6 w-3 lg:w-6 p-0.5 rounded-full ${
          active ? "bg-white" : "bg-mute-2"
        }`}
      >
        <span className={`${active ? "text-primary-950" : "text-mute-1"}`}>
          <CompanyCheck />
        </span>
      </span>
      <span
        className={`text-xxs lg:text-base font-sans ${
          active ? "text-white" : "text-mute-1"
        }`}
      >
        {text}
      </span>
    </div>
  );
}
