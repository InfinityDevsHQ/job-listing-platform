import { Button } from '@/components/ui/button-new';
import { cn } from '@/lib/utils';
import { CheckIcon, MailPlusIcon, SendHorizonal } from 'lucide-react';
type InboxPanelProps = {
  className?: string;
};
const InboxPanel = ({ className }: InboxPanelProps) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-l-md border border-r-0 border-neutral-200 bg-white p-4 lg:w-48 xl:w-64',
        className
      )}
    >
      <h2 className="w-full text-2xl font-bold text-black">Inbox</h2>
      <Button
        variant="outline"
        className="justify-start border-none p-1 hover:bg-gray-200 lg:h-8"
        size="lg"
      >
        <MailPlusIcon className="mr-2 h-4 w-4" />
        New Message
      </Button>
      <Button
        variant="outline"
        className="justify-start border-none bg-gray-200 p-1 hover:bg-gray-200 lg:h-8"
        size="lg"
      >
        <CheckIcon className="mr-2 h-4 w-4" />
        Accepted
      </Button>
      <Button
        variant="outline"
        className="justify-start border-none p-1 hover:bg-gray-200 lg:h-8"
        size="lg"
      >
        <SendHorizonal className="mr-2 h-4 w-4" />
        Sent
      </Button>
    </div>
  );
};
export default InboxPanel;
