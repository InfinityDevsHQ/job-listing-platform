import FormsSlider from './_components/forms-slider';
import Intro from './_components/intro';
import OnboardingStepNavigator from './_components/onboarding-step-navigator';
export default function Home({ searchParams }: { searchParams?: { step?: string } }) {
  const step = searchParams?.step;
  return (
    <>
      <div className="flex flex-col items-center justify-between p-4">
        {step && <Intro />}
        {step && <OnboardingStepNavigator step={step} />}
        <FormsSlider step={step} />
      </div>
    </>
  );
}
