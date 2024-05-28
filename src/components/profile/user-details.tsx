'use client';
import { User } from '@/types/types';
import { useState } from 'react';
import EditProfileForm from '../forms/profile/edit-profile-form';
import { Button } from '../ui/button-new';
import UserInfo from './user-info';
import UserInfoMobile from './user-info-mobile';

type UserDetailsProps = {
  user: User;
};
const UserDetails = ({ user }: UserDetailsProps) => {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div className="hidden flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 lg:col-span-1 lg:flex lg:p-8">
      {!showEditForm ? (
        <>
          <UserInfo />
          <UserInfoMobile online_status={user.online_status} />
        </>
      ) : (
        <EditProfileForm />
      )}
      <Button variant="outline" onClick={() => setShowEditForm(!showEditForm)}>
        Edit
      </Button>
    </div>
  );
};

export default UserDetails;
