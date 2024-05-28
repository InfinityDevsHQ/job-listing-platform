import { usePrefetchUserProfile } from '@/app/utils/rq/hooks/use-auth';
import { getQueryClient } from '@/app/utils/rq/react-query-client';
import { ReactQueryHydrate } from '@/app/utils/rq/react-query-hydrate';
import ProfileTabs from '@/components/profile/profile-tabs';
import UserDetails from '@/components/profile/user-details';
import { dehydrate } from '@tanstack/react-query';

const Profile = async () => {
  const queryClient = getQueryClient();
  await usePrefetchUserProfile();
  return (
    <div className="grid gap-4 p-4 lg:grid-cols-4 lg:gap-8 lg:p-8">
      <ReactQueryHydrate state={dehydrate(queryClient)}>
        <UserDetails />
        <ProfileTabs />
      </ReactQueryHydrate>
    </div>
  );
};

export default Profile;
