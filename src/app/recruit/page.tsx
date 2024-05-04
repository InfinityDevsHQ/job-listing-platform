import Button from '@/components/ui/button';
import Image from 'next/image';

const Recruit = () => {
  return (
    <section className="flex flex-col gap-4 rounded-md border border-gray-200 bg-secondary-50 p-4 lg:gap-8 lg:p-8">
      <div className="relative flex items-center justify-between rounded-md border border-neutral-200 bg-white p-4 lg:p-8">
        <div className="flex flex-col gap-5 lg:gap-8">
          <h1 className="text-5xl font-bold text-gray-700">Rethink! The Way You Are</h1>
          <p className="max-w-2xl text-lg text-gray-500">
            ClickJob is the all-in-one hiring solution that makes every step of your selection
            process easier and lets you focus on what matters the most – your candidates.
          </p>
          <div className="flex items-center gap-3">
            <Button variant="secondary" text="Try it Free for 14 Days" />
            <Button text="See it in Action" />
          </div>
        </div>
        <Image
          src="/assets/images/recruit/clickjob_ai_recruit_hero_section.png"
          width={306}
          height={400}
          alt="party"
        />
      </div>
    </section>
  );
};
export default Recruit;
