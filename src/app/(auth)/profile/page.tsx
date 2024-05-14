import UserInfoPanel from '@/components/profile/user-info-panel';

const Profile = async () => {
  return (
    <div className="grid gap-4 p-4 lg:grid-cols-4 lg:gap-8 lg:p-8">
      <UserInfoPanel />
    </div>
  );
};
export default Profile;
