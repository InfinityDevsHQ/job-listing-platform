import { cn } from '@/lib/utils';
type DividerProps = {
  size?: number;
  variant: string;
  mobileVariant: string;
  text?: string;
};

const Divider = ({ size, variant, mobileVariant, text }: DividerProps) => {
  return (
    <span
      className={cn('relative w-full border-t border-gray-300', {
        'border-t-2': size == 2,
        'border-t-4': size == 4,
      })}
    >
      {text && (
        <span
          className={cn(
            'absolute -top-4 left-1/2 w-full max-w-max -translate-x-1/2 bg-stone-100 px-2 py-1'
          )}
        >
          {text}
        </span>
      )}
    </span>
  );
};

export default Divider;
