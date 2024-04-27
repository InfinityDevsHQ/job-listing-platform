import { cn } from '@/lib/utils';

type Tabs = {
  tabText: string;
  clickHandler: () => void;
  active: boolean;
};
type TabsNavigatorProps = {
  tabs: Tabs[];
};
export default function TabNavigator({ tabs }: TabsNavigatorProps) {
  return (
    <div className="flex self-center rounded-md bg-primary-50 p-1">
      {tabs.map(({ tabText, clickHandler, active }, index) => (
        <div
          key={index}
          className={cn('rounded-md px-4 py-2', {
            'bg-primary-900 text-gray-50 hover:bg-primary-900': active,
            'bg-transparent text-gray-950 hover:text-primary-900': !active,
          })}
          role="button"
          onClick={clickHandler}
        >
          {tabText}
        </div>
      ))}
    </div>
  );
}
