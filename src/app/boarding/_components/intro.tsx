export default function Intro() {
  return (
    <div className="flex flex-col gap-5 p-5 bg-primary rounded-20">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-xl leading-6 text-white">
            Welcome ! What Now ?
          </h3>
          <h2 className="font-roboto font-bold text-base leading-5 text-white">
            Let&apos;s start with filling out your profile
          </h2>
          <p className="font-roboto text-xs leading-3 text-white">
            Want to improve your job search? Start by completing your profile.
            It&apos;ll help AI find the perfect job for you.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="font-bold text-xl leading-6 text-white">
            How it Works:
          </h3>
          <p className="font-roboto text-xs leading-3 text-white">
            Complete your profile and let our AI-driven platform bring job
            opportunities straight to you — no searching required.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="font-bold text-xl leading-6 text-white">
            How you get:
          </h3>
          <h2 className="font-roboto font-bold text-base leading-5 text-white">
            Handpicked opportunities
          </h2>
          <p className="font-roboto text-xs leading-3 text-white">
            Forget spam. Receive only the jobs that align with your career
            goals.
          </p>
        </div>
      </div>
    </div>
  );
}
