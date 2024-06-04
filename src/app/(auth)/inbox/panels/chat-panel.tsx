import Input from '@/components/ui/input';
import { Send } from 'lucide-react';
import ChatHeader from './_components/chat-header';
import Messages from './_components/messages';
type ChatPanelProps = {
  className?: string;
};
const ChatPanel = ({ className = '' }: ChatPanelProps) => {
  return (
    <div
      className={`chat-panel flex-1 flex-col rounded-md border border-neutral-200 bg-white lg:ml-8 lg:flex  ${className}`}
    >
      <ChatHeader />
      <Messages />
      <div className="px-4 pt-4">
        <Input
          placeholder="Type a message"
          trailingIcon={<Send className="rotate-45 self-center" size={16} />}
        />
      </div>
    </div>
  );
};
export default ChatPanel;
