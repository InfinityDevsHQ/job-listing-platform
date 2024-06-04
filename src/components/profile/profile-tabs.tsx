'use client';
import { useUserProfile } from '@/app/utils/rq/hooks/use-auth';
import { UserProfile } from '@/types/types';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import AboutTab from './tabs/about-tab';
import AiInsightsTabs from './tabs/ai-insights-tabs';
import RecruiterTab from './tabs/recruiter-tab';
import UserInfoMobile from './user-info-mobile';

const ProfileTabs = () => {
  const { data: user } = useUserProfile();
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 lg:col-span-3 lg:p-8">
      <Tabs orientation="vertical" defaultValue="about" className="flex flex-col gap-4 lg:gap-8">
        <div className="flex items-center justify-between gap-4">
          <TabsList className="mx-0 w-full overflow-x-auto bg-primary-50">
            <TabsTrigger className="lg:hidden" value="user-info">
              User Info
            </TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="ai-insights">Ai Insights</TabsTrigger>
            <TabsTrigger value="recruiter">Recruiter Eye</TabsTrigger>
          </TabsList>
          {/* <Button variant="outline" onClick={() => setEditProfile(!editProfile)}>
            {editProfile ? 'Save' : 'Edit'}
          </Button> */}
        </div>
        <UserInfoMobile  />
        <AboutTab user={user as UserProfile} />
        <AiInsightsTabs candidateId={Number(user?.candidate_data?.id)} />
        <RecruiterTab candidateId={Number(user?.candidate_data?.id)} />
      </Tabs>
    </div>
  );
};
export default ProfileTabs;
