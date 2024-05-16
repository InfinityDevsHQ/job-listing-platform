import { ReactElement } from 'react';

type SectionHeadingProps = {
  text: string;
  leadingIcon?: ReactElement;
};
export default function SectionHeading({ text, leadingIcon }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-2">
      {leadingIcon && leadingIcon}
      <h4 className="font-sans font-bold text-gray-700 lg:text-lg">{text}</h4>
    </div>
  );
}
