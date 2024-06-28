import InfoSection from '@/components/ui/info-section';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type FeatureCardProps = {
  imageUrl: string;
  imageFirst?: boolean;
  heading?: string;
  children?: React.ReactNode;
};

const FeatureCard = ({ imageUrl, imageFirst, heading, children }: FeatureCardProps) => {
  return (
    <div className="relative grid w-full items-center gap-4 lg:grid-cols-2 lg:gap-8">
      <InfoSection
        heading={heading}
        className={cn('order-2 lg:order-1', {
          'lg:order-2': imageFirst,
          'lg:order-1': !imageFirst,
        })}
        headingClass="text-xl lg:text-4xl"
      >
        {children}
      </InfoSection>
      <Image
        src={imageUrl}
        width={784}
        height={500}
        alt="party"
        className={cn('order-1 mx-auto w-full max-w-lg lg:order-2', {
          'lg:order-1': imageFirst,
        })}
      />
    </div>
  );
};
export default FeatureCard;
