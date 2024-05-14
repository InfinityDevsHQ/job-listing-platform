import CompanyLocation from '@/components/svgs/company-location';

type CompanyLinkProps = {
  className?: string;
  heading?: string;
  description?: string;
};
export default function CompanyLink({ className, heading, description }: CompanyLinkProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="flex items-center justify-center rounded-full bg-neutral-950 p-2.5 text-white">
        <CompanyLocation width={11} height={12} />
      </span>
      <div className="flex flex-col">
        {heading && <p className="font-bold text-gray-700 lg:text-base">{heading}</p>}
        {description && <p className="text-base text-gray-500">{description}</p>}
      </div>
    </div>
  );
}
