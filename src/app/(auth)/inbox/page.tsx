import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getReadInboxMessageByUserId } from '@/lib/inbox-messages';
import { getUserProfile } from '@/lib/user';
import ChatPanel from './panels/chat-panel';
import InboxPanel from './panels/inbox-panel';
import AcceptedTab from './tabs/accepted-tab';

export default async function Inbox() {
  const user = await getUserProfile();
  const messages = getReadInboxMessageByUserId(user.user_data.id as number);
  return (
    <div className="inbox flex flex-col p-4 lg:h-screen lg:flex-row">
      {messages && <pre>{JSON.stringify(messages, null, 2)}</pre>}

      <Tabs defaultValue="accepted" className="w-full lg:hidden">
        <TabsList className="bg-primary-50 lg:bg-transparent">
          <TabsTrigger value="accepted">Accepted</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
        </TabsList>
        <TabsContent value="accepted">
          <AcceptedTab className="w-auto" />
        </TabsContent>
        <TabsContent value="sent">
          <ChatPanel />
        </TabsContent>
      </Tabs>
      <InboxPanel className="hidden lg:flex" />
      <AcceptedTab className="hidden lg:flex" />
      <ChatPanel className="hidden lg:block" />
    </div>
  );
}
