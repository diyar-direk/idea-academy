import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
