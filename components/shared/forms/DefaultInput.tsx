import React, {
  FC,
  forwardRef,
  DetailedHTMLProps,
  InputHTMLAttributes,
  SetStateAction,
  Dispatch,
} from "react";

export type InputSize = "medium" | "large";
export type InputType = "text" | "email" | "number";

export type DefaultInputProps = {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  size?: InputSize;
  className?: string;
  placeholder?: string;
  required?: boolean;
};

// Using maps so that the full Tailwind classes can be seen for purging
// see https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html

const sizeMap: { [key in InputSize]: string } = {
  medium: "p-3 text-base",
  large: "p-4 text-base",
};

export const DefaultInput: FC<DefaultInputProps> = forwardRef<
  HTMLInputElement,
  DefaultInputProps
>(
  (
    {
      id,
      name,
      label,
      placeholder,
      required,
      type = "text",
      size = "medium",
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <input
        id={id}
        ref={ref}
        name={name}
        type={type}
        aria-label={label}
        placeholder={placeholder}
        required={required}
        {...props}
      />
    );
  }
);
