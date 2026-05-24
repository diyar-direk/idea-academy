import { createContext, useContext, useEffect, useState } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children, value }) => {
  const [page_size, setLimit] = useState(
    parseInt(localStorage.getItem("limit")) || 10,
  );

  useEffect(() => {
    localStorage.setItem("limit", page_size);
  }, [page_size]);

  return (
    <DashboardContext.Provider value={{ ...value, page_size, setLimit }}>
      {children}
    </DashboardContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => useContext(DashboardContext);
