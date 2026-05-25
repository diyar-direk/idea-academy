import { createContext, useContext, useEffect, useState } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children, value }) => {
  const [limit, setLimit] = useState(
    parseInt(localStorage.getItem("limit")) || 10,
  );

  useEffect(() => {
    localStorage.setItem("limit", limit);
  }, [limit]);

  return (
    <DashboardContext.Provider value={{ ...value, limit, setLimit }}>
      {children}
    </DashboardContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => useContext(DashboardContext);
