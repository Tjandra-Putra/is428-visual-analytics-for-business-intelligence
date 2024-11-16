import React from "react";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import TableauEmbed from "../TableauEmbed";

const TransportSection = () => {
  return (
    <section id="transport" className="min-h-screen  snap-start p-6 flex flex-col">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-indigo-300">Transport Industry</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <StatCard title="Transport CO2e" value="6,170,000 tons" icon="truck" color="bg-yellow-600" />
        <StatCard title="YoY Change" value="-2.06%" icon="trending-down" color="bg-green-600" />
      </div>
      <div className="h-[73.5vh] overflow-y-auto border border-gray-300 rounded-lg gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px] mb-6">
          {/* Each ChartCard should have a fixed height */}
          <ChartCard
            title="SG Carbon Emission by Transport"
            chartUrl="https://public.tableau.com/views/SGCarbonEmissionbyTransport/SGCarbonEmissionbyTransport?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
            className="h-full" // Use h-full to fill the parent's height
          />
          <ChartCard
            title="SG Carbon Emission YoY Change"
            chartUrl="https://public.tableau.com/views/CarByFuelTypeCombinedElectricFuelHybrid/SGCO2EmissionYoYChange?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
            className="h-full"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols- gap-6 h-[600px] mb-6">
          <ChartCard
            title="SG Emission from Coal, Oil and Gas"
            chartUrl="https://public.tableau.com/views/SGC02Emissions/SGC02Emissions?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
            className="h-full"
          />
          <ChartCard
            title="Car By Fuel Type Combined (Electric, Fuel, Hybrid) Trend"
            chartUrl="https://public.tableau.com/views/CarByFuelTypeCombinedElectricFuelHybrid/CarByFuelTypeCombinedElectricFuelHybridTrend?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
            className="h-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px] mb-6">
          {/* <ChartCard
            title="Car By Fuel Type Combined (Electric, Fuel, Hybrid)"
            chartUrl="https://public.tableau.com/views/CarByFuelTypeCombinedElectricFuelHybrid/CarByFuelTypeCombinedElectricFuelHybrid?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
            className="h-full"
          /> */}
          <ChartCard
            title="Annual COE vs Newly Registered Cars"
            chartUrl="https://public.tableau.com/views/AnnualCOEvsNewlyRegisteredCars/AnnualCOEvsNewlyRegisteredCars?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
            className="h-full"
          />
          <ChartCard
            title="Correlation between Avg COE Price and Newly Register Car"
            chartUrl="https://public.tableau.com/views/CorrelationbetweenAvgCOEPriceandNewlyRegisterCar/CorrelationbetweenAvgCOEPriceandNewlyRegisterCar?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
            className="h-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px] mb-6">
          {/* <ChartCard
            title="Car By Fuel Type, Year to Date"
            chartUrl="https://public.tableau.com/views/CarByFuelTypeYTD/CarByFuelTypeYTD?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
            className="h-full"
          /> */}
          {/* <ChartCard
            title="SG C02 Emissions with Registered Vehicles"
            chartUrl="https://public.tableau.com/views/SGC02EmissionswithRegisteredVehicles/SGC02EmissionswithRegisteredVehicles?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
            className="h-full"
          /> */}
        </div>
      </div>

      {/* 
      
      */}
    </section>
  );
};

export default TransportSection;
