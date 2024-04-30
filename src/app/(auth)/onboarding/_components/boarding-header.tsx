import PageHeader from '@/components/ui/page-header';
type BoardingHeaderProps = {
  title: string;
  description?: string;
};
export default function BoardingHeader({ title, description }: BoardingHeaderProps) {
  return (
    <>
      <PageHeader title={title} />
      {description && <p className="font-sans text-sm text-mute-3 lg:text-base">{description}</p>}
    </>
  );
}
