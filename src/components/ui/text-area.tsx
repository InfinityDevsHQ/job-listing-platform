import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  type?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClickTrailing?: () => void;
  rows?: number;
  variant?: 'default' | 'primary' | 'secondary' | 'danger';
}
const inputVariants = cva(
  'p-2 h-10 w-full peer border border-gray-300 rounded-md bg-white text-black placeholder-gray-400 outline-none transition-all duration-300',
  {
    variants: {
      variant: {
        default: '',
        primary: 'focus:border-primary-900 peer-focus:!text-primary-900',
        secondary: 'focus:border-secondary-900 peer-focus:!text-secondary-900',
        danger: '!border-red-500 bg-danger/40 focus:border-red-900 peer-focus:!text-danger-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({
    className,
    variant = 'default',
    leadingIcon,
    trailingIcon,
    onClickTrailing,
    rows,
    ...props
  }) => {
    const computedClassName = `${className} ${leadingIcon ? 'pl-7' : 'pl-2'}`;

    return (
      <div className={`flex flex-col gap-1`}>
        <div className={`group relative w-full`}>
          <textarea
            className={cn(
              inputVariants({
                variant: variant,
                className: computedClassName,
              })
            )}
            rows={rows || 3}
            {...props}
          />
          {leadingIcon && (
            <>
              <span
                className={`absolute left-2 top-1/2 -translate-y-1/2 peer-focus:!text-${variant}-900 transition-all duration-300`}
              >
                {leadingIcon}
              </span>
            </>
          )}
          {trailingIcon && (
            <span
              className={`absolute right-2 top-1/2 -translate-y-1/2 text-neutral-300 transition-all duration-300`}
            >
              {trailingIcon}
            </span>
          )}
        </div>
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
