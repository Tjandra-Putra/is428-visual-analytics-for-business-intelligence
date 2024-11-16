import { PieChart } from "@/components/charts/PieChart";
import { TrendingUp, TrendingDown } from "lucide-react";
import {
  getResourceDistribution,
  getEnvironmentalImpacts,
} from "@/utils/agriculture/chartHelpers";

const AgricultureImpacts = ({ selectedModel }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="p-6 bg-slate-800">
        <h3 className="text-xl font-semibold mb-4">
          Resource Usage Distribution
        </h3>
        <div className="h-80">
          <PieChart data={getResourceDistribution(selectedModel)} />
        </div>
      </div>

      <div className="p-6 bg-slate-800">
        <h3 className="text-xl font-semibold mb-4">
          Environmental Impact Metrics
        </h3>
        <div className="space-y-4">
          {getEnvironmentalImpacts(selectedModel).map((impact, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-gray-300">{impact.label}</span>
              <div className="flex items-center gap-2">
                <span
                  className={`text-${
                    impact.trend === "positive" ? "green" : "red"
                  }-400`}
                >
                  {impact.value}
                </span>
                {impact.trend === "positive" ? (
                  <TrendingUp className="h-4 w-4 text-green-400" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-400" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgricultureImpacts;
