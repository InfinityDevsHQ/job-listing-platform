import OnboardingIntro from '../tabs/on-boarding-intro';
import OnboardingStpFive from '../tabs/onboarding-step-five';
import OnboardingStepFour from '../tabs/onboarding-step-four';
import OnboardingStepOne from '../tabs/onboarding-step-one';
import OnboardingStepThree from '../tabs/onboarding-step-three';
import OnboardingStepTwo from '../tabs/onboarding-step-two';
type FormsSliderProps = {
  step?: string;
};
export default function FormsSlider({ step }: FormsSliderProps) {
  const stepComponents: Record<string, JSX.Element> = {
    location: <OnboardingStepOne />,
    'upload-cv': <OnboardingStepTwo />,
    'filter-jobs': <OnboardingStepThree />,
    contact: <OnboardingStepFour />,
    'terms-and-conditions': <OnboardingStpFive />,
  };

  const renderStep = (step: string | undefined) => {
    if (!step) {
      return <OnboardingIntro />;
    }
    return stepComponents[step] || <OnboardingIntro />;
  };
  return renderStep(step);
}
