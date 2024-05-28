import Image from 'next/image';

type HeroSectionProps = {
  heading: string;
  desc?: string;
  searchQuery?: string;
  handleChangeSearchQuery?: (val: string) => void;
  vectorUrl?: string;
};

const Hero = ({
  heading,
  desc,
  searchQuery = '',
  vectorUrl = '',
  handleChangeSearchQuery,
}: HeroSectionProps) => {
  return (
    <main className="grid place-items-center pb-4 pt-4 md:grid-cols-2 md:pb-8 md:pt-16 md:pt-8">
      <div className="w-full md:order-1 md:py-6">
        <Image
          src={vectorUrl}
          width={600}
          height={600}
          alt="Astronaut in the air"
          loading="eager"
          className="ml-auto h-40 rounded-3xl md:h-80 md:w-80 md:border lg:h-96 lg:w-96"
        />
      </div>
      <div>
        <h1 className="px-8 text-center text-4xl font-bold md:px-0 md:text-left md:text-5xl md:tracking-tight lg:text-7xl">
          {heading}
        </h1>
        <p className="mt-4 max-w-xl text-center text-lg  text-slate-600 md:text-left">{desc}</p>
        {/* <div className="mt-6 flex flex-col gap-3 md:flex-row">
          <Button>
            <Link href="#" target="_blank" rel="noopener">
              Get Started
            </Link>
          </Button>
          <Button variant="outline">
            <Link href="#" target="_blank" rel="noopener" className="flex items-center">
              Learn More
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div> */}
      </div>
    </main>
  );
};

export default Hero;
