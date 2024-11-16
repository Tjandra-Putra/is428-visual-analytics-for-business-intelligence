import React, { useState, useEffect } from "react";
import { Cloud, TrendingDown, Target, Leaf } from "lucide-react";

const iconMap = {
  cloud: Cloud,
  "trending-down": TrendingDown,
  target: Target,
  leaf: Leaf,
};

const StatCard = ({ title, value, icon, color }) => {
  const [count, setCount] = useState(0);
  const duration = 1000;
  const steps = 30;

  useEffect(() => {
    // Allow for negative values by preserving the minus sign during parsing
    const numericValue = parseFloat(value.replace(/[^-\d.]/g, ""));

    // If the parsed value is NaN, display the value as a string
    if (isNaN(numericValue)) {
      setCount(value);
      return;
    }

    // Proceed with animation for numeric values
    let start = 0;
    const end = numericValue;

    if (start === end) return;

    const increment = (end - start) / steps;
    const timer = setInterval(() => {
      start += increment;
      setCount(start);
      if ((increment > 0 && start >= end) || (increment < 0 && start <= end)) {
        clearInterval(timer);
        setCount(end);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const formatValue = (count) => {
    if (typeof count === "number") {
      const [, unit] = value.split(" ");
      return `${count.toFixed(1)} ${unit || ""}`.trim();
    }
    return count;
  };

  // Ensure Icon is a valid React component
  const IconComponent = typeof Icon === "function" ? Icon : null;

  return (
    <div className={`p-4 rounded-lg ${color}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-200">{title}</span>
        {icon}
      </div>
      <div className="mt-2 text-2xl font-semibold text-white">
        {formatValue(count)}
      </div>
    </div>
  );
};

export default StatCard;
