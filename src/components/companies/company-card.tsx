import { CompanyCardProps } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button-new';

const CompanyCard = ({ name, logo_url, description, id }: CompanyCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-dark-background3 bg-dark-primary p-4">
      <header className="flex items-center gap-2 md:gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-dark-messageBackground">
          <Image src={logo_url} alt={`${name} Logo`} width={60} height={60} />
        </div>
        <h3 className="flex-1 text-3xl font-bold text-dark-nameWhite">{name}</h3>
      </header>

      <p className="text-sm text-dark-name">
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
