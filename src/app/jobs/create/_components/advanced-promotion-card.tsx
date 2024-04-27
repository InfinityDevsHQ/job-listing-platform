import Image from 'next/image';
type AdvancedPromotionCardProps = {
  imagUrl: string;
  title: string;
  points: string[];
};
export default function AdvancedPromotionCard({
  imagUrl,
  title,
  points,
}: AdvancedPromotionCardProps) {
  return (
    <div
      className="flex items-center justify-center rounded-md p-4 lg:p-8"
      style={{
        background: 'linear-gradient(92.04deg, #D8E8FF 1.76%, #F5FAFF 102.29%)',
      }}
    >
      <div className="flex flex-col justify-center gap-4  lg:flex-row lg:items-center lg:gap-8">
        <div>
          <Image src={imagUrl} alt={title} width={200} height={200.92} className="lg:hidden" />
          <Image src={imagUrl} alt={title} width={539} height={539} className="hidden lg:block" />
        </div>
        <div className="flex flex-col gap-4 lg:gap-12">
          <h3 className="font-sans text-base font-bold text-gray-700 lg:mb-0.5">{title}</h3>
          <ol className="flex flex-col gap-4">
            {points.map((point, index) => (
              <li key={index} className="font-sans text-sm text-gray-700">
                {point}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
