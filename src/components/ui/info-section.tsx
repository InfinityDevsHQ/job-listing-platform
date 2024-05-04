import { cn } from '@/lib/utils';

type InfoSectionProps = {
  heading?: string;
  children?: React.ReactNode;
  className?: string;
};

const InfoSection = ({ heading, className, children }: InfoSectionProps) => {
  return (
    <section className={cn('flex w-full flex-col gap-4', className)}>
      <h2 className="text-sm font-bold text-gray-700 lg:text-xl">{heading}</h2>
      {children}
    </section>
  );
};

export default InfoSection;
