import PageHeader from "@/_components/page-header";
type BoardingHeaderProps = {
  title: string;
  description?: string;
};
export default function PaginationHeader({
  title,
  description,
}: BoardingHeaderProps) {
  return (
    <>
      <PageHeader
        boXClassName="!py-0"
        textClassName={`!text-left !text-2xl lg:!text-4xl !text-gray-950 !font-sans ${
          description ? "mb-4 lg:mb-8" : ""
        } `}
        title={title}
      />
      {description && (
        <p className="font-sans text-mute-3 text-sm lg:text-base">
          {description}
        </p>
      )}
    </>
  );
}
