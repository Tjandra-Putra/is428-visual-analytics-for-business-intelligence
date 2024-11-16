import React from "react";
import { ChevronDown } from "lucide-react";
import { Tooltip } from "./tooltip";

export const Select = ({ id, value, onValueChange, options, tooltip }) => {
  return (
    <Tooltip text={tooltip}>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          className="block appearance-none w-full bg-slate-700 border border-slate-600 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-slate-600 focus:border-slate-500"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
          <ChevronDown size={20} />
        </div>
      </div>
    </Tooltip>
  );
};
