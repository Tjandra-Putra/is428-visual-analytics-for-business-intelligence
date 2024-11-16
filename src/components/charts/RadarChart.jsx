import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
} from "recharts";

const CustomRadarChart = ({ data, scenarios }) => {
  console.log("RadarChart received data:", data);
  console.log("RadarChart received scenarios:", scenarios);

  if (!data?.length || !scenarios?.length) {
    return <div>No data available for radar chart</div>;
  }

  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 border border-slate-700 p-2 rounded-lg">
          <p className="font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <RadarChart
      width={500}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="indicator" tick={{ fill: "#9CA3AF" }} />
      <PolarRadiusAxis angle={30} tick={{ fill: "#9CA3AF" }} tickCount={6} />

      {scenarios.map((scenario, index) => (
        <Radar
          key={scenario}
          name={scenario}
          dataKey={scenario}
          stroke={colors[index % colors.length]}
          fill={colors[index % colors.length]}
          fillOpacity={0.3}
        />
      ))}

      <Tooltip content={<CustomTooltip />} />
      <Legend />
    </RadarChart>
  );
};

export default CustomRadarChart;
