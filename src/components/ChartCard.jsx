import React, { useEffect, useRef } from "react";

const ChartCard = ({ 
  title, 
  chartUrl, 
  className = "", 
  vizOptions = {} 
}) => {
  const vizRef = useRef(null);
  const vizObjectRef = useRef(null);

  useEffect(() => {
    const initViz = () => {
      if (window.tableau && chartUrl) {
        // Dispose of the existing viz if it exists
        if (vizObjectRef.current) {
          vizObjectRef.current.dispose();
        }

        // Clear the container
        if (vizRef.current) {
          vizRef.current.innerHTML = "";
        }

        // Default options
        const defaultOptions = {
          hideTabs: true,
          hideToolbar: true,
          width: '100%',
          height: '100%',
        };

        // Merge default options with provided options
        const mergedOptions = { ...defaultOptions, ...vizOptions };

        // Create new viz
        vizObjectRef.current = new window.tableau.Viz(
          vizRef.current,
          chartUrl,
          mergedOptions
        );
      }
    };

    initViz();

    return () => {
      if (vizObjectRef.current) {
        vizObjectRef.current.dispose();
      }
    };
  }, [chartUrl, vizOptions]);

  return (
    <div className={`bg-slate-800 rounded-lg p-4 shadow-lg flex flex-col h-full ${className}`}>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div ref={vizRef} className="w-full h-[calc(100%-2rem)]">
        {/* Tableau chart will be rendered here */}
      </div>
    </div>
  );
};

export default ChartCard;
