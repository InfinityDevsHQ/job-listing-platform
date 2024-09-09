import { MapPin } from 'lucide-react';

type CompanyLinkProps = {
  className?: string;
  heading?: string;
  description?: string;
};
export default function CompanyLink({ className, heading, description }: CompanyLinkProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="justify-cente flex items-center rounded-full bg-dark-greenLight p-2.5 text-white">
        {/* <CompanyLocation /> */}
        <MapPin size={16} />
      </span>
      <div className="flex flex-col">
        {heading && <p className="font-bold text-dark-nameWhite lg:text-base">{heading}</p>}
        {description && <p className="text-base text-dark-name">{description}</p>}
      </div>
    </div>
  );
}
