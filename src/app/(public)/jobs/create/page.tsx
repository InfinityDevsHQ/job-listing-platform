import PostJobForm from '@/components/forms/post-job-form/post-job-form';
import AdvancedPromotion from './_components/advanced-promotion';
import Assister from './_components/assister';
import FAQSection from './_components/faq-section';

export default function PostJob() {
  return (
    <div className="mt-4 flex flex-col gap-4 border border-gray-200 bg-gray-50 p-4 lg:mt-8 lg:gap-8 lg:p-8">
      <PostJobForm />
      <AdvancedPromotion />
      <FAQSection />
      <Assister />
    </div>
  );
}
