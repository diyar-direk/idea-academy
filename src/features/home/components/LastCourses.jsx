import MainTitle from "../../../components/main_title/MainTitle";
import IMG from "../../../assets/landing.jpg";
import CourseSCard from "../../../components/courses_card/CourseSCard";
import Button from "../../../components/buttons/Button";
import { Link } from "react-router";
import { pagesRouters } from "../../../constants/pagesRouters";
const LastCourses = () => {
  return (
    <section className="main-padding container section-color">
      <MainTitle
        main={"last courses"}
        secondry={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,"
        }
      />
      <div className="course-card-container">
        <CourseSCard
          data={{
            img: IMG,
            title: "Lorem ipsum dolor sit amet.",
            type: "front end course",
            discreption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            saepe laborum molestiae`,
            createdAt: new Date(),
            courseTime: "3 month",
          }}
        />
        <CourseSCard
          data={{
            img: IMG,
            title: "Lorem ipsum dolor sit amet.",
            type: "front end course",
            discreption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              saepe laborum molestiae`,
            createdAt: new Date(),
            courseTime: "1 year",
          }}
        />
        <CourseSCard
          data={{
            img: IMG,
            title: "Lorem ipsum dolor sit amet.",
            type: "front end course",
            discreption: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              saepe laborum molestiae`,
            createdAt: new Date(),
          }}
        />
      </div>
      <Link to={pagesRouters.courses}>
        <Button className="home-btn"> explorer all courses </Button>
      </Link>
    </section>
  );
};

export default LastCourses;
