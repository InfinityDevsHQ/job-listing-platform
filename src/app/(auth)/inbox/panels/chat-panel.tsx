import TextArea from '@/components/ui/text-area';
import { Send } from 'lucide-react';
import ChatHeader from './_components/chat-header';
import Messages from './_components/messages';
type ChatPanelProps = {
  className?: string;
};
const ChatPanel = ({ className = '' }: ChatPanelProps) => {
  return (
    <div
      className={`chat-panel flex-1 flex-col gap-2.5  bg-white lg:ml-8 lg:flex lg:p-4 lg:pl-0 ${className}`}
    >
      <ChatHeader />
      <Messages />
      <TextArea
        placeholder="Type a message"
        trailingIcon={<Send className="rotate-45 self-center" size={16} />}
      />
    </div>
  );
};
export default ChatPanel;
