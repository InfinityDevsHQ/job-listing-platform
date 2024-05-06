import { Button } from '@/components/ui/button-new';
import { CompanyCardProps } from '@/types/types';
import Image from 'next/image';

const CompanyCard = ({ name, logo_url, description }: CompanyCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-md border border-gray-200 bg-white p-4 lg:gap-8 lg:p-8">
      <div className="flex items-center gap-2.5 lg:gap-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 lg:h-16 lg:w-16">
          <Image src={logo_url} alt={`${name} logo`} width={30} height={30} className="lg:hidden" />
          <Image
            src={logo_url}
            alt={`${name} logo`}
            width={44}
            height={44}
            className="hidden lg:block"
          />
        </div>
        <h3 className="text-2xl font-bold text-neutral-950 lg:text-3xl">{name}</h3>
      </div>
      <p className="lg:min-w-none min-w-72 text-sm text-neutral-500 lg:text-base">
        {description ||
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit incidunt minima officia nemo hic eprehenderit incidunt minima officia nemo hic'}
      </p>
      <div className="flex justify-end">
        <Button>Load More</Button>
      </div>
    </div>
  );
};

export default CompanyCard;
