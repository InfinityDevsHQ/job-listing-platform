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
      <div className="flex flex-col gap-4 rounded-lg border border-dark-background3 bg-dark-background p-4 lg:w-[410px] lg:gap-8 lg:p-8">
        {!showEditForm ? (
          <>
            <UserInfo />
          </>
        ) : (
          <EditProfileForm />
        )}
        <Button
          variant="primary"
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
