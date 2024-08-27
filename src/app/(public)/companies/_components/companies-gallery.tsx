'use client';
import { usePromotedCompanies } from '@/hooks/usePromotedCompanies';
import { toast } from 'sonner';
import CompanyTile from './company-tile';

export default function CompaniesGallery() {
  const { isLoading, isError, data: companies } = usePromotedCompanies();

  if (isLoading) return <p>Loading Companies...</p>;
  if (isError) {
    toast.error('Error Fetching Promoted Companies');
  }
  if (!companies?.length) return <p>Not found any promoted company</p>;

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
      {companies?.map((company, index) => <CompanyTile key={index} company={company} />)}
    </div>
  );
}
