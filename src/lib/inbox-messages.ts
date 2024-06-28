'use server';
import { InboxMessage } from '@/types/types';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const INBOX_MESSAGES_URLS = {
  singleInboxMessage: `${PLATFORM_API_BASE_URL}/api/v1/inbox`,
  readUserMessage: `${PLATFORM_API_BASE_URL}/api/v1/inbox/user`,
};

export async function getReadInboxMessageByMessageId(
  messageId: string | number
): Promise<InboxMessage> {
  if (!messageId) {
    // can return 404 heres
    return {} as InboxMessage;
  }
  const data = await DataService.get<InboxMessage>(
    `${INBOX_MESSAGES_URLS.singleInboxMessage}/${messageId}`
  );
  return data;
}
export async function getReadInboxMessageByUserId(user_id: string | number): Promise<InboxMessage> {
  if (!user_id) {
    // can return 404 heres
    return {} as InboxMessage;
  }
  const data = await DataService.get<InboxMessage>(
    `${INBOX_MESSAGES_URLS.readUserMessage}/${user_id}`
  );
  return data;
}
