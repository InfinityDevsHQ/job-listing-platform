import InfoSection from '@/components/ui/info-section';
import { TabsContent } from '@/components/ui/tabs';

const RecruiterTab = () => {
  return (
    <TabsContent value="recruiter" className="-mt-4 flex flex-col gap-5">
      <InfoSection heading="Overall Assessment">
        {/* <p className="text-gray-500">{recommendations?.overall_assessment?.text}</p> */}
      </InfoSection>
      <InfoSection heading="Career Achievements">
        {/* <p className="text-gray-500">{recommendations?.career_achievements?.text}</p> */}
      </InfoSection>
    </TabsContent>
  );
};
export default RecruiterTab;
