import React from "react";
import { Outlet } from "react-router-dom";
import { useGaPageTracking } from "../hooks";

function GaTrackingLayout() {
  useGaPageTracking();
  return <Outlet />;
}

export default GaTrackingLayout;
