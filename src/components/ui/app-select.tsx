import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';

type OptionProp = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};
type SelectProps = {
  leadingIcon?: React.ReactNode;
  options?: OptionProp[];
  selectedValue?: OptionProp;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
};

const AppSelect = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ options, selectedValue, onChange, leadingIcon, placeholder = 'Select', className = '' }) => {
    return (
      <Select onValueChange={onChange} defaultValue={selectedValue?.value}>
        <SelectTrigger
          className={`w-full border border-gray-300 bg-white focus:border-neutral-950 focus:ring-0 ${className}`}
        >
          <SelectValue
            placeholder={
              <p className="flex w-full items-center gap-2">
                {leadingIcon}
                <span>{placeholder}</span>
              </p>
            }
          ></SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-white">
          {options?.map((option, index) => (
            <SelectItem value={option?.value} key={index}>
              <p className="flex items-center gap-2">
                {option?.icon}
                {option?.label}
              </p>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
);
AppSelect.displayName = 'AppSelect';
export default AppSelect;
