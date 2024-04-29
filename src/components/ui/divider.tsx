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
      className={cn('relative w-full border-t', {
        'border-t-2': size == 2,
        'border-t-4': size == 4,
        'lg:border-gray-50': variant == 'primary',
        'lg:border-gray-500': variant == 'light',
        'border-gray-50': mobileVariant == 'primary',
        'border-gray-500': mobileVariant == 'light',
      })}
    >
      {text && (
        <span
          className={cn('absolute -top-4 left-1/2 w-full max-w-max -translate-x-1/2 px-2 py-1', {
            'lg:bg-primary-900 lg:text-gray-50': variant == 'primary',
            'lg:bg-primary-50 lg:text-gray-500': variant == 'light',
            'bg-primary-900  text-gray-50': mobileVariant == 'primary',
            'bg-primary-50 text-gray-500': mobileVariant == 'light',
          })}
        >
          {text}
        </span>
      )}
    </span>
  );
};

export default Divider;
