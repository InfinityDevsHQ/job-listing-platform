import { Company } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

interface CompanyTileProps {
  company: Company;
}
const CompanyTile = ({ company }: CompanyTileProps) => {
  return (
    <Link
      href={`/companies/${company.id}`}
      className="flex flex-col items-center justify-center gap-4 rounded-md border border-gray-200 bg-white p-4 shadow-theme lg:gap-8 lg:p-8"
    >
      <Image
        src={company.logo_url}
        alt="Logo"
        width={118}
        height={80}
        className="h-16 w-auto lg:h-20"
      />
      <h5 className="hidden text-base font-bold text-neutral-950 lg:block">{company.name}</h5>
    </Link>
  );
};

export default CompanyTile;
