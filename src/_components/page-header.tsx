type PageHeaderProps = {
  title: string;
};
export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="py-5">
      <h3 className="font-sans text-center font-semibold text-xl leading-8 tracking-weak text-white">
        {title}
      </h3>
    </header>
  );
}
