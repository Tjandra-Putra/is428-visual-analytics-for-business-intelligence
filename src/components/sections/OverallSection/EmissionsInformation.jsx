import React from 'react';
import { Card } from '@/components/ui/card';
import { Info } from 'lucide-react';


    const EmissionsInformation = () => {
        const ghgTypes = [
          {
            name: "Carbon Dioxide (CO₂)",
            icon: "factory",
            gwp: "1",
            sources: "Fossil fuel combustion, deforestation, industrial processes",
            lifespan: "300-1000 years",
            description: "Primary greenhouse gas from human activities, mainly from burning fossil fuels"
          },
          {
            name: "Methane (CH₄)",
            icon: "droplets",
            gwp: "28-36",
            sources: "Agriculture, landfills, natural gas systems",
            lifespan: "12 years",
            description: "Powerful but shorter-lived greenhouse gas, often from agricultural activities"
          },
          {
            name: "Nitrous Oxide (N₂O)",
            icon: "flask",
            gwp: "265-298",
            sources: "Agricultural fertilizers, industrial processes",
            lifespan: "114 years",
            description: "Long-lived greenhouse gas with significant warming potential"
          },
          {
            name: "Fluorinated Gases",
            icon: "thermometer",
            gwp: "1,000-23,000+",
            sources: "Refrigeration, air conditioning, industrial processes",
            lifespan: "Few weeks to thousands of years",
            description: "Synthetic gases with extremely high warming potential"
          }
        ];
      
        return (
          <div className="space-y-6 mt-6 p-6 bg-slate-800 rounded-lg">
            {/* New GHG Explainer Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-blue-400" /> <h2 className="text-xl font-semibold text-white">Greenhouse Gas (GHG) Guide</h2>
              </div>
      
              <Card className="p-4 bg-slate-700/50 border-slate-600">
                <p className="text-slate-300">
                  Greenhouse gases trap heat in Earth's atmosphere, contributing to global warming and climate change. 
                  Different gases have varying Global Warming Potentials (GWP), measured relative to CO₂ over a 100-year period.
                </p>
              </Card>
      
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {ghgTypes.map((gas) => (
                  <Card key={gas.name} className="p-4 bg-slate-700/50 border-slate-600">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-lg font-medium text-white">{gas.name}</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-300">
                        <span className="text-slate-400">Global Warming Potential:</span> {gas.gwp} times CO₂
                      </p>
                      <p className="text-slate-300">
                        <span className="text-slate-400">Main Sources:</span> {gas.sources}
                      </p>
                      <p className="text-slate-300">
                        <span className="text-slate-400">Atmospheric Lifetime:</span> {gas.lifespan}
                      </p>
                      <p className="text-slate-300">
                        <span className="text-slate-400">Description:</span> {gas.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

    
              <Card className="p-4 mt-4 bg-slate-700/50 border-slate-600">
                <h3 className="text-lg font-medium text-white mb-2">Key Actions for GHG Reduction</h3>
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  <li>Transitioning to renewable energy sources across operations</li>
                  <li>Implementing energy efficiency measures in manufacturing</li>
                  <li>Optimizing transport routes and shifting to electric vehicles</li>
                  <li>Engaging suppliers in emissions reduction programs</li>
                  <li>Improving waste management and recycling processes</li>
                  <li>Investing in carbon capture and storage technologies</li>
                </ul>
              </Card>
            </div>
          </div>
        );
      };

export default EmissionsInformation;