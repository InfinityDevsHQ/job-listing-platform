import { getQueryClient } from '@/app/utils/rq/react-query-client';
import { ReactQueryHydrate } from '@/app/utils/rq/react-query-hydrate';
import PostJobForm from '@/components/forms/post-job-form/post-job-form';
import { GET_PROMOTED_COMPANIES_KEY } from '@/hooks/usePromotedCompanies';
import { getPromotedCompanies } from '@/lib/companies';
import { dehydrate } from '@tanstack/react-query';
import CompaniesGallery from '../../companies/_components/companies-gallery';
import AdvancedPromotion from './_components/advanced-promotion';
import Assister from './_components/assister';
import FAQSection from './_components/faq-section';

export default async function PostJob() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [GET_PROMOTED_COMPANIES_KEY],
    queryFn: getPromotedCompanies,
  });
  return (
    <div className="mt-4 flex flex-col gap-4 border border-gray-200 bg-gray-50 p-4 lg:mt-8 lg:gap-8 lg:p-8">
      <PostJobForm />
      <AdvancedPromotion />
      <FAQSection />
      <Assister />
      <h3 className="text-center font-bold text-gray-700 lg:text-4xl">
        You may also know us from the media
      </h3>
      <ReactQueryHydrate state={dehydrate(queryClient)}>
        <CompaniesGallery />
      </ReactQueryHydrate>
    </div>
  );
}
