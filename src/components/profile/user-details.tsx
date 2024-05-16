'use client';
import { GET_LANGUAGES_KEY } from '@/app/utils/rq/hooks/use-languages';
import { getQueryClient } from '@/app/utils/rq/react-query-client';
import getLanguages from '@/lib/languages';
import { User } from '@/types/types';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { useState } from 'react';
import EditProfileForm from '../forms/profile/edit-profile-form';
import { Button } from '../ui/button-new';
import UserInfo from './user-info';
import UserInfoMobile from './user-info-mobile';

type UserDetailsProps = {
  user: User;
};

const UserDetails = async ({ user }: UserDetailsProps) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [GET_LANGUAGES_KEY],
    queryFn: getLanguages,
  });

  return (
    <div className="hidden flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 lg:col-span-1 lg:flex lg:p-8">
      {!showEditForm ? (
        <>
          <UserInfo />
          <UserInfoMobile online_status={user.online_status} />
        </>
      ) : (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <EditProfileForm />
        </HydrationBoundary>
      )}
      <Button variant="outline" onClick={() => setShowEditForm(!showEditForm)}>
        Edit
      </Button>
    </div>
  );
};

export default UserDetails;
