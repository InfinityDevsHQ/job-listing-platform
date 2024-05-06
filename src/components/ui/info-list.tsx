import { cn } from '@/lib/utils';

type InfoListProps = {
  list?: string[] | null;
  children?: React.ReactNode;
  variant?: string;
  className?: string;
};

const InfoList = ({ list, children, variant = 'primary', className }: InfoListProps) => {
  return (
    <ul
      className={cn(
        `list list-inside list-image-[url('/assets/icons/send-${variant}.png')]`,
        className
      )}
    >
      {children ? (
        <>{children}</>
      ) : (
        <>
          {list?.map((listItem, index) => (
            <li key={index} className="text-base text-gray-500">
              {listItem}
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default InfoList;
