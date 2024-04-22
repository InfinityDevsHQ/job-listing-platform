import { SectionHeaderProps } from "@/types/types";


const SectionHeader = ({ leadingIcon, heading, helpText }: SectionHeaderProps) => {
    return (
      <div className="w-full flex items-center justify-between">
        {(leadingIcon || heading) && <div className="flex gap-5 lg:gap-4 items-center">
          {leadingIcon && leadingIcon}
          {heading && <h4 className="leading-6  text-neutral-900 text-18 lg:text-2xl font-semibold lg:font-bold lg:text-neutral-950">
            {heading}
          </h4>}
        </div>}
        {helpText && <p className="text-base text-mid lg:text-16 leading-3.9 font-medium text-neutral-600  lg:font-sans">
          {helpText}
        </p>}
      </div>
    );
}

export default SectionHeader