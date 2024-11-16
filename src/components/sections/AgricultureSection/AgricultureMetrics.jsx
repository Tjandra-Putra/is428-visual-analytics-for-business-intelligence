import MetricTrendsChart from "./charts/MetricTrendsChart";
import StatCard from "@/components/StatCard";
import {
  getModelSpecificMetrics,
  formatMetricName,
  getMetricIcon,
  getMetricColor,
} from "@/utils/agriculture/metricHelpers";

const AgricultureMetrics = ({ selectedModel = "Global Change Assessment Model" }) => {
  return (
    <div className="space-y-6">
      <MetricTrendsChart selectedModel={selectedModel} />

      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {Object.entries(getModelSpecificMetrics(selectedModel)).map(
          ([key, value]) => (
            <StatCard
              title={formatMetricName(key)}
              value={value}
              icon={getMetricIcon(key)}
              color={getMetricColor(key)}
            />
          )
        )}
      </div> */}
    </div>
  );
};

export default AgricultureMetrics;
