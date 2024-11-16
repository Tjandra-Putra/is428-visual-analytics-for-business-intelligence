import React from "react";

export default function GraphCard() {
  return (
    <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-sm rounded-xl">
      <div className="p-5">
        <header class="flex justify-between items-start mb-2">
          <h2 class="text-md font-semibold text-gray-800">Graph Title</h2>
        </header>
        <div class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
          Sales
        </div>
        <div class="flex items-start">
          <div class="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
            $24,780
          </div>
          <div class="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">
            +49%
          </div>
        </div>
      </div>
    </div>
  );
}
