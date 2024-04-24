import { SectionHeaderProps } from '@/types/types';

const SectionHeader = ({ leadingIcon, heading, helpText }: SectionHeaderProps) => {
  return (
    <div className="flex w-full items-center justify-between">
      {(leadingIcon || heading) && (
        <div className="flex items-center gap-4">
          {leadingIcon && leadingIcon}
          {heading && (
            <h4 className=" font-semibold text-neutral-900 lg:text-3xl lg:text-neutral-950">
              {heading}
            </h4>
          )}
        </div>
      )}
      {helpText && <p className="text-sm text-neutral-600 lg:text-base">{helpText}</p>}
    </div>
  );
};

export default SectionHeader;
