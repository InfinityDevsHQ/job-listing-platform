type PageHeaderProps = {
  title: string;
  textClassName?: string;
  boXClassName?: string;
};
export default function PageHeader({ title, textClassName, boXClassName }: PageHeaderProps) {
  return (
    <header className={`py-5 ${boXClassName}`}>
      <h3
        className={`text-center text-2xl font-bold text-neutral-50
       lg:text-3xl lg:text-neutral-700  ${textClassName}`}
      >
        {title}
      </h3>
    </header>
  );
}
