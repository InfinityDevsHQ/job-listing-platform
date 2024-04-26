import ChatPanel from './panels/chat-panel';
import InboxPanel from './panels/inbox-panel';
import AcceptedTab from './tabs/accepted-tab';

export default function Inbox() {
  return (
    <div className="flex p-4">
      <InboxPanel />
      <AcceptedTab />
      <ChatPanel />
    </div>
  );
}
