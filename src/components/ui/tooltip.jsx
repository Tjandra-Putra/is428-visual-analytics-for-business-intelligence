import React, { useState } from "react";
import Markdown from "react-markdown";

export const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block w-full">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-50 w-80 p-3 mt-2 text-sm text-white bg-slate-900 rounded-md shadow-lg border border-slate-700">
          <Markdown className="prose prose-invert prose-sm max-w-none">
            {text}
          </Markdown>
        </div>
      )}
    </div>
  );
};
