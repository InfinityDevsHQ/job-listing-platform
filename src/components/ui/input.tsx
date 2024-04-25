import { cn } from '@/lib/utils';
import { InputProps } from '@/types/types';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import HelpText from './help-text';

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

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      type = 'text',
      variant,
      leadingIcon,
      trailingIcon,
      onTrailingClick,
      helpText,
      ...props
    },
    ref
  ) => {
    const computedVariant = helpText ? 'danger' : variant || 'default';
    const computedClassName = `${className} ${leadingIcon ? 'pl-7' : 'pl-2'}`;
    return (
      <div className={`flex flex-1 flex-col gap-1 ${containerClassName ? containerClassName : ''}`}>
        <div className={`group relative w-full`}>
          <input
            type={type}
            className={cn(
              inputVariants({
                variant: computedVariant,
                className: computedClassName,
              })
            )}
            ref={ref}
            {...props}
          />
          {leadingIcon && (
            <>
              <span
                className={`absolute left-2 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center peer-focus:!text-${computedVariant}-900 transition-all duration-300`}
              >
                {leadingIcon}
              </span>
            </>
          )}
          {trailingIcon && (
            <span
              onClick={onTrailingClick && onTrailingClick}
              className={`absolute right-2 top-1/2 -translate-y-1/2 text-neutral-300 transition-all duration-300 ${
                computedVariant === 'danger' ? 'peer-focus:!text-danger-900' : ''
              } ${onTrailingClick ? 'cursor-pointer' : ''}`}
            >
              {trailingIcon}
            </span>
          )}
        </div>
        {helpText && <HelpText text={helpText} />}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
