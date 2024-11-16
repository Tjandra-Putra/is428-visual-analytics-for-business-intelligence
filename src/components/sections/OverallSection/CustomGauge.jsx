import { GaugeComponent } from 'react-gauge-component';

const CustomGauge = ({ pointerValue }) => {
  return (
    <GaugeComponent
      id="gauge-semicircle"
      type="semicircle"
      value={pointerValue} // The pointer will point to this value
      minValue={-100} // Minimum value on the gauge
      maxValue={100} // Maximum value on the gauge
      className="gauge-component-class"
      style={{ width: "100%" }}
      marginInPercent={{ top: 0.08, bottom: 0.00, left: 0.07, right: 0.07 }}
      arc={{
        width: 0.15,
        subArcs:[
            { limit: -50, color: "#B22222" },  // Dark red for extreme negative values
            { limit: 0, color: "#EA4228" },    // Red at the baseline (0)
            { limit: 50, color: "#4CAF50" },   // Green for moderate positive values
            { color: "#1B5E20" }               // Dark green for high positive values
          ]
      }}
      labels={{
        valueLabel: {
          matchColorWithArc: true,
          formatTextValue: (value) => `${value}%`,
          style: { fontSize: "35px", fill: "#fff", textShadow: "black 1px 1px 0px, black 0px 0px 2.5em, black 0px 0px 0.2em" },
        },
      }}
      tickLabels={{
        type: "outer",
        hideMinMax: true, // Hide default min and max
      }}
      ticks={[
        { value: -100, valueConfig: { formatTextValue: () => "-100%", style: { fontSize: "12px", fill: "#464A4F" } } },
        { value: 0, valueConfig: { formatTextValue: () => "0%", style: { fontSize: "12px", fill: "#464A4F" } } },
        { value: 100, valueConfig: { formatTextValue: () => "100%", style: { fontSize: "12px", fill: "#464A4F" } } },
      ]}
      pointer={{
        type: "needle",
        color: "#464A4F",
        length: 0.7,
        animate: true,
        animationDuration: 1000,
      }}
    
    />
  );
};

export default CustomGauge;
