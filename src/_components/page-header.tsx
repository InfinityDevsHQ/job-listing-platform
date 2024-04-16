type PageHeaderProps = {
  title: string;
};
export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="py-5">
      <h3
        className="font-sans text-center font-semibold text-xl lg:text-mold
       leading-8 tracking-weak text-white lg:text-deep-blue"
      >
        {title}
      </h3>
    </header>
  );
}
