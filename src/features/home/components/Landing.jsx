import LandingImg from "../../../assets/landing.jpg";
import Button from "../../../components/buttons/Button";
const Landing = () => {
  return (
    <main className="landing center">
      <div className="container flex">
        <div className="flex-1 flex img">
          <img src={LandingImg} alt="" />
        </div>
        <div className="landing-text flex-1">
          <h1>
            wlecome to <span>idea academy</span> for test
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            blanditiis doloremque maiores delectus inventore quod illum, ipsam
            quo sequi vel nulla ea dolorem, ullam laborum optio assumenda
            officia, possimus porro!
          </p>
          <div className="flex gap-10">
            <Button btnStyleType="outlined"> explorer courses</Button>
            <Button> join us</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
