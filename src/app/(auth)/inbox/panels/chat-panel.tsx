import ChatHeader from './_components/chat-header';
import Messages from './_components/messages';

const ChatPanel = () => {
  return (
    <div className="flex flex-1 flex-col gap-2.5 bg-gray-200 lg:p-4">
      <ChatHeader />
      <Messages />
    </div>
  );
};
export default ChatPanel;
