import { getPromotedCompanies } from '@/lib/compsnies';
import Image from 'next/image';
import Link from 'next/link';
import Hero from './_components/hero';

export default async function Companies() {
  const companies = await getPromotedCompanies();
  console.log(companies);
  return (
    <div className="flex flex-col gap-4 border border-gray-200 bg-gray-50 p-4">
      <Hero />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
          {companies.map((company, index) => (
            // TODO: Id is hard coded for now, will make it dynamic
            <Link
              href={'/companies/123'}
              key={index}
              className="flex  flex-col items-center justify-center gap-4  border border-gray-200 bg-white p-4 lg:gap-8"
            >
              <Image
                src={company.logo_url}
                alt="Logo"
                width={118}
                height={69}
                className="h-auto w-auto"
              />
              <h5 className="hidden font-bold text-mute-1 lg:block lg:text-base">{company.name}</h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
