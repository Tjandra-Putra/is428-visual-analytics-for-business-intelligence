import React from "react";

export const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`
        rounded-lg border border-slate-700 
        bg-slate-800/50 shadow-xl backdrop-blur-sm
        transition-all duration-200 hover:border-slate-600
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

// Additional card components for more structured usage
export const CardHeader = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`
        flex flex-col space-y-1.5 
        p-6 pb-4 border-b border-slate-700
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className = "", ...props }) => {
  return (
    <h3
      className={`
        text-lg font-semibold leading-none tracking-tight
        text-slate-200
        ${className}
      `}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({ children, className = "", ...props }) => {
  return (
    <p
      className={`
        text-sm text-slate-400
        ${className}
      `}
      {...props}
    >
      {children}
    </p>
  );
};

export const CardContent = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`
        p-6 pt-0
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`
        flex items-center p-6 pt-0
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};
