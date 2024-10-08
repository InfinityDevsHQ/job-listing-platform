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
              className={cn(
                'flex gap-2 text-xs text-dark-name xs:items-center sm:text-base',
                listClassName
              )}
            >
              <span className="h-5 w-3 xs:h-6 lg:w-4">{icon && icon}</span>
              {listItem}
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default InfoList;
