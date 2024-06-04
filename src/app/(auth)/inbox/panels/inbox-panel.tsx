import { Button } from '@/components/ui/button-new';
import { cn } from '@/lib/utils';
import { MailCheckIcon, MailPlusIcon, MailQuestionIcon } from 'lucide-react';
type InboxPanelProps = {
  className?: string;
};
const InboxPanel = ({ className }: InboxPanelProps) => {
  return (
    <div
      className={cn(
        'flex w-64 flex-col gap-4 rounded-l-md border border-r-0 border-neutral-200 bg-white p-4',
        className
      )}
    >
      <h2 className="w-full text-2xl font-bold text-black">Inbox</h2>
      <Button variant="outline" className="justify-start border-none py-0 pl-0" size="lg">
        <MailPlusIcon className="mr-2 h-4 w-4" />
        New Message
      </Button>
      <Button variant="outline" className="justify-start border-none py-0 pl-0" size="lg">
        <MailCheckIcon className="mr-2 h-4 w-4" />
        Accepted
      </Button>
      <Button variant="outline" className="justify-start border-none py-0 pl-0" size="lg">
        <MailQuestionIcon className="mr-2 h-4 w-4" />
        Sent
      </Button>
    </div>
  );
};
export default InboxPanel;
