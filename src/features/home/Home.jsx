import HomeEvents from "./components/HomeEvents";
import HomeRegister from "./components/HomeRegister";
import Landing from "./components/Landing";
import LastCourses from "./components/LastCourses";
import WhyUs from "./components/WhyUs";
import "./home.css";
const Home = () => {
  return (
    <>
      <Landing />
      <WhyUs />
      <LastCourses />
      <HomeRegister />
      <HomeEvents />
    </>
  );
};

export default Home;
