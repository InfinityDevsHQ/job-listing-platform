import PostJobForm from '@/components/forms/post-job-form/post-job-form';
import AdvancedPromotion from './_components/advanced-promotion';
import Assister from './_components/assister';
import FAQSection from './_components/faq-section';

export default function PostJob() {
  return (
    <div className="flex flex-col gap-4 p-4 lg:gap-8 lg:p-8">
      <PostJobForm />
      <AdvancedPromotion />
      <FAQSection />
      <Assister />
    </div>
  );
}
