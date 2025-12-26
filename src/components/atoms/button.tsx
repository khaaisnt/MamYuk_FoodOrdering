import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/app/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "success"
    | "warning"
    | "info";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
  iconOnly?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      iconOnly = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none";

    const variantStyles = {
      primary:
        "bg-gradient-to-b from-mamyuk-primary to-mamyuk-light text-white shadow-md",
      secondary: "bg-white text-mamyuk-light hover:bg-slate-100 shadow-md",
      outline:
        "border border-mamyuk-primary text-mamyuk-primary hover:bg-slate-100",
      ghost: "bg-transparent border border-gray-800 hover:bg-gray-50",
      danger: "bg-mamyuk-danger text-white hover:bg-mamyuk-danger",
      success: "bg-mamyuk-success text-white hover:bg-mamyuk-success",
      warning: "bg-mamyuk-warning text-white hover:bg-mamyuk-warning",
      info: "bg-mamyuk-info text-white hover:bg-mamyuk-info",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 rounded-lg",
      md: "text-sm px-4 py-2 rounded-lg",
      lg: "text-base px-6 py-2.5 rounded-lg",
    };

    const widthStyles = fullWidth ? "w-full" : "";

    const hasIcon = React.Children.toArray(children).some(
      (child) =>
        React.isValidElement(child) &&
        (typeof child.type === "function" || typeof child.type === "object")
    );

    const getIcon = () => {
      switch (variant) {
        default:
          return null;
      }
    };

    return (
      <button
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          widthStyles,
          loading && "relative text-transparent",
          className
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        <span
          className={`flex items-center gap-2 ${
            hasIcon ? "w-full justify-between" : "justify-center"
          }`}
        >
          {iconOnly ? getIcon() : children}
        </span>

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
