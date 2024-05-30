import { Button } from '@/components/ui/button-new';
import { Bookmark, Flame } from 'lucide-react';
type JobCardHeaderProps = {
  is_hot: boolean;
  title: string;
  company: string;
};
export default function JobCardHeader({ is_hot, title, company }: JobCardHeaderProps) {
  return (
    <header className="flex cursor-pointer items-center">
      <span
        className={`mr-5 flex items-center justify-center rounded-full p-2.5 lg:p-3 ${is_hot ? 'bg-accent-3' : ' bg-primary-500/30'}`}
      >
        <Flame className={`h-4 w-4 ${is_hot ? 'text-accent-2' : 'text-primary-500'}`} />
      </span>
      <div className="flex flex-1 flex-col">
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold text-gray-500">{company}</span>
          <span className="flex items-center justify-center rounded-md  bg-accent-1 px-2 py-1 text-xxs font-semibold text-white shadow-md">
            Urgent
          </span>
        </div>
      </div>
      <Button className="rounded-md" variant={'outline'}>
        <Bookmark className="fill-gray-200 text-gray-200" />
      </Button>
    </header>
  );
}
