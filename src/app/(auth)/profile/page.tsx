'use client';
import ProfileTabs from '@/components/profile/profile-tabs';
import UserInfoMobilePanel from '@/components/profile/user-info-mobile-panel';
import UserInfoPanel from '@/components/profile/user-info-panel';
import useAuthStore from '@/stores/authStore/store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Profile = () => {
  const [editProfile, setEditProfile] = useState<boolean>(false);
  const [profileVal, setProfileVal] = useState(
    `I am looking to enhance my skills in advanced web development and contribute to innovative projects. Seeking opportunities to excel in UI design and collaborative environments. Passionate about creating efficient and user-friendly web systems.`
  );

  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  return (
    <div className="grid gap-4 p-4 lg:grid-cols-4 lg:gap-8 lg:p-8">
      <UserInfoPanel online_status={user.online_status} />
      <UserInfoMobilePanel online_status={user.online_status} />
      <ProfileTabs
        editProfile={editProfile}
        setEditProfile={setEditProfile}
        profileVal={profileVal}
      />
    </div>
  );
};
export default Profile;
