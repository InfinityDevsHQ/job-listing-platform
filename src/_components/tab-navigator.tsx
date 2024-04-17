import { Button } from "@/components/ui/button";
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
    <div className="flex self-center p-1 rounded-md bg-primary-100">
      {tabs.map(({ tabText, clickHandler, active }, index) => (
        <Button
          key={index}
          className={`px-3 py-1.5 text-sm font-medium leading-5 ${
            active
              ? "bg-primary-900 text-gray-50 hover:bg-primary-900"
              : "bg-transparent text-gray-950 hover:bg-transparent"
          }`}
          type="button"
          onClick={clickHandler}
        >
          {tabText}
        </Button>
      ))}
    </div>
  );
}
