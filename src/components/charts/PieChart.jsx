import React from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const PieChart = ({ data }) => {
  const colors = [
    "#6366f1",
    "#22c55e",
    "#eab308",
    "#ec4899",
    "#06b6d4",
    "#8b5cf6",
  ];

  // print out data

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) =>
            `${name} (${(percent * 100).toFixed(0)}%)`
          }
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "#1e293b",
            border: "1px solid #475569",
            borderRadius: "6px",
          }}
          labelStyle={{ color: "#ffffff" }}
          itemStyle={{ color: "#ffffff" }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: "10px",
            color: "#94a3b8",
          }}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};
