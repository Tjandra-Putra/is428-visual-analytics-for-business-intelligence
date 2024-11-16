import React from "react";

const variants = {
  default: "bg-slate-700 text-slate-200 hover:bg-slate-600",
  primary: "bg-indigo-700 text-indigo-100 hover:bg-indigo-600",
  secondary: "bg-slate-600 text-slate-100 hover:bg-slate-500",
  success: "bg-green-700 text-green-100 hover:bg-green-600",
  warning: "bg-yellow-700 text-yellow-100 hover:bg-yellow-600",
  danger: "bg-red-700 text-red-100 hover:bg-red-600",
  info: "bg-blue-700 text-blue-100 hover:bg-blue-600",
};

const sizes = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-2.5 py-0.5",
  lg: "text-base px-3 py-1",
};

export const Badge = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <span
      className={`
        inline-flex items-center rounded-full
        font-medium transition-colors duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
};
