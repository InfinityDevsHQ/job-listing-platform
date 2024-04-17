import { ReactElement } from "react";

type StepTabProps = {
  svg: ReactElement;
  stepNumber: number;
  stepName: string;
};
export default function StepTab({ svg, stepNumber, stepName }: StepTabProps) {
  return (
    <div className="bg-white rounded-full  pr-9 lg:pr-12 lg:pl-2 lg:py-2">
      {svg}
      <div>
        <p>Step {stepNumber}</p>
        <span>{stepName}</span>
      </div>
    </div>
  );
}
