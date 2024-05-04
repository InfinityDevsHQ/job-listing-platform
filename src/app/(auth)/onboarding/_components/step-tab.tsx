import { ReactElement } from 'react';

type StepTabProps = {
  svg: ReactElement;
  stepNumber: number;
  stepName: string;
};
export default function StepTab({ svg, stepNumber, stepName }: StepTabProps) {
  return (
    <div className="bg-primary rounded-100 flex items-center gap-1.5 pr-9 lg:py-2 lg:pl-2 lg:pr-12">
      <span className="bg-new-gray flex h-9 w-9 items-center justify-center rounded-full">
        {svg}
      </span>
      <div>
        <p className="new-text font-sans text-sm font-semibold leading-6">Step {stepNumber}</p>
        <span className="new-text font-sans text-sm leading-6">{stepName}</span>
      </div>
    </div>
  );
}
