import { Link } from "react-router";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className="container">
      <div className="footer-header flex wrap">
        <div>
          <h1>idea academy</h1>
          <div className="socials">
            <Link>
              <FontAwesomeIcon icon={faYoutube} />
            </Link>

            <Link>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>

            <Link>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            nihil.
          </p>
        </div>
        <div className="links">
          <h2>quick links</h2>
          <Link>home</Link>
          <Link>home</Link>
          <Link>home</Link>
          <Link>home</Link>
        </div>

        <div className="info-container flex flex-direction gap-10">
          <h2>contact us</h2>
          <span className="info">
            <Link>
              <FontAwesomeIcon icon={faLocationDot} />
            </Link>
            syria , qamishlo , aljalaa street
          </span>
          <Link className="info">
            <FontAwesomeIcon icon={faEnvelope} />
            diyardireki@gmail.com
          </Link>
          <Link className="info">
            <FontAwesomeIcon icon={faPhone} />
            +963 999 999 999
          </Link>
        </div>
      </div>
      <p>© 2024 Idea Academy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
