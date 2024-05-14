import CompanyCheck from '@/components/svgs/company-check';
import { ReactNode } from 'react';
import HelpText from './help-text';

type PillProps = {
  text?: string;
  helpText?: string;
  active: boolean;
  children?: ReactNode;
  setValue: (value: string | boolean) => void;
};
export default function Pill({ text, active, children, helpText, setValue }: PillProps) {
  return (
    <div
      role="button"
      className="flex flex-col gap-1"
      onClick={() => {
        if (text && children) {
          setValue(!active);
        } else if (text) {
          setValue(`${text}`);
        } else if (children) {
          setValue(!active);
        }
      }}
    >
      <div
        className={`flex w-max items-center gap-0.5 rounded-full p-1 shadow-sm lg:gap-1 lg:p-2 ${
          active ? 'bg-neutral-950' : 'bg-white'
        } `}
      >
        <span
          className={`flex h-3 w-3 items-center justify-center rounded-full p-0.5 lg:h-6 lg:w-6 ${
            active ? 'bg-white' : 'bg-mute-2'
          }`}
        >
          <span className={`${active ? 'text-primary-950' : 'text-mute-1'}`}>
            <CompanyCheck />
          </span>
        </span>
        {text && children && <>{children}</>}
        {children && children}
        <span
          className={`font-sans text-xxs lg:text-base ${active ? 'text-white' : 'text-mute-1'}`}
        >
          {text && text}
        </span>
      </div>
      {helpText && <HelpText text={helpText} />}
    </div>
  );
}
