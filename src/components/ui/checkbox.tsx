'use client';
import { cn } from '@/lib/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  pill?: boolean;
  children?: React.ReactNode;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, pill = false, children, ...props }, ref) => {
    const [checked, setChecked] = React.useState(false);
    return (
      <>
        {!pill ? (
          <CheckboxPrimitive.Root
            ref={ref}
            onCheckedChange={(state) => setChecked(state === true)}
            className={cn(
              'border-border-gray-300 peer h-8 w-8 rounded-md border bg-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
              className
            )}
            {...props}
          >
            <CheckboxPrimitive.Indicator
              className={cn('flex items-center justify-center fill-current')}
            >
              <Check className="h-4 w-4 text-black" />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
        ) : (
          <div
            className={cn(
              'flex max-w-max items-center p-2 px-3 text-base',
              checked ? 'bg-primary' : 'bg-white'
            )}
            style={{ boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.05)', borderRadius: '100px' }}
          >
            <CheckboxPrimitive.Root
              ref={ref}
              onCheckedChange={(state) => setChecked(state === true)}
              className={cn(
                'peer h-8 w-8 rounded-md bg-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
                className
              )}
              {...props}
            >
              <span
                className={cn(
                  'flex h-6 w-6 items-center justify-center rounded-full',
                  checked ? 'bg-white' : 'bg-mute-2'
                )}
              >
                <Check
                  className={cn('h-3 w-3 text-black', checked ? 'text-primary' : 'text-mute-1')}
                />
              </span>
            </CheckboxPrimitive.Root>
            <div className={cn(checked ? 'text-white' : 'text-mute-1')}>{children}</div>
          </div>
        )}
      </>
    );
  }
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
