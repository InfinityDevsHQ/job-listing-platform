import Button from '@/components/ui/button';
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

      <Button
        text="New Message"
        size="full"
        leadingIcon={<Mail width={14} height={24} />}
        className="justify-start border-none"
      />
      <Button
        text="New Message"
        size="full"
        leadingIcon={<MailCheck width={14} height={24} />}
        className="justify-start border-none"
      />
      <Button
        text="Sent"
        size="full"
        leadingIcon={<MailQuestion width={14} height={24} />}
        className="justify-start border-none"
      />
    </div>
  );
};
export default InboxPanel;
