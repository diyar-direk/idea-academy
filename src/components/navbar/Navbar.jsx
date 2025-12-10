import { Link, NavLink } from "react-router";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import IconButton from "./../buttons/IconButton";
import Button from "./../buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faMoon } from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "./../../../../school_sql/src/hooks/useDarkMode";

const Navbar = () => {
  const { changeMode } = useDarkMode();

  return (
    <header className="home-header gap-10 container">
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

      <IconButton title="mood" onClick={changeMode}>
        <FontAwesomeIcon icon={faMoon} />
      </IconButton>

      <Button btnStyleType="contained">contact us</Button>
    </header>
  );
};

export default Navbar;
