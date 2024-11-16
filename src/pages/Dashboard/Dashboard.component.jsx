import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideNav from "@/components/sections/SideNav";
import OverallSection from "@/components/sections/OverallSection";
import TransportSection from "@/components/sections/TransportSection";
import AgricultureSection from "@/components/sections/AgricultureSection";
import ManufacturingSection from "@/components/sections/ManufacturingSection";
import PolicySection from "@/components/sections/PolicySection";
import { ActiveSectionProvider, useActiveSection } from "@/contexts/ActiveSectionContext";
import "./Dashboard.css";
import TreeSection from "@/components/sections/TreeSection";

const DashboardContent = () => {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [setActiveSection]);

  return (
    <div className="flex flex-col h-screen">
      <Outlet />
      <div className="flex flex-1 overflow-hidden">
        <SideNav />
        <main className="flex-1 bg-slate-900 text-gray-100 overflow-y-auto snap-y snap-mandatory smooth-scroll">
          <OverallSection />
          <TransportSection />
          <AgricultureSection />
          <TreeSection />
          <ManufacturingSection />
          <PolicySection />
        </main>
      </div>
    </div>
  );
};

const Dashboard = () => (
  <ActiveSectionProvider>
    <DashboardContent />
  </ActiveSectionProvider>
);

export default Dashboard;
