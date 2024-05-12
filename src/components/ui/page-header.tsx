type PageHeaderProps = {
  title: string;
  className?: string;
  containerClassName?: string;
};
export default function PageHeader({
  title,
  className = '',
  containerClassName = '',
}: PageHeaderProps) {
  return (
    <header className={`py-5 ${containerClassName}`}>
      <h3 className={`text-center text-2xl font-bold text-neutral-700 lg:text-3xl ${className}`}>
        {title}
      </h3>
    </header>
  );
}
