import { LineChart } from "@/components/charts/LineChart";
import { Tooltip } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { getMetricTrends } from "@/utils/agriculture/chartHelpers";

const MetricTrendsChart = ({ selectedModel }) => {
  const metricData = getMetricTrends(selectedModel);

  const chartConfigs = [
    {
      id: "agricultural",
      title: "Agricultural Emissions",
      unit: "Gt CO2e",
      line: "Agricultural Emissions (Gt CO2e)",
      tooltip: `### Direct Emissions from Agriculture

**Sources of Emissions:**   
- • Livestock methane from digestion
- • Chemical fertilizer application
- • Rice paddy cultivation
- • Farm machinery operations
- • Manure storage & handling

**Current Trajectory:**
- • Increasing by 40% (2010-2050)
- • Major driver: Growing food demand
- • Challenge: Intensive farming needs
- • Limited emission controls in place

*Note: Includes both direct emissions from farming activities and indirect emissions from agricultural inputs.*`,
    },
    {
      id: "landUse",
      title: "Land Use Change Emissions",
      unit: "Gt CO2e",
      line: "Land Use Change (Gt CO2e)",
      tooltip: `### Land Use Change Emissions

**Major Sources:**
- • Forest clearing for agriculture
- • Grassland conversion to cropland
- • Peatland and wetland drainage
- • Soil carbon loss from conversion

**Observed Trends:**
- • Decreasing by 52% (2010-2050)
- • Improved land management practices
- • Stricter deforestation controls
- • Better land-use planning

*Note: Primarily reflects emissions from converting natural ecosystems to agricultural land.*`,
    },
    {
      id: "cropYield",
      title: "Crop Yield Index",
      unit: "2010 = 100",
      line: "Crop Yield Index",
      tooltip: `### Crop Yield Performance

**Index Details:**
- • Base year: 2010 = 100
- • Measures crop output per hectare
- • Projected +57% increase by 2050
- • Key efficiency indicator

**Growth Drivers:**
- • Advanced farming techniques
- • Improved seed varieties
- • Better irrigation systems
- • Precision agriculture adoption

*Note: Higher values indicate more efficient land use and agricultural productivity.*`,
    },
    {
      id: "waterStress",
      title: "Water Stress Index",
      unit: "2010 = 100",
      line: "Water Stress Index",
      tooltip: `### Agricultural Water Stress

**Index Explanation:**
- • Base year: 2010 = 100
- • Measures water demand pressure
- • Projected +52% increase by 2050
- • Critical sustainability metric

**Key Factors:**
- • Rising irrigation requirements
- • Climate change impacts
- • Water availability constraints
- • Competition with other sectors

*Note: Higher values indicate increased pressure on water resources for agriculture.*`,
    },
  ];

  if (!metricData?.data?.length) {
    return <div>No trend data available</div>;
  }

  return (
    <>
      <div className="bg-slate-800 rounded-lg p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-slate-200">
            Business As Usual (BAU) Agricultural Metrics Trends (2010-2050)
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Historical data and projections of key agricultural indicators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {chartConfigs.map((config) => (
            <div key={config.id} className="bg-slate-900 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-lg font-semibold text-slate-200 whitespace-nowrap">
                  {config.title}
                </h4>
                <Tooltip text={config.tooltip}>
                  <Info className="h-4 w-4 shrink-0 text-slate-400 cursor-help" />
                </Tooltip>
              </div>
              <p className="text-sm text-slate-400 mb-2">Unit: {config.unit}</p>
              <div className="h-[250px]">
                <LineChart
                  data={metricData.data}
                  lines={[config.line]}
                  xAxisKey="year"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Metadata sections */}
        <div className="mt-6">
          <h4 className="font-semibold text-slate-300 mb-2">Data Sources:</h4>
          <ul className="list-disc list-inside text-sm text-slate-400">
            {metricData.metadata.sources.map((source, index) => (
              <li key={index}>
                {source.name} - {source.metrics.join(", ")}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-slate-300 mb-2">Notes:</h4>
          <ul className="list-disc list-inside text-sm text-slate-400">
            {metricData.metadata.notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-slate-300 mb-2">
            Key Assumptions:
          </h4>
          <ul className="list-disc list-inside text-sm text-slate-400">
            {metricData.metadata.assumptions.map((assumption, index) => (
              <li key={index}>{assumption}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MetricTrendsChart;
