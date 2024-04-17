type DropdownData = {
  text: string;
  value: string | number;
};
type DropdownProps = {
  options: DropdownData[];
  select: string | number;
  setSelect: (value: string | number) => void;
};
