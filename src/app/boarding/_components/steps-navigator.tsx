import StepTab from "./step-tab";

export default function StepNavigator() {
  const steps = ["Location", "Upload CV", "Filter Jobs", "Contacts", "Finish"];
  return (
    <div className="flex py-2">
      {steps.map((step, index) => (
        <StepTab
          key={index}
          stepNumber={index + 1}
          stepName={step}
          svg={<p></p>}
        />
      ))}
    </div>
  );
}
