import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
