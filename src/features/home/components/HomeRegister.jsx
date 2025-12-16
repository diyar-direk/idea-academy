import { Link } from "react-router";
import { pagesRouters } from "../../../constants/pagesRouters";

const HomeRegister = () => {
  return (
    <section className="main-padding container home-register">
      <h1>ابدأ رحلتك البرمجية اليوم</h1>
      <p>
        انضم إلى آلاف الطلاب الذين غيروا مسارهم المهني وبدأوا مشوارهم في عالم
        البرمجة من خلال أكاديميتنا. لا تؤجل حلمك، ابدأ الآن!
      </p>
      <Link to={pagesRouters.courses}> انضم لنا في الحال </Link>
    </section>
  );
};

export default HomeRegister;
