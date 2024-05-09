import { Button } from '@/components/ui/button-new';
import { CompanyCardProps } from '@/types/types';
import Image from 'next/image';

const CompanyCard = ({ name, logo_url, description }: CompanyCardProps) => {
  return (
    <div className="flex transform flex-col gap-3 rounded-xl border-b border-gray-100 bg-gray-50 p-8 transition duration-300 ease-in-out hover:-translate-y-2">
      <div className="inline-block">
        <Image
          src={logo_url}
          alt={`${name} logo`}
          width={100}
          height={80}
          className="mx-auto h-16"
        />
      </div>
      <h3 className="text-center text-lg font-semibold leading-normal text-black">{name}</h3>
      <p className="text-center text-gray-500">
        {description ||
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit incidunt minima officia nemo hic eprehenderit incidunt minima officia nemo hic'}
      </p>
      <Button className="self-center" variant="primary">
        Learn More
      </Button>
    </div>
  );
};

export default CompanyCard;
