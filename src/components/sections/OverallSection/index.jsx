
import React, {useState, useEffect} from "react";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import EmissionsInformation from "./EmissionsInformation";
import OverallEmissionsCharts from "./OverallEmissionsCharts";



  const OverallSection = () => {


    const [activeTab, setActiveTab] = useState("Introduction");
 
    return (
      <section id="overall" className="min-h-screen snap-start p-6 flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-indigo-300">
          Overall Emissions Trends
        </h1>



        <div className="flex space-x-4 mb-6 align-center">
        </div>



        <div className="flex space-x-4 border-b border-slate-700">
          {["Introduction", "Charts"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === tab
                  ? "text-indigo-300 border-b-2 border-indigo-300"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === "Introduction" && (
              <EmissionsInformation />
            )}

    {activeTab === "Charts" && (
                <OverallEmissionsCharts />
                )}


      </section>
    );
  };
  
  export default OverallSection;
