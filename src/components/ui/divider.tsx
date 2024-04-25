import { cn } from '@/lib/utils';
import { DividerProps } from '@/types/types';

const Divider = ({ size, variant }: DividerProps) => {
  return (
    <span
      className={cn('w-full border-t border-neutral-300', {
        'border-t-2': size == 2,
        'border-t-4': size == 4,
        'border-neutral-50': variant == 'light',
      })}
    ></span>
  );
};

export default Divider;
