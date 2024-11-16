import React from "react";

export const Tabs = ({ defaultValue, children, className }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (!child) return null;
        return React.cloneElement(child, { activeTab, setActiveTab });
      })}
    </div>
  );
};

export const TabsList = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-2 mb-4 border-b border-slate-700">
      {React.Children.map(children, (child) => {
        if (!child) return null;
        return React.cloneElement(child, { activeTab, setActiveTab });
      })}
    </div>
  );
};

export const TabsTrigger = ({ value, children, activeTab, setActiveTab }) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium transition-colors
        ${
          activeTab === value
            ? "text-indigo-300 border-b-2 border-indigo-300"
            : "text-gray-400 hover:text-gray-300"
        }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children, activeTab }) => {
  if (activeTab !== value) return null;
  return <div>{children}</div>;
};
