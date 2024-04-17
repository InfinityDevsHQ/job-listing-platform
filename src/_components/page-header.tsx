type PageHeaderProps = {
  title: string;
  textClassName?: string;
  boXClassName?: string;
};
export default function PageHeader({
  title,
  textClassName,
  boXClassName,
}: PageHeaderProps) {
  return (
    <header className={`py-5 ${boXClassName}`}>
      <h3
        className={`font-sans text-center font-bold text-2xl lg:text-4xl
       text-neutral-50 lg:text-neutral-700  ${textClassName}`}
      >
        {title}
      </h3>
    </header>
  );
}
