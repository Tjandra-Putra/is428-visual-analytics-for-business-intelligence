import React, { useState, useEffect } from "react";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";

const PolicySection = () => {
  const [selectedModel, setSelectedModel] = useState("Global Policy Overtime");

  const globalModels = [
    { value: "Global Policy Overtime", label: "Global Policy Overtime" },
    { value: "Ratified Policy Overtime", label: "Ratified Policy Overtime" },
    { value: "Correlation", label: "Correlation" },
  ];

  const scenarioData = {
    "Global Policy Overtime": {
      title: "Policy with the most uptake",
      co2e: "UNFCCC, UNCCD & Montreal Protocol",
      yoyChange: "194",
      chartUrl:
        "https://public.tableau.com/views/Policy_17314049300990/GlobalPolicyDashboard?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
    "Ratified Policy Overtime": {
      title: "Policy with the most uptake in a year",
      co2e: "Paris Agreement",
      yoyChange: "106",
      chartUrl:
        "https://public.tableau.com/views/Policy_17314049300990/RatifiedPolicyDashboard?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
    Correlation: {
      title: "",
      co2e: "",
      yoyChange: "",
      chartUrl:
        "https://public.tableau.com/views/Policy_17314049300990/CorrelationDashboard?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
  };

  const currentScenario = scenarioData[selectedModel] || {};

  return (
    <section id="policy" className="min-h-screen snap-start p-6 flex flex-col">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-indigo-300">Policy</h2>
      <div className="flex space-x-4 mb-6 border-b border-slate-700">
        {globalModels.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setSelectedModel(value)}
            className={`px-4 py-2 text-sm font-medium ${
              selectedModel === value ? "text-indigo-300 border-b-2 border-indigo-300" : "text-gray-400 hover:text-gray-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {selectedModel !== "Correlation" && (
          <StatCard title={currentScenario.title} value={`${currentScenario.co2e}`} icon="siren" color="bg-blue-700" />
        )}
        {selectedModel !== "Correlation" && (
          <StatCard
            title="Count"
            value={`${currentScenario.yoyChange}%`}
            icon={currentScenario.yoyChange.startsWith("-") ? "trending-down" : "trending-up"}
            color={currentScenario.yoyChange.startsWith("-") ? "bg-red-600" : "bg-green-600"}
          />
        )}
      </div>
      <div className="grow h-[700px] w-full">
        <ChartCard
          chartUrl={currentScenario.chartUrl}
          className="w-full h-full"
          vizOptions={{
            hideTabs: true,
            hideToolbar: true,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </section>
  );
};

export default PolicySection;
