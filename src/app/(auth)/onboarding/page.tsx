import Hero from '@/app/(public)/companies/_components/hero';
import FormsSlider from './_components/forms-slider';
import OnboardingStepNavigator from './_components/onboarding-step-navigator';
export default function Home({ searchParams }: { searchParams?: { step?: string } }) {
  const step = searchParams?.step;
  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 p-4 lg:gap-8">
        {/* {step && <Intro />} */}
        {step && (
          <Hero
            heading="Welcome! What now?"
            className="self-stretch border border-primary-950"
            desc={`Want to improve your job search? Start by completing your profile. It'll help AI find the perfect job for you.`}
          />
        )}
        {step && <OnboardingStepNavigator step={step} />}
        <FormsSlider step={step} />
      </div>
    </>
  );
}
