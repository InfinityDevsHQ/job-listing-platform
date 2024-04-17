import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "border rounded-md font-medium flex items-center gap-2.5 px-4 py-2 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-gray-200 bg-transparent text-gray-800 hover:bg-primary-900 hover:text-white",
        primary: "border-primary bg-primary-900 text-white hover:bg-white hover:text-primary-900 hover:border-primary-900",
        secondary: "border-secondary bg-secondary-900 text-white hover:bg-white hover:text-secondary-900 hover:border-secondary-900",
        'outline-primary': "border-primary-900 bg-transparent text-primary-900 hover:bg-primary-900 hover:text-white",
        'outline-secondary': "border-secondary-900 bg-transparent text-secondary-900 hover:bg-secondary-900 hover:text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "w-full max-w-max",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
    text: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type, variant, size, text, leadingIcon, trailingIcon, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant , size, className }))}
        {...props}
      >
        {leadingIcon && leadingIcon}
        <span>{text}</span>
        {trailingIcon && trailingIcon}
      </button>
    )
  }
)

export default Button