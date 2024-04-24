import Image from 'next/image';

import Input from '@/components/ui/input';

import MagnifyingGlassIcon from '@/components/svgs/magnifying-glass';

const Hero = () => {
  return (
    <div
      className="grid grid-cols-3 items-center overflow-hidden rounded-md bg-cover p-4 lg:gap-8 lg:p-8"
      style={{
        background: "url('/assets/images/home/homePage_hero_section_bg.png')",
      }}
    >
      <div className="col-span-3 flex flex-col gap-4 lg:col-span-2 lg:gap-8">
        <h2 className="text-lg font-bold text-white lg:text-3xl">Find your dream job here</h2>
        <p className="max-w-lg text-sm text-white lg:text-base">
          Explore the latest job openings and apply for the best job opportunities available today!
        </p>

        <Input
          variant={'primary'}
          type="text"
          name="search"
          defaultValue={''}
          placeholder="Search"
          leadingIcon={<MagnifyingGlassIcon />}
        />
      </div>
      <Image
        alt="homePage_hero_section_vector.png"
        src={'/assets/images/home/homePage_hero_section_vector.png'}
        width={245}
        height={195}
        className="mx-auto hidden h-48 lg:block"
      />
    </div>
  );
};

export default Hero;
