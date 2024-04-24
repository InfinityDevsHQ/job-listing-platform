import Image from 'next/image';
import Link from 'next/link';
import Hero from './_components/hero';

export default function Companies() {
  const COMPANIES = [
    '/assets/companies/logos/company- (1).png',
    '/assets/companies/logos/company- (2).png',
    '/assets/companies/logos/company- (3).png',
    '/assets/companies/logos/company- (4).png',
    '/assets/companies/logos/company- (5).png',
    '/assets/companies/logos/company- (6).png',
    '/assets/companies/logos/company- (7).png',
    '/assets/companies/logos/company- (8).png',
    '/assets/companies/logos/company- (9).png',
    '/assets/companies/logos/company- (10).png',
    '/assets/companies/logos/company- (11).png',
    '/assets/companies/logos/company- (12).png',
    '/assets/companies/logos/company- (13).png',
    '/assets/companies/logos/company- (14).png',
    '/assets/companies/logos/company- (15).png',
    '/assets/companies/logos/company- (1).png',
  ];
  return (
    <div className="flex flex-col gap-4 border border-gray-200 bg-gray-50 p-4">
      <Hero />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
          {COMPANIES.map((company, index) => (
            <Link
              href={'/company'}
              key={index}
              className="flex h-24 w-36 items-center justify-center  gap-4 border border-gray-200 bg-white p-4"
            >
              <Image src={company} alt="Logo" width={118} height={69} className="h-full w-full" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
