import React, { memo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { PieChart } from "@/components/charts/PieChart";

// Add color constants
const COLORS = ["#6366f1", "#8b5cf6", "#d946ef", "#f43f5e", "#f97316"];

// You might want to replace this with your actual topology URL
const WORLD_TOPOLOGY = "https://unpkg.com/world-atlas@2/countries-110m.json";

export const GeoMap = memo(({ data }) => {
  const [tooltip, setTooltip] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  // Calculate max value for color scaling
  const maxValue = Math.max(...data.map((d) => d.value));

  // Create color scale
  const colorScale = scaleLinear()
    .domain([0, maxValue])
    .range(["#1e293b", "#6366f1"]);

  const findCountryData = (geo, data) => {
    const countryName = geo.properties.name;

    return data.find((d) => d.name === countryName);
  };

  const handleZoomEnd = (position) => {
    setPosition(position);
  };

  return (
    <>
      <div className="w-full h-full">
        <ComposableMap
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 180,
          }}
          className="w-full h-full"
        >
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleZoomEnd}
            maxZoom={5}
            minZoom={1}
          >
            <Geographies geography={WORLD_TOPOLOGY} className="w-full h-full">
              {({ geographies }) =>
                geographies.map((geo) => {
                  const current = findCountryData(geo, data);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={current ? colorScale(current.value) : "#1e293b"}
                      stroke="#475569"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: {
                          fill: current
                            ? colorScale(current.value * 1.1)
                            : "#475569",
                          outline: "none",
                          cursor: "pointer",
                        },
                      }}
                      onMouseEnter={() => {
                        const tooltipContent = current
                          ? `${geo.properties.name}: ${current.value.toFixed(
                              2
                            )}`
                          : `${geo.properties.name}: No data`;
                        setTooltip(tooltipContent);
                      }}
                      onMouseLeave={() => setTooltip("")}
                      onClick={() => {
                        if (current) {
                          setSelectedCountry(current);
                        }
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        {tooltip && (
          <div className="absolute bottom-0 left-0 bg-slate-800 text-white px-2 py-1 rounded text-sm">
            {tooltip}
          </div>
        )}
      </div>

      {/* Modal for selected country */}
      {selectedCountry && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-slate-800 p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{selectedCountry.name}</h2>
              <button
                onClick={() => setSelectedCountry(null)}
                className="text-slate-400 hover:text-slate-200"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-slate-400 mb-1">Total Emissions</h3>
                <p className="text-2xl font-bold">
                  {selectedCountry.gases["All GHG"].toFixed(2)}
                </p>
              </div>

              {/* Pie Chart */}
              <div className="h-64 w-full">
                <PieChart
                  data={Object.entries(selectedCountry.gases)
                    .filter(([name]) => name !== "All GHG")
                    .map(([name, value]) => ({
                      name,
                      value,
                    }))}
                  colors={COLORS}
                />
              </div>

              {/* Detailed breakdown */}
              <div className="space-y-2">
                {Object.entries(selectedCountry.gases)
                  .filter(([name]) => name !== "All GHG")
                  .map(([gasName, value], index) => (
                    <div
                      key={gasName}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        />
                        <h3 className="text-slate-400">{gasName}</h3>
                      </div>
                      <p className="text-lg">{value.toFixed(2)}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default GeoMap;
