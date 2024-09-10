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
    <div className="mx-auto my-4 flex max-w-screen-2xl flex-col gap-4 border border-dark-background3 bg-dark-background p-4 lg:my-8 lg:gap-8 lg:p-8">
      <PostJobForm />
      <AdvancedPromotion />
      <FAQSection />
      <Assister />
      <h3 className="text-center font-bold text-dark-nameWhite lg:text-4xl">
        You may also know us from the media
      </h3>
      <ReactQueryHydrate state={dehydrate(queryClient)}>
        <CompaniesGallery />
      </ReactQueryHydrate>
    </div>
  );
}
