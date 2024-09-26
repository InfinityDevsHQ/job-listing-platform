import { ReactElement } from 'react';

type SectionHeadingProps = {
  text: string;
  leadingIcon?: ReactElement;
};
export default function SectionHeading({ text, leadingIcon }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-2 text-dark-nameWhite">
      {leadingIcon && leadingIcon}
      <h4 className="font-sans font-bold lg:text-lg">{text}</h4>
    </div>
  );
}
