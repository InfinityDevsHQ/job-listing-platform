'use client';

import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ChatPanel from './panels/chat-panel';
import InboxPanel from './panels/inbox-panel';
import AcceptedTab from './tabs/accepted-tab';

export default function Inbox() {
  const { data: user, isLoading } = useUserProfile();
  if (!user?.user_data.id || isLoading) {
    return;
  }
  return (
    <div className="inbox mx-auto flex max-w-screen-2xl flex-col overflow-hidden rounded-md p-4 lg:h-screen lg:flex-row lg:p-8">
      <Tabs defaultValue="accepted" className={`w-full lg:hidden`}>
        <TabsList className="bg-primary-50 p-1 lg:bg-transparent">
          <span className="rounded-md bg-white p-1">
            <TabsTrigger value="accepted">Accepted</TabsTrigger>
            <TabsTrigger value="sent">Sent</TabsTrigger>
          </span>
        </TabsList>
        <TabsContent value="accepted">
          <AcceptedTab className="w-auto" />
        </TabsContent>
        <TabsContent value="sent">
          <ChatPanel />
        </TabsContent>
      </Tabs>
      <InboxPanel className="hidden lg:flex" />
      <AcceptedTab className="hidden lg:flex lg:max-w-80" />
      <ChatPanel className="hidden lg:block" />
    </div>
  );
}
