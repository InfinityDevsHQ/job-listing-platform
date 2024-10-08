import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
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
          className={cn(
            'w-full border border-dark-background3 bg-dark-primary text-dark-name focus:border-neutral-950 focus:ring-0',
            className
          )}
        >
          <SelectValue
            placeholder={
              <p className="flex w-full items-center gap-2 text-dark-name">
                {leadingIcon}
                <span>{placeholder}</span>
              </p>
            }
          ></SelectValue>
        </SelectTrigger>
        <SelectContent className="border-dark-background3 bg-dark-primary text-dark-name">
          {options?.map((option, index) => (
            <SelectItem
              value={option?.value}
              key={`${option.label}-${index}`}
              className="cursor-pointer rounded-lg hover:bg-dark-background"
            >
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
