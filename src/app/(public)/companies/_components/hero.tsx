'use client';
import Input from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';
type HeroProps = {
  heading: string;
  desc?: string;
  searchQuery?: string;
  onSearch?: () => void;
  setSearchQuery?: (value: string) => void;
  search?: boolean;
  className?: string;
  vectorUrl?: string;
};
const Hero = ({
  heading,
  desc,
  searchQuery,
  setSearchQuery,
  onSearch,
  search = false,
  className = '',
  vectorUrl,
}: HeroProps) => {
  return (
    <div
      className={cn(
        'z-10 grid items-center gap-4 overflow-hidden rounded-md bg-dark-backgroundDark bg-cover p-4 lg:gap-8 lg:p-8',
        className
      )}
      // style={{
      //   background: "url('/assets/images/home/homePage_hero_section_bg.png')",
      //   backgroundSize: 'cover',
      // }}
    >
      <div
        className={cn(
          'col-span-3 flex flex-1 flex-col gap-4 lg:gap-8',
          vectorUrl ? 'lg:col-span-2' : ''
        )}
      >
        <h2 className="text-lg font-bold capitalize text-dark-nameWhite lg:text-3xl">{heading}</h2>
        {desc && <p className="hidden text-base text-dark-name md:block">{desc}</p>}

        {search && (
          <span className="w-[45%]">
            <Input
              leadingIcon={<SearchIcon className="text-dark-name" />}
              placeholder="Search"
              onChange={(e) => {
                if (setSearchQuery) setSearchQuery(e.target.value);
                console.log(searchQuery);
                onSearch && onSearch();
              }}
            />
          </span>
        )}
      </div>
      {/* {vectorUrl && (
        <Image
          alt="Hero Image"
          src={vectorUrl}
          width={200}
          height={163}
          quality={100}
          className="ml-auto hidden lg:block"
        />
      )} */}
    </div>
  );
};

export default Hero;
