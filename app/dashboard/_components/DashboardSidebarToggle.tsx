"use client";
import React, { useState } from "react";

const DashboardSidebarToggle = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);
  return (
    <input
      id="drawer-dashboard"
      type="checkbox"
      className="drawer-toggle"
      checked={isDrawerOpen}
      onChange={() => setIsDrawerOpen(!isDrawerOpen)}
    />
  );
};

export default DashboardSidebarToggle;
