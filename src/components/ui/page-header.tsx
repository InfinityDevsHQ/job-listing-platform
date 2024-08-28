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
    <header className={`sm:py-5 ${containerClassName}`}>
      <h3
        className={`text-center text-2xl font-bold text-white lg:text-3xl lg:text-neutral-700 ${className}`}
      >
        {title}
      </h3>
    </header>
  );
}
