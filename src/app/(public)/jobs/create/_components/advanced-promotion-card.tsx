import Image from 'next/image';
type AdvancedPromotionCardProps = {
  imagUrl: string;
  title: string;
  points: string[];
  reverse?: boolean;
};
export default function AdvancedPromotionCard({
  imagUrl,
  title,
  points,
  reverse,
}: AdvancedPromotionCardProps) {
  return (
    <div className="flex items-center justify-center rounded-lg border border-dark-background3 bg-dark-primary p-4 lg:p-8">
      <div className="flex flex-col justify-center gap-4 lg:flex-row lg:items-center lg:gap-8">
        <div
          className={`flex items-center justify-center ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <Image
            src={imagUrl}
            alt={title}
            width={539}
            height={539}
            quality={100}
            className="h-auto w-auto"
          />
        </div>
        <div
          className={`flex flex-1 flex-col gap-4 lg:gap-12 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <h3 className="text-center text-base font-bold text-dark-nameWhite lg:mb-0.5 lg:text-left lg:text-4xl">
            {title}
          </h3>
          <ol className="flex list-disc flex-col gap-4 pl-4">
            {points.map((point, index) => (
              <li key={index} className="font-sans text-sm text-dark-name lg:text-2xl">
                {point}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
