import { Button } from '../ui/button-new';
import InfoList from '../ui/info-list';
export default function FreeTrialSection() {
  const FeaturesList = [
    'Monthly contracts, cancel at any time',
    'Book a Free Demo with our team',
    `We'll do the setup for you`,
  ];
  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 bg-secondary-gradient p-4 lg:p-8">
      <h2 className="text-2xl font-bold text-gray-700 lg:text-5xl">Start your 14-day free trial</h2>
      <p className="text-center text-gray-500">
        Join 270+ companies already growing with ClickJob.
      </p>
      <InfoList className="!text-center" listClassName="text-center mx-auto" list={FeaturesList} />

      <div className="flex w-full flex-col items-center justify-center gap-3 lg:flex-row">
        <Button variant="secondary" className="w-full lg:w-auto">
          Try it Free for 14 Days
        </Button>
        <Button variant="outline" className="w-full lg:w-auto">
          See it in Action
        </Button>
      </div>
    </section>
  );
}
