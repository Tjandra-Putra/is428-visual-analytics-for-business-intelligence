import {
  Factory,
  Droplets,
  Sprout,
  TreePine,
  Tractor,
  Leaf,
} from "lucide-react";
import React from "react";

export const getModelSpecificMetrics = (model) => {
  const metrics = {
    "Global Change Assessment Model": {
      waterUsage: "-12%",
      cropYield: "+8%",
      landUseChange: "-15%",
      fertiliserUse: "-20%",
    },
    "2050 Pathways Calculator": {
      cropDiversity: "+25%",
      organicFarming: "+30%",
      renewableEnergy: "+40%",
      soilHealth: "+15%",
    },
    "Energy Policy Simulator, India": {
      solarIrrigation: "+45%",
      smartFarming: "+35%",
      biomassPower: "+25%",
      waterEfficiency: "+30%",
    },
    "Energy Policy Simulator, Mexico": {
      agroforestry: "+20%",
      droughtResistance: "+25%",
      biodiversity: "+15%",
      indigenousPractices: "+30%",
    },
    "Energy Policy Simulator, United States": {
      precisionAg: "+40%",
      carbonSequestration: "+35%",
      renewableAdoption: "+45%",
      wasteReduction: "+25%",
    },
  };

  return metrics[model] || {};
};

export const formatMetricName = (key) => {
  // Convert camelCase to space-separated words and capitalize first letter
  const formatted = key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());

  return formatted;
};

export const getMetricIcon = (key) => {
  const iconMap = {
    waterUsage: Droplets,
    cropYield: Sprout,
    landUseChange: TreePine,
    fertiliserUse: Factory,
    cropDiversity: Leaf,
    organicFarming: Sprout,
    renewableEnergy: Factory,
    soilHealth: Sprout,
    solarIrrigation: Droplets,
    smartFarming: Tractor,
    biomassPower: Factory,
    waterEfficiency: Droplets,
    agroforestry: TreePine,
    droughtResistance: Droplets,
    biodiversity: Leaf,
    indigenousPractices: Sprout,
    precisionAg: Tractor,
    carbonSequestration: Factory,
    renewableAdoption: Factory,
    wasteReduction: Factory,
  };

  const IconComponent = iconMap[key] || Factory;
  return React.createElement(IconComponent, {
    className: "h-5 w-5 text-white",
  });
};

export const getMetricColor = (key) => {
  const colorMap = {
    waterUsage: "bg-blue-700",
    cropYield: "bg-green-700",
    landUseChange: "bg-emerald-700",
    fertiliserUse: "bg-yellow-700",
    cropDiversity: "bg-green-700",
    organicFarming: "bg-emerald-700",
    renewableEnergy: "bg-blue-700",
    soilHealth: "bg-yellow-700",
    solarIrrigation: "bg-blue-700",
    smartFarming: "bg-purple-700",
    biomassPower: "bg-green-700",
    waterEfficiency: "bg-blue-700",
    agroforestry: "bg-emerald-700",
    droughtResistance: "bg-yellow-700",
    biodiversity: "bg-green-700",
    indigenousPractices: "bg-purple-700",
    precisionAg: "bg-purple-700",
    carbonSequestration: "bg-green-700",
    renewableAdoption: "bg-blue-700",
    wasteReduction: "bg-yellow-700",
  };

  return colorMap[key] || "bg-green-700";
};
