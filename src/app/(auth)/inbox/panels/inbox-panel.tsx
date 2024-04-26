import AppSelect from '@/components/ui/app-select';
import { SelectTrigger } from '@/components/ui/select';

const InboxPanel = () => {
  return (
    <div className="flex w-64 flex-col gap-4 rounded-md border border-neutral-200 bg-white  p-4">
      <h2 className="w-full text-2xl font-bold text-black">Inbox</h2>
      <AppSelect>
        <SelectTrigger className="w-full bg-gray-200"></SelectTrigger>
      </AppSelect>
    </div>
  );
};
export default InboxPanel;
