import React, { useState } from "react";
import { useNavigation, Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

export default function Layout() {
  const [showNavbar, setShowNavbar] = useState(false);
  let navigation = useNavigation();

  const handleMouseEnter = () => {
    setShowNavbar(true);
  };

  const handleMouseLeave = () => {
    setShowNavbar(false);
  };

  return (
    <div className="h-screen w-screen relative">
      <div
        className="absolute top-0 left-0 right-0 h-16 z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Navbar
          className={`transition-transform duration-300 ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
        />
      </div>
      <Outlet />
    </div>
  );
}
