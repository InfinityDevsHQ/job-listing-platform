import { SectionHeaderProps } from '@/types/types';

const SectionHeader = ({ leadingIcon, heading, helpText }: SectionHeaderProps) => {
  return (
    <div className="flex w-full items-center ">
      {(leadingIcon || heading) && (
        <div className="flex items-center justify-center gap-4">
          {leadingIcon && leadingIcon}
          {heading && (
            <h4 className="text-2xl font-semibold text-neutral-950 lg:text-3xl">{heading}</h4>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
