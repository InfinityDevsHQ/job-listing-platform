import ClientResultsSection from '@/components/recruit/client-results-section';
import CompaniesTrustedSection from '@/components/recruit/companies-trusted-section';
import FreeTrialSection from '@/components/recruit/free-trial-section';
import RecruitFeaturesSection from '@/components/recruit/recruit-features-section';
import RecruitersHero from '@/components/recruit/recruiters-hero';
import TopBrandsSection from '@/components/recruit/top-brands-section';

const Recruit = () => {
  return (
    <main className="bg-secondary-50 p-4 lg:gap-8 lg:p-8">
      <div className="relative flex w-full flex-col items-center gap-4 overflow-hidden rounded-md border border-neutral-200 bg-white p-4 lg:gap-8 lg:p-8">
        <RecruitersHero />
        <TopBrandsSection />
        <RecruitFeaturesSection />
        <ClientResultsSection />
        <CompaniesTrustedSection />
        <FreeTrialSection />
      </div>
    </main>
  );
};

export default Recruit;
