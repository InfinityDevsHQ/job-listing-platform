'use client';
import { Edit } from 'lucide-react';
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
          className="hidden gap-2 lg:flex"
        >
          {showEditForm ? 'Cancel' : 'Edit'}
          {!showEditForm && <Edit className="h-4 w-4 text-current" />}
        </Button>
      </div>
    </>
  );
};

export default UserDetails;
