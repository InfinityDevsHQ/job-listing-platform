import { SectionHeaderProps } from '@/types/types';

const SectionHeader = ({ leadingIcon, heading, helpText }: SectionHeaderProps) => {
  return (
    <div className="flex w-full items-center">
      {(leadingIcon || heading) && (
        <div className="flex items-center justify-center gap-4">
          {leadingIcon && leadingIcon}
          {heading && (
            <h4 className="text-base font-semibold text-dark-nameWhite sm:text-xl md:text-2xl lg:text-3xl">
              {heading}
            </h4>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
