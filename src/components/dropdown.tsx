import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectGroup,
} from '@/components/ui/select';
import { DropdownProps } from '@/types/dropdown-props';
export default function DropDown({ options, select, setSelect, leadingIcon }: DropdownProps) {
  return (
    <div className="flex w-full items-center gap-2.5 border-gray-300 bg-white px-3 py-2">
      {leadingIcon}
      <Select value={`${select}`} onValueChange={(select) => setSelect(select)}>
        <SelectTrigger className="border-none">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-primary-100">
          <SelectGroup>
            {options.map(({ text, value }, index) => (
              <SelectItem key={index} value={`${value}`}>
                {text}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
