// Helper function to generate time series data
const generateTimeSeriesData = (startValue, years, trend) => {
  return years.map((year) => {
    const randomVariation = (Math.random() - 0.5) * 10;
    const trendValue = trend === "up" ? 5 : trend === "down" ? -5 : 0;
    return {
      year,
      value: startValue + (year - 2020) * trendValue + randomVariation,
    };
  });
};

export const getMetricTrends = (selectedModel) => {
  const years = Array.from({ length: 31 }, (_, i) => 2020 + i);
  const scenario = scenarioData[selectedModel];

  // Convert string percentages to numbers
  const baseEmissions = parseFloat(scenario.co2e);
  const yoyChange = parseFloat(scenario.yoyChange);

  return {
    data: years.map((year) => ({
      year,
      "Emissions (Mt CO2e)":
        baseEmissions * Math.pow(1 + yoyChange / 100, year - 2020),
      "Water Usage":
        (parseFloat(scenario.waterUsage || "-12") * (year - 2020)) / 30,
      "Land Use Change":
        (parseFloat(scenario.landUseChange || "-15") * (year - 2020)) / 30,
    })),
    lines: ["Emissions (Mt CO2e)", "Water Usage", "Land Use Change"],
  };
};

export const getResourceDistribution = (selectedModel) => {
  const scenario = scenarioData[selectedModel];

  // Create distribution based on model-specific metrics
  const metrics = Object.entries(scenario)
    .filter(
      ([key, value]) =>
        ![
          "co2e",
          "yoyChange",
          "chartUrl",
          "description",
          "keyFeatures",
        ].includes(key) &&
        typeof value === "string" &&
        value.includes("%")
    )
    .map(([key, value]) => ({
      name: key.replace(/([A-Z])/g, " $1").trim(), // Convert camelCase to spaces
      value: Math.abs(parseFloat(value)),
    }));

  return metrics;
};

export const getEnvironmentalImpacts = (selectedModel) => {
  const scenario = scenarioData[selectedModel];

  // Convert scenario metrics to environmental impacts
  return Object.entries(scenario)
    .filter(
      ([key, value]) =>
        ![
          "co2e",
          "yoyChange",
          "chartUrl",
          "description",
          "keyFeatures",
        ].includes(key) &&
        typeof value === "string" &&
        value.includes("%")
    )
    .map(([key, value]) => ({
      label: key.replace(/([A-Z])/g, " $1").trim(),
      value: value,
      trend: value.startsWith("+") ? "negative" : "positive", // For environmental impact, reduction is positive
    }));
};

export const getEmissionsProjections = (selectedModel) => {
  const scenario = scenarioData[selectedModel];
  const baseEmissions = parseFloat(scenario.co2e);
  const yoyChange = parseFloat(scenario.yoyChange);

  // Generate three scenarios: BAU, Moderate Action, Aggressive Action
  const years = Array.from({ length: 31 }, (_, i) => 2020 + i);

  return {
    data: years.map((year) => ({
      year,
      "Business As Usual":
        baseEmissions * Math.pow(1 + yoyChange / 100, year - 2020),
      "Moderate Action":
        baseEmissions * Math.pow(1 + (yoyChange - 2) / 100, year - 2020),
      "Aggressive Action":
        baseEmissions * Math.pow(1 + (yoyChange - 4) / 100, year - 2020),
    })),
    lines: ["Business As Usual", "Moderate Action", "Aggressive Action"],
  };
};

export const getScenarioComparison = (selectedModel) => {
  const currentScenario = scenarioData[selectedModel];
  const baseEmissions = parseFloat(currentScenario.co2e);

  // Compare different aspects across scenarios
  return [
    {
      category: "2030 Emissions",
      "Current Path": baseEmissions * 1.1,
      "Policy Target": baseEmissions * 0.7,
      "Net Zero Path": baseEmissions * 0.5,
    },
    {
      category: "2040 Emissions",
      "Current Path": baseEmissions * 1.2,
      "Policy Target": baseEmissions * 0.4,
      "Net Zero Path": baseEmissions * 0.2,
    },
    {
      category: "2050 Emissions",
      "Current Path": baseEmissions * 1.3,
      "Policy Target": baseEmissions * 0.2,
      "Net Zero Path": baseEmissions * 0.1,
    },
  ];
};

export const getModelSpecificMetrics = (selectedModel) => {
  const scenario = scenarioData[selectedModel];

  // Filter and transform model-specific metrics
  return Object.entries(scenario)
    .filter(
      ([key, value]) =>
        ![
          "co2e",
          "yoyChange",
          "chartUrl",
          "description",
          "keyFeatures",
        ].includes(key) &&
        typeof value === "string" &&
        value.includes("%")
    )
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {}
    );
};

export const getMetricIcon = (metricName) => {
  // Map metrics to appropriate icons
  const iconMap = {
    waterUsage: "droplet",
    landUseChange: "map",
    cropYield: "sprout",
    fertiliserUse: "flask",
    solarIrrigation: "sun",
    smartFarming: "cpu",
    biomassPower: "leaf",
    // Add more mappings as needed
  };

  return iconMap[metricName] || "chart";
};

export const getMetricColor = (metricName) => {
  // Map metrics to appropriate colors
  const colorMap = {
    waterUsage: "bg-blue-600",
    landUseChange: "bg-green-600",
    cropYield: "bg-yellow-600",
    fertiliserUse: "bg-purple-600",
    solarIrrigation: "bg-orange-600",
    smartFarming: "bg-cyan-600",
    biomassPower: "bg-emerald-600",
    // Add more mappings as needed
  };

  return colorMap[metricName] || "bg-slate-600";
};
