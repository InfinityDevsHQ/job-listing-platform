import ProfileTabs from '@/components/profile/profile-tabs';
import UserInfo from '@/components/profile/user-info';
import UserInfoMobile from '@/components/profile/user-info-mobile';
import { getUserProfile } from '@/lib/user';

const Profile = async () => {
  const userProfileData = await getUserProfile();
  const { user_data: user, candidate_data: candidate } = userProfileData;

  return (
    <div className="grid gap-4 p-4 lg:grid-cols-4 lg:gap-8 lg:p-8">
      <UserInfo />
      <UserInfoMobile online_status={user.online_status} />
      <ProfileTabs candidate={candidate} />
    </div>
  );
};

export default Profile;
