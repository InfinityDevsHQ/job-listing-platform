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
          <PaginationPrevious
            href="#"
            className="bg-dark-greenLight text-primary-foreground hover:bg-dark-greenDark"
          />
        </PaginationItem>

        {Array.from({ length: 8 }).map((_, index) => (
          <PaginationItem key={index} className="hidden lg:block">
            <PaginationLink
              href="#"
              className="bg-dark-primary text-dark-nameWhite hover:bg-dark-greenDark"
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem className="lg:hidden">
          <PaginationLink
            href="#"
            className="bg-dark-primary text-dark-nameWhite hover:bg-dark-greenDark"
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="text-dark-nameWhite" />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href="#"
            className="bg-dark-greenLight text-primary-foreground hover:bg-dark-greenDark"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default CandidatePagination;
