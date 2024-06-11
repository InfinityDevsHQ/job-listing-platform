import { EyeIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button-new';
export default function RecruitersHero() {
  return (
    <section className="relative flex w-full flex-col items-center gap-4 lg:flex-row lg:justify-between">
      <div className="order-2 flex flex-col gap-4 lg:order-1 lg:gap-8">
        <h1 className="text-center text-2xl font-bold text-gray-700 lg:text-left lg:text-5xl">
          Rethink! The Way You Are
        </h1>
        <p className="max-w-2xl text-lg text-gray-500">
          ClickJob is the all-in-one hiring solution that makes every step of your selection process
          easier and lets you focus on what matters the most - your candidates.
        </p>
        <div className="flex flex-col items-center gap-3 lg:flex-row">
          <Button variant="secondary" className="w-full lg:w-auto">
            Try it Free for 14 Days
          </Button>
          <Button variant="outline" className="w-full lg:w-auto">
            <EyeIcon className="mr-2 h-4 w-4" />
            See it in Action
          </Button>
        </div>
      </div>
      <Image
        src="/assets/images/recruit/clickjob_ai_recruit_hero_section.png"
        width={306}
        height={400}
        alt="party"
        className="order-1 h-40 w-40 lg:order-2 lg:h-96 lg:w-full lg:max-w-sm"
      />
    </section>
  );
}
