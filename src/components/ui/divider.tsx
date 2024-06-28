import { cn } from '@/lib/utils';
type DividerProps = {
  size?: number;
  variant: string;
  mobileVariant: string;
  text?: string;
};

const Divider = ({ size, variant, mobileVariant, text }: DividerProps) => {
  return (
    <div className="flex items-center">
      <span
        className={cn('relative flex-1 border-t border-gray-300', {
          'border-t-2': size == 2,
          'border-t-4': size == 4,
        })}
      />
      <span className={cn('z-50 w-full max-w-max px-2 py-1 text-white lg:text-neutral-700')}>
        {text}
      </span>
      <span
        className={cn('relative flex-1 border-t border-gray-300', {
          'border-t-2': size == 2,
          'border-t-4': size == 4,
        })}
      />
    </div>
  );
};

export default Divider;
