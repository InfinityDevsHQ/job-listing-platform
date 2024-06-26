import { cn } from '@/lib/utils';
import * as React from 'react';

import { ButtonProps } from '@/types/types';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'border rounded-md font-medium flex items-center gap-2.5 px-4 py-2 transition-all duration-300',
  {
    variants: {
      variant: {
        default:
          'border-gray-200 bg-transparent text-gray-800 hover:bg-neutral-950 hover:text-white',
        primary:
          'border-primary bg-neutral-950 text-white hover:bg-white hover:text-neutral-950 hover:border-neutral-950',
        secondary:
          'border-secondary bg-secondary-900 text-white hover:bg-white hover:text-secondary-900 hover:border-secondary-900',
        'outline-primary':
          'border-neutral-950 bg-transparent text-neutral-950 hover:bg-neutral-950 hover:text-white',
        'outline-secondary':
          'border-secondary-900 bg-transparent text-secondary-900 hover:bg-secondary-900 hover:text-white',
        'white-primary':
          'border-gray-200 bg-white text-black hover:bg-neutral-950 hover:text-white hover:border-neutral-950',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'w-full max-w-max',
        full: 'w-full justify-center',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = 'button', variant, size, text, leadingIcon, trailingIcon, ...props }) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} type={type} {...props}>
        {leadingIcon && leadingIcon}
        {text && <span>{text}</span>}
        {trailingIcon && trailingIcon}
      </button>
    );
  }
);
Button.displayName = 'Button';
export default Button;
