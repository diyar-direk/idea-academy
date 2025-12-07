import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
