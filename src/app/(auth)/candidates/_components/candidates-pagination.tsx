import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const CandidatePagination = () => {
  return (
    <Pagination>
      <PaginationContent className="space-x-2 lg:space-x-4">
        <PaginationItem>
          <PaginationPrevious href="#" className="bg-primary text-primary-foreground" />
        </PaginationItem>

        {Array.from({ length: 8 }).map((_, index) => (
          <PaginationItem key={index} className="hidden lg:block">
            <PaginationLink href="#" className="bg-primary-foreground">
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem className="lg:hidden">
          <PaginationLink href="#" className="bg-primary-foreground">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext href="#" className="bg-primary text-primary-foreground" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default CandidatePagination;
