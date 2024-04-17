type PageHeaderProps = {
  title: string;
};
export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="py-5">
      <h3
        className="font-sans text-center font-bold text-2xl lg:text-4xl
       text-neutral-50 lg:text-neutral-700"
      >
        {title}
      </h3>
    </header>
  );
}
