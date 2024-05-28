import ProfileTabs from '@/components/profile/profile-tabs';
import UserDetails from '@/components/profile/user-details';
import { getUserProfile } from '@/lib/user';

const Profile = async () => {
  const userProfileData = await getUserProfile();
  const { user_data: user, candidate_data: candidate } = userProfileData;

  return (
    <div className="grid gap-4 p-4 lg:grid-cols-4 lg:gap-8 lg:p-8">
      <UserDetails user={user} />
      <ProfileTabs candidate={candidate} />
    </div>
  );
};

export default Profile;
