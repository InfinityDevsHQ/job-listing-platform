import TextArea from '@/components/ui/text-area';
import { Send } from 'lucide-react';
import ChatHeader from './_components/chat-header';
import Messages from './_components/messages';
type ChatPanelProps = {
  className?: string;
};
const ChatPanel = ({ className = '' }: ChatPanelProps) => {
  return (
    <div className={`chat-panel flex-1 flex-col gap-2.5  bg-white lg:ml-8 lg:flex  ${className}`}>
      <ChatHeader />
      <Messages />
      <div className="px-2 ">
        <TextArea
          placeholder="Type a message"
          className="p-2"
          trailingIcon={<Send className="mb-2 rotate-45 self-center" size={16} />}
        />
      </div>
    </div>
  );
};
export default ChatPanel;
