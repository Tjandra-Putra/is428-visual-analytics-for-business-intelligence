import { ResponsiveParallelCoordinates } from "@nivo/parallel-coordinates";

const ParallelCoordinatesChart = ({ data, variables }) => {
  if (!data?.length || !variables?.length) return null;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveParallelCoordinates
        data={data}
        variables={variables}
        margin={{ top: 50, right: 80, bottom: 50, left: 80 }}
        lineOpacity={0.5}
        strokeWidth={3}
        curve="monotoneX"
        theme={{
          axis: {
            domain: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
            },
            ticks: {
              text: {
                fill: "#ffffff",
                fontSize: 11,
              },
            },
            legend: {
              text: {
                fill: "#ffffff",
                fontSize: 12,
                fontWeight: "bold",
              },
            },
          },
          legends: {
            text: {
              fill: "#ffffff",
            },
          },
        }}
        colors={{ scheme: "set2" }}
        animate={false}
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 60,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
          },
        ]}
      />
    </div>
  );
};

export default ParallelCoordinatesChart;
