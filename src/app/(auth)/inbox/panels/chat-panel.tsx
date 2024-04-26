import Input from '@/components/ui/input';
import { Send } from 'lucide-react';
import ChatHeader from './_components/chat-header';
import Messages from './_components/messages';
const ChatPanel = () => {
  return (
    <div className="flex flex-1 flex-col gap-2.5 bg-gray-200 lg:p-4">
      <ChatHeader />
      <Messages />
      <Input placeholder="Type a message" trailingIcon={<Send className="rotate-45" />} />
    </div>
  );
};
export default ChatPanel;
