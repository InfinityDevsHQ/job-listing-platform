'use client';

import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BellRing, Lightbulb } from 'lucide-react';
import ChatPanel from './panels/chat-panel';
import InboxPanel from './panels/inbox-panel';
import AcceptedTab from './tabs/accepted-tab';

export default function Inbox() {
  const { data: user, isLoading } = useUserProfile();
  if (!user?.user_data.id || isLoading) {
    return;
  }
  return (
    <div className="bg-dark-backgroundDark">
      <div className="mx-auto max-w-screen-2xl px-4 pt-4 lg:px-8 lg:pt-8">
        <div className="flex justify-between rounded-full border border-dark-primary bg-dark-background2 p-4">
          <h1 className="px-4 text-lg text-dark-nameWhite">Inbox</h1>
          <div className="flex gap-4 px-4">
            <span>
              <Lightbulb className="text-dark-nameWhite" />
            </span>
            <span>
              <BellRing className="text-dark-nameWhite" />
            </span>
          </div>
        </div>
      </div>
      <div className="inbox mx-auto flex  max-w-screen-2xl flex-col p-4 lg:h-screen lg:flex-row lg:p-8">
        {/* <Tabs defaultValue="accepted" className={`w-full lg:hidden`}>
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
      </Tabs> */}
        <InboxPanel className="hidden bg-dark-background lg:flex" />
        <ChatPanel className=" hidden lg:block" />
        <AcceptedTab className="hidden bg-dark-background lg:flex lg:max-w-80" />
      </div>
    </div>
  );
}
