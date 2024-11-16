import React from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const LineChart = ({ data, lines = [], xAxisKey = "year" }) => {
  if (!data || data.length === 0 || !lines || lines.length === 0) {
    return <div>No data available for visualization</div>;
  }

  const colors = {
    "Agricultural Emissions (Gt CO2e)": "#ef4444", // red
    "Land Use Change (Gt CO2e)": "#22c55e", // green
    "Crop Yield Index": "#eab308", // yellow
    "Water Stress Index": "#3b82f6", // blue
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
        <XAxis dataKey={xAxisKey} stroke="#94a3b8" tick={{ fill: "#94a3b8" }} />
        <YAxis stroke="#94a3b8" tick={{ fill: "#94a3b8" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1e293b",
            border: "1px solid #475569",
            borderRadius: "6px",
          }}
          labelStyle={{ color: "#94a3b8" }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: "10px",
          }}
          formatter={(value) => (
            <span style={{ color: "#94a3b8" }}>{value}</span>
          )}
        />
        {lines.map((line) => (
          <Line
            key={line}
            type="monotone"
            dataKey={line}
            stroke={colors[line] || "#6366f1"}
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};
