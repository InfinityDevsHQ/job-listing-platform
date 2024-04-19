import { ReactElement } from "react";

type DropdownData = {
  text: string;
  value: string | number;
};
export type DropdownProps = {
  options: DropdownData[];
  select: string | number;
  setSelect: (value: number | string) => void;
  leadingIcon: ReactElement;
};
