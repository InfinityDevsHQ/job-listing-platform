'use client';
import { copyToClipboard } from '@/app/utils/common/copyToClipboard';
import { calculateTimeDifference } from '@/app/utils/common/date';
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
import Link from 'next/link';
import { toast } from 'sonner';
import { Button } from '../ui/button-new';

const UserInfo = () => {
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
    return <></>;
  }

  if (profileLoading) return <></>;
  const { user_data: user, candidate_data: candidate } = userProfile;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  if (user) {
    return (
      <>
        <div className="hidden flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 lg:col-span-1 lg:flex lg:p-8">
          <div className="flex flex-col items-center justify-center gap-2">
            {user?.profile_picture ? (
              <Image
                src={user?.profile_picture}
                alt="test"
                width={150}
                height={150}
                className={cn('rounded-full border-4 border-gray-100 ring-4 ring-gray-500', {
                  'ring-green-500': user.online_status !== 'Offline',
                })}
              />
            ) : (
              <div className="h-36 w-36 rounded-full bg-gray-200"></div>
            )}
            <div className="flex flex-col">
              <h4 className="pt-2 text-center text-xl font-bold text-neutral-950 lg:text-3xl">
                {user.name}
              </h4>
              <p className="text-xl text-gray-500">{candidate?.headline}</p>
              <div className="mt-2 flex items-center justify-center gap-3">
                {candidate?.social?.github && (
                  <Link
                    href={`${candidate?.social?.github}`}
                    className="flex h-8 w-8 items-center justify-center gap-2 rounded-full bg-gray-200 text-black"
                  >
                    <Image
                      src={'/assets/svgs/github.svg'}
                      alt="github"
                      width={24}
                      height={24}
                      className={cn('h-4 w-4 grayscale')}
                    />
                  </Link>
                )}
                {candidate?.social?.twitter && (
                  <Link
                    href={`${candidate?.social?.twitter}`}
                    className="flex h-8 w-8 items-center justify-center gap-2 rounded-full bg-gray-200 text-black"
                  >
                    <Image
                      src={'/assets/svgs/twitter.svg'}
                      alt="github"
                      width={24}
                      height={24}
                      className={cn('h-4 w-4 grayscale')}
                    />
                  </Link>
                )}
                {candidate?.social?.linkedin && (
                  <Link
                    href={`${candidate?.social?.linkedin}`}
                    className="flex h-8 w-8 items-center justify-center gap-2 rounded-full bg-gray-200 text-black"
                  >
                    <Image
                      src={'/assets/svgs/linkedin.svg'}
                      alt="github"
                      width={24}
                      height={24}
                      className={cn('h-4 w-4 grayscale')}
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-bold text-gray-700 lg:text-xl">Contact</h4>
            {/* TODO: create info-list component  */}
            <ul className="flex flex-col gap-4">
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
                <p className="flex h-full flex-col justify-between">
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
            <ul className="flex flex-col gap-8">
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
        {updateProfileError && (
          <h2 className="text-5xl">error while updating: ${updateProfileError.message} </h2>
        )}
      </>
    );
  }
};
export default UserInfo;
