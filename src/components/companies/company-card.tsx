import { CompanyCardProps } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button-new';

const CompanyCard = ({ name, logo_url, description, id }: CompanyCardProps) => {
  return (
    <div className="flex w-80 flex-col gap-4 border border-neutral-200 bg-white p-4 lg:w-auto">
      <header className="flex items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-50">
          <Image src={logo_url} alt={`${name} Logo`} width={30} height={30} />
        </div>
        <h3 className="flex-1 text-3xl font-bold text-neutral-950">{name}</h3>
      </header>

      <p className="text-sm text-neutral-500">
        {description ||
          `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, laborum ipsum? Nam officia
           suscipit perspiciatis laboriosam consectetur commodi, fugit voluptates iure ipsum blanditiis
           excepturi. Vero vitae qui possimus tenetur consectetur.`}
      </p>
      <Link href={`/companies/${id}`} className="self-end">
        <Button variant={'primary'}>Learn More</Button>
      </Link>
    </div>
  );
};

export default CompanyCard;
