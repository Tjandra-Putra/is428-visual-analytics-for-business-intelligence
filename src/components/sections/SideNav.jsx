import React, { useState } from "react";
import { ChevronLeft, ChevronRight, BarChart2, Truck, Wheat, Factory, Trees, Siren } from "lucide-react";
import { useActiveSection } from "@/contexts/ActiveSectionContext";

const SideNav = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { activeSection } = useActiveSection();

  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };

  const navItems = [
    { id: "overall", label: "Overall", icon: BarChart2 },
    { id: "transport", label: "Transport", icon: Truck },
    { id: "agriculture", label: "Agriculture", icon: Wheat },
    { id: "trees", label: "Trees", icon: Trees },
    { id: "manufacturing", label: "Manufacturing", icon: Factory },
    { id: "policy", label: "Policy", icon: Siren },
  ];

  return (
    <nav className={`bg-slate-800 transition-all duration-300 ease-in-out relative ${isExpanded ? "w-64" : "w-16"}`}>
      <button
        onClick={toggleNav}
        className={`absolute top-16 bg-slate-700 text-white p-1 rounded-full z-10 transition-all duration-300 ease-in-out ${
          isExpanded ? "right-2 " : "left-1/2 -translate-x-1/2 "
        }`}
      >
        {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
      <ul className="flex flex-col space-y-4 p-4 mt-24">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`flex items-center transition-colors ${activeSection === item.id ? "text-indigo-300" : "text-white hover:text-indigo-300"}`}
            >
              <item.icon size={24} />
              {isExpanded && <span className="ml-2">{item.label}</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
