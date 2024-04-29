import FormsSlider from './_components/forms-slider';
import Intro from './_components/intro';
export default function Home({ searchParams }: { searchParams?: { step?: string } }) {
  const step = searchParams?.step;
  return (
    <>
      <div className="flex flex-col items-center justify-between p-4">
        <Intro />
        {/* <StepNavigator /> */}
        <FormsSlider step={step} />
      </div>
    </>
  );
}
