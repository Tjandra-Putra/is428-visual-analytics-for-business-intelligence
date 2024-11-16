import React, { useState, useEffect } from "react";
import { Cloud, TrendingDown, Target, Leaf, Info, TrendingUp } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";

const iconMap = {
  cloud: Cloud,
  "trending-down": TrendingDown,
  "trending-up": TrendingUp,
  target: Target,
  leaf: Leaf,
};

const StatCard = ({ title, value, icon, color, tooltipText }) => {
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
  const IconComponent = iconMap[icon];
  // const IconComponent = typeof Icon === "function" ? Icon : null;

  return (
    <div className={`p-4 rounded-lg ${color}`}>
      <div className="">
        <div className="flex items-center justify-between gap-2">
          <div className="text-sm text-gray-200 flex-1 min-w-0">{title}</div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Tooltip text={tooltipText}>
              <Info size={16} className="text-gray-300 hover:text-gray-200" />
            </Tooltip>
            {IconComponent && <IconComponent size={48} className="text-white" />}
          </div>
        </div>
        <div className="text-2xl font-semibold text-white">
          {formatValue(count)}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
