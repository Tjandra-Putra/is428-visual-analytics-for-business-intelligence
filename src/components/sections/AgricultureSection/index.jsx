import { useState } from "react";
import { BarChart2 } from "lucide-react";
import { useAgricultureData } from "@/hooks/useAgricultureData";
import AgricultureOverview from "./AgricultureOverview";
import AgricultureMetrics from "./AgricultureMetrics";
import AgricultureImpacts from "./AgricultureImpacts";
import AgricultureProjections from "./AgricultureProjections";
import Modal from "@/components/ui/modal";
import ChartCard from "@/components/ChartCard";
import { scenarioData } from "@/data/agriculture/scenarioData";
import { models } from "@/data/agriculture/models";

const AgricultureSection = () => {
  const [selectedModel, setSelectedModel] = useState(
    "Global Change Assessment Model"
  );
  const [activeTab, setActiveTab] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { emissionsData, isLoading } = useAgricultureData();

  const currentScenario =
    scenarioData[selectedModel] ||
    scenarioData["Global Change Assessment Model"];

  return (
    <section
      id="agriculture"
      className="min-h-screen snap-start p-6 flex flex-col"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-indigo-300">
        Agriculture Industry
      </h2>

      <div className="flex-grow">
        {isLoading ? (
          <div className="text-center p-4">Loading agriculture data...</div>
        ) : (
          <>
            <div className="flex space-x-4 mb-6 border-b border-slate-700">
              {["overview", "BAU", "projections"].map((tab) => (
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

            {activeTab === "overview" && (
              <AgricultureOverview emissionsData={emissionsData} />
            )}
            {activeTab === "BAU" && (
              <AgricultureMetrics />
            )}
            {/* {activeTab === "impacts" && (
              <AgricultureImpacts selectedModel={selectedModel} />
            )} */}
            {activeTab === "projections" && (
              <AgricultureProjections
                selectedModel={selectedModel}
                setSelectedModel={setSelectedModel}
                models={models}
              />
            )}
          </>
        )}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors mx-auto mb-8"
      >
        <BarChart2 className="h-5 w-5" />
        View Detailed Dashboard
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Agriculture Emissions Analysis - ${
          models.find((m) => m.value === selectedModel).label
        }`}
      >
        <div className="h-[80vh]">
          <ChartCard
            chartUrl={currentScenario.chartUrl}
            className="w-full h-full"
          />
        </div>
      </Modal>
    </section>
  );
};

export default AgricultureSection;
