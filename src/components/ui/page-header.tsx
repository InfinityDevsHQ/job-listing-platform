import Logo from './logo';

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
      <div className="flex items-center justify-center pb-10 pt-5 lg:hidden">
        <Logo />
      </div>
      <h3
        className={`text-center text-2xl font-bold text-neutral-50 lg:text-3xl lg:text-neutral-700 ${className}`}
      >
        {title}
      </h3>
    </header>
  );
}
