import Intro from "./_components/intro";
import FormsSlider from "./_components/forms-slider";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-between p-4">
        <Intro />
        {/* <StepNavigator /> */}
        <FormsSlider />
      </div>
    </>
  );
}
