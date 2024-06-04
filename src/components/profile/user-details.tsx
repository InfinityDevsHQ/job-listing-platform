'use client';
import { useState } from 'react';
import EditProfileForm from '../forms/profile/edit-profile-form';
import { Button } from '../ui/button-new';
import UserInfo from './user-info';

const UserDetails = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 lg:col-span-1 lg:gap-8 lg:p-8">
        {!showEditForm ? (
          <>
            <UserInfo />
          </>
        ) : (
          <EditProfileForm />
        )}
        <Button
          variant="outline"
          onClick={() => setShowEditForm(!showEditForm)}
          className="hidden lg:flex"
        >
          Edit
        </Button>
      </div>
    </>
  );
};

export default UserDetails;
