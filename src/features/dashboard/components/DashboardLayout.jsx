import { Outlet } from "react-router";
import DashboardHeader from "./header/DashboardHeader";
import { DashboardProvider } from "../../../context/DashboardContext";

const DashboardLayout = () => {
  return (
    <DashboardProvider>
      <DashboardHeader />
      <Outlet />
    </DashboardProvider>
  );
};

export default DashboardLayout;
