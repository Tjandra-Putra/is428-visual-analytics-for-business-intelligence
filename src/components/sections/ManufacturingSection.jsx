import React, { useState, useEffect } from "react";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import { Select } from "@/components/ui/select";

const ManufacturingSection = () => {
  const [activeTab, setActiveTab] = useState("Global");
  const [selectedModel, setSelectedModel] = useState("Greenhouse Gas Emission Overview");

  const americaModels = [
    { value: "Energy Sources of Manufacturing", label: "Energy Sources of Manufacturing" },
    { value: "Types of Manufacturing", label: "Types of Manufacturing" },
    { value: "Real Output by Industry", label: "Real Output by Industry" },
    { value: "CO2 Emissions by Industry", label: "CO2 Emissions by Industry" },
    { value: "Real Output and CO2 Emissions by Industry", label: "Real Output and CO2 Emissions by Industry" },
    { value: "Types of Furnace", label: "Types of Furnace" }
  ];

  const globalModels = [
    { value: "Greenhouse Gas Emission Overview", label: "Greenhouse Gas Emission Overview" },
    { value: "Greenhouse Gas by Economic Agreements", label: "Greenhouse Gas by Economic Agreements" },
    { value: "Top Greenhouse Gas Emitting Countries", label: "Top Greenhouse Gas Emitting Countries" },
    { value: "Type of Manufacturing Activity", label: "Type of Manufacturing Activity" },
  ];

  const models = activeTab === "Global" ? globalModels : americaModels;

  const scenarioData = {
    "Energy Sources of Manufacturing": {
      title: "Average share of Natural Gas from 2002 to 2021",
      co2e: "41.3%",
      yoyChange: "+0.94",
      chartUrl:
        "https://public.tableau.com/views/ManufacturingEmissions/EnergySourcesDashboard?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
    "Types of Manufacturing": {
      title: "Total Direct Emissions of CO2e from 2002 to 2021",
      co2e: "16509 MMT",
      yoyChange: "-0.87",
      chartUrl:
        "https://public.tableau.com/views/ManufacturingEmissions/TypeofManufacturingDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
    "Real Output and CO2 Emissions by Industry": {
      title: "Industry with the highest Real Output and CO2 Emission difference YOY change",
      co2e: "Iron, steel and aluminum",
      yoyChange: "+2.13",
      chartUrl:
        "https://public.tableau.com/views/ManufacturingEmissions/RealOutputEmissionDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
    "Real Output by Industry": {
      title: "Industry with the highest average YOY change",
      co2e: "Refining",
      yoyChange: "+0.98",
      chartUrl:
        "https://public.tableau.com/views/ManufacturingEmissions/RealOutputDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
    "CO2 Emissions by Industry": {
      title: "Industry with the highest average YOY change",
      co2e: "Cement and lime",
      yoyChange: "+0.61",
      chartUrl:
        "https://public.tableau.com/views/ManufacturingEmissions/CO2EmissionsDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
    "Types of Furnace": {
      title: "Furnace with the greatest increase",
      co2e: "Electric arc furnace",
      yoyChange: "+44.0",
      chartUrl:
        "https://public.tableau.com/views/ManufacturingEmissions/FurnaceDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
    "Greenhouse Gas Emission Overview": {
      title: "Country with the greatest average YOY change",
      co2e: "China",
      yoyChange: "+21.31",
      chartUrl:
        "https://public.tableau.com/views/OverallManufacturingEmissions/GHGGlobal?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
    "Top Greenhouse Gas Emitting Countries": {
      title: "Country with the highest average YOY change",
      co2e: "China",
      yoyChange: "+14.32",
      chartUrl:
        "https://public.tableau.com/views/OverallManufacturingEmissions/GHGOvertime?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
    "Greenhouse Gas by Economic Agreements": {
      title: "Economic Agreements with the highest average YOY change",
      co2e: "APEC",
      yoyChange: "+6.84",
      chartUrl:
        "https://public.tableau.com/views/OverallManufacturingEmissions/GHGEA?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
    "Type of Manufacturing Activity": {
      title: "Manufacturing Activity with the highest average YOY change",
      co2e: "Metals",
      yoyChange: "+3.40",
      chartUrl:
        "https://public.tableau.com/views/OverallManufacturingEmissions/TypeofManufacturing?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    },
  };

  const currentScenario = scenarioData[selectedModel] || scenarioData["Energy Sources of Manufacturing"];

  const customVizOptions = {
    hideTabs: true,
    hideToolbar: true,
    width: "100%",
    height: "100%",
    device: "desktop",
    onFirstInteractive: function () {
      console.log("Viz is interactive");
    },
  };

  useEffect(() => {
    // Update dropdown to default model when tab changes
    setSelectedModel(activeTab === "Global" ? "Greenhouse Gas Emission Overview" : "Energy Sources of Manufacturing");
  }, [activeTab]);

  return (
    <section
      id="manufacturing"
      className="min-h-screen snap-start p-6 flex flex-col"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-indigo-300">
        Manufacturing Industry
      </h2>
      <div className="flex space-x-4 mb-6 border-b border-slate-700">
        {["Global", "America"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab
                ? "text-indigo-300 border-b-2 border-indigo-300"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mb-6">
        <label
          htmlFor="model-select"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Select Charts
        </label>
        <Select
          id="model-select"
          value={selectedModel}
          onValueChange={setSelectedModel}
          options={models}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <StatCard
          title={currentScenario.title}
          value={`${currentScenario.co2e}`}
          icon="factory"
          color="bg-blue-700"
        />
        <StatCard
          title="Average YoY Change"
          value={`${currentScenario.yoyChange}%`}
          icon={
            currentScenario.yoyChange.startsWith("-")
              ? "trending-down"
              : "trending-up"
          }
          color={
            currentScenario.yoyChange.startsWith("-")
              ? "bg-red-600"
              : "bg-green-600"
          }
        />
      </div>
      <div className="grow h-[700px] w-full">
        <ChartCard
          chartUrl={currentScenario.chartUrl}
          className="w-full h-full"
          vizOptions={customVizOptions}
        />
      </div>
    </section>
  );
};

export default ManufacturingSection;
