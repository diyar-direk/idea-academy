import { Link, NavLink } from "react-router";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import IconButton from "./../buttons/IconButton";
import Button from "./../buttons/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className="home-header">
      <div className="container">
        <Link className="logo" to={"/"}>
          <img src={Logo} alt="logo" />
          <div>
            <h2>idea academy</h2>
            <h4>for computer science</h4>
          </div>
        </Link>

        <nav className="flex-1">
          <NavLink to={"/"}> home</NavLink>
          <NavLink to={"/about"}>about </NavLink>
          <NavLink to={"/courses"}>courses</NavLink>
          <NavLink to={"/courses"}>courses</NavLink>
          <NavLink to={"/courses"}>courses</NavLink>
        </nav>

        <IconButton title="language" style={{ color: "var(--main-color)" }}>
          <FontAwesomeIcon icon={faLanguage} />
        </IconButton>

        <IconButton title="mood">
          <FontAwesomeIcon icon={faMoon} />
        </IconButton>

        <Button btnStyleType="contained">contact us</Button>
      </div>
    </header>
  );
};

export default Navbar;
