import { Link } from "react-router";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pagesLinks } from "../../constants/pagesLink";
import { contactInfo } from "./../../constants/contactInfo";
import { useAuth } from "../../context/AuthContext";
import { pagesRouters } from "../../constants/pagesRouters";

const Footer = () => {
  const { user } = useAuth();

  return (
    <footer className="container home-footer">
      <div className="footer-header flex wrap">
        <div>
          <h1>idea academy</h1>
          <div className="socials">
            <a href={contactInfo?.youtube?.link} target="_blank">
              <FontAwesomeIcon icon={contactInfo?.youtube?.icon} />
            </a>

            <a href={contactInfo?.facebook?.link} target="_blank">
              <FontAwesomeIcon icon={contactInfo?.facebook?.icon} />
            </a>

            <a href={contactInfo?.instagram?.link} target="_blank">
              <FontAwesomeIcon icon={contactInfo?.instagram?.icon} />
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            nihil.
          </p>
        </div>
        <div className="links">
          <h2>quick links</h2>
          {pagesLinks?.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.title}
            </Link>
          ))}
          {user ? (
            <Link to={pagesRouters.dashboard.statistics}>dashboard</Link>
          ) : (
            <Link to={pagesRouters.login}>login</Link>
          )}
        </div>

        <div className="info-container flex flex-direction gap-10">
          <h2>contact us</h2>
          <span className="info">
            <FontAwesomeIcon icon={contactInfo?.address?.icon} />
            {contactInfo?.address?.link}
          </span>
          <a href={`mailto:${contactInfo?.email?.link}`} className="info">
            <FontAwesomeIcon icon={contactInfo?.email?.icon} />
            {contactInfo?.email?.link}
          </a>
          <a href={`tel:${contactInfo.phone.link}`} className="info">
            <FontAwesomeIcon icon={contactInfo?.phone?.icon} />
            {contactInfo.phone.link}
          </a>
        </div>
      </div>
      <p>© 2024 Idea Academy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
