import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { InputProps } from "@/types/types";
import HelpText from "./help-text";

const inputVariants = cva(
  "p-2 h-10 w-full peer border-2 border-gray-300 rounded-md bg-white text-black placeholder-gray-400 outline-none transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        primary: "focus:border-primary-900 peer-focus:!text-primary-900",
        secondary: "focus:border-secondary-900 peer-focus:!text-secondary-900",
        danger:
          "!border-red-500 bg-danger/40 focus:border-red-900 peer-focus:!text-danger-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const TextArea = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      type = "text",
      variant,
      leadingIcon,
      trailingIcon,
      onTrailingClick,
      helpText,
      ...props
    },
    ref
  ) => {
    const computedVariant = helpText ? "danger" : variant || "default";
    const computedClassName = `${className} ${leadingIcon ? "pl-7" : "pl-2"}`;
    return (
      <div
        className={`flex flex-col gap-1 ${
          containerClassName ? containerClassName : ""
        }`}
      >
        <div className={`group relative w-full`}>
          <TextArea
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
                className={`absolute top-1/2 -translate-y-1/2 left-2 peer-focus:!text-${computedVariant}-900 transition-all duration-300`}
              >
                {leadingIcon}
              </span>
            </>
          )}
          {trailingIcon && (
            <span
              onClick={onTrailingClick && onTrailingClick}
              className={`absolute top-1/2 -translate-y-1/2 right-2 text-neutral-300 transition-all duration-300 ${
                computedVariant === "danger"
                  ? "peer-focus:!text-danger-900"
                  : ""
              } ${onTrailingClick ? "cursor-pointer" : ""}`}
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

TextArea.displayName = "TextArea";

export default TextArea;