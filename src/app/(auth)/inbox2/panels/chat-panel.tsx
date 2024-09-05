import Input from '@/components/ui/input';
import { Send } from 'lucide-react';
import ChatHeader from './_components/chat-header';
import Messages from './_components/messages';
type ChatPanelProps = {
  className?: string;
};
const ChatPanel = ({ className = '' }: ChatPanelProps) => {
  return (
    <div className={`chat-pane flex-1 flex-col border border-dark-primary lg:flex ${className}`}>
      <ChatHeader />
      <Messages />
      <div className="mx-2 -mt-[60px] flex gap-4 rounded-t-2xl bg-dark-background px-4 py-8">
        <Input
          placeholder="Type Message"
          className="w-full rounded-full border border-neutral-600 bg-dark-primary px-4 py-2"
        />
        <span className="cursor-pointer rounded-full bg-dark-primary p-3">
          <Send
            className="-rotate-6 self-center text-dark-name hover:text-dark-nameWhite"
            size={16}
          />
        </span>
      </div>
    </div>
  );
};
export default ChatPanel;
