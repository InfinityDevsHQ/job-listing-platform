import { cn } from '@/lib/utils';

type InfoSectionProps = {
  heading?: string;
  children?: React.ReactNode;
  className?: string;
  headingClass?: string;
};

const InfoSection = ({ heading, className, children, headingClass }: InfoSectionProps) => {
  return (
    <section className={cn('flex w-full flex-col gap-4', className)}>
      <h2 className={cn('text-sm font-bold text-dark-nameWhite lg:text-xl', headingClass)}>
        {heading}
      </h2>
      {children}
    </section>
  );
};

export default InfoSection;
