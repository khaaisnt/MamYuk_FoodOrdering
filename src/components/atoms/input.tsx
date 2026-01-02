"use client";

import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  forwardRef,
  useId,
} from "react";
import { cn } from "@/app/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  name?: string;
  fullWidth?: boolean;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  textareaProps?: Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    keyof InputHTMLAttributes<HTMLInputElement>
  >;
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      label,
      error,
      name,
      fullWidth = false,
      className,
      labelClassName,
      wrapperClassName,
      id,
      disabled,
      defaultValue,
      required,
      multiline = false,
      rows = 3,
      textareaProps,
      placeholder,
      value,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div
        className={cn(
          "flex flex-col mb-4",
          fullWidth && "w-full",
          wrapperClassName
        )}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "mb-2 text-sm",
              disabled ? "text-gray-400" : "text-gray-700",
              error && "text-red-500",
              labelClassName
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {multiline ? (
            <textarea
              id={inputId}
              ref={ref as React.Ref<HTMLTextAreaElement>}
              name={name}
              disabled={disabled}
              required={required}
              rows={rows}
              placeholder={placeholder}
              defaultValue={defaultValue}
              value={value}
              className={cn(
                "bg-[#FAFAFA] border border-[#D4D4D8] rounded-2xl px-4 py-2.5 outline-none transition-all duration-200",
                "placeholder:text-gray-400 placeholder:text-sm",
                "resize-none",
                !disabled
                  ? "text-gray-800 focus:ring-2 focus:ring-mamyuk-light"
                  : "text-gray-400",
                error && "border border-red-500 focus:ring-red-500",
                fullWidth && "w-full",
                className
              )}
              {...textareaProps}
            />
          ) : (
            <input
              id={inputId}
              name={name}
              ref={ref as React.Ref<HTMLInputElement>}
              disabled={disabled}
              required={required}
              placeholder={placeholder}
              defaultValue={defaultValue}
              value={value}
              className={cn(
                "bg-[#FAFAFA] border border-[#D4D4D8] rounded-2xl px-4 py-2.5 outline-none transition-all duration-200",
                "placeholder:text-gray-400 placeholder:text-sm",
                !disabled
                  ? "text-gray-800 focus:ring-2 focus:ring-mamyuk-light"
                  : "text-gray-400",
                error && "border border-red-500 focus:ring-red-500",
                fullWidth && "w-full",
                className
              )}
              {...props}
            />
          )}
        </div>

        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
