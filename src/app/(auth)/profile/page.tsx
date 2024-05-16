import UserInfoPanel from '@/components/profile/user-info-panel';
import { getUserProfile } from '@/lib/user';
const Profile = async () => {
  const user = await getUserProfile();

  return (
    <div className="grid gap-4 p-4 lg:grid-cols-4 lg:gap-8 lg:p-8">
      {user && <pre>{JSON.stringify(user)}</pre>}
      <UserInfoPanel />
    </div>
  );
};
export default Profile;
