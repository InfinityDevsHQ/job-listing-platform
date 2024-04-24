import Image from 'next/image';

const Hero = () => {
  return (
    <div
      className="grid grid-cols-3 items-center overflow-hidden rounded-md bg-cover p-4 lg:gap-8 lg:p-8"
      style={{
        background: "url('/assets/images/home/homePage_hero_section_bg.png')",
      }}
    >
      <div className="col-span-3 flex flex-col gap-4 lg:col-span-2 lg:gap-8">
        <h2 className="text-lg font-bold text-white lg:text-3xl">
          Explore Companies Offering Job Opportunities
        </h2>
      </div>
      <Image
        alt="homePage_hero_section_vector.png"
        src={'/assets/companies/companies-hero.png'}
        width={245}
        height={195}
        className="mx-auto hidden h-48 lg:block"
      />
    </div>
  );
};

export default Hero;
