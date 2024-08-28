'use client';
import { copyToClipboard } from '@/app/utils/common/copyToClipboard';
import { calculateTimeDifference } from '@/app/utils/common/date';
import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
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
import Link from 'next/link';
import { toast } from 'sonner';
import UserHeader from '../gernal/user-header';
import { Button } from '../ui/button-new';
import StatusPill from './status-pill';

const UserInfo = () => {
  const { isLoading: profileLoading, error: profileError, data: userProfile } = useUserProfile();

  if (profileError || !userProfile) {
    if (profileError) {
      toast.error(profileError.message);
    }
    return <></>;
  }

  if (profileLoading) return <></>;
  const { user_data: user, candidate_data: candidate } = userProfile;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  if (user) {
    return (
      <>
        <div className="hidden max-w-md flex-col gap-8 lg:flex">
          <div className="flex flex-col items-center justify-center gap-2">
            {user?.profile_picture ? (
              <Image
                src={user?.profile_picture || '/assets/avatar.png'}
                alt={user?.profile_picture ? `${user?.name}'s Profile Photo` : 'Profile Avatar'}
                width={150}
                height={150}
                quality={100}
                className="rounded-full"
              />
            ) : (
              <div className="h-36 w-36 rounded-full bg-gray-200"></div>
            )}
            <div className="flex flex-col">
              <h4 className="py-2 text-center text-xl font-bold text-neutral-950 lg:text-3xl">
                {user.name}
              </h4>
              <p className="mb-4 text-xl text-gray-500">
                {candidate?.headline || 'Software Engineer'}
              </p>
              <StatusPill online_status={user.online_status} />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:gap-8">
            <h4 className="text-xl font-bold text-gray-700 lg:text-xl">Contact</h4>
            <ul className="flex flex-col gap-4 lg:gap-8">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary-100">
                  <MapPinIcon className="h-5 w-5 text-neutral-950" />
                </span>
                <p className="flex h-full flex-col justify-between">
                  <span className="w-full truncate font-bold text-gray-700 lg:text-base">
                    Location
                  </span>
                  <span className="w-full truncate text-gray-700 lg:text-base">
                    {[user?.city, user?.country].join(', ')}
                  </span>
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary-100">
                  <ClockIcon className="h-5 w-5 text-neutral-950" />
                </span>
                <p className="flex h-full flex-col justify-between truncate">
                  <span className="w-full truncate font-bold text-gray-700 lg:text-base">
                    Timezone
                  </span>
                  <span className="w-full truncate text-gray-700 lg:text-base">
                    {user?.timezone}
                  </span>
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary-100">
                  <MailIcon className="h-5 w-5 text-neutral-950" />
                </span>
                <p className="flex h-full flex-col justify-between">
                  <span className="w-full truncate font-bold text-gray-700 lg:text-base">
                    Email
                  </span>
                  <span className="w-full truncate text-gray-700 lg:text-base">{user?.email}</span>
                </p>
              </li>
              {currentUrl && (
                <li className="flex items-center gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary-100">
                    <LinkIcon className="h-5 w-5 text-neutral-950" />
                  </span>
                  <p className="flex h-full flex-col justify-between overflow-hidden">
                    <span className="flex w-full items-center gap-2 truncate font-bold text-gray-700 lg:text-base">
                      <span>Public Profile</span>
                      <Button
                        variant="outline"
                        size="icon-xs"
                        onClick={() => copyToClipboard(`${currentUrl}/user/${user?.uid}`)}
                      >
                        <ClipboardIcon className="h-4 w-4" />
                      </Button>
                    </span>
                    <span className="w-full truncate text-gray-700 lg:text-base">{`${currentUrl}/user/${user?.uid}`}</span>
                  </p>
                </li>
              )}
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <h4 className="text-xl font-bold text-gray-700 lg:text-xl">Resume</h4>
            {/* TODO: create info-list component  */}
            <ul className="flex flex-col gap-4 lg:gap-8">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary-100">
                  <FileIcon className="h-5 w-5 text-neutral-950" />
                </span>
                <p className="flex h-full flex-col justify-between">
                  <span className="flex w-full items-center gap-2 truncate font-bold text-gray-700 lg:text-base">
                    <Link
                      href={`${candidate?.uploaded_resumes?.length ? candidate?.uploaded_resumes[0]?.cv_filepath : ''}`}
                    >
                      {user?.name}&apos;s Resume
                    </Link>
                    <Button variant="outline" size="icon-xs">
                      <Link
                        href={`${candidate?.uploaded_resumes?.length ? candidate?.uploaded_resumes[0]?.cv_url : ''}`}
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                      </Link>
                    </Button>
                  </span>
                  <span className="w-full truncate text-gray-700 lg:text-base">
                    Created{' '}
                    {calculateTimeDifference(
                      candidate?.uploaded_resumes?.length
                        ? candidate?.uploaded_resumes[0]?.created
                        : ''
                    )}
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <UserHeader
          user_name={user.name}
          user_role={'Software Engineer'}
          online_status={user.online_status}
          className="lg:hidden"
        />
      </>
    );
  }
};
export default UserInfo;
