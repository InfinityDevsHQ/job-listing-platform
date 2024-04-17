import { ReactElement } from "react";

type StepTabProps = {
  svg: ReactElement;
  stepNumber: number;
  stepName: string;
};
export default function StepTab({ svg, stepNumber, stepName }: StepTabProps) {
  return (
    <div className="flex items-center gap-1.5 bg-primary rounded-100 pr-9 lg:pr-12 lg:pl-2 lg:py-2">
      <span className="flex-center w-9 h-9 rounded-full bg-new-gray">
        {svg}
      </span>
      <div>
        <p className="new-text text-sm leading-6 font-sans font-semibold">
          Step {stepNumber}
        </p>
        <span className="new-text text-sm leading-6 font-sans">{stepName}</span>
      </div>
    </div>
  );
}
