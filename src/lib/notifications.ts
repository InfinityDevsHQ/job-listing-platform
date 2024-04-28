'use server';
import { Notification } from '@/types/types';
import { DataService } from './data-service';
const PLATFORM_API_BASE_URL = process.env.PLATFORM_API_BASE_URL;

const NOTIFICATIONS_URLS = {
  notificationByUserId: `${PLATFORM_API_BASE_URL}/api/v1/notifications`,
  notificationByNotificationId: `${PLATFORM_API_BASE_URL}/api/v1/notifications`,
};

export async function getReadInboxMessageByMessageId(
  notificationId: string | number
): Promise<Notification> {
  if (!notificationId) {
    // can return 404 heres
    return {} as Notification;
  }
  const data = await DataService.get<Notification>(
    `${NOTIFICATIONS_URLS.notificationByNotificationId}/${notificationId}`,
    {
      skip: '0',
      limit: '10',
      allow_for_translated_jobs: 'false',
    }
  );
  return data;
}
export async function getReadInboxMessageByUserId(user_id: string | number): Promise<Notification> {
  if (!user_id) {
    // can return 404 heres
    return {} as Notification;
  }
  const data = await DataService.get<Notification>(
    `${NOTIFICATIONS_URLS.notificationByUserId}/${user_id}`,
    {
      skip: '0',
      limit: '10',
      allow_for_translated_jobs: 'false',
    }
  );
  return data;
}
