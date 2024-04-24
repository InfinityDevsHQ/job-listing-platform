import Button from '@/components/ui/button';
import { TabsNavigatorData } from '@/types/tabs-navigator-data';
type TabsNavigatorProps = {
  data: TabsNavigatorData[];
  className?: string;
};
export default function TabsNavigator({ data, className }: TabsNavigatorProps) {
  return (
    <div className={`flex gap-1 p-1 ${className}`}>
      {data.map(({ key, value, active, tabName, handleClick }, index) => (
        <Button
          key={`${index} ${key && key} ${value}`}
          text={tabName}
          className={`!border-none`}
          variant={`${active ? 'primary' : 'default'}`}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
