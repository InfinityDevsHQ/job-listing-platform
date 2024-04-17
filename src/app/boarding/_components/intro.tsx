export default function Intro() {
  return (
    <div className="p-4 lg:p-8 bg-primary-900 border border-primary-950 rounded-md my-6 w-full">
      <div className="flex flex-col gap-5 lg:gap-4 text-white">
        <h3 className="text-xl lg:text-4xl font-bold font-sans">
          Welcome ! What Now ?
        </h3>
        <p className="font-sans text-sm lg:text-base">
          Want to improve your job search? Start by completing your profile.
          It&apos;ll help AI find the perfect job for you.
        </p>
      </div>
    </div>
  );
}
