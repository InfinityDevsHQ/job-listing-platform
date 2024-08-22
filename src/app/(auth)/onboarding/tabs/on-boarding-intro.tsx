import Image from 'next/image';
import IntroCard from '../_components/intro-card';
const OnboardingIntro = () => {
  return (
    <div className="grid h-full min-h-[88vh] w-full flex-1 grid-cols-2">
      <div className="col-span-2 hidden items-center justify-center lg:col-span-1 lg:flex">
        <Image
          src={'/assets/boarding/intro_poster.png'}
          alt="Location Poster"
          width={580}
          height={580}
        />
      </div>
      <div className="col-span-2 flex w-full flex-col justify-center gap-4 lg:col-span-1">
        <IntroCard />
      </div>
    </div>
  );
};
export default OnboardingIntro;
