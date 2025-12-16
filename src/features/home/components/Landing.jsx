import { Link } from "react-router";
import LandingImg from "../../../assets/landing.jpg";
import Button from "../../../components/buttons/Button";
import { pagesRouters } from "./../../../constants/pagesRouters";

const Landing = () => {
  return (
    <main className="landing container flex">
      <div className="landing-text flex-1">
        <h1>
          wlecome to <span>idea academy</span> for computer science
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          blanditiis doloremque maiores delectus inventore quod illum, ipsam quo
          sequi vel nulla ea dolorem, ullam laborum optio assumenda officia,
          possimus porro!
        </p>
        <div className="flex gap-10">
          <Link to={pagesRouters.courses}>
            <Button btnStyleType="outlined"> explorer courses</Button>
          </Link>
          <Link to={pagesRouters.contact}>
            <Button> join us</Button>
          </Link>
        </div>
        <div className="flex statistics">
          <article>
            <h2>5000</h2>
            students
          </article>
          <article>
            <h2>5000</h2>
            students
          </article>
          <article>
            <h2>5000</h2>
            students
          </article>
        </div>
      </div>
      <div className="flex-1 flex img">
        <img src={LandingImg} alt="" />
      </div>
    </main>
  );
};

export default Landing;
