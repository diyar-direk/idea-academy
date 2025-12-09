import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainTitle from "../../../components/main_title/MainTitle";
import Button from "../../../components/buttons/Button";

const WhyUs = () => {
  return (
    <section className="container main-padding body-color">
      <MainTitle
        main={"why choose us ?"}
        secondry={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,"
        }
      />
      <div className="cards-container">
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
            natus!
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
            natus!
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
            natus!
          </p>
        </div>
      </div>
      <div className="gap-20 home-btn center">
        <Button btnStyleType="outlined"> read more about us </Button>
        <Button> contact us </Button>
      </div>
    </section>
  );
};

export default WhyUs;
