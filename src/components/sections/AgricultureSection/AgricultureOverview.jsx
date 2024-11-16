import { useMemo, useState, useEffect } from "react";
import { BarChart } from "@/components/charts/BarChart";
import { PieChart } from "@/components/charts/PieChart";
import { Badge } from "@/components/ui/badge";
import { GeoMap } from "@/components/charts/GeoMap";

const AgricultureOverview = ({
  emissionsData = [],
  selectedModel,
  models = [],
  currentScenario,
}) => {
  // Add state for selected year
  const [selectedYear, setSelectedYear] = useState(2021);

  // Get available years for the dropdown
  const availableYears = useMemo(() => {
    if (!emissionsData?.length) return [];
    return [
      ...new Set(emissionsData.map((d) => new Date(d.Date).getFullYear())),
    ].sort((a, b) => b - a);
  }, [emissionsData]);

  // Update topEmittersData to group by gas type
  const topEmittersData = useMemo(() => {
    if (!emissionsData?.length) return [];

    const data = emissionsData
      .filter((d) => {
        const year = new Date(d.Date).getFullYear();
        return year === selectedYear && ["CH4", "N2O"].includes(d.Gas);
      })
      .reduce((acc, curr) => {
        // Find or create country entry
        const countryEntry = acc.find(
          (entry) =>
            entry.name === (curr.Country.length > 12 ? curr.ISO : curr.Country)
        );

        if (countryEntry) {
          countryEntry[curr.Gas] = curr.Value;
        } else {
          acc.push({
            name: curr.Country.length > 12 ? curr.ISO : curr.Country,
            [curr.Gas]: curr.Value,
          });
        }
        return acc;
      }, [])
      .sort((a, b) => b.CH4 + b.N2O - (a.CH4 + a.N2O))
      .slice(0, 5);

    return data;
  }, [emissionsData, selectedYear]);

  // Prepare data for emissions by gas type pie chart
  const gasTypeData = useMemo(() => {
    if (!emissionsData?.length) return [];

    // Filter for selected year and specific gases (CH4 and N2O)
    const filteredData = emissionsData
      .filter((d) => {
        const year = new Date(d.Date).getFullYear();
        return year === selectedYear && ["CH4", "N2O"].includes(d.Gas);
      })
      .reduce((acc, curr) => {
        acc[curr.Gas] = (acc[curr.Gas] || 0) + curr.Value;
        return acc;
      }, {});

    // Calculate total for percentages
    const total = Object.values(filteredData).reduce(
      (sum, value) => sum + value,
      0
    );

    // Format data for Recharts PieChart
    return [
      {
        name: "Methane (CH4)",
        value: Number(filteredData["CH4"]?.toFixed(2)) || 0,
      },
      {
        name: "Nitrous Oxide (N2O)",
        value: Number(filteredData["N2O"]?.toFixed(2)) || 0,
      },
    ].filter((item) => item.value > 0);
  }, [emissionsData, selectedYear]);

  // Update mapData preparation
  const mapData = useMemo(() => {
    if (!emissionsData?.length) return [];

    return emissionsData
      .filter((d) => {
        const year = new Date(d.Date).getFullYear();
        return year === selectedYear;
      })
      .reduce((acc, curr) => {
        // Find existing country entry
        const countryEntry = acc.find((d) => d.id === curr.ISO);
        const value = parseFloat(curr.Value) || 0;

        if (countryEntry) {
          // Add to total value
          countryEntry.value += value;
          // Add or update gas-specific value
          countryEntry.gases[curr.Gas] =
            (countryEntry.gases[curr.Gas] || 0) + value;
        } else {
          // Create new entry with gases object
          const newEntry = {
            id: curr.ISO,
            value: value,
            name: curr.Country,
            gases: {
              [curr.Gas]: value,
            },
          };
          acc.push(newEntry);
        }
        return acc;
      }, []);
  }, [emissionsData, selectedYear]);

  // Add this debug log to verify the filtered data
  useEffect(() => {}, [mapData]);

  // Add this debug useEffect
  useEffect(() => {
    if (emissionsData?.length) {
      // Log unique years in the data
      const years = [
        ...new Set(emissionsData.map((d) => new Date(d.Date).getFullYear())),
      ];

      // Log sample of raw data
    }
  }, [emissionsData]);

  // If no data is available, show a message
  if (
    !emissionsData ||
    !Array.isArray(emissionsData) ||
    emissionsData.length === 0
  ) {
    return <div className="text-center p-4">No emissions data available</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="p-6 bg-slate-800 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Top Agricultural Emitters</h3>
          <div className="flex items-center gap-2">
            <label htmlFor="year-select" className="text-sm text-gray-400">
              Year:
            </label>
            <select
              id="year-select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="bg-slate-700 text-white border border-slate-600 rounded-md px-2 py-1 text-sm"
            >
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="h-[300px]">
          {topEmittersData.length > 0 && (
            <BarChart
              data={topEmittersData}
              indexBy="name"
              keys={["CH4", "N2O"]}
              legends={[
                { id: "CH4", label: "Methane (CH4)" },
                { id: "N2O", label: "Nitrous Oxide (N2O)" },
              ]}
            />
          )}
        </div>
      </div>

      <div className="p-6 bg-slate-800 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">
          Agricultural Emissions by Gas Type ({selectedYear})
        </h3>
        {gasTypeData.length > 0 ? (
          <div className="h-[300px]">
            <PieChart
              data={gasTypeData}
              margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
              valueFormat=" >-.2f"
              arcLabel={(d) => `${d.formattedValue}`}
              arcLinkLabel={(d) => d.label}
            />
          </div>
        ) : (
          <div className="h-[300px] flex items-center justify-center text-gray-400">
            No gas type data available for {selectedYear}
          </div>
        )}
      </div>

      {/* Add the map */}
      <div className="col-span-2 p-6 bg-slate-800 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">
          Global Agricultural Emissions ({selectedYear})
        </h3>
        <div className="h-[400px] w-full overflow-hidden">
          <GeoMap data={mapData} />
        </div>
      </div>
    </div>
  );
};

export default AgricultureOverview;
