'use client';
import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import { useUpdateUserProfile } from '@/hooks/useUpdateUserProfile';
import { cn } from '@/lib/utils';
import {
  ClipboardIcon,
  ClockIcon,
  ExternalLinkIcon,
  FileIcon,
  LinkIcon,
  MailIcon,
  MapPinIcon,
} from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';
import { Button } from '../ui/button-new';
import ProfileTabs from './profile-tabs';
import UserInfoMobilePanel from './user-info-mobile-panel';
const UserInfoPanel = () => {
  const updateUserBody = {
    email: 'new@gmail.com',
    name: 'John Doe',
    language: 'Persion',
    latitude: 100,
    longitude: 200,
    city: 'Manchester',
    country: 'United Kingdom',
    timezone: 'UK',
    phone_number: '0000099393',
    profile_picture: '/assets/avatar',
    prefered_language: 'English',
    online_status: 'Online',
    selected_country: 'United Kingdom',
    geo_resolve_tries: 'Pro',
    is_onboarded: true,
  };

  const { isLoading: profileLoading, error: profileError, data: userProfile } = useUserProfile();

  const {
    isPending: updateProfileLoading,
    data: updateProfileResponse,
    error: updateProfileError,
  } = useUpdateUserProfile(updateUserBody);

  if (profileError || !userProfile) {
    if (profileError) {
      toast.error(profileError.message);
    }
    return <p>Error while getting profile {profileError?.message}</p>;
  }
  if (profileLoading) return <p>Loading.....</p>;
  const { user_data: user, candidate_data: candidate } = userProfile;

  if (user) {
    return (
      <>
        <div className="hidden flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 lg:col-span-1 lg:flex lg:p-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={user?.profile_picture}
              alt="test"
              width={150}
              height={150}
              className={cn('rounded-full border-4 border-gray-100 ring-4 ring-gray-500', {
                'ring-green-500': user.online_status !== 'Offline',
              })}
            />
            <div className="flex flex-col">
              <h4 className="pt-2 text-center text-xl font-bold text-neutral-950 lg:text-3xl">
                {user.name}
              </h4>
              <p className="text-xl text-gray-500">{candidate?.headline}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold text-gray-700 lg:text-xl">Contact</h4>
            {/* TODO: create info-list component  */}
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
                  <MapPinIcon className="h-5 w-5 text-neutral-950" />
                </span>
                <p className="flex h-full flex-col justify-between">
                  <span className="font-bold text-gray-700 lg:text-base">Location</span>
                  <span className="text-gray-700 lg:text-base">
                    {user?.city}, {user?.country}
                  </span>
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
                  <ClockIcon className="h-5 w-5 text-neutral-950" />
                </span>
                <p className="flex h-full flex-col justify-between">
                  <span className="font-bold text-gray-700 lg:text-base">Timezone</span>
                  <span className="text-gray-700 lg:text-base">{user?.timezone}</span>
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
                  <MailIcon className="h-5 w-5 text-neutral-950" />
                </span>
                <p className="flex h-full flex-col justify-between">
                  <span className="font-bold text-gray-700 lg:text-base">Email</span>
                  <span className="text-gray-700 lg:text-base">{user?.email}</span>
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
                  <LinkIcon className="h-5 w-5 text-neutral-950" />
                </span>
                <p className="flex h-full flex-col justify-between">
                  <span className="flex items-center gap-2 font-bold text-gray-700 lg:text-base">
                    <span>Public Profile</span>
                    <Button variant="outline" size="icon-xs">
                      <ClipboardIcon className="h-4 w-4" />
                    </Button>
                  </span>
                  <span className="text-gray-700 lg:text-base">clickjob.ai/john-doe</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-xl font-bold text-gray-700 lg:text-xl">Resume</h4>
            {/* TODO: create info-list component  */}
            <ul className="flex flex-col gap-8">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100">
                  <FileIcon className="h-5 w-5 text-neutral-950" />
                </span>
                <p className="flex h-full flex-col justify-between">
                  <span className="flex items-center gap-2 font-bold text-gray-700 lg:text-base">
                    Saad Gulzar Resume
                    <Button variant="outline" size="icon-xs">
                      <ExternalLinkIcon className="h-4 w-4" />
                    </Button>
                  </span>
                  <span className="text-gray-700 lg:text-base">Created 4 Hours Ago</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        {updateProfileError && (
          <h2 className="text-5xl">error while updating: ${updateProfileError.message} </h2>
        )}
        <UserInfoMobilePanel online_status={user.online_status} />
        <ProfileTabs candidate={candidate} />
      </>
    );
  }
};
export default UserInfoPanel;
