import { cn } from '@/lib/utils';
import { BadgeProps } from '@/types/types';

const Badge = ({ text, color, bgColor }: BadgeProps) => {
  return (
    <span
      className={cn(
        'flex-shrink-0 rounded-md bg-gray-100 px-2 py-1 text-sm font-bold text-neutral-500 shadow-minor',
        bgColor,
        color
      )}
    >
      {text}
    </span>
  );
};

export default Badge;
