import { cn } from '@/lib/utils';
import { BadgeProps } from '@/types/types';

const Badge = ({ text, color, bgColor }: BadgeProps) => {
  return (
    <span
      className={cn(
        'flex-shrink-0 rounded-md bg-neutral-950 px-3 py-1 text-xs font-bold text-neutral-50 shadow-minor md:text-sm',
        bgColor,
        color
      )}
    >
      {text}
    </span>
  );
};

export default Badge;
