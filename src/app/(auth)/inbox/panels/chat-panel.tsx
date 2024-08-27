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
      className={`chat-panel flex-1 flex-col rounded-md border border-neutral-200 bg-white lg:ml-4 lg:flex xl:ml-8 ${className}`}
    >
      <ChatHeader />
      <Messages />
      <div className="px-4 py-0.5">
        <Input
          placeholder="Start Typing Something"
          trailingIcon={<Send className="rotate-45 self-center" size={16} />}
        />
      </div>
    </div>
  );
};
export default ChatPanel;
