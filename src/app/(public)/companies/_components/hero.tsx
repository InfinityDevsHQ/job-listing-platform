import Input from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
type HeroProps = {
  heading: string;
  desc?: string;
  searchQuery?: string;
  onSearch?: () => void;
  search?: boolean;
  className?: string;
};
const Hero = ({
  heading,
  desc,
  searchQuery,
  onSearch,
  search = false,
  className = '',
}: HeroProps) => {
  return (
    <div
      className={`grid grid-cols-3 items-center gap-4 overflow-hidden rounded-md bg-cover p-4 lg:gap-8 lg:p-8 ${className}`}
      style={{
        background: "url('/assets/images/home/homePage_hero_section_bg.png')",
      }}
    >
      <div className="col-span-3 flex flex-col gap-4 lg:col-span-2 lg:gap-8">
        <h2 className="text-lg font-bold text-white lg:text-5xl">{heading}</h2>
        {desc && <p className="text-base text-white">{desc}</p>}
        {search && (
          <Input
            leadingIcon={<SearchIcon />}
            placeholder="Search"
            value={searchQuery}
            onChange={onSearch}
          />
        )}
      </div>
      <Image
        alt="homePage_hero_section_vector.png"
        src={'/assets/companies/companies-hero.png'}
        width={290}
        height={295}
        className="mx-auto hidden lg:block"
      />
    </div>
  );
};

export default Hero;
