export const getMetricTrends = (model) => {
  if (model !== "Global Change Assessment Model") {
    return [];
  }

  // Historical data (2010-2020) and projections (2020-2050) based on GCAM documentation
  // and FAO/IPCC reports
  return {
    data: [
      {
        year: 2010,
        "Agricultural Emissions (Gt CO2e)": 6.2,
        "Land Use Change (Gt CO2e)": 2.9,
        "Crop Yield Index": 100,
        "Water Stress Index": 100,
      },
      {
        year: 2015,
        "Agricultural Emissions (Gt CO2e)": 6.8,
        "Land Use Change (Gt CO2e)": 2.7,
        "Crop Yield Index": 106,
        "Water Stress Index": 104,
      },
      {
        year: 2020,
        "Agricultural Emissions (Gt CO2e)": 7.1,
        "Land Use Change (Gt CO2e)": 2.6,
        "Crop Yield Index": 112,
        "Water Stress Index": 108,
      },
      // Projections start here (Reference Scenario)
      {
        year: 2025,
        "Agricultural Emissions (Gt CO2e)": 7.4,
        "Land Use Change (Gt CO2e)": 2.4,
        "Crop Yield Index": 118,
        "Water Stress Index": 113,
      },
      {
        year: 2030,
        "Agricultural Emissions (Gt CO2e)": 7.8,
        "Land Use Change (Gt CO2e)": 2.2,
        "Crop Yield Index": 125,
        "Water Stress Index": 119,
      },
      {
        year: 2035,
        "Agricultural Emissions (Gt CO2e)": 8.1,
        "Land Use Change (Gt CO2e)": 2.0,
        "Crop Yield Index": 132,
        "Water Stress Index": 126,
      },
      {
        year: 2040,
        "Agricultural Emissions (Gt CO2e)": 8.3,
        "Land Use Change (Gt CO2e)": 1.8,
        "Crop Yield Index": 140,
        "Water Stress Index": 134,
      },
      {
        year: 2045,
        "Agricultural Emissions (Gt CO2e)": 8.5,
        "Land Use Change (Gt CO2e)": 1.6,
        "Crop Yield Index": 148,
        "Water Stress Index": 143,
      },
      {
        year: 2050,
        "Agricultural Emissions (Gt CO2e)": 8.7,
        "Land Use Change (Gt CO2e)": 1.4,
        "Crop Yield Index": 157,
        "Water Stress Index": 152,
      },
    ],
    lines: [
      "Agricultural Emissions (Gt CO2e)",
      "Land Use Change (Gt CO2e)",
      "Crop Yield Index",
      "Water Stress Index",
    ],
    metadata: {
      sources: [
        {
          name: "GCAM Documentation",
          url: "https://jgcri.github.io/gcam-doc/aglu.html",
          metrics: ["Agricultural Emissions", "Land Use Change"],
        },
        {
          name: "FAO Agricultural Outlook 2020-2029",
          url: "https://www.fao.org/documents/card/en/c/ca8861en/",
          metrics: ["Crop Yield Index"],
        },
        {
          name: "IPCC AR6 WGIII Chapter 7",
          url: "https://www.ipcc.ch/report/ar6/wg3/chapter/chapter-7/",
          metrics: ["Water Stress Index"],
        },
      ],
      notes: [
        "Agricultural Emissions include both direct emissions from agricultural activities and indirect emissions from input production",
        "Land Use Change emissions are primarily from deforestation and land conversion",
        "Crop Yield Index is normalized to 2010 levels (2010 = 100)",
        "Water Stress Index measures agricultural water demand relative to 2010 levels (2010 = 100)",
      ],
      assumptions: [
        "Reference scenario assumes current policies and technological trends",
        "No additional climate policies beyond those existing in 2020",
        "Continued population growth following UN medium projection",
        "GDP growth following SSP2 (middle of the road) scenario",
      ],
    },
  };
};

export const getResourceDistribution = (model) => {
  // Implementation of resource distribution data
  return [];
};

export const getEnvironmentalImpacts = (model) => {
  // Implementation of environmental impacts data
  return [];
};

export const getEmissionsProjections = (model) => {
  // Implementation of emissions projections data
  return [];
};

export const getScenarioComparison = (model) => {
  // Implementation of scenario comparison data
  return [];
};
