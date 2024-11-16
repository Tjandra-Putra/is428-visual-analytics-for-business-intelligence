import React, { useEffect, useRef } from "react";

const TableauEmbed = ({ tableauUrl }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Load Tableau script dynamically
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/tableau-2.8.0.min.js";
    script.onload = initViz;
    document.body.appendChild(script);

    let viz;

    function initViz() {
      const vizUrl = tableauUrl;
      const options = {
        hideTabs: true,
        width: "100%",
        height: "100%",
      };

      viz = new window.tableau.Viz(ref.current, vizUrl, options);
    }

    return () => {
      if (viz) viz.dispose();
    };
  }, []);

  return <div style={{ width: "100%", minHeight: "200vh", height: "100%" }} ref={ref}></div>;
};

export default TableauEmbed;
