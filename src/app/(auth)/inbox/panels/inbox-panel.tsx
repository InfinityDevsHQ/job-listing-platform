import { Button } from '@/components/ui/button-new';
import { Mail, MailCheck, MailQuestion } from 'lucide-react';
type InboxPanelProps = {
  className?: string;
};
const InboxPanel = ({ className }: InboxPanelProps) => {
  return (
    <div
      className={`flex w-64 flex-col gap-4 rounded-md border border-neutral-200 bg-white  p-4 ${className ? className : ''}`}
    >
      <h2 className="w-full text-2xl font-bold text-black">Inbox</h2>
      <Button variant="outline" className="justify-start border-none" size={'lg'}>
        <Mail width={14} height={24} className="mr-2" />
        New Message
      </Button>
      <Button variant="outline" className="justify-start  border-none" size={'lg'}>
        <MailCheck width={14} height={24} className="mr-2" />
        Accepted
      </Button>

      <Button variant="outline" className="justify-start  border-none" size={'lg'}>
        <MailQuestion width={14} height={24} className="mr-2" />
        Sent
      </Button>
    </div>
  );
};
export default InboxPanel;
