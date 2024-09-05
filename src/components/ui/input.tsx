import { cn } from '@/lib/utils';
import { InputProps } from '@/types/types';
import { cva } from 'class-variance-authority';
import * as React from 'react';

const inputVariants = cva(
  'p-2 h-10 w-full peer border border-dark-primary rounded-md bg-dark-background text-dark-name placeholder-gray-400 outline-none transition-all duration-300',
  {
    variants: {
      variant: {
        default: '',
        primary: 'focus:border-neutral-950 peer-focus:!text-neutral-950',
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
  ({ type, variant, leadingIcon, trailingIcon, onClickTrailing, ...props }, ref) => {
    return (
      <div className="group relative w-full">
        <input
          type={type}
          className={cn(inputVariants({ variant }), {
            'pl-7': leadingIcon,
          })}
          ref={ref}
          {...props}
        />
        {leadingIcon && (
          <>
            <span
              className={cn(
                'absolute left-2 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center transition-all duration-300',
                variant && `peer-focus:!text-${variant}-900`
              )}
            >
              {leadingIcon}
            </span>
          </>
        )}
        {trailingIcon && (
          <button
            type="button"
            onClick={onClickTrailing}
            className={cn(
              'absolute right-2 top-1/2 -translate-y-1/2 text-dark-name transition-all duration-300',
              {
                'cursor-pointer': onClickTrailing,
              }
            )}
          >
            {trailingIcon}
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
