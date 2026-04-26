import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";
import "../../style/dashboard.css";

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <TopHeader />
      <BottomHeader />
    </header>
  );
};

export default DashboardHeader;
