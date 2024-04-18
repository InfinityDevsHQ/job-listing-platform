import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectGroup,
} from "@/components/ui/select";
export default function DropDown({
  options,
  select,
  setSelect,
}: DropdownProps) {
  return (
    <>
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
    </>
  );
}
