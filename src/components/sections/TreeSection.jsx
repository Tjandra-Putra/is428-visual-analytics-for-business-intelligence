import React from "react";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import TableauEmbed from "../TableauEmbed";

const TreeSection = () => {
  return (
    <section id="trees" className="min-h-screen  snap-start p-6 flex flex-col">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-indigo-300">Singapore Trees Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <StatCard title="Total Trees Planted (Since 2020)" value="700,207" icon="truck" color="bg-yellow-600" />
        <StatCard title="Carbon Dioxide Removal (kg)" value="15,242,000kg" icon="trending-up" color="bg-green-600" />
      </div>

      <div className="h-[73.5vh] overflow-y-auto border border-gray-300 rounded-lg gap-6">
        <div className="p-6 bg-slate-800">
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <p className="text-gray-300 mb-4 font-semibold">
            The Singapore Trees Project is a government initiative to plant trees across the country to increase greenery and reduce carbon dioxide
            levels. Since 2020, the project has planted over 700,000 trees, resulting in the removal of over 15 million kilograms of carbon dioxide.
          </p>
          <p className="text-gray-300 mb-4">48 pounds × 0.453592 = 21.7724  kilograms of carbon dioxide removal per tree</p>
          <p className="text-gray-300 mb-4">21.7724 kilograms × 700,207 trees = 15,242,000 kilograms of carbon dioxide removal</p>

          <h3 className="text-xl font-semibold">A Single Tree = 48 pounds of carbon dioxide removed per year</h3>
          <a
            className="flex flex-wrap gap-2 text-blue-400"
            href="https://www.usda.gov/media/blog/2015/03/17/power-one-tree-very-air-we-breathe#:~:text=According%20to%20the%20Arbor%20Day,the%20very%20air%20we%20breathe."
          >
            https://www.usda.gov/media/blog/2015/03/17/power-one-tree-very-air-we-breathe#:~:text=According%20to%20the%20Arbor%20Day,the%20very%20air%20we%20breathe.
          </a>

          <h3 className="text-xl font-semibold mt-4">SG Trees Planted</h3>
          <a className="flex flex-wrap gap-2 text-blue-400" href="https://www.nparks.gov.sg/treessg">
            https://www.nparks.gov.sg/treessg
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 h-[600px] mb-6">
          {/* Each ChartCard should have a fixed height */}
          <ChartCard
            title="Trees Distribution in Singapore"
            chartUrl="https://public.tableau.com/views/SG_Tree_Distribution/SG_Tree_Distribution?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
            className="h-full" // Use h-full to fill the parent's height
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px] mb-6">
          <ChartCard
            title="SG Largest CO2 Removal by Species"
            chartUrl="https://public.tableau.com/views/SGLargestCO2RemovalbySpecies/SGLargestCO2RemovalbySpecies?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
            className="h-full"
          />
          <ChartCard
            title="SG Largest CO2 Removal by Species"
            chartUrl="https://public.tableau.com/views/LargestCO2RemovalbySpecies/SGLargestTreeCount?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default TreeSection;
