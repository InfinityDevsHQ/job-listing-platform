import { cn } from '@/lib/utils';
import { ReactElement } from 'react';

type InfoListProps = {
  list?: string[] | null;
  children?: React.ReactNode;
  variant?: string;
  className?: string;
  listClassName?: string;
  icon?: ReactElement;
};

const InfoList = ({
  list,
  children,
  variant = 'primary',
  className,
  icon,
  listClassName,
}: InfoListProps) => {
  return (
    <ul className={cn('list flex list-inside flex-col gap-2 lg:gap-4', className)}>
      {children ? (
        <>{children}</>
      ) : (
        <>
          {list?.map((listItem, index) => (
            <li
              key={index}
              className={cn('flex gap-2 text-base  text-gray-500 lg:items-center', listClassName)}
            >
              {icon && icon}
              {listItem}
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default InfoList;
