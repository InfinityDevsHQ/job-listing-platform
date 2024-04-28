'use client';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import ChatPanel from './panels/chat-panel';
import InboxPanel from './panels/inbox-panel';
import AcceptedTab from './tabs/accepted-tab';

export default function Inbox() {
  return (
    <div className="flex flex-col p-4 lg:flex-row">
      <Tabs defaultValue="accepted" className="w-full lg:hidden">
        <TabsList className="bg-primary-50 lg:bg-transparent">
          <TabsTrigger value="accepted">Accepted</TabsTrigger>
          <TabsTrigger value="sent" className="data-[state=active]:bg-secondary-900">
            Sent
          </TabsTrigger>
        </TabsList>
        <TabsContent value="accepted">
          <AcceptedTab className="w-auto" />
        </TabsContent>
        <TabsContent value="sent">
          <ChatPanel />
        </TabsContent>
      </Tabs>
      <InboxPanel className="hidden lg:flex" />
      <AcceptedTab className="hidden lg:block" />
      <ChatPanel className="hidden lg:block" />
    </div>
  );
}
