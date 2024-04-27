import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface OptionProp {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

// TODO: change them temporary
interface SelectProps {
  leadingIcon?: React.ReactNode;
  options?: OptionProp[];
  selectedValue?: OptionProp;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export default function AppSelect({
  options,
  selectedValue,
  onChange,
  leadingIcon,
  placeholder = 'Select',
}: SelectProps) {
  return (
    <Select onValueChange={onChange} defaultValue={selectedValue?.value}>
      <SelectTrigger className="w-full border border-gray-300 bg-white focus:border-primary-900 focus:ring-0">
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
