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
    <div className="relative grid w-full grid-cols-2 items-center gap-4 lg:gap-8">
      <InfoSection heading={heading} className={imageFirst ? 'order-2' : 'order-1'}>
        {children}
      </InfoSection>
      <Image
        src={imageUrl}
        width={784}
        height={500}
        alt="party"
        className={cn('order-2 mx-auto w-full max-w-lg', {
          'order-1': imageFirst,
        })}
      />
    </div>
  );
};
export default FeatureCard;
