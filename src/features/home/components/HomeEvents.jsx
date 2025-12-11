import MainTitle from "../../../components/main_title/MainTitle";
import IMG from "../../../assets/landing.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const HomeEvents = () => {
  return (
    <section className="container main-padding body-color">
      <MainTitle
        main={"last events"}
        secondry={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,"
        }
      />
      <div className="events-container">
        <div className="event-card">
          <img src={IMG} alt="" />
          <div>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              iste est, unde harum officiis numquam. Exercitationem inventore
              ullam sit earum.
            </p>
            <div>
              <FontAwesomeIcon icon={faClock} />
              2025-10-11
            </div>
          </div>
        </div>
        <div className="event-card">
          <iframe
            src="https://www.youtube.com/embed/C5q_y8dHhG0?si=dab5fvOpEGpnX1o6"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              iste est, unde harum officiis numquam. Exercitationem inventore
              ullam sit earum.
            </p>
            <div>
              <FontAwesomeIcon icon={faClock} />
              2025-10-11
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeEvents;
