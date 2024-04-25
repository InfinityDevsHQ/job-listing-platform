import Image from 'next/image';
import Link from 'next/link';
import Hero from './_components/hero';

export default function Companies() {
  const COMPANIES = [
    { imgUrl: '/assets/companies/logos/company- (1).png', name: 'Company A' },
    { imgUrl: '/assets/companies/logos/company- (2).png', name: 'Company B' },
    { imgUrl: '/assets/companies/logos/company- (3).png', name: 'Company C' },
    { imgUrl: '/assets/companies/logos/company- (4).png', name: 'Company D' },
    { imgUrl: '/assets/companies/logos/company- (5).png', name: 'Company E' },
    { imgUrl: '/assets/companies/logos/company- (6).png', name: 'Company F' },
    { imgUrl: '/assets/companies/logos/company- (7).png', name: 'Company G' },
    { imgUrl: '/assets/companies/logos/company- (8).png', name: 'Company H' },
    { imgUrl: '/assets/companies/logos/company- (9).png', name: 'Company I' },
    { imgUrl: '/assets/companies/logos/company- (10).png', name: 'Company J' },
    { imgUrl: '/assets/companies/logos/company- (11).png', name: 'Company K' },
    { imgUrl: '/assets/companies/logos/company- (12).png', name: 'Company L' },
    { imgUrl: '/assets/companies/logos/company- (13).png', name: 'Company M' },
    { imgUrl: '/assets/companies/logos/company- (14).png', name: 'Company N' },
    { imgUrl: '/assets/companies/logos/company- (15).png', name: 'Company O' },
    { imgUrl: '/assets/companies/logos/company- (9).png', name: 'Company I' },
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
              className="flex  flex-col items-center justify-center gap-4  border border-gray-200 bg-white p-4 lg:gap-8"
            >
              <Image
                src={company.imgUrl}
                alt="Logo"
                width={118}
                height={69}
                className="h-full w-full"
              />
              <h5 className="hidden font-bold text-mute-1 lg:block lg:text-base">{company.name}</h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
