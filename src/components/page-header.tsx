import Logo from './ui/logo';

type PageHeaderProps = {
  title: string;
};
export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="py-5">
      <div className="flex items-center justify-center pb-10 pt-5 lg:hidden">
        <Logo />
      </div>
      <h3 className="text-center text-2xl font-bold text-neutral-50 lg:text-3xl lg:text-neutral-700">
        {title}
      </h3>
    </header>
  );
}
