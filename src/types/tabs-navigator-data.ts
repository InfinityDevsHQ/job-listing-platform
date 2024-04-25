import { MouseEventHandler, ReactElement } from 'react';

export type TabsNavigatorData = {
  key?: string | number;
  value: string | number;
  tabName: string;
  active?: boolean;
  tabIcon?: ReactElement;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};
