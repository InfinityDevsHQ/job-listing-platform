import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "p-2 pl-7 h-10 w-full peer border-2 border-gray-300 rounded-md bg-white text-black placeholder-gray-400 outline-none transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        primary: "focus:border-primary-900 peer-focus:!text-primary-900",
        secondary: "focus:border-secondary-900 peer-focus:!text-secondary-900",
        danger: "focus:border-red-900 peer-focus:!text-danger-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  helpText?: string;
  containerClassName?: string;
}

const AppInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      type,
      variant,
      leadingIcon,
      trailingIcon,
      helpText,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`group relative w-full ${containerClassName}`}>
        <input
          type={type}
          className={cn(inputVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
        {leadingIcon && (
          <span
            className={`absolute top-3.5 mt-px left-2 peer-focus:!text-${variant}-900 transition-all duration-300`}
          >
            {leadingIcon}
          </span>
        )}
        {trailingIcon && (
          <span
            className={`absolute top-3.5 mt-px right-2 text-neutral-300 transition-all duration-300`}
          >
            {trailingIcon}
          </span>
        )}
      </div>
    );
  }
);

AppInput.displayName = "AppInput";

export default AppInput;
