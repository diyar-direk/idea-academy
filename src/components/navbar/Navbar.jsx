import { Link, NavLink } from "react-router";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import IconButton from "./../buttons/IconButton";
import Button from "./../buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faMoon } from "@fortawesome/free-solid-svg-icons";
import { pagesRouters } from "../../constants/pagesRouters";
import { pagesLinks } from "../../constants/pagesLink";
import useDarkMode from "./../../hooks/useDarkMode";

const Navbar = () => {
  const { changeMode } = useDarkMode();

  return (
    <header className="home-header gap-10 container">
      <Link className="logo" to={pagesRouters.home}>
        <img src={Logo} alt="logo" />
        <div>
          <h2>idea academy</h2>
          <h4>for computer science</h4>
        </div>
      </Link>

      <nav className="flex-1">
        {pagesLinks?.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.title}
          </NavLink>
        ))}
      </nav>

      <IconButton title="language" style={{ color: "var(--main-color)" }}>
        <FontAwesomeIcon icon={faLanguage} />
      </IconButton>

      <IconButton title="mood" onClick={changeMode}>
        <FontAwesomeIcon icon={faMoon} />
      </IconButton>

      <Link to={pagesRouters.contact}>
        <Button btnStyleType="contained">contact us</Button>
      </Link>
    </header>
  );
};

export default Navbar;
